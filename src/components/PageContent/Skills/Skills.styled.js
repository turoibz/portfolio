import styled from "styled-components";

export const StyledSkills = styled.section`
  padding: 8rem 0 0 0;
  background: #FAFBFB;
  border-top: 1px solid ${({ theme }) => theme.color.black};
`;

export const StyledListSkills = styled.ul`
  margin: 0 0 2rem 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledListItemSkills = styled.li`
  margin: 0 2rem 0 0;
  padding: 0;
  list-style-type: none;
  font-size: 2rem;
  line-height: 3rem;
  &:after{
    content:"-";
    margin-left: 2rem;
    font-weight: 700;
  }
  &:last-child:after{
    display: none;
  }
`;

export const StyledSkillsImage = styled.div`
  max-width: 340px;
  margin: auto;
  img{
    width: 100%;
    display: block;
  }
`;