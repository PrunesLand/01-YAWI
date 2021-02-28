import React, { Suspense, lazy } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import { ThemeProvider } from "styled-components";
import { theme } from "../StylingFiles/Themes";
import GlobalStyle from "../StylingFiles/GlobalStyles";
import { Container } from "./HomeStyle";

const Cover = lazy(() => import("../CoverPage/Cover"));
const Second = lazy(() => import("../SecondPage/Second"));
const Third = lazy(() => import("../ThirdPage/Third"));
const Fourth = lazy(() => import("../FourthPage/Fourth"));
const Final = lazy(() => import("../FinalPage/Final"));

const Home = () => {
	return (
		<Container>
			<GlobalStyle />
			<ErrorBoundary>
				<Router>
					<ThemeProvider theme={theme}>
						<Switch>
							<Route path='/' exact>
								<Suspense fallback={<div>Loading...</div>}>
									<Cover />
								</Suspense>
							</Route>
							<Route path='/2'>
								<Suspense fallback={<div>Loading...</div>}>
									<Second />
								</Suspense>
							</Route>
							<Route path='/3'>
								<Suspense fallback={<div>Loading...</div>}>
									<Third />
								</Suspense>
							</Route>
							<Route path='/4'>
								<Suspense fallback={<div>Loading...</div>}>
									<Fourth />
								</Suspense>
							</Route>
							<Route path='/5'>
								<Suspense fallback={<div>Loading...</div>}>
									<Final />
								</Suspense>
							</Route>
						</Switch>
					</ThemeProvider>
				</Router>
			</ErrorBoundary>
		</Container>
	);
};

export default Home;
