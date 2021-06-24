import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Corpo from "./corpo";
import Header from "./header";

const tema = createMuiTheme({
	palette: {
		primary: {
			main: "#b71c1c"
		},
		secondary: {
			main: "#263238"
		}
	}
});

ReactDOM.render(
	<div>
		<ThemeProvider theme={tema}>
			<Header />
			<Corpo />
		</ThemeProvider>
	</div>,
	document.getElementById("root")
);
