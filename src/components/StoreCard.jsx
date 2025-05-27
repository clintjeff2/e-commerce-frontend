import React from 'react';
import { Link } from 'react-router-dom';

function StoreCard(props) {
	console.log(props);
	return (
		<Link className="link" to={`/store/${props.id}`}>
			<div className="store-card">
				<div className="img-container">
					<img src={props.logo} alt="Tasty Burger" />
					<div className="details-background"></div>
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
		</Link>
	);
}

export default StoreCard;
