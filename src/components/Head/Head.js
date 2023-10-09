import React from 'react';
import { Helmet } from 'react-helmet';

const HeadTitle = ({ title }) => {
  return (
    <>
      <Helmet
        defaultTitle="Arturo Ibanez - product designer"
        title={title}
        titleTemplate="%s | Arturo Ibanez - product designer"
      />
    </>
  )
}

export default HeadTitle;

