import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";
import { StyleReset } from "atomize";
import { ThemeProvider as Provider } from "atomize";
import { SiteProvider } from "../context/context";
import Nav from "../components/Nav";
import "../styles.css";

const GlobalStyle = createGlobalStyle`
  .sidebar-section-title {
  color: #f8bf30 !important;
  border-bottom: 1px solid #f8bf30;
}

`;

const theme = {
  primary: "#1E2246",
  secondary: "#F8BF30",
  blueText: "rgba(30, 34, 70, 0.79)",
};

const atomizeTheme = {
  colors: {
    primary: "#1E2246",
    secondary: "#F8BF30",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
          <Provider theme={atomizeTheme}>
            <SiteProvider>
              <StyleReset />
              <GlobalStyle />
              <Nav />
              <Component {...pageProps} />
            </SiteProvider>
          </Provider>
        </StyletronProvider>
      </ThemeProvider>
    );
  }
}
