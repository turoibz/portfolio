/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Arturo Ibanez's Portfolio`,
    siteUrl: `https://arturoibanez.com`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "short_name": "Arturo Ibanez",
        "name": "Arturo Ibanez - product designer",
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#F2F8F8",
        "background_color": "#F2F8F8",
        "icon": "src/images/icon.png",
        "icons": [
          {
            "src": "logo192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "logo512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
      }
    },
    "gatsby-plugin-minify",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: false,
        disableVendorPrefixes: true
      }
    },
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: process.env.GATSBY_DRUPAL_SOURCE,
        concurrentFileRequests: 2,
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": `images`,
        "path": `${__dirname}/src/images/`
      },
      __key: "images"
    }
  ]
};