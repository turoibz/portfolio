import React from "react";
import { Link as RouterLink } from "gatsby";
import { CircleIcon } from "../../foundation/Icon";
import { StyledHomeButton } from "./HomeButton.styled";

export function HomeButton(){
  return (
    <StyledHomeButton>
      <RouterLink to="/">
        <CircleIcon size="md" color="black"/>
      </RouterLink>
    </StyledHomeButton>
  )
}


