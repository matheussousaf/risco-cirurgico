// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      gray: string;
      darkGray: string;
    };
    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      laptop: string;
      desktop: string;
    };
    borderRadius: string;
  }
}
