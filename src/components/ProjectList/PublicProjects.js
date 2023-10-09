import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Col } from "styled-bootstrap-grid";
import { Link as NavLink } from "gatsby";
import { H3, H5 } from "./../../foundation/Typography";
import { StyledPublicProjects, StyledPublicList, StyledPublicProjectItem, StyledPublicClient } from "./PublicProjects.styled";

export const publicProjectsQuery = graphql`
  query publicProjectListResult {
    allNodeProject(sort: {field_order: ASC}) {
      nodes {
        id
        path {
          alias
        }
        field_client
        field_tag_line
        field_project_date
        relationships {
          field_protected {
            drupal_id
          }
        }
      }
    }
  }
`;
function PublicProjectsList({...props}){
  return(
    <Col col={12} sm={8} md={8} mdOffset={0}>
      <StaticQuery
        query={ publicProjectsQuery }
        render={ data => (
          <StyledPublicProjects>
            <H3>Explore other showcased work—public access</H3>
            <StyledPublicList>
              {data.allNodeProject.nodes.filter(node => node.relationships.field_protected === null).map((node) => (
                <StyledPublicProjectItem key={node.id}>
                  <StyledPublicClient>{node.field_client} — {node.field_project_date}</StyledPublicClient>
                  <NavLink activeClassName="active" to={node.path.alias}>
                    <H5>{node.field_tag_line}</H5>
                  </NavLink>
                </StyledPublicProjectItem>
              ))}
            </StyledPublicList>
          </StyledPublicProjects>
        )}
      />
    </Col>
  )
}

export default PublicProjectsList;