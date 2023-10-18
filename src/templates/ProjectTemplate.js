import React from "react";
import { graphql } from "gatsby";
import { Tracker } from "./../components/Tracker/Tracker";
import HeadTitle from "./../components/Head/Head";
import Project from "./../components/Project/Project";
import ProjectProtected from "./../components/Project/ProjectProtected";

export const query = graphql`
  query Project($projectId: String!) {
    nodeProject(id: {eq: $projectId}) {
      title
      field_heading
      field_tag_line
      field_is_about
      field_project_date
      field_project_timeframe
      field_project_summary {
        processed
      }
      relationships {
        field_protected {
          drupal_id
        }
        field_next_project {
          field_heading
          path {
            alias
          }
          field_client
        }
        field_previous_project {
          field_heading
          path {
            alias
          }
          field_client
        }
        field_hero {
          localFile {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        field_project_summary_section {
          field_project_company
          field_project_deliverables
          field_project_design
          field_project_team
          field_project_tech
        }
        field_project_section {
          field_project_section_type
          field_project_section_background
          field_project_section_right_colu
          field_project_section_left_colum
          field_project_section_btm_space
          field_project_section_top_space
          field_project_section_copy {
            processed
          }
          relationships {
            field_project_section_media {
              field_media_image {
                alt
              }
              relationships {
                field_media_image {
                  localFile {
                    publicURL
                    ext
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({location, data}) => {
  const project = {
    heroImage: data.nodeProject.relationships.field_hero.localFile.childImageSharp.fluid,
    title: data.nodeProject.title,
    tagline: data.nodeProject.field_tag_line,
    heading: data.nodeProject.field_heading,
    projectType: data.nodeProject.field_is_about,
    projectDate: data.nodeProject.field_project_date,
    projectTimeframe: data.nodeProject.field_project_timeframe,
    // body: data.nodeProject.body.processed,
    projectSummary: data.nodeProject.relationships.field_project_summary_section,
    projectSections: data.nodeProject.relationships.field_project_section,
    protectedContent: data.nodeProject.relationships.field_protected,
    nextProject: data.nodeProject.relationships.field_next_project,
    previousProject: data.nodeProject.relationships.field_previous_project,
  }
  return(
    <>
      <Tracker location={location}/>
      <HeadTitle title={project.title}/>
      {!project.protectedContent ? (
        <Project {...project}/>
        ) : (
        <ProjectProtected {...project}/>
      )}
    </>
  )
}

export default ProjectTemplate;