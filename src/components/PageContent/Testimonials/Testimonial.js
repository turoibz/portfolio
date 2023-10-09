import React, { useContext } from "react";
import { QuoteIcon } from "../../../foundation/Icon";
import { StyledTestimonial, StyledQuote, StyledCopy, StyledAuthor } from "./Testimonial.styled"

export function Testimonial({...props}){
  return(
    <StyledTestimonial>
      <StyledQuote>
        <QuoteIcon size="md" color={"skyblue"}/>
        <StyledCopy>{props.copy}</StyledCopy>
      </StyledQuote>
      <StyledAuthor>{props.author}</StyledAuthor>
    </StyledTestimonial>
  )
}