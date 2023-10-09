import React from "react";
import Theme from "./../foundation/Theme/Theme";
import GlobalStyle from "../foundation/GlobalStyle/GlobalStyle";

const AppTheme = ({ children }) => {
  const theme = "default";
  return (
    <Theme theme={ theme }>
      <GlobalStyle/>
      { children }
    </Theme>
  )
}

export default AppTheme;