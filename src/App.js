import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	return (
		<div className="w-4/5 mx-auto">
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
