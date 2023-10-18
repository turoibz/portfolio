import React from "react";
import Image from "gatsby-image";
import { ProjectSummary } from "./ProjectSummary";
import { TableContent } from "./../TableContent/TableContent";
import ProjectSection from "./ProjectSections";
import { NavigateProjects } from "./../Navigation/NavigateProjects"
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer }  from "./../../foundation/Spacer/Spacer";
import { H1, Paragraph } from "./../../foundation/Typography";
import { StyledHero, StyledHeroHeading, StyledHeroImage, StyledMetaWrapper, StyledMetaProject, StyledArticle, StyledSummary } from "./Project.styled";
import parse from 'html-react-parser';
import { CalendarIcon, ClockIcon } from "../../foundation/Icon";

function Project({heroImage, heading, tagline, projectType, projectDate, projectTimeframe, projectSummary, projectSections, protectedContent, nextProject, previousProject}){
  return(
    <>
      <article>
        <StyledHero>
          <StyledHeroHeading>
            <H1>{ heading }</H1>
            <Paragraph size="lg">{ tagline }</Paragraph>
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
          </StyledHeroHeading>
          <StyledHeroImage>
            <Image fluid={heroImage} alt={"empty"} className={"heroImg"}/>
          </StyledHeroImage>
        </StyledHero>
        <ProjectSummary projectSummary={projectSummary}/>
        {projectSections.map((section) => (
          <>
            <ProjectSection section={section}/>
          </>
        ))}
      </article>
      <NavigateProjects nextProject={nextProject} previousProject={previousProject}/>
    </>
  )
}

export default Project;