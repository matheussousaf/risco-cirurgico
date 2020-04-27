import { DefaultTheme, createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  laptop: "1024px",
  desktop: "2560px",
};

const theme: DefaultTheme = {
  colors: {
    primary: "#B6E979",
    secondary: "#58A855",
    white: "#fff",
    black: "#333",
    gray: "whitesmoke",
    darkGray: "#b2b2b2",
  },
  device: {
    mobileS: `(min-width: ${size.mobileS}) and (max-device-width: 480px)`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  },
  borderRadius: "10px",
};

// theme is also fully typed
export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Signika Negative', sans-serif;
    background: ${(props) => props.theme.colors.white};
    margin: 0;
    padding: 0;
  }
`;

export { theme };
