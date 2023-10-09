import React from "react";
import Image from "gatsby-image";
import { TableContent } from "./../TableContent/TableContent";
import { NavigateProjects } from "./../Navigation/NavigateProjects"
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer }  from "./../../foundation/Spacer/Spacer";
import { H1, Paragraph } from "./../../foundation/Typography";
import { StyledHeroImage, StyledMetaWrapper, StyledMetaProject, StyledArticle, StyledSummary } from "./Project.styled";
import parse from 'html-react-parser';
import { CalendarIcon, ClockIcon } from "../../foundation/Icon";

function Project({heroImage, heading, projectType, projectDate, projectTimeframe, body, protectedContent, nextProject, previousProject, summaryProject}){
  return(
    <>
      <StyledHeroImage>
        <Image fluid={heroImage} alt={"empty"} className={"heroImg"}/>
      </StyledHeroImage>
      <Container>
        <Row>
          <Col col={12} sm={12} md={8} mdOffset={0}>
            <H1>{ heading }</H1>
            <Paragraph size="xs">This project is about - { projectType }</Paragraph>
            <StyledMetaWrapper>
                <StyledMetaProject>
                  <ClockIcon size="tn" color={"slateGray"}/>
                  <span>Project time frame - { projectTimeframe }</span>
                </StyledMetaProject>
                <StyledMetaProject>
                  <CalendarIcon size="tn" color={"slateGray"}/>
                  <span>Project year - { projectDate }</span>
                </StyledMetaProject>
            </StyledMetaWrapper>
            <StyledSummary>
              {parse(summaryProject)}
            </StyledSummary>
            <Spacer/>
            <StyledArticle>
              {parse(body)}
            </StyledArticle>
            <Spacer/>
          </Col>
          <Col col={12} sm={12} md={4} mdOffset={0}>
            <TableContent/>
          </Col>
        </Row>
        <Spacer/>
      </Container>
      <NavigateProjects nextProject={nextProject} previousProject={previousProject}/>
    </>
  )
}

export default Project;