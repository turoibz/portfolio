import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { HomeButton } from "../HomeButton/HomeButton";
import { Navigation } from "../Navigation/Navigation";
import { StyledHeader, StyledHeaderContent, StyledHeaderGroup } from "./Header.styled";

export function Header(){
  const [isScrolling, setisScrolling] = useState(false)
  const listenScrollEvent = () => {
    window.scrollY > 50
      ? setisScrolling(true)
      : setisScrolling(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  return(
    <StyledHeader isScrolling={isScrolling}>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12}>
            <StyledHeaderContent>
              <HomeButton/>
              <StyledHeaderGroup>
                <Navigation/>         
              </StyledHeaderGroup>
            </StyledHeaderContent>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  )
}