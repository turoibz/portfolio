import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 8rem 0 8rem 0;
  background: #f8fcfd;
  border-top: 1px solid ${({ theme }) => theme.color.black};
  position: relative;
`;

export const StyledBrandContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 100%;
  svg{
    max-width: 100px;
    width: 100px;
  }
`;

export const StyleFooterNote = styled.div`
  p{
    max-width: 100%;
  }
  text-align: right;
`;