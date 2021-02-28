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
					<li>You</li>
					<li>Are</li>
					<li>Worth</li>
					<li>It.</li>
				</TitleWrapper>
				<ArrowWrapper>
					<CoverNext />
				</ArrowWrapper>
			</CoverWrapper>
		</ThemeProvider>
	);
};

export default Cover;
