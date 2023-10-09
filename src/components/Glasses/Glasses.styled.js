import styled, { css } from "styled-components";


const glassesColor = css`
  ${({color, theme}) => `
    fill: ${theme.color[color]};
    color: ${theme.color[color]};
  `}
`;

export const StyledGlasses = styled.svg.attrs(props => ({
  viewBox: '0 0 500 250',
  focusable: 'false',
  'aria-hidden': 'true'
}))`
  display: inline-block;
  flex: 0 0 auto;
  ${({ theme }) => glassesColor};
`;

