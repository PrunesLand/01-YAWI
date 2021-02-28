import styled from "styled-components";
import { IoGlobeOutline } from "react-icons/io5";

export const Drawer = styled.div`
	height: 15vh;
	width: 100%;
	position: absolute;
`;
export const DrawerBox = styled.div`
	margin: 2vh 3vh 0 0;
`;
export const DrawerIcon = styled(IoGlobeOutline)`
	font-size: 3rem;
	float: right;
	cursor: pointer;
`;
