import React from "react";
import Navigation from "../Home/Navigation/Navigation";
import theme from "../StylingFiles/Themes";
import { ContentWrapper5, FifthMain } from "./FinalStyle";
import { ThemeProvider } from "styled-components";
import { TextWrapper} from "../SecondPage/SecondStyle";
const Final = () => {
	return (
		<ThemeProvider theme={theme}>
			<section>
				<FifthMain>
					<ContentWrapper5>
					<TextWrapper>

					<p>Despite invisible to the eye, we can still make an impact.</p>
					<br/>
					<p>
						One's happiness is like a jug full of water, it is one's purpose to
						pour to the empty cups
					</p>
					<br/>
					<p>
						Although subtle, these subtle acts can make large impacts on
						someone's life:
					</p>
					<br/>
					<ul>
						<li>be kind</li>
						<li>reach out to people</li>
						<li>spread positivity</li>
					</ul>
					<br/>
					<p>Life has no definite structure.</p>
					<br/>
					<p>
						at times we find our hardships dragging us down and taking us steps
						back and it is okay. do what you must and take the necessary stapes
						to get through the day.
					</p>
					<br/>
					<p>as tomorrow holds such better days.</p>
					<br/>
					<p>
						if you find yourself in this situation , these are some steps that
						you can take:
					</p>
					<br/>
					<ul>
						<li>take care of your bod</li>
						<li>draw only good aspects</li>
						<li>be kind to self</li>
					</ul>
					<br/>
					<p>
						Taking thses steps are not easy when your mind is clouded. but by
						acting to it is worth the effort to a better life. as by acting on
						these steps on, you have just proven that....
					</p>
					<br/>
					<p>...you are worth it</p>
					</TextWrapper>
					</ContentWrapper5>
				<Navigation pagePrev='/4' show={false} />
				</FifthMain>
			</section>
		</ThemeProvider>
	);
};

export default Final;
