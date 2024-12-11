import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Register from './pages/UserAuthentication/Register';
import Login from './pages/UserAuthentication/Login';
import PrivateRoute from './pages/UserAuthentication/PrivateRoute';
import TopScroll from './pages/BackToTopButton/BackToTopButton';
import UserHome from './pages/UserHome/UserHome';
import AdLogin from './pages/AdminAuthentication/AdLogin';
import AdHome from './pages/AdminHome/AdHome';
import AddProduct from './pages/AdminHome/AddProducts';
import AdminUserManagement from './pages/AdminHome/AdminUserManagement';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  const isUserSignedIn = !!localStorage.getItem('token');

  // Function for adding a product to the cart
  const addToCart = (product) => {
    console.log('Adding product to cart:', product);
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    existingCart.push(product);
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    alert('Product added to cart!');
  };

  return (
    <div>
      <TopScroll />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adlogin" element={<AdLogin />} />
          <Route path="/adhome" element={<AdHome />} />
          <Route path="/admin/products" element={<AddProduct />} />
          <Route path="/admin/users" element={<AdminUserManagement />} />
          <Route path="/about" element={<AboutUs />} />
          
          {isUserSignedIn && (
            <>
              <Route path="/home" element={<UserHome />} />
              <Route path="/shop" element={<Products addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart />} />
              
            </>
          )}

          {/* Protect the "/protected" route */}
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <h1>Protected Page</h1>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
