import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Corpo from "./corpo";
import Header from "./header";

const tema = createMuiTheme({
	palette: {
		primary: {
			main: "#006400"
		},
		secondary: {
			main: "#d32f2f"
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
