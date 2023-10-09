import styled from "styled-components";

export const StyledH3 = styled.h3`
margin: 0 0 1.25rem 0;
color: ${({ theme }) => theme.color.black};
font-family: ${({ theme }) => theme.font.family.manrope};
font-weight: ${({ theme }) => theme.font.weight.light};
font-size: ${({ theme }) => theme.font.size.lg};
`;