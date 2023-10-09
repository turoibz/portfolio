import styled from "styled-components";

export const StyledImage = styled.div`
  width:100%;
  height:100%;
`;

export const StyledHeroImage = styled.div`
  position: relative;
  margin: -100px 0 4rem 0;
  z-index: -1;
  figure{
    margin:0;
    img{
      width: 100%;
      height: 100%;
      object-position: center center;
      object-fit: cover;
    }
    width: 100%;
  }
  @media (max-width: 767px){
    .heroImg, figure{
      height: 40vh;
    }
    img{
      min-height:100%;
    }
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