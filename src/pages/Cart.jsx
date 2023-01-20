import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
	const [products, setProducts] = useState([]);

	const { cart } = useContext(CartContext);
	useEffect(() => {
		if (cart.items) {
			return;
		}

		fetch('https://star-spark-pasta.glitch.me/api/products/cart-items', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ids: Object.keys(cart.items) }),
		})
			.then(res => res.json())
			.then(products => {
				setProducts(products);
			});
	}, [cart]);

	return (
		<div className="container mx-auto w-full pb-24 lg:w-1/2">
			<h1 className="my-12 font-bold">Cart items</h1>
			<ul>
				<li className="mb-12">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<img
								className="h-16"
								src="/images/peproni.png"
								alt=""
							/>
							<span className="font-bold ml-4 w-48">
								Double Peproni
							</span>
						</div>
						<div>
							<button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
								-
							</button>
							<b className="px-4">2</b>
							<button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
								+
							</button>
						</div>
						<span>₹ 500</span>
						<span className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
							Delete
						</span>
					</div>
				</li>
			</ul>
			<hr className="my-6" />
			<div className="text-right">
				<strong>Grand Total:</strong> ₹ 1000
			</div>

			<div className="text-right mt-6">
				<button className="px-4 py-2 rounded-full leading-none bg-yellow-500">
					Order Now
				</button>
			</div>
		</div>
	);
};

export default Cart;
