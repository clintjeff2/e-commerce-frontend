import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StoreCard from '../components/StoreCard';
import { AppContext } from '../context/AppProvider';

function Home() {
	const context = useContext(AppContext);
	const [currentTab, setCurrentTab] = useState('all');

	console.log(context);

	useEffect(() => {
		context.getAllStores();
	}, []);
	return (
		<div className="home">
			<h2 className="home-title">Explore Stores</h2>
			<p className="home-description">
				Discover businesses offering a wide range of products and services on
				our marketplace
			</p>

			<form action="">
				<input type="text" placeholder="Search from all stores" />
				<button>clear</button>
			</form>

			<div className="tab">
				<span
					className={`${currentTab === 'all' ? 'current' : ''}`}
					onClick={() => setCurrentTab('all')}
				>
					All
				</span>
				<span
					className={`${currentTab === 'restaurant' ? 'current' : ''}`}
					onClick={() => setCurrentTab('restaurant')}
				>
					Restaurant
				</span>
				<span
					className={`${currentTab === 'fashion' ? 'current' : ''}`}
					onClick={() => setCurrentTab('fashion')}
				>
					Fashion
				</span>
				<span
					className={`${currentTab === 'clothing' ? 'current' : ''}`}
					onClick={() => setCurrentTab('clothing')}
				>
					Clothing
				</span>
				<span
					className={`${currentTab === 'electronics' ? 'current' : ''}`}
					onClick={() => setCurrentTab('electronics')}
				>
					Electronics
				</span>
			</div>

			<div className="stores">
				{context.allStores.map((el) => (
					<StoreCard
						logo={el.logo}
						description={el.description}
						name={el.name}
						location={el.location}
						category={el.category}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
