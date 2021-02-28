import styled from "styled-components";
import { GrFormNextLink } from "react-icons/gr";

export const CoverWrapper = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

export const TitleWrapper = styled.ul`
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 2vh;
	padding-top: 4vh;
	li {
		font-size: 10rem;
		width: 100%;
	}
`;

export const ArrowWrapper = styled.div`
	width: 50px;
	position: absolute;
	top: 80vh;
	left: 40vh;
`;

export const CoverNext = styled(GrFormNextLink)`
	font-size: 6rem;
`;
