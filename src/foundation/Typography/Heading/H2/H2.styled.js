import styled, { css } from "styled-components";

export const StyledH2 = styled.h2`
margin: 0 0 1.75rem 0;
color: ${({ theme }) => theme.color.black};
font-weight: ${({ theme }) => theme.font.weight.regular};
font-size: ${({ theme }) => theme.font.size.xlg};
font-family: ${({ theme }) => theme.font.family.manrope};
${fontWeight};
`;

function fontWeight({theme, isVariant}){
  const weight = isVariant ? '700' : '300';
  return css`
    font-weight: ${weight};
  `;
}