import React from "react";
import AppTheme from "./src/app/App.theme";
import App from "./src/app/App";


export const wrapPageElement = ({ element, props }) => {
  return (
    <App {...props}>{element}</App>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <AppTheme>
      {element}
    </AppTheme>
  )
}