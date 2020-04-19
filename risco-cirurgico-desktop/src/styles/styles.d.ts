// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      black: string
    },
    device: {
      mobileS: string
      mobileM: string
      mobileL: string
      laptop: string
      desktop: string
    }
  }
}