import React from "react";
import Slider from "react-slick" 
import Image from "gatsby-image";
import { ChevronRightIcon } from "../../foundation/Icon";
import { StyledFigure, StyledFigureCarouselCaption } from "../Project/Project.styled";
import { StyledNextButton, StyledPrevButton, StyledPageIndicator } from "./Carousel.styled"

const Next = (props) => {
  return(
    <StyledNextButton onClick={props.onClick} className={"slick-button"}><ChevronRightIcon size={"sm"} color={"offwhite"}/></StyledNextButton>
  )
}
const Previous = (props) => {
  return(
    <StyledPrevButton onClick={props.onClick} className={"slick-button"}><ChevronRightIcon size={"sm"} color={"offwhite"}/></StyledPrevButton>
  )
}
function Carousel({images}){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next/>,
    prevArrow: <Previous/>,
    dots: true,
    customPaging: i => <StyledPageIndicator/>
  }
  return(
    <Slider {...settings}>
      {images.map((image, index) => (
        <StyledFigure>
        <Image key={index} fluid={image.relationships.field_media_image.localFile.childImageSharp.fluid} alt={image.field_media_image.alt}/>
        <StyledFigureCarouselCaption>{image.field_media_image.alt}</StyledFigureCarouselCaption>
        </StyledFigure>
      ))}
    </Slider>
  )
}

export default Carousel;