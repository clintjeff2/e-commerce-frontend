import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="nav-container">
			<div className="nav-bar">
				<div className="logo">QuickStore</div>
				<Link to={'/'}>Stores</Link>
				<Link to={'/about'}>About</Link>
				<Link to={'/contact'} className="contact">
					Contact
				</Link>
				<Link to={'/cart'}>Cart</Link>
				<Link to={'/login'}>
					<button>Log in</button>
				</Link>
				<Link to={'signup'}>
					<button className="signup">Sign up</button>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
