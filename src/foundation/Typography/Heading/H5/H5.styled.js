import styled from "styled-components";

export const StyledH5 = styled.h5`
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.family.manrope};
	font-weight: ${({ theme }) => theme.font.weight.semibold};
	font-size: ${({ theme }) => theme.font.size.sm};
`;