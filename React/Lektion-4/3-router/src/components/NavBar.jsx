import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<h1>LOGO</h1>
				<ul className="nav-links">
					<li>
						<a href="!#" className="nav-link">
							Home
						</a>
					</li>
					<li>
						<a href="!#" className="nav-link">
							About
						</a>
					</li>
					<li>
						<a href="!#" className="nav-link">
							Products
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
