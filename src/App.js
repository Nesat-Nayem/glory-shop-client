import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Banner from './Pages/Banner/Banner';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Banner />
    <Routes>
      <Route />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
