import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
