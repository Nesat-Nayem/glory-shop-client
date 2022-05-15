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
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import AddProducts from "./Pages/AddProudcts/AddProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<FilteredProduct />} />
          <Route path="/products/:category/:productId" element={<ViewProduct />} />
          <Route path="/products/checkout" element={<PrivateRoute> <Checkout /> </PrivateRoute>} ></ Route >
          <Route path="/products/Payment" element={<PrivateRoute> <Payment /> </PrivateRoute>} ></ Route >
          <Route exact path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} >
            <Route path="/dashboard/myOrder" element={ <MyOrder /> } />
            <Route path="/dashboard/customerReview" element={ <MyReviews /> } />
            <Route path="/dashboard/manageOrders" element={ <ManageOrders /> } />
            <Route path="/dashboard/addProducts" element={ <AddProducts /> } />
            <Route path="/dashboard/manageProducts" element={ <ManageProducts /> } />
            <Route path="/dashboard/makeAdmin" element={ <MakeAdmin /> } />
          </ Route >
          <Route path="*" element={ <NotFoundPage /> } />
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
