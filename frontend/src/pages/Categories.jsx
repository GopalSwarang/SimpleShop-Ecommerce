import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response.data))
      .catch(() => setError('Could not load categories.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container py-5">
      <h1 className="section-title">Categories</h1>
      <p className="text-secondary mb-4">Browse the SimpleShop catalog by category.</p>
      <ErrorMessage message={error} />
      {loading ? <Loading /> : (
        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-md-6 col-lg-3" key={category.id}>
              <div className="card h-100 border-0 shadow-sm category-card">
                <div className="card-body p-4">
                  <div className="display-6 mb-3">{category.name === 'Electronics' ? '💻' : category.name === 'Clothing' ? '👕' : category.name === 'Books' ? '📚' : '🎒'}</div>
                  <h4>{category.name}</h4>
                  <p className="text-secondary">{category.description}</p>
                  <Link className="btn btn-outline-primary" to={`/products?category=${category.id}`}>View Products</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Categories;
