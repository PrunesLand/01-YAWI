import styled from "styled-components";
import { IoGlobeOutline } from "react-icons/io5";

export const Drawer = styled.div`
	height: 10vh;
	width: 100%;
	position: fixed;
`;
export const DrawerBox = styled.div`
	margin: 2vh 3vh 0 0;
`;
export const DrawerIcon = styled(IoGlobeOutline)`
	font-size: 3rem;
	float: right;
	cursor: pointer;
`;
