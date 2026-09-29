import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDashboardCounts } from '../services/api';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function AdminDashboard() {
  const [counts, setCounts] = useState({ products: 0, categories: 0, users: 0, orders: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getDashboardCounts()
      .then((response) => setCounts(response.data))
      .catch(() => setError('Could not load dashboard counts.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <main className="container py-5"><Loading message="Loading admin dashboard..." /></main>;

  const cards = [
    { label: 'Products', value: counts.products, icon: '📦', link: '/admin/products' },
    { label: 'Categories', value: counts.categories, icon: '🗂️', link: '/admin/categories' },
    { label: 'Users', value: counts.users, icon: '👥', link: '/admin/users' },
    { label: 'Orders', value: counts.orders, icon: '🧾', link: '/admin/orders' }
  ];

  return (
    <main className="container py-5">
      <div className="mb-4"><h1 className="section-title mb-1">Admin Dashboard</h1><p className="text-secondary mb-0">Simple store management in one place.</p></div>
      <ErrorMessage message={error} />
      <div className="row g-4 mb-5">
        {cards.map((card) => (
          <div className="col-sm-6 col-lg-3" key={card.label}>
            <Link to={card.link} className="text-decoration-none">
              <div className="dashboard-card card border-0 shadow-sm h-100"><div className="card-body p-4"><div className="fs-2">{card.icon}</div><div className="display-6 fw-bold text-dark mt-2">{card.value}</div><div className="text-secondary">{card.label}</div></div></div>
            </Link>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-4"><div className="card border-0 shadow-sm h-100"><div className="card-body p-4"><h5>Product Management</h5><p className="text-secondary">Add, edit, search and delete store products.</p><Link className="btn btn-primary" to="/admin/products">Manage Products</Link></div></div></div>
        <div className="col-lg-4"><div className="card border-0 shadow-sm h-100"><div className="card-body p-4"><h5>Category Management</h5><p className="text-secondary">Keep product categories organized.</p><Link className="btn btn-primary" to="/admin/categories">Manage Categories</Link></div></div></div>
        <div className="col-lg-4"><div className="card border-0 shadow-sm h-100"><div className="card-body p-4"><h5>Order Management</h5><p className="text-secondary">Review orders and update their status.</p><Link className="btn btn-primary" to="/admin/orders">Manage Orders</Link></div></div></div>
      </div>
    </main>
  );
}

export default AdminDashboard;
