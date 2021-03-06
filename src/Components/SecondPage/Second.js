import React from "react";
import Navigation from "../Home/Navigation/Navigation";
import { SecondWrapper, TitleWrapper, TextWrapper, Main } from "./SecondStyle";
const Second = () => {
	return (
		<SecondWrapper>
			<Main>
				<TitleWrapper>
					<h1>Iceberg Analogy</h1>
				</TitleWrapper>
				<TextWrapper>
					<p>
						An iceberg is comparable to a person's mind. It reveals only
						characteristics needed for social interactions and leaves an
						impression that it's depth is only till what you see. Much like an
						iceberg
					</p>
				</TextWrapper>
				<br />
				<TextWrapper>
					<p>
						The reality of the mind is revealed when we plunge deep beneath the
						water. Revealing a complex history that shaped it to become what it
						is today
					</p>
				</TextWrapper>
				<Navigation pageNext='/3' pagePrev='/' />
			</Main>
		</SecondWrapper>
	);
};

export default Second;
