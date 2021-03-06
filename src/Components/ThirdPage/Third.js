import React from "react";
import Navigation from "../Home/Navigation/Navigation";
import { TextWrapper, TitleWrapper } from "../SecondPage/SecondStyle";
import { ThirdWrapper } from "./ThirdStyle";

const Third = () => {
	return (
		<section>
			<TitleWrapper>
				<h4>Mental Health disorders exist.</h4>
			</TitleWrapper>
			<TextWrapper>
				<p>
					It is an experience that starts as early as adolescents and has become
					the third leading case of death for adolescents []
				</p>
			</TextWrapper>
			<TextWrapper>
				<p>
					For years, mental health disorders have been stigmatized by cultures
					and resulted in shaming by both community and family especially among
					asian communities[vox]
				</p>
			</TextWrapper>
			<TextWrapper>
				<p>
					This has pushed sufferers of mental health disorder into hiding. In
					fear of being shamed.[vox]
				</p>
			</TextWrapper>

			<Navigation pageNext='/4' pagePrev='/2' />
		</section>
	);
};

export default Third;
