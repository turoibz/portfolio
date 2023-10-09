import React, { useEffect } from "react";
import ReactGA from "react-ga4";



export function Tracker({location}){
  const currentLocation = location.pathname;
  
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: currentLocation });
  }, [currentLocation]);

  return (
    <></>
  )
}