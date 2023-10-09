import styled, { css } from "styled-components";

function styles({theme, isPage}){
	const padding = isPage ? "" : "8rem 0 8rem 0"
	const overflow = isPage ? "revert !important" : ""
	return css`
		padding: ${padding};
		.indiana-scroll-container--hide-scrollbars{
			overflow: ${overflow}
		}
	`;
};

export const StyledProjectList =  styled.div`
	${styles};
`;