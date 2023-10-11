import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H1, Paragraph } from "./../../../foundation/Typography";
import { Spacer } from "./../../../foundation/Spacer/Spacer";
import { StyledAboutImage } from "./About.styled";

export function About(){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} md={8} sm={12}>
            <H1>Hi there,</H1>
            <Paragraph size="md">Thanks for visiting my portfolio</Paragraph>
            <Paragraph>While I have you here, let me tell you about myself.</Paragraph>
            <Paragraph>I'm a product designer and technologist with over a decade of experience working across various teams and industries in Australia and Mexico. I also hold a postgraduate degree in Interaction Design from The University of Queensland, where my studies focused on design thinking and human-computer interaction.</Paragraph>
            <Paragraph>I've had the opportunity to contribute to the digital transformation efforts of enterprise businesses and government agencies, most notably The Department of Justice and Community Safety of Victoria, National Australia Bank (NAB), and Zendesk.</Paragraph>
            <Paragraph>Recently, I worked as a product designer at Zendesk, collaborating with different teams to understand their needs and shape their products. Our primary focus was creating tools that enhance engineers' productivity and improve their development experience. By eliminating friction at each step of the development cycle, my goal was to enable engineers to concentrate on what truly matters: delivering reliable and unique products to Zendesk customers.</Paragraph>
            <Paragraph>My background also includes front-end development. I taught myself how to code websites during high school and turned it into a profession. I make it a point to stay abreast of the latest trends and advancements in the ever-evolving field of front-end development. However, I believe that designing digital experiences encompasses more than just the technical aspects. It involves crafting holistic product experiences.</Paragraph>
            <Paragraph>Over the years, I've been referred to as a "unicorn" due to the unique set of skills I've developed. I have the ability to uncover and comprehend users' motivations and desires when it comes to product usage, and I can prototype those experiences in the DOM.</Paragraph>
            <Paragraph>When I'm not immersed in design and technology, I enjoy indulging in my other hobbies. In my spare time, you'll find me reading non-fiction, attending concerts of my favorite bands, training in boxing, swimming, or hiking in nature.</Paragraph>
            <Paragraph><strong>Arturo.</strong></Paragraph>
            <Spacer/>
          </Col>
          <Col col={12} md={4} sm={12}>
            <StyledAboutImage>
              <StaticImage src="./../../../images/about.png" alt="About me decorative image" placeholder="blurred"/> 
            </StyledAboutImage>
          </Col>
        </Row>
      </Container>
      <Spacer/>
    </>
  )
}