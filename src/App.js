import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { CartContext } from './pages/CartContext';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
function App() {
	const [cart, setCart] = useState({});

	// Fetch from Local storage

	useEffect(() => {
		const cart = window.localStorage.getItem('cart');
		setCart(JSON.parse(cart));
	}, []);
	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<div className="w-4/5 mx-auto">
			<Router>
				<CartContext.Provider value={{ cart, setCart }}>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route
							path="/products"
							exact
							element={<Products />}></Route>
						<Route
							path="/products/:_id"
							element={<SingleProduct />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</CartContext.Provider>
			</Router>
		</div>
	);
}

export default App;
