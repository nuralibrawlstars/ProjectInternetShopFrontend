import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';
import CatalogPage from './pages/catalogPage/CatalogPage';
import HomePage from './pages/homePage/HomePage';
import ProductPage from './pages/productPage/ProductPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:category' element={<CatalogPage />} />
          <Route path='/catalog/product/:id' element={<ProductPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
