import { extendTheme } from "@chakra-ui/react";

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
    heading: "Open Sans"
  }
})

export default theme;