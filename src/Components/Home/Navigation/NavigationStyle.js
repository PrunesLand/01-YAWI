import styled from "styled-components";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Nav = styled.div`
	height: 10vh;
	width: 100%;

	display: flex;
	justify-content: center;
`;
export const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	align-items: center;
	justify-content: space-around;
`;

export const Previous = styled(Link)`
	font-size: 3rem;
`;

export const PageLoc = styled.nav`
	width: 30px;
	height: 15px;
	background-color: green;
`;

export const Next = styled(Link)`
	font-size: 3rem;
`;

export const PrevWrapper = styled.div``;

export const LocationWrapper = styled.div`
	width: 80%;
`;

export const LocationList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const ListItem = styled.li``;

export const Item = styled(Link)`
	text-decoration: none;
	font-size: 1.5rem;
`;

export const NextWrapper = styled.div``;
