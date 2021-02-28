import React from "react";
import { Nav, NavWrapper, Previous, PageLoc, Next } from "./NavigationStyle";

const Navigation = () => {
	return (
		<Nav>
			<NavWrapper>
				<Previous />
				<PageLoc />
				<Next />
			</NavWrapper>
		</Nav>
	);
};

export default Navigation;
