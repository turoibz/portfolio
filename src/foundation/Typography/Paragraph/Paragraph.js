import React from "react";
import { StyledParagraph } from "./Paragraph.styled";

export function Paragraph({children, ...props}){
	return (
		<StyledParagraph isCaption={props.isCaption} size={props.size}>
			{children}
		</StyledParagraph>
	)
}