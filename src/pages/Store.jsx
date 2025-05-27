import React, { useEffect, useContext } from 'react';
import ProductItem from '../components/ProductItem';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';

function Store() {
	const params = useParams();
	const context = useContext(AppContext);

	console.log(params);

	useEffect(() => {
		if (params.id) {
			context.getStore(params.id);
		}
	}, [params.id]);

	console.log(context.store);
	return (
		<div className="store">
			<div className="store-image">
				<img className="cover" src={context.store?.logo} alt="" />

				<div className="details">
					<h3>{context.store?.name}</h3>
					<span>
						{context.store !== null && context.store.category[0].name}
					</span>
				</div>
				<div className="details-background"></div>
			</div>
			<div className="store-products">
				<div className="about-store">
					<h4>About</h4>
					<p>{context.store?.description}</p>
					<ul>
						<li>{context.store?.location}</li>
						<li>{context.store?.tel}</li>
						<li>www.store.com</li>
					</ul>
					<h4>Operating Hours</h4>
					<p>
						<span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
					</p>
					<p>
						<span>Saturday</span> <span>10:00 AM - 4:00 PM</span>
					</p>
					<p>
						<span>Sunday</span> <span>Closed</span>
					</p>
				</div>
				<div className="products">
					<h3>Products</h3>
					<div className="items">
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Store;

// https://quick-route-tracker.vercel.app/businesses/3 -- fashion hub
// https://quick-route-tracker.vercel.app/businesses/1 --- tasty burger
// https://quick-route-tracker.vercel.app/businesses/2 =-== tech kljdkf
