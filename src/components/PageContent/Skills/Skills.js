import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H1, Paragraph } from "./../../../foundation/Typography";
import { Spacer } from "./../../../foundation/Spacer/Spacer";
import { StyledSkills, StyledListSkills, StyledListItemSkills, StyledSkillsImage } from "./Skills.styled";

export function Skills(){
  return(
    <StyledSkills>
      <Container>
        <Row>
          <Col col={12} sm={12} md={8} mdOffset={0}>
            <H1 isVariant>Skills</H1>
            <StyledListSkills>
              <StyledListItemSkills>End-to-end product design</StyledListItemSkills>
              <StyledListItemSkills>Interface design</StyledListItemSkills>
              <StyledListItemSkills>Interaction design</StyledListItemSkills>
              <StyledListItemSkills>Software design</StyledListItemSkills>
              <StyledListItemSkills>User research</StyledListItemSkills>
              <StyledListItemSkills>JavaScript, HTML & CSS</StyledListItemSkills>
              <StyledListItemSkills>Rapid prototyping</StyledListItemSkills>
              <StyledListItemSkills>Systems thinking</StyledListItemSkills>
            </StyledListSkills>
            <Paragraph>I have over a decade of professional experience, including years as a freelance designer and developer, followed by more recent work with enterprise businesses in Australia. I also hold a master's degree in Interaction Design, which has further enhanced my expertise in crafting products and experiences that deliver results. This combination of practical experience and academic knowledge allows me to design meaningful digital solutions.</Paragraph>
            <Spacer/>
          </Col>
          <Col col={12} sm={12} md={4} mdOffset={0}>
            <StyledSkillsImage>
              <StaticImage src="./../../../images/skills.png" alt="About me decorative image" placeholder="blurred"/> 
            </StyledSkillsImage>
          </Col>
        </Row>
      </Container>
    </StyledSkills>
  )
}