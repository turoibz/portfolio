import styled from "styled-components";

export const StyledLink = styled.span`
  display: inline-block;
  margin: 0 2rem 0 0;
  padding:0;
  &:last-child{
    margin:0;
  }
  a{
    font-family: ${({ theme }) => theme.font.family.manrope};
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    &:focus{
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.color.black};
      border-radius: 4px;
    }
    &:hover{
      text-decoration: underline;
    }
  }
`;