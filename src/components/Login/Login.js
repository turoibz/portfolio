import React, { useRef } from "react";
import axios from "axios";
import { Paragraph, H3 } from "./../../foundation/Typography";
import { Col } from "styled-bootstrap-grid";
import { Spacer } from "./../../foundation/Spacer/Spacer";
import { StyledLogin, StyledLabel, StyledInput, StyledSubmit, StyledNote, StyledErrorMessage } from "./Login.styled";


function Login({...props}){
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [loginMsg, setLoginMsg] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(false);

  const api = process.env.GATSBY_LOGIN_API;
  
  const login = axios.create({
    baseURL: api,
    withCredentials: true,
    headers:{
      "Content-Type": "application/json"
    }
  })

  function handleSubmit(e){
    e.preventDefault();
    const body = {
      name: userNameRef.current.value,
      pass: passwordRef.current.value
    }
    const loginUser = async () => {
      try {
        setErrorMsg(false);
        const response = await login.post('/login?_format=json', body);
        window.location.reload(false);
        sessionStorage.setItem("session", "loggedin");
      }
      catch(err) {
        setErrorMsg(true);
      }
    }
    loginUser();
  }

  return(
    <Col col={12} sm={8} md={8} mdOffset={0}>
      <Spacer/>
      <StyledLogin>
        <H3>You need to login to view this project</H3>
        <StyledNote>
          <Paragraph size="xxs">Email me if you'd like to access this content <strong>me@arturoibanez.com</strong></Paragraph>
        </StyledNote>
        <form onSubmit={handleSubmit}>
          <StyledLabel>Name</StyledLabel>
          <StyledInput type="text" required ref={userNameRef}/>
          <br/>
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="password" required ref={passwordRef}/>
          <StyledSubmit>View project</StyledSubmit>
        </form>
        { errorMsg ? <StyledErrorMessage><strong>Something went wrong, try again later or check your credentials.</strong></StyledErrorMessage> : <></> }
      </StyledLogin>
    </Col>
  )
}

export default Login;