import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate, BrowserRouter, useLocation} from 'react-router-dom'
import { ROUTES } from './routes';
import { AuthPage } from './components/auth/AuthPage';
import { HomePage } from './components/HomePage';
import { ProtectedRoute } from './services/auth/ProtectedRoute';
import { AuthProvider } from './services/auth/AuthProvider';
import { AuthProtectedRoute } from './services/auth/AuthProtectedRoute';
import { ProductPage } from './components/products/ProductPage';
import { ConfigurePage } from './components/configure/ConfigurePage';
import { AboutPage } from './components/about/AboutPage';
import { OrderInfoPage } from './components/order/OrderInfoPage';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainPage />
      </AuthProvider>
    </BrowserRouter>
  );
}
const MainPage = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return null
  }

  return (
    <div className='pageWrapper'>
      <ScrollToTop/>
      <Routes>
        <Route path='/*'                  element = {<p>404 NOT FOUND</p>}/>
        <Route path='/'                   element = {<Navigate to={ROUTES.HOME} replace/>}/>
        <Route path={ROUTES.HOME}         element = {<HomePage/>}/>
        <Route path={ROUTES.PRODUCTS}     element = {<ProductPage/>}/>
        <Route path={ROUTES.CONFIGURE}    element = {<ProtectedRoute element={<ConfigurePage/>}/>}/>
        <Route path={ROUTES.ABOUT}        element = {<AboutPage/>}/>
        <Route path={ROUTES.AUTH}         element = {<AuthProtectedRoute element={<AuthPage/>}/>}/>
        <Route path={ROUTES.ACCOUNT}      element = {<ProtectedRoute element={<OrderInfoPage/>}/>}/>
      </Routes>
    </div>
  )
}

export default App;
