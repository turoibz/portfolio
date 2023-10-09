import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";
import Default from "./themes/default"

const themes = {
	default: Default
}

const Theme = ({children, theme}) => {
	const currentTheme = themes[theme];
	return (
		<ThemeProvider theme={currentTheme}>
			<HelmetProvider>
				<Helmet>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no viewport-fit=cover"/>
					<meta name="description" content="Arturo Ibanez online portfolio"/>
					<link rel="preconnect" href="https://fonts.gstatic.com"/>
					<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet"></link>
				</Helmet>
			</HelmetProvider>
			<GridThemeProvider gridTheme={currentTheme.grid}>
				{ children }
			</GridThemeProvider>
		</ThemeProvider>
	)
}

export default Theme;