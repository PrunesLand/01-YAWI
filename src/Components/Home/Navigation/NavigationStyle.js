import styled from "styled-components";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Nav = styled.div`
	height: 10vh;
	width: 100%;
	position: absolute;
`;
export const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
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

export const LocationWrapper = styled.div``;

export const LocationList = styled.ul``;

export const NextWrapper = styled.div``;
