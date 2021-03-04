import React, { useState } from "react";

import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
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
	ListItem,
	Item,
} from "./NavigationStyle";

const Navigation = () => {
	return (
		<Nav>
			<NavWrapper>
				<PrevWrapper>
					<Previous to='/3'>
						<GrFormPreviousLink />
					</Previous>
				</PrevWrapper>
				<LocationWrapper>
					<LocationList>
						<ListItem>
							<Item to='/'>1</Item>
						</ListItem>
						<ListItem>
							<Item to='/2'>2</Item>
						</ListItem>
						<ListItem>
							<Item to='/3'>3</Item>
						</ListItem>
						<ListItem>
							<Item to='/4'>4</Item>
						</ListItem>
						<ListItem>
							<Item to='/5'>5</Item>
						</ListItem>
					</LocationList>
				</LocationWrapper>
				<NextWrapper>
					<Next to='/'>
						<GrFormNextLink />
					</Next>
				</NextWrapper>
			</NavWrapper>
		</Nav>
	);
};

export default Navigation;
