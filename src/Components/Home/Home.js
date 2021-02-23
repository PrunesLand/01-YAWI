import React, { Suspense, lazy } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import ErrorBoundary from '../Utilities/ErrorBoundary'
import {ThemeProvider} from 'styled-components'
import {theme} from '../Utilities/Themes'

const Cover = lazy(() => import("../CoverPage/Cover"))
const Second = lazy(() => import("../SecondPage/Second"))
const Third = lazy(() => import("../ThirdPage/Third"))
const Fourth = lazy(() => import("../FourthPage/Fourth"))
const Final = lazy(() => import("../FinalPage/Final"))



const Home = () => {
	return (
		<>
		<ErrorBoundary>
			<Router>
				<ThemeProvider theme={theme}>

				<Suspense fallback={<div>Loading...</div>}>

				<Switch>
				<Route path='/' exact >
					<div style={theme}>

					<Cover />
					</div>

				</Route>
				<Route path='/2' >
					<Second />
				</Route>
				<Route path='/3' >
					<Third />
				</Route>
				<Route path='/4' >
					<Fourth />
				</Route>
				<Route path='/5' >
					<Final />
				</Route>
				
				
				</Switch>
				</Suspense>
				</ThemeProvider>
			</Router>
		</ErrorBoundary>	
		</>
	);
};

export default Home;
