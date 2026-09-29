import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import AdminCategories from './pages/AdminCategories';
import AdminOrders from './pages/AdminOrders';
import AdminOrderDetails from './pages/AdminOrderDetails';
import AdminUsers from './pages/AdminUsers';

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem('simpleshopUser')) || null;
  } catch {
    return null;
  }
}

function getStoredCart() {
  try {
    return JSON.parse(localStorage.getItem('simpleshopCart')) || [];
  } catch {
    return [];
  }
}

function App() {
  const [user, setUser] = useState(getStoredUser);
  const [cart, setCart] = useState(getStoredCart);

  useEffect(() => {
    localStorage.setItem('simpleshopCart', JSON.stringify(cart));
  }, [cart]);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('simpleshopUser', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('simpleshopUser');
  };

  const handleAddToCart = (product, quantity = 1) => {
    if (product.stock <= 0) {
      window.alert('This product is out of stock.');
      return;
    }

    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.product.id === product.id);
      if (!existing) {
        return [...currentCart, { product, quantity: Math.min(quantity, product.stock) }];
      }

      const nextQuantity = Math.min(existing.quantity + quantity, product.stock);
      if (nextQuantity === existing.quantity) {
        window.alert('You already have the maximum available stock in your cart.');
        return currentCart;
      }

      return currentCart.map((item) => item.product.id === product.id ? { ...item, quantity: nextQuantity } : item);
    });
  };

  const handleIncrease = (productId) => {
    setCart((currentCart) => currentCart.map((item) => {
      if (item.product.id !== productId) return item;
      if (item.quantity >= item.product.stock) return item;
      return { ...item, quantity: item.quantity + 1 };
    }));
  };

  const handleDecrease = (productId) => {
    setCart((currentCart) => currentCart
      .map((item) => item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
      .filter((item) => item.quantity > 0));
  };

  const handleRemove = (productId) => setCart((currentCart) => currentCart.filter((item) => item.product.id !== productId));
  const handleClearCart = () => setCart([]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Navbar user={user} cartCount={cartCount} onLogout={handleLogout} />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/products/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart cart={cart} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} onClear={handleClearCart} />} />

          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/checkout" element={<Checkout user={user} cart={cart} onClear={handleClearCart} />} />
            <Route path="/orders" element={<MyOrders user={user} />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
          </Route>

          <Route element={<ProtectedRoute user={user} adminOnly />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/products/add" element={<AddProduct />} />
            <Route path="/admin/products/edit/:id" element={<EditProduct />} />
            <Route path="/admin/categories" element={<AdminCategories />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />
            <Route path="/admin/users" element={<AdminUsers />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
