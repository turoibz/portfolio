import * as React from "react"
import { Work } from "../components/PageContent/Work/Work";
import HeadTitle from "./../components/Head/Head";
import { Tracker } from "./../components/Tracker/Tracker";
import Seo from "./../components/Head/Seo";

const WorkPage = ({location}) => {
  return (
    <>
      <Tracker location={location}/>
      <HeadTitle title="My work"/>
      <Work/>
    </>
  )
}

export default WorkPage;

export const Head = () => (
  <Seo />
)
