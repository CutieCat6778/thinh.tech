import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  ksm: '38em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const theme = extendTheme({
  colors: {
    main: {
      blue: "#2e1284",
      cyan: "#58c6b5",
      yellow: "#f6d244",
      pink: "#f4b8be",
      red: "#ed695f",
      gray: "#e3e1e4"
    }
  },
  fonts: {
    heading: "Open Sans",
    mono: "Space Mono"
  },
  breakpoints: breakpoints,
})

export default theme;