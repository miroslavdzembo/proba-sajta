module.exports = {
  siteMetadata: {
    title: `Atika`,
    description: `Zvanična veb stranica kompanije Atika koja je glavni uvznik kvalitetnog maslinovog ulja za Srbiju.`,
    author: `savkevip`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/atika-logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
