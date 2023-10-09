import * as React from "react"
import { FourOFour } from "../components/PageContent/404/404";
import HeadTitle from "./../components/Head/Head";
import { Tracker } from "./../components/Tracker/Tracker";

const NotFoundPage = ({location}) => {
  return (
    <>
      <Tracker location={location}/>
      <HeadTitle title="Page not found"/>
      <FourOFour/>
    </> 
  )
}

export default NotFoundPage;
