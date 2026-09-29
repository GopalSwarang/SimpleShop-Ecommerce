import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCategories, getProduct, updateProduct } from '../services/api';
import ProductForm from '../components/ProductForm';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([getProduct(id), getCategories()])
      .then(([productResponse, categoryResponse]) => { setProduct(productResponse.data); setCategories(categoryResponse.data); })
      .catch(() => setError('Could not load product data.'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      await updateProduct(id, data);
      navigate('/admin/products');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not update product.');
    }
  };

  return (
    <main className="container py-5">
      <Link to="/admin/products" className="text-decoration-none">← Back to products</Link>
      <h1 className="section-title mt-3 mb-4">Edit Product</h1>
      <ErrorMessage message={error} />
      {loading ? <Loading /> : product ? <ProductForm categories={categories} initialProduct={product} onSubmit={handleSubmit} submitLabel="Update Product" /> : null}
    </main>
  );
}

export default EditProduct;
