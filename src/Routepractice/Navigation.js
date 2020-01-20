import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/About">About</NavLink>
			<NavLink to="/Contact">Contact</NavLink>
			<Link to="/">Hello</Link>
		</div>
	);
}
export default Navigation;
