import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import {
	Nav,
	NavWrapper,
	Previous,
	Next,
	PrevWrapper,
	LocationWrapper,
	LocationList,
	NextWrapper,
	ListItem,
	Item,
} from "./NavigationStyle";

const Navigation = ({ pageNext, pagePrev, show }) => {
	return (
		<Nav>
			<NavWrapper>
				<PrevWrapper>
					<Previous to={pagePrev}>
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
				<NextWrapper show={show}>
					<Next to={pageNext}>
						<GrFormNextLink />
					</Next>
				</NextWrapper>
			</NavWrapper>
		</Nav>
	);
};

export default Navigation;
