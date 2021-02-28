import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../StylingFiles/Themes";
import GlobalStyle from "../StylingFiles/GlobalStyles";
import {
	CoverWrapper,
	TitleWrapper,
	ArrowWrapper,
	CoverNext,
} from "./CoverStyle";

const Cover = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<CoverWrapper>
				<TitleWrapper>
					<h1>You Are Worth It.</h1>
				</TitleWrapper>
				<ArrowWrapper theme={theme}>
					<CoverNext />
				</ArrowWrapper>
			</CoverWrapper>
		</ThemeProvider>
	);
};

export default Cover;
