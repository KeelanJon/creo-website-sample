import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  main: {
    blue: "#1300C1",
    backgroundColor: "#ffffff",
    white: "#ffffff",
    lightGreen: "#71F5C4",
    violet: "#8149FF",
    pink: "#FF0071",
    lightBlue: "#9DA8FF",
    lightPink: "#FFCDD9",
  },
  fonts: {
    regular: "Mind Meridian Regular",
    bold: "Mind Meridian Bold",
    display: "Mind Meridian Display",
  },
  fontSizes: {
    small: "1rem",
    medium: "2.5rem",
    large: "3rem",
    bodyText: "1.2rem",
  },
  screenDimensions: {
    mobile: "720px",
    tablet: "1280px",
    desktop: "1440px",
  },
}

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
