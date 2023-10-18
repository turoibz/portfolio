import styled from "styled-components";


export const StyledNextButton = styled.button.attrs(props => ({
  className: props.className
}))`
  background: ${({ theme }) => theme.color.black};
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border-radius: 100%;
  position: absolute;
  right: 1rem;
  bottom: 0;
  &:hover{
    cursor: pointer;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.offwhite}, 0 0 0 4px ${({ theme }) => theme.color.black};
    border-radius: 100%;
    p
  }
`;
export const StyledPrevButton = styled.button.attrs(props => ({
  className: props.className
}))`
  background: ${({ theme }) => theme.color.black};
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border-radius: 100%;
  position: absolute;
  left: 1rem;
  bottom: 0;
  z-index: 1;
  svg{
    transform: rotate(180deg)
  }
  &:hover{
    cursor: pointer;
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.offwhite}, 0 0 0 4px ${({ theme }) => theme.color.black};
    border-radius: 100%;
    p
  }
`;

export const StyledPageIndicator = styled.div`
  cursor: pointer;
  height: 16px;
  width: 16px;
  background: ${({ theme }) => theme.color.black};
  border-radius: 15px;
  opacity: 0.5;
  transition: opacity 500ms ease-in-out, width 250ms ease-in-out;
  &:hover{
    opacity: .8;
    transition: opacity 500ms;
  }
`;