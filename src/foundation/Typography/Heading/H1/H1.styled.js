import styled, { css } from "styled-components";

export const StyledH1 = styled.h1`
  margin: 0 0 2rem 0;
  color: ${({ theme }) => theme.color.black};
  font-family: 'Manrope';
  font-weight:700;
  font-size:3rem;
  ${size};
  
`;

function size({theme, isHeadline}){
  const margin = isHeadline ? "0 0 1.5rem 0" : "0 0 2rem 0";
  const fontLineHeight = isHeadline ? "2.75rem" : "3rem";
  return css`
    margin: ${margin};
    line-height: ${fontLineHeight};
  `;
}