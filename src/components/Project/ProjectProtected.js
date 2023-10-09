import React from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import { TableContent } from "./../TableContent/TableContent";
import { NavigateProjects } from "./../Navigation/NavigateProjects"
import Login from "./../Login/Login";
import PublicProjectsList from "./../ProjectList/PublicProjects";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer }  from "./../../foundation/Spacer/Spacer";
import { StyledMetaWrapper, StyledMetaProject, StyledArticle, StyledSummary, StyledHeroImage } from "./Project.styled";
import { H1, Paragraph } from "./../../foundation/Typography";
import { CalendarIcon, ClockIcon } from "../../foundation/Icon";

import parse from 'html-react-parser';

function ProjectProtected({protectedContent, nextProject, previousProject}){
  const api = "https://api.arturoibanez.com/jsonapi/node/project_protected/";
  const projectID = protectedContent.drupal_id;
  const project = axios.create({
    baseURL: api+projectID,
    withCredentials: true,
  })
  const [content, setContent] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await project.get();
        setContent(response.data.data.attributes);
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
      {isLoggedIn &&
        <StyledHeroImage>
          {parse(content.field_hero_image_protected.processed)}
        </StyledHeroImage>
      }
      <Container>
        <Row>
          <Col col={12} sm={12} md={8} mdOffset={0}>
            { isLoading ? 
              (<H1><Skeleton height={44} width={450}/></H1>)
              :(<H1>{content.title}</H1>)
            }
            { isLoading ? 
              (<Paragraph><Skeleton height={24} width={300}/></Paragraph>)
              : (<Paragraph>This project is about - { content.field_is_about }</Paragraph>)
            }
            { isLoading ? 
              (<Paragraph size="xs"><Skeleton height={24} width={100}/></Paragraph>)
              : (
                  <StyledMetaWrapper>
                    <StyledMetaProject>
                      <ClockIcon size="tn" color={"slateGray"}/>
                      <span>Project time frame - { content.field_project_timeframe }</span>
                    </StyledMetaProject>
                    <StyledMetaProject>
                      <CalendarIcon size="tn" color={"slateGray"}/>
                      <span>Project year - { content.field_project_date }</span>
                    </StyledMetaProject>
                  </StyledMetaWrapper>
                )
            }
            {isLoggedIn &&
              <>
                <StyledSummary>
                  {parse(content.field_project_protected_summary.processed)}
                </StyledSummary>
                {/* <Spacer/> */}
                <StyledArticle>
                  {parse(content.field_protected_content.processed)}
                </StyledArticle>
              </>
            }
          </Col>
          <Col col={12} sm={12} md={4} mdOffset={0}>
            {isLoggedIn &&
              <TableContent/>
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