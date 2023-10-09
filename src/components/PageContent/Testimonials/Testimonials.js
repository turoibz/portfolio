import React from "react";
import ScrollContainer from 'react-indiana-drag-scroll';
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H1, Paragraph } from "./../../../foundation/Typography";
import { Testimonial } from "./Testimonial";
import { Spacer } from "./../../../foundation/Spacer/Spacer";
import { StyledTestimonials, StyledTestimonialsWrapper } from "./Testimonials.styled";
import 'react-indiana-drag-scroll/dist/style.css'




export function Testimonials(){
  return(
    <StyledTestimonials>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            <H1>Testimonials</H1>
            <Paragraph>Colleagues and clients share their candid thoughts on the contributions I've made while working together. These testimonials provide a glimpse into the impact I've had across projects.</Paragraph>
            <Spacer size={1}/>
            <ScrollContainer className="scroll-container">
              <StyledTestimonialsWrapper>
                <Testimonial copy={"I just wanted to let you know that I've really enjoyed working with you. You have considered all the cases and are super open to suggestions. It was so synergistic. Thanks for showing me how engineering and design can create something good together."} author={"Jean — Zendesk"}/>
                <Testimonial copy={"Thanks for everything you have done and the way in which you have approached things and put up with my working style. Our platform is now 5 years plus ahead of where it was when you started."} author={"Jay — National Australia Bank"}/>
                <Testimonial copy={"Thank you for the fantastic work you've done on NRP. You are so talented and I've really enjoyed working with you. You really have raised the bar with the high quality work you've produced. You should be so proud!"} author={"Shivani — National Australia Bank"}/>
                <Testimonial copy={"It's been great working with you, you've always provided very pragmatic advice and workable solutions for us."} author={"Fiona — Fines Victoria"}/>
                <Testimonial copy={"Arturo, you have exceeded expectations on delivery and professionalism."} author={"Okewole — Adelphi Digital (project)"}/>
              </StyledTestimonialsWrapper>
            </ScrollContainer>
          </Col>
        </Row>
      </Container>
    </StyledTestimonials>
  )
}