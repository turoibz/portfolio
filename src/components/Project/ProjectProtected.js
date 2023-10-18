import React from "react";
import Image from "gatsby-image";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import { ProjectSummary } from "./ProjectSummary";
import { NavigateProjects } from "./../Navigation/NavigateProjects"
import Login from "./../Login/Login";
import PublicProjectsList from "./../ProjectList/PublicProjects";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer }  from "./../../foundation/Spacer/Spacer";
import { StyledProtectedHero, StyledHero, StyledHeroHeading, StyledHeroImage, StyledMetaWrapper, StyledMetaProject, StyledArticle, StyledSummary } from "./Project.styled";
import { H1, Paragraph } from "./../../foundation/Typography";
import { CalendarIcon, ClockIcon } from "../../foundation/Icon";

import parse from 'html-react-parser';

import emptyHero from "./../../images/hero_empty.png"; 

function ProjectProtected({protectedContent, nextProject, previousProject}){
  const source = process.env.IMAGE_SOURCE;
  const api = process.env.DRUPAL_PROJECT_PROTECTED;
  const drupalInclude = process.env.DRUPAL_PROJECT_PROTECTED_INCLUDE;
  const projectID = protectedContent.drupal_id;
  const project = axios.create({
    baseURL: api+projectID+drupalInclude,
    withCredentials: true,
  })
  const [content, setContent] = React.useState({});
  const [include, setInclude] = React.useState({});
  const [hero, setHero] = React.useState({});
  const [summary, setSummary] = React.useState({});
  const [sections, setSections] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await project.get();
        const heroObject = response.data.included.filter(item => item.type === 'file--file');
        const summaryObject = response.data.included.filter(item => item.type === 'paragraph--project_summary');
        const sectionObject = response.data.included.filter(item => item.type === 'paragraph--project_section');
        setContent(response.data.data.attributes);
        setInclude(response.data.included);
        setHero(heroObject[0].attributes);
        setSummary(summaryObject[0].attributes);
        setSections(sectionObject);
        setLoading(false);
        setLoggedIn(response.data.data.attributes.hasOwnProperty("field_protected_content"));
      }
      catch(err) {
        console.log(err.message)
      }
    }
    fetchProject();
  }, [])

  return(
    <>
      <StyledHero>
        <StyledHeroHeading>
          { isLoading ? 
            (<H1><Skeleton height={44} width={450}/></H1>)
            :(<H1>{content.title}</H1>)
          }
          { isLoading ? 
            (<Paragraph><Skeleton height={24} width={230}/></Paragraph>)
            :(<Paragraph size="lg">{ content.field_tag_line }</Paragraph>)
          }
          { isLoading ? 
            (<Paragraph><Skeleton height={16} width={150}/></Paragraph>)
            :(<Paragraph size="xs">This project is about - { content.field_is_about }</Paragraph>)
          }
          <StyledMetaWrapper>
            { isLoading ? 
              (<Paragraph><Skeleton height={16} width={150}/></Paragraph>):
              (<StyledMetaProject>
                <ClockIcon size="tn" color={"slateGray"}/>
                <span>Project time frame - { content.field_project_timeframe }</span>
              </StyledMetaProject>)
            }
            { isLoading ?
              (<Paragraph><Skeleton height={16} width={150}/></Paragraph>):
              (<StyledMetaProject>
                <CalendarIcon size="tn" color={"slateGray"}/>
                <span>Project year - { content.field_project_date }</span>
                </StyledMetaProject>)
            }
          </StyledMetaWrapper>
        </StyledHeroHeading>
        {isLoggedIn ?
          (<StyledHeroImage>
            <StyledProtectedHero>
              <img src={source+hero.uri.url} alt={""} className={"heroImg"}/>
            </StyledProtectedHero>
          </StyledHeroImage>):
          (<StyledHeroImage>
              <StyledProtectedHero>
                <img src={emptyHero} alt={"empty"} className={"heroImg"}/>
              </StyledProtectedHero>
            </StyledHeroImage>)
        }
      </StyledHero>
      {isLoggedIn &&
        <ProjectSummary projectSummary={summary}/>
      }
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} lg={10} mdOffset={0}>
            {isLoggedIn &&
              <>
                <StyledArticle>
                  {parse(content.field_protected_content.processed)}
                </StyledArticle>
              </>
            }
          </Col>
        </Row>
        { !isLoggedIn && !isLoading &&
          <Row>
            <Login/>
            <PublicProjectsList/>
          </Row>
        }
        <Spacer/>
      </Container>
      {isLoggedIn &&
        <NavigateProjects nextProject={nextProject} previousProject={previousProject}/>
      }
    </>
  )
}

export default ProjectProtected;