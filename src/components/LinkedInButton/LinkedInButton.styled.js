import styled from "styled-components";

export const StyledLinkedInButton = styled.button`
  background: transparent;
  border: none;
  outline: 1px solid transparent;
  padding: 0;
  line-height:0;
  a{
    display: inline-block;
    line-height:0;
    padding: 2px;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.black};
    border-radius: 20%;
  }
`;