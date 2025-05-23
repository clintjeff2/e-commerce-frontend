import React from 'react';

function StoreCard(props) {
	return (
		<div className="store-card">
			<div className="img-container">
				<img src={props.logo} alt="Tasty Burger" />
				<span>{props.name}</span>
			</div>
			<div className="store-details">
				<div className="location-cat">
					<span>{props.location}</span>
					<span className="cat">{props.category[0].name}</span>
				</div>
				<p className="description">{props.description}</p>
				<p>web.store.site</p>
			</div>
		</div>
	);
}

export default StoreCard;
