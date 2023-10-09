import * as React from "react"
import { Home } from "../components/PageContent/Home/Home";
import HeadTitle from "./../components/Head/Head";
import { Tracker } from "./../components/Tracker/Tracker";
import Seo from "./../components/Head/Seo";

const IndexPage = ({location}) => {
  return (
    <>
      <Tracker location={location}/>
      <HeadTitle title="Home"/>
      <Home/>
    </>
  )
}

export default IndexPage;

export const Head = () => (
  <Seo />
)