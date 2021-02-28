import React from "react";
import { Nav, NavWrapper, Previous, PageLoc, Next } from "./NavigationStyle";

const Location = () => {
	return <PageLoc />;
};

const PrevButton = () => {
	return <Previous />;
};

const NextButton = () => {
	return <Next />;
};

const Navigation = () => {
	return (
		<Nav>
			<NavWrapper>
				<PrevButton />
				<Location />
				<NextButton />
			</NavWrapper>
		</Nav>
	);
};

export default Navigation;
