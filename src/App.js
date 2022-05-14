import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";

import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
