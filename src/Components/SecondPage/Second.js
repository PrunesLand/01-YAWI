import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../Home/Navigation/Navigation";
import GlobalStyle from "../StylingFiles/GlobalStyles";
import theme from "../StylingFiles/Themes";
import {
	TitleWrapper,
	TextWrapper,
	SecondMain,
	ContentWrapper,
} from "./SecondStyle";
const Second = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<section >
				<SecondMain>
					<ContentWrapper>
						<TitleWrapper>
							<h1>Iceberg Analogy</h1>
						</TitleWrapper>
						<TextWrapper>
							<p>
								An iceberg is comparable to a person's mind. It reveals only
								characteristics needed for social interactions and leaves an
								impression that it's depth is only till what you see. Much like
								an iceberg
							</p>
							<br/>
							<p>
								The reality of the mind is revealed when we plunge deep beneath
								the water. Revealing a complex history that shaped it to become
								what it is today
							</p>
						</TextWrapper>
					</ContentWrapper>
					<Navigation pageNext='/3' pagePrev='/' />
				</SecondMain>
			</section>
		</ThemeProvider>
	);
};

export default Second;
