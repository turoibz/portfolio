import styled, { css } from "styled-components";

function background({isScrolling}){
  const backgroundColor = isScrolling ? "rgba(242, 248, 248, 1)" : "rgba(242, 248, 248, 0)";
	return css`
		background: ${backgroundColor};
	`;
}

export const StyledHeader = styled.header`
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  ${background};
  transition: background-color .8s ease;
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderGroup = styled.div`
  display: flex;
  align-items: center;
`;