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
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/MyOrder/MyOrder";
import MyReviews from "./Pages/MyReviews/MyReviews";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import AddProducts from "./Pages/AddProducts/AddProducts";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

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
          <Route path="/products/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/products/myOrder" element={ <MyOrder /> } />
          <Route path="/products/customerReview" element={ <MyReviews /> } />
          <Route path="/products/manageOrders" element={ <ManageOrders /> } />
          <Route path="/products/addProducts" element={ <AddProducts /> } />
          <Route path="/products/manageProducts" element={ <ManageProducts /> } />
          <Route path="/products/makeAdmin" element={ <MakeAdmin /> } />
          <Route path="*" element={ <NotFoundPage /> } />
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
