import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar({ user, cartCount, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'active fw-semibold' : ''}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="me-2">🛍️</span>SimpleShop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/products" className={linkClass}>Products</NavLink></li>
            <li className="nav-item"><NavLink to="/categories" className={linkClass}>Categories</NavLink></li>
            <li className="nav-item">
              <NavLink to="/cart" className={linkClass}>
                Cart <span className="badge bg-light text-primary ms-1">{cartCount}</span>
              </NavLink>
            </li>
            {user?.role === 'ADMIN' && (
              <li className="nav-item"><NavLink to="/admin" className={linkClass}>Admin</NavLink></li>
            )}
          </ul>

          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <span className="navbar-text text-white small">
                  Hi, {user.name}
                </span>
                {user.role === 'USER' && (
                  <Link className="btn btn-outline-light btn-sm" to="/orders">My Orders</Link>
                )}
                <button className="btn btn-light btn-sm" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light btn-sm" to="/login">Login</Link>
                <Link className="btn btn-light btn-sm" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
