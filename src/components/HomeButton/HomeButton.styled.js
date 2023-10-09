import styled from "styled-components";

export const StyledHomeButton = styled.div`
  line-height: 0;
  *{
    line-height:0;
    display: inline-block;
    &:focus{
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.color.black};
      border-radius: 100%;
    }
  }
`;