import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../Home/Navigation/Navigation";
import { TextWrapper, TitleWrapper } from "../SecondPage/SecondStyle";
import GlobalStyle from "../StylingFiles/GlobalStyles";
import theme from "../StylingFiles/Themes";
import { ContentWrapper3, ThirdMain } from "./ThirdStyle";

const Third = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<section>
				<ThirdMain>
					<ContentWrapper3>

					<TitleWrapper>
						<h4>Mental Health disorders exist.</h4>
					</TitleWrapper>
					<TextWrapper>
						<p>
							It is an experience that starts as early as adolescents and has
							become the third leading case of death for adolescents []
						</p>
						<br/>
						<p>
							For years, mental health disorders have been stigmatized by
							cultures and resulted in shaming by both community and family
							especially among asian communities[vox]
						</p>
						<br/>
						<p>
							This has pushed sufferers of mental health disorder into hiding.
							In fear of being shamed.[vox]
						</p>
					</TextWrapper>
					</ContentWrapper3>
				<Navigation pageNext='/4' pagePrev='/2' />
				</ThirdMain>
			</section>
		</ThemeProvider>
	);
};

export default Third;
