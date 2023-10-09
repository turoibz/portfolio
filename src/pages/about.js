import * as React from "react"
import { About } from "../components/PageContent/About/About";
import HeadTitle from "./../components/Head/Head";
import { Tracker } from "./../components/Tracker/Tracker";
import Seo from "./../components/Head/Seo";

const AboutPage = ({location}) => {
  return (
    <>
      <Tracker location={location}/>
      <HeadTitle title="About me"/>
      <About/>
    </>
  )
}

export default AboutPage;

export const Head = () => (
  <Seo />
)
