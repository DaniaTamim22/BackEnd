import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<h1>LOGO</h1>
				<ul className="nav-links">
					<li>
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="nav-link">
							About
						</Link>
					</li>
					<li>
						<Link to="/product" className="nav-link">
							Products
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
