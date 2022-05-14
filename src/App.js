import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";

import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import FilteredProduct from "./Pages/FilteredProduct/FilteredProduct";
import ViewProduct from "./Pages/ViewProduct/ViewProduct";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Checkout from "./Pages/Checkout/Checkout";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<FilteredProduct />} />
          <Route path="/products/:category/:productId" element={<ViewProduct />} />
          <Route path="/products/checkout" element={<PrivateRoute> <Checkout /> </PrivateRoute>} />
          <Route path="/products/Payment" element={<PrivateRoute> <Payment /> </PrivateRoute>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
