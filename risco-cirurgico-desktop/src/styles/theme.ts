import { DefaultTheme, createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  laptop: "1024px",
  desktop: "2560px",
}

const theme: DefaultTheme = {
  colors: {
    primary: "#B6E979",
    secondary: "#58A855",
    white: "#E3E3E3",
    black: "#333333",
  },
  device: {
    mobileS: `(min-width: ${size.mobileS}) and (max-device-width: 480px)`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  },
};


// theme is also fully typed
export const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    font-family: 'Signika Negative', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export { theme };
