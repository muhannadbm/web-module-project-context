import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProdctConext from './contexts/ProductContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart , item])
	};
	console.log(cart)
	return (
		<ProdctConext.Provider value={[products,addItem]}>
			<CartContext.Provider value={cart}>		<div className="App">
			<Navigation  />

			{/* Routes */}
			<Route exact path="/">
				<Products/>
			</Route>

			<Route path="/cart">
				<ShoppingCart  />
			</Route>
		</div>
		</CartContext.Provider>
		</ProdctConext.Provider>
	);
}

export default App;
