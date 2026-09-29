import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import ErrorMessage from '../components/ErrorMessage';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await loginUser(form);
      onLogin(response.data);
      const destination = location.state?.from || (response.data.role === 'ADMIN' ? '/admin' : '/');
      navigate(destination, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 fw-bold mb-2">Welcome back</h1>
              <p className="text-secondary">Login to continue shopping.</p>
              <ErrorMessage message={error} />
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input className="form-control" type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
                <button className="btn btn-primary w-100" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
              </form>
              <p className="small text-secondary mt-3 mb-0">
                Demo admin: admin@example.com / admin123
              </p>
              <p className="small mt-2 mb-0">New customer? <Link to="/register">Create an account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
