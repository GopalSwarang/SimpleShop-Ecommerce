import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct, getCategories } from '../services/api';
import ProductForm from '../components/ProductForm';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function AddProduct() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getCategories().then((response) => setCategories(response.data)).catch(() => setError('Could not load categories.')).finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (data) => {
    try {
      await createProduct(data);
      navigate('/admin/products');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create product.');
    }
  };

  return (
    <main className="container py-5">
      <Link to="/admin/products" className="text-decoration-none">← Back to products</Link>
      <h1 className="section-title mt-3 mb-4">Add Product</h1>
      <ErrorMessage message={error} />
      {loading ? <Loading /> : <ProductForm categories={categories} onSubmit={handleSubmit} submitLabel="Create Product" />}
    </main>
  );
}

export default AddProduct;
