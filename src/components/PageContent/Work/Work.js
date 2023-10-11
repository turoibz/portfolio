import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H1, Paragraph } from "./../../../foundation/Typography";
import ProjectList from "./../../ProjectList/ProjectList";
import { Spacer } from "./../../../foundation/Spacer/Spacer";
import { StyledWorkImage } from "./Work.styled"

export function Work(){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} md={8} sm={12}>
            <H1>My Work</H1>
            <Paragraph size="md">Welcome to my portfolio, where you can explore a selection of projects that highlight my versatility as a product designer and technologist.</Paragraph>
            <Paragraph>While I may not be able to provide specific details in some cases due to confidentiality, each project reflects my expertise in driving meaningful experiences and simplifying complexity. Feel free to browse through my showcased work to gain insight into my capabilities and the value I bring to each project.</Paragraph>
            <Spacer/>
          </Col>
          <Col col={12} md={4} sm={12}>
            <StyledWorkImage>
              <StaticImage src="./../../../images/work.png" alt="Work decorative image" placeholder="blurred"/> 
            </StyledWorkImage>
          </Col>
        </Row>
      </Container>
      <ProjectList isPage/>
      <Spacer/>
    </>
  )
}