import styled from "styled-components";


export const StyledLogin = styled.div`
  border-radius:12px;
  padding: 24px;
  background:${({ theme }) => theme.color.offwhite};
  border: 1px solid ${({ theme }) => theme.color.black};
`;

export const StyledLabel = styled.label`
  display: block;
  font-weight:800;
`;

export const StyledInput = styled.input`
  appearance: none;
  margin-top: 8px;
  transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: middle;
  font-family: inherit;
  padding: .7em .8em;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.black};
  background: rgba(255,255,255,40%);
  min-width:20em;
  @media (max-width: 767px){
    min-width:100%;
  }
  display: block;
  &:hover{
    background: rgba(255,255,255,80%);
  }
  &:focus{
    box-shadow: ${({ theme }) => theme.color.black}5E 0px 0px 0px 4px;
    border-color: ${({ theme }) => theme.color.black};
    outline: none;
    background: rgba(255,255,255,95%);
  }
`;

export const StyledSubmit = styled.button`
  transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
  appareance: none;
  margin-top: 1em;
  border:none;
  padding: 0 1em;
  height: 40px;
  border-radius: 4px;
  border: 1px solid;
  background: transparent;
  border-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.black};
  &:hover{
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.lightBlue};
    cursor: pointer;
  }
  &:focus{
    box-shadow: ${({ theme }) => theme.color.black}5E 0px 0px 0px 4px;
    outline: none;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.lightBlue};
    cursor: pointer;
  }
`;

export const StyledNote = styled.div`
  margin:0 0 2rem 0;
`;

export const StyledErrorMessage = styled.div`
  margin: 20px 0;
`;