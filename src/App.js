import styled, { ThemeProvider } from "styled-components";
import Home from "./Components/Home/Home";
import theme from "./Components/StylingFiles/Themes";
import Contact from "./Components/Home/Drawer/Drawer";

const Container = styled.div`
	background: ${() => theme.background};
	height: 100%;
	width: 100%;
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Contact />
				<Home />
			</Container>
		</ThemeProvider>
	);
}

export default App;
