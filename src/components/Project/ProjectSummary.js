import React from "react";
import { AssignIcon, BrickIcon, BuildingIcon, PathIcon, TeamIcon } from "./../../foundation/Icon"
import { Container } from "styled-bootstrap-grid";
import { StyledProjectSummary, StyledSummaryCard } from "./Project.styled";

export function ProjectSummary({projectSummary}){
  return(
    <Container>
      <StyledProjectSummary>
        <StyledSummaryCard>
          <BuildingIcon size="md" color="black"/>
          <p><strong>Company: </strong>{projectSummary.field_project_company}</p>
        </StyledSummaryCard>
        <StyledSummaryCard>
          <AssignIcon size="md" color="black"/>
          <p><strong>Deliverables: </strong>{projectSummary.field_project_deliverables}</p>
        </StyledSummaryCard>
        <StyledSummaryCard>
          <PathIcon size="md" color="black"/>
          <p><strong>Design methods: </strong>{projectSummary.field_project_design}</p>
        </StyledSummaryCard>
        <StyledSummaryCard>
          <BrickIcon size="md" color="black"/>
          <p><strong>Tech tools: </strong>{projectSummary.field_project_tech}</p>
        </StyledSummaryCard>
        <StyledSummaryCard>
          <TeamIcon size="md" color="black"/>
          <p><strong>Cross-functional team: </strong>{projectSummary.field_project_team}</p>
        </StyledSummaryCard>
      </StyledProjectSummary>
    </Container>
  )
}