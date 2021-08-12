import React from 'react';
import { useContext } from 'react';
// Components
import Product from './Product';
import ProdctConext from '../contexts/ProductContext';

const Products = () => {
	const [products, addItem] = useContext(ProdctConext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
