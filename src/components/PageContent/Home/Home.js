import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H1, H2, Paragraph} from "./../../../foundation/Typography";
import { StyledHero, StyledHome, StyledTitle, StyledTagLine, StyledHomeImage } from "./Home.styled";
import ProjectList from "./../../ProjectList/ProjectList";
import { Skills } from "./../Skills/Skills";
import { Testimonials } from "./../Testimonials/Testimonials"

import home from "./../../../images/home.png"

export function Home(){
  return(
    <>
      <Container>
        <StyledHero>
          <Row>
            <Col col={12} sm={12} md={12} lg={4} mdOffset={0} noGutter>
              <StyledHome>
                <StyledTitle>
                  <H1 isHeadline>Arturo Ibanez</H1>
                  <H2>Product Designer</H2>
                </StyledTitle>
                <StyledTagLine>
                  <Paragraph>design + code + teamwork</Paragraph>
                </StyledTagLine>
              </StyledHome>
            </Col>
            <Col col={12} sm={12} md={12} lg={8} mdOffset={0} noGutter>
              <StyledHomeImage>
                <img src={home} alt=""/>
              </StyledHomeImage>
            </Col>
          </Row>
        </StyledHero>
      </Container>
      <ProjectList isHomePage/>
      <Skills/>
      <Testimonials/>
    </>
  )
}