import React from 'react';

function ProductItem() {
	return (
		<div className="item">
			<img
				src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
				alt=""
			/>
			<div className="item-details">
				<h5>Product Name</h5>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				<span>$ 300</span>
				<button>Add to Cart</button>
			</div>
		</div>
	);
}

export default ProductItem;
