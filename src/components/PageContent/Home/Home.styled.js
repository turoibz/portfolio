import styled from "styled-components";

export const StyledHero = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  margin: 0 10px;
  border: 1px solid #272721;
`;


export const StyledHome = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFF;
  padding-left: 2.5rem;
  @media (max-width: 991px){
    padding-top: 4rem;
    padding-left: 0;
    align-items: center;
    h1, h2{
      text-align: center;
    }
  }
`;

export const StyledTitle = styled.div`
  margin-bottom: 1.5rem;
  @media (max-width: 991px){
    margin-bottom: 0;
  }
`;

export const StyledHomeImage = styled.div`
  overflow: hidden;
  img{
    width: 100%;
    display: block;
  }
`;

export const StyledTagLine = styled.div`
  @media (max-width: 991px){
    text-align: center;
    margin-bottom: 4rem;
  }
`;
