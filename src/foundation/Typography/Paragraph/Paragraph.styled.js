// import { border } from "polished";
import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
	color: ${({ theme }) => theme.color.black};
	${size};
	${border};
	font-family: ${({ theme }) => theme.font.family.manrope};
	font-weight: ${({ theme }) => theme.font.weight.regular};
	max-width: 40em;
	margin: 0 0 2rem 0;
	outline: transparent;
	&:last-child{
		margin: 0;
	}
`;

function border({theme, isCaption}){
	const borderColor = isCaption ? theme.color.black : null;
	const borderStyle = isCaption ? "1px solid" : null;
	const padding = isCaption ? "1.5rem" : null;
	return css`
		border-top: ${borderStyle};
		border-color: ${borderColor};
		padding-top: ${padding};
	`;
};

function size({size}){
  return css`
    font-size: ${({ theme }) => theme.font.size[size]};
    line-height: ${({ theme }) => theme.font.lineheight[size]};
  `;
}