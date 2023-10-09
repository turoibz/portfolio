import React from "react";
import { StyledSpacer } from "./Spacer.styled";

export function Spacer({ size = 4 }){
  return(
    <StyledSpacer size={size}/>
  )
}