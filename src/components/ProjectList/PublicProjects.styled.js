import styled from "styled-components";

export const StyledPublicProjects = styled.div`
  margin: 4rem 0;
  border-radius:12px;
  padding: 24px;
  background:${({ theme }) => theme.color.offwhite};
  border: 1px solid ${({ theme }) => theme.color.black};
`;

export const StyledPublicList = styled.ul`
  margin: 2rem 0 0 0;
  padding: 0;
`;

export const StyledPublicProjectItem = styled.li`
  list-style: none;
  margin:0 0 2rem 0;
  a{
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
`;

export const StyledPublicClient = styled.p`
  margin: 0;
  font-size: 1rem;
`;
