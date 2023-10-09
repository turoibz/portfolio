import styled from "styled-components";

export const StyledTableContent = styled.nav`
  padding: 3rem;
  margin: 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 20%;
`;

export const StyledTableTitle = styled.span`
  font-weight: 700;
  display: block;
  font-size: 1rem;
  margin-bottom: 1.25rem;
  @media (max-width: 767px){
    display:none;
  }
`;

export const StyledTableList = styled.ul`
  padding: 0;
  margin: 0;
  @media (max-width: 767px){
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    width: 100%;
    z-index: 10000;
  }
`;

export const StyledTableListItem = styled.li`
  padding: 0;
  margin: 0;
  list-style-type: none;
  &.head3{
    a{
      margin: 0 0 0 .5rem
    }
  }
`;

export const StyledContentLink = styled.a`
  padding: 0;
  margin: 0;
  display: inline-block;
  text-decoration: none;
  font-size: .9rem;
  &.active{
    font-weight: 700;
    text-decoration: underline;
  }
  &:hover{
    text-decoration: underline;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.black};
    border-radius: 4px;
  }
`;