import React from "react";
import { graphql } from "gatsby";
import { Tracker } from "./../components/Tracker/Tracker";
import HeadTitle from "./../components/Head/Head";
import Project from "./../components/Project/Project";
import ProjectProtected from "./../components/Project/ProjectProtected";

export const query = graphql`
  query Project($projectId: String!) {
    nodeProject(id: {eq: $projectId}) {
      body {
        processed
      }
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
    body: data.nodeProject.body.processed,
    protectedContent: data.nodeProject.relationships.field_protected,
    nextProject: data.nodeProject.relationships.field_next_project,
    previousProject: data.nodeProject.relationships.field_previous_project,
    summaryProject: data.nodeProject.field_project_summary.processed
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