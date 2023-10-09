import React, { useContext } from "react";
import { Link as NavLink } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { ThemeContext } from "styled-components";
import { ChevronRightIcon } from "../../foundation/Icon";
import { StyledNavigation, StyledNavigationItem,
          StyledNavigationDirection, StyledNavigationTitle,
          StyledNavigationClient } from "./NavigateProjects.styled";

export function NavigateProjects({nextProject, previousProject}){
  const theme = useContext(ThemeContext);
  return(
    <StyledNavigation>
      <Container>
        <Row>
          <Col col={6} sm={6} md={6} mdOffset={0} noGutter>
            {previousProject &&
              <StyledNavigationItem align="left">
                <NavLink to={previousProject.path.alias}>
                  <StyledNavigationDirection icon="left">         
                    <ChevronRightIcon size="sm" color={theme.color.black}/>
                    Previous project
                  </StyledNavigationDirection>
                  <StyledNavigationTitle>{previousProject.field_heading}</StyledNavigationTitle>
                  <StyledNavigationClient>{previousProject.field_client}</StyledNavigationClient>
                </NavLink>
              </StyledNavigationItem>
            }
          </Col>
          <div className="separator"></div>
          <Col col={6} sm={6} md={6} mdOffset={0} noGutter>
            {nextProject &&
              <StyledNavigationItem align="right">
                <NavLink to={nextProject.path.alias}>
                  <StyledNavigationDirection justifyContent="end">
                    More recent project
                    <ChevronRightIcon size="sm" color={theme.color.black}/>
                  </StyledNavigationDirection>
                  <StyledNavigationTitle>{nextProject.field_heading}</StyledNavigationTitle>
                  <StyledNavigationClient>{nextProject.field_client}</StyledNavigationClient>
                </NavLink>
              </StyledNavigationItem>
            }
          </Col>
        </Row>
      </Container>
    </StyledNavigation>
  )
}