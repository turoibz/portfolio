import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const Seo = () => {
  const data = useStaticQuery(graphql`
    query OgImg {
      file(relativePath: {eq: "meta-og.jpeg"}) {
        childImageSharp {
          fixed(fit: COVER, width: 1200, height: 630) {
            src
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const seo = {
    title: "Arturo Ibanez - product designer",
    image: `${data.site.siteMetadata.siteUrl}${data.file.childImageSharp.fixed.src}`
  }
  return (
    <>
      <meta name="og:title" content={seo.title} />
      <meta name="og:type" content="website" />
      <meta name="og:image:type" content="image/jpeg" />
      <meta name="og:image:secure_url" content={seo.image} />
      <meta name="og:image" content={seo.image} />
    </>
  )
}

export default Seo;

