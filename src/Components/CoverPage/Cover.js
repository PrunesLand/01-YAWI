import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../StylingFiles/Themes";
import GlobalStyle from "../StylingFiles/GlobalStyles";
import Contact from "../Home/Drawer/Drawer";
import Navigation from "../Home/Navigation/Navigation";
import { CoverWrapper, TitleWrapper } from "./CoverStyle";

const Cover = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<CoverWrapper>
				<Contact />
				<TitleWrapper>
					<li>You</li>
					<li>Are</li>
					<li>Worth</li>
					<li>It.</li>
				</TitleWrapper>
				<Navigation />
			</CoverWrapper>
		</ThemeProvider>
	);
};

export default Cover;
