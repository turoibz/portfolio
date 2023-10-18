import styled, { css }  from "styled-components";

const sectionBackground = css`
  ${({background, theme}) => `
    background: ${theme.color[background]};
  `}
`;
export const StyledImage = styled.div`
  width:100%;
  height:100%;
`;

export const StyledFigure = styled.figure`
  margin: 0;
`;

export const StyledFigureCaption = styled.figcaption`
  margin: -1rem 1.5rem 2rem;
  font-size: 0.9rem;
  color: #777;
`;
export const StyledFigureCarouselCaption = styled.figcaption`
  margin: 1rem 1.5rem 2rem;
  font-size: 0.9rem;
  color: #777;
`;

export const StyledProtectedHero = styled.div`
  img{
    width:100%;
  }
`;

export const StyledHero = styled.div`
  margin-top:-100px;
  padding: 4rem 0;
  z-index: -1;
  align-items: center;
  background: ${({ theme }) => theme.color.offgrey};
  display: block;
  @media (min-width: 1200px){
    height: 765px;
    display: flex;
  }
`;

export const StyledHeroHeading = styled.div`
  width: 100%;
  padding: 2rem 16px 0;
  @media (min-width: 576px) and (max-width: 768px){
    max-width: 540px;
    margin: 4rem auto 0;
    padding: 0 16px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    max-width: 720px;
    margin: 8rem auto 0;
    padding: 0 16px;
  }
  @media (min-width: 992px) and (max-width: 1200px){
    max-width: 960px;
    margin: 8rem auto 0;
    padding: 0 16px;
  }
  @media (min-width: 1200px){
    max-width: 650px;
    margin-left:auto;
    padding: 0 2rem;
  }
`;

export const StyledHeroImage = styled.div`

  width: 100%;
  figure{
    margin:0;
    img{
      width: 100%;
      height: 100%;
      object-position: center center;
      object-fit: cover;
    }
  }
  @media (min-width: 1200px){
    width: 50%;
  }

`;

export const StyledContainer = styled.div`
  padding: 4rem 0;
  padding-top: ${({ topSpace }) => `${topSpace}rem`};
  padding-bottom: ${({ bottomSpace }) => `${bottomSpace}rem`};
  ${({ theme }) => sectionBackground};
`;

export const StyledSummaryCard = styled.div`
  background: #FFF;
  border-radius: .75rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 42px;
  p{
    margin-bottom: 0;
  }
  &:last-child{
    grid-area: 2 / 2 / 3 / 4;
  }
`;

export const StyledProjectSummary = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media (max-width: 767px){
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledArticle = styled.article`
  margin-top: 1.5rem;
  img{
    max-width:100%;
    border-radius:6px;
    margin-bottom: 1.5em;
    width: 100% !important;
    height: 100% !important;
  }
  ul{
		max-width: 40em;
		margin: 1.5rem 0;
	}
  figure{
    margin:0;
    figcaption{
      margin-top:-1rem;
      margin-bottom: 2rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      font-size: .90rem;
      color: #777777;
    }
  }
`;

export const StyledSummary = styled.section`
  padding: 4rem 0;
  p {
    margin-bottom:0;
    font-size:14px;
    line-height:1.5rem
  }
  h6{
    margin-bottom:.5rem;
    font-size:14px;
  }
`;

export const StyledMetaProject = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  svg{
    margin-right: .5rem;
  }
`;

export const StyledMetaWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 767px){
    display: block;
    p:first-child{
      margin: 0;
    }
  }
`;