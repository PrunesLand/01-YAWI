import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../StylingFiles/Themes";
import GlobalStyle from "../StylingFiles/GlobalStyles";

const Cover = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<section>
				<ul>
					<li>You</li>
					<li>Are</li>
					<li>Worth</li>
					<li>It.</li>
				</ul>
			</section>
		</ThemeProvider>
	);
};

export default Cover;
