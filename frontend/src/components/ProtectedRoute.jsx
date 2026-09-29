import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ user, adminOnly = false }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'ADMIN') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
