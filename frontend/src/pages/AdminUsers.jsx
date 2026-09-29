import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data)).catch(() => setError('Could not load users.')).finally(() => setLoading(false));
  }, []);

  return (
    <main className="container py-5">
      <div className="mb-4"><h1 className="section-title mb-1">Registered Users</h1><p className="text-secondary mb-0">Simple read-only user management for the demo.</p></div>
      <ErrorMessage message={error} />
      {loading ? <Loading /> : <div className="table-responsive bg-white rounded-4 shadow-sm"><table className="table align-middle mb-0"><thead className="table-light"><tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr></thead><tbody>{users.map((user) => <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td><span className={`badge ${user.role === 'ADMIN' ? 'text-bg-dark' : 'text-bg-primary'}`}>{user.role}</span></td></tr>)}</tbody></table></div>}
    </main>
  );
}

export default AdminUsers;
