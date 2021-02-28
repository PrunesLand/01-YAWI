import styled from "styled-components";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

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

export const Previous = styled(GrFormPreviousLink)`
	font-size: 3.5rem;
	cursor: pointer;
`;

export const PageLoc = styled.nav`
	width: 30px;
	height: 15px;
	background-color: green;
`;

export const Next = styled(GrFormNextLink)`
	font-size: 3.5rem;
	cursor: pointer;
`;
