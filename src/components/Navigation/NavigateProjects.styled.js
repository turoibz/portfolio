import styled, { css } from "styled-components";

function align({theme, align, justifyContent}){
  return css`
    text-align: ${align};
    justify-content: ${justifyContent};
  `;
}

function iconDirection({theme, icon}){
  const iconTransform = icon==="left" ? "180deg" : "0deg";
  return css`
    svg{
      transform: rotate(${iconTransform});
    };
  `;
}

export const StyledNavigation = styled.div`
  background: #FFF;
  border-top: 1px solid #272721;
  position: relative;
  .separator{
    width: 1px;
    background: #272721;
    position: absolute;
    left: 50%;
    max-height: 100%;
    height: 100%;
  }
`;

export const StyledNavigationItem = styled.div`
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  ${align};
  a{
    text-decoration: none;
  }
`;

export const StyledNavigationDirection = styled.div`
  font-size: .9rem;
  font-weight: 700;
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  ${align};
  ${iconDirection};
`;

export const StyledNavigationTitle = styled.p`
  margin-bottom: 0;
  text-decoration: none;

`;

export const StyledNavigationClient = styled.span`
  font-size: .8rem;
`;