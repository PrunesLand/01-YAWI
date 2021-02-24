import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../Utilities/Themes";

const Cover = () => {
	return (
		<ThemeProvider theme={theme}>
			<section>
				<h1>You Are Worth It.</h1>
			</section>
		</ThemeProvider>
	);
};

export default Cover;
