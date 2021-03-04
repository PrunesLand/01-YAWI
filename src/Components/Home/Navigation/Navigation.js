import React from "react";
import { Router } from "react-router-dom";
import {
	Nav,
	NavWrapper,
	Previous,
	PageLoc,
	Next,
	PrevWrapper,
	LocationWrapper,
	LocationList,
	NextWrapper,
} from "./NavigationStyle";

const Navigation = () => {
	return (
		<Nav>
			<NavWrapper>
				<PrevWrapper>
					<Previous />
				</PrevWrapper>
				<LocationWrapper>
					<LocationList>
						{/* list array of page links here here */}
					</LocationList>
				</LocationWrapper>
				<NextWrapper>
					<Next to='/'>Next</Next>
				</NextWrapper>
			</NavWrapper>
		</Nav>
	);
};

export default Navigation;
