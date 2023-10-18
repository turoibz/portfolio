import React from "react";
import Image from "gatsby-image";
import Carousel from "../Carousel/Carousel";
import { Spacer }  from "./../../foundation/Spacer/Spacer";
import { StyledContainer, StyledFigure, StyledFigureCaption } from "./Project.styled";
import { Container, Row, Col } from "styled-bootstrap-grid";
import parse from 'html-react-parser';


const LayoutOne = ({copy, media, background, topSpace, bottomSpace}) => {
  return(
    <StyledContainer background={background} topSpace={topSpace} bottomSpace={bottomSpace}>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            {parse(copy)}
          </Col>
        </Row>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
          {media.length === 1 ? (
              media[0].relationships.field_media_image.localFile.ext === ".gif" ?
                (<StyledFigure>
                  <img className="article-media" src={media[0].relationships.field_media_image.localFile.publicURL}/>
                  <StyledFigureCaption>{media[0].field_media_image.alt}</StyledFigureCaption>
                 </StyledFigure>):
                (<Image className="article-image" fluid={media[0].relationships.field_media_image.localFile.childImageSharp.fluid} alt={""}/>)
            ) : media.length > 1 ? (
              <Carousel images={media}/>
            ) : null}
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )
}

const LayoutTwo = ({copy, media, background, rightCol, leftCol, topSpace, bottomSpace}) => {
  return(
    <StyledContainer background={background} topSpace={topSpace} bottomSpace={bottomSpace}>
      <Container>
        <Row alignItems={"center"}>
          <Col col={12} sm={12} md={12} lg={leftCol} mdOffset={0}>
            {parse(copy)}
          </Col>
          <Col col={12} sm={12} md={12} lg={rightCol} mdOffset={0}>
            {media.length === 1 ? (
              media[0].relationships.field_media_image.localFile.ext === ".gif" ?
                (<StyledFigure>
                  <img className="article-media" src={media[0].relationships.field_media_image.localFile.publicURL}/>
                  <StyledFigureCaption>{media[0].field_media_image.alt}</StyledFigureCaption>
                 </StyledFigure>):
                (<StyledFigure>
                  <Image className="article-image" fluid={media[0].relationships.field_media_image.localFile.childImageSharp.fluid} alt={""}/>
                  <StyledFigureCaption>{media[0].field_media_image.alt}</StyledFigureCaption>
                </StyledFigure>)
            ) : media.length > 1 ? (
              <Carousel images={media}/>
            ) : null}
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )  
}

const LayoutThree = ({copy, media, background, rightCol, leftCol, topSpace, bottomSpace}) => {
  return(
    <StyledContainer background={background} topSpace={topSpace} bottomSpace={bottomSpace}>
      <Container>
        <Row alignItems={"center"}>
          <Col col={12} sm={12} md={12} lg={rightCol} mdOffset={0} lgOrder={2}>
            {parse(copy)}
          </Col>
          <Col col={12} sm={12} md={12} lg={leftCol} mdOffset={0} lgOrder={1}>
            {media.length === 1 ? (
              media[0].relationships.field_media_image.localFile.ext === ".gif" ?
                (<StyledFigure>
                  <img className="article-media" src={media[0].relationships.field_media_image.localFile.publicURL}/>
                  <StyledFigureCaption>{media[0].field_media_image.alt}</StyledFigureCaption>
                 </StyledFigure>):
                (<StyledFigure>
                  <Image className="article-image" fluid={media[0].relationships.field_media_image.localFile.childImageSharp.fluid} alt={""}/>
                  <StyledFigureCaption>{media[0].field_media_image.alt}</StyledFigureCaption>
                </StyledFigure>)
            ) : media.length > 1 ? (
              <Carousel images={media}/>
            ) : null}
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  )  
}

function ProjectSection({section}){
  const articleSection = {
    background: section.field_project_section_background === 2 ? "offwhite": "lightBlue",
    layout: section.field_project_section_type,
    rightCol: section.field_project_section_right_colu,
    leftCol: section.field_project_section_left_colum,
    topSpace: section.field_project_section_top_space,
    bottomSpace: section.field_project_section_btm_space,
    copy: section.field_project_section_copy.processed,
    media: section.relationships.field_project_section_media
  }
  let Layout;
  switch (articleSection.layout) {
    case 1:
      Layout = LayoutOne;
      break;
    case 2:
      Layout = LayoutTwo;
      break;
    case 3:
      Layout = LayoutThree;
      break;
    default:
      Layout = LayoutOne; // Default to LayoutOne if layout prop is invalid
  }
  return(
    <Layout {...articleSection} />
  )
}

export default ProjectSection;

