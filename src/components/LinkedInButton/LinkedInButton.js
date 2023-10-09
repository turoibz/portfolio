import React, { useContext } from "react";
import ReactGA from "react-ga4";
import { ThemeContext } from "styled-components";

import { LinkedinIcon } from "./../../foundation/Icon";
import { StyledLinkedInButton } from "./LinkedInButton.styled";

export function LinkedInButton(){
  const theme = useContext(ThemeContext)
  function handleClick(){
    ReactGA.event({
      category: "LinkedIn",
      action: "User visited Linkedin profile",
    });
  }
  return(
    <StyledLinkedInButton onClick={handleClick}>
      <a href="https://www.linkedin.com/in/arturo-ibanez-ixd/" target="_blank" tabIndex="-1"  rel="noreferrer">
        <LinkedinIcon size="md" color={theme.color.navigation}/>
      </a>
    </StyledLinkedInButton>
  )
}