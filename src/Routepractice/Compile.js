import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navigation from "./Navigation";

const Compile = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/About" component={About} />
					<Route path="/Contact" component={Contact} />
					<Route  component={Error} />
			</Switch>
			</div>
		</Router>
	);
}
export default Compile;




