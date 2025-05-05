import './App.css'
import { Route, Routes, Navigate, BrowserRouter, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import { ProtectedRoute } from './services/auth/ProtectedRoute'
import { AuthProvider } from './services/auth/AuthProvider'
import { AuthProtectedRoute } from './services/auth/AuthProtectedRoute'
import { useEffect } from 'react'

import { HomePage } from './components/home/HomePage'
import { BasketProvider } from './services/basket/BasketProvider'
import { Login } from './components/auth/Login'
import { OrdersPage } from './components/orders/OrdersPage'

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<BasketProvider>
					<MainPage/>
				</BasketProvider>
			</AuthProvider>
		</BrowserRouter>
	)
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
			<ScrollToTop />
			<Routes>
				<Route path='/*' 				element={<p>404 NOT FOUND</p>} />
				<Route path='/' 				element={<Navigate to={ROUTES.HOME} replace />} />
				<Route path={ROUTES.HOME} 		element={<HomePage />} />
				<Route path={ROUTES.LOGIN}		element={<AuthProtectedRoute element={<Login />} />} />
				<Route path={ROUTES.ORDERS_LIST} element={<ProtectedRoute element={<OrdersPage/>} />} />
			</Routes>
		</div>
	)
}

export default App;
