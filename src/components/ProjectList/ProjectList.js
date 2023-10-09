import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { List, ListItem } from "./List";
import { StyledProjectList } from "./ProjectList.styled";
import { H1 } from "./../../foundation/Typography";

const projectsQuery = graphql`
  query projectListResult {
    allNodeProject(sort: {field_order: ASC}) {
      nodes {
        field_is_about
        id
        path {
          alias
        }
        field_client
        field_tag_line
        field_project_date
        field_cover {
          alt
        }
        relationships {
          field_cover {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  aspectRatio
                  base64
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          field_protected {
            drupal_id
          }
        }
      }
    }
  }
`;
function ProjectList({...props}){
  return(
    <StaticQuery
      query={ projectsQuery }
      render={ data => (
        <StyledProjectList isPage={props.isPage}>
          <Container>
            <Row>
              <Col col={12} sm={12} md={12}>
                {!props.isPage &&
                  <H1>My Work</H1>
                }
                <List isPage={props.isPage}  isHomePage={props.isHomePage}>
                  {data.allNodeProject.nodes.map((node) => (
                    <ListItem
                      key={node.id}
                      cover={node.relationships.field_cover.localFile.childImageSharp.fluid}
                      isProtected={node.relationships.field_protected}
                      path={node.path.alias}
                      label={node.field_client}
                      tagline={node.field_tag_line}
                      date={node.field_project_date}
                      about={node.field_is_about}
                      altTxt={node.field_cover.alt}
                    />
                  ))}
                </List>
              </Col>
            </Row>
          </Container>
        </StyledProjectList>
      )}
    />
  )
};

export default ProjectList;