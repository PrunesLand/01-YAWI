import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const Drawer = styled.div`
	height: 15vh;
	width: 100%;
	position: absolute;
`;
export const DrawerBox = styled.div`
	margin: 15px;
`;
export const DrawerIcon = styled(GiHamburgerMenu)`
	font-size: 3rem;
	float: right;
`;
