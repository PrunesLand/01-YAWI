import React from "react";
import Cover from "../CoverPage/Cover";
import Final from "../FinalPage/Final";
import Fourth from "../FourthPage/Fourth";
import Second from "../SecondPage/Second";
import Third from "../ThirdPage/Third";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Router>
				<Route path='/' component={Cover} />
				<Route path='/2' component={Second} />

				<Route path='/3' component={Third} />
				<Route path='/4' component={Fourth} />
				<Route path='/5' component={Final} />
			</Router>
		</>
	);
};

export default Home;
