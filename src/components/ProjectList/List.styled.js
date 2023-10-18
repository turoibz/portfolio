import styled, { css } from "styled-components";

function layout({theme, isPage, isHomePage}){
  const flexdir = isPage ? "column" : "row"
	const marginRight = isPage ? "0" : "1.5rem";
	const marginBottom = isPage ? "3rem" : "0";
	const displayImg = isHomePage ? "none" : "block";
  const backgroundColor = theme.color.offwhite;
	return css`
		display: flex;
    flex-direction: ${flexdir};
    li{
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      a{
        background: ${backgroundColor};
      }
    }
    .projectImg{
      display: ${displayImg};
      max-width:50%;
      width:100%;
      height:100%;
      border-right: 1px solid #272721;
      @media (max-width: 767px){
        max-width:100%;
        border-right: none;
        border-bottom: 1px solid #272721;
      }
    }
	`;
};

export const StyledList = styled.ul`
  &:after{
    content: "";
    display: block;
    width: 0px;
    padding: 10px;
  }
  &:before{
    content: "";
    display: block;
    width: 0px;
    padding: 2px;
  }
  margin: 0;
  padding: 0;
  padding: 8px 0 20px 0;
  max-width: 100%;
  ${layout};
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar { 
    display: none;
  }
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  flex: 1;
  min-width: 30%;
  @media (max-width: 991px) and (min-width:768px){
    min-width: 50%;
  }
  @media (max-width: 767px) {
    min-width: 90%;
  }
  &:last-child{
    margin-right: 0;
  }
  a{
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.color.black};
    position: relative;
    overflow: hidden;
    display: flex;
    height: 100%;
    align-items: center;
    color: inherit;
    text-decoration: none;
    transition: box-shadow 250ms ease;
    .chevron-icon{
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
    *{
      text-decoration: none;
    }
    &:hover{
      cursor: pointer;
      text-decoration: none;
      box-shadow: 4px 8px 0px 0px ${({ theme }) => theme.color.black};
    }
    &:focus{
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.color.black};
      background: ${({ theme }) => theme.color.sand};

    }
    &.active{
      display:none;
    }
    @media (max-width: 767px){
      display: block;
    }
  }
`;

export const StyledListItemContent = styled.div`
  padding: 2em;
  height: 100%;
`;

export const StyledListItemTag = styled.div`
  display: flex;
  padding: 2px 8px 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position:absolute;
  top: 0;
  right: 1rem;
  border-radius: 0px 0px 6px 6px;
  background: #FDC9BE;
`;

export const StyledItemTagLabel = styled.span`
 font-weight: 300;
 font-size: .8rem;
`;
