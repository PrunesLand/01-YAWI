import styled, { ThemeProvider } from "styled-components";
import Home from "./Components/Home/Home";
import theme from "./Components/StylingFiles/Themes";

const Container = styled.div`
	background: ${() => theme.background};
	height: 100vh;
	width: 100%;
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Home />
			</Container>
		</ThemeProvider>
	);
}

export default App;
