import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../store';
import './App.scss';
import Layout from './layout/Layout';
import CartPage from './pages/cartPage/CartPage';
import CatalogPage from './pages/catalogPage/CatalogPage';
import FavoritePage from './pages/favoritePage/FavoritePage';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/login/LoginPage';
import ProductPage from './pages/productPage/ProductPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/catalog/:category' element={<CatalogPage />} />
            <Route path='/catalog/product/:id' element={<ProductPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/favorites' element={<FavoritePage />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
