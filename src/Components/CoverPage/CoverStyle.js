import styled from "styled-components";
import { GrFormNextLink } from "react-icons/gr";
import theme from "../StylingFiles/Themes";
import { Link } from "react-router-dom";

export const CoverWrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 0;
`;

export const TitleWrapper = styled.div`
	height: 100vh;
	width: 50vh;
	padding-left: 2.5vh;
	align-items: center;
	font-size: 6rem;
	display: flex;
	justify-content: center;

	@media screen and (min-width: 1220px) {
		width: 100%;
	}
`;

export const ArrowWrapper = styled.div`
	width: 100px;
	height: 100px;
	position: absolute;
	bottom: 10vh;
	right: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${() => theme.textBg};
	border-radius: 50%;
	cursor: pointer;

	@media screen and (min-width: 1220px) {
		bottom: 0;
		right: 0;
		position: relative;
		bottom: 20vh;
	}
`;

export const CoverNext = styled(GrFormNextLink)`
	font-size: 6rem;
`;
