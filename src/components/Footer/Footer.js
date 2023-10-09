import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { LinkedInButton } from "../LinkedInButton/LinkedInButton";
import { H1, Paragraph } from "./../../foundation/Typography";
import { GlassesOpen } from "../../components/Glasses/Glasses";
import { Spacer } from "./../../foundation/Spacer/Spacer";
import { StyledFooter, StyledBrandContainer, StyleFooterNote } from "./Footer.styled";


export function Footer(){
  return(
    <StyledFooter>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            {/* <ScrollUpButton/> */}
            <H1>Connect with me</H1>
            <Paragraph size="md">Are you seeking a skilled and thoughtful product designer? <br/><strong>Let's connect!</strong> I'm currently open to new roles and exploring opportunities.</Paragraph>
            <Spacer/>
            <Paragraph size="lg">me@arturoibanez.com</Paragraph>
            <LinkedInButton/>
            <Spacer/>
            <StyleFooterNote>
              <Paragraph size="xxs">Designed with ❤️ in Figma and built with <a href="https://github.com/turoibz/portfolio" target="_blank">Gatsby and Drupal</a> — Arturo Ibanez 2023. All Rights Reserved.</Paragraph>
              <StyledBrandContainer>
                <GlassesOpen color={"black"}/>
              </StyledBrandContainer>
            </StyleFooterNote>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}