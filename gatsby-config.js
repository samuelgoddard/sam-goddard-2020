require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `Sam Goddard Portfolio`,
    siteUrl: `https://sam-goddard.vercel.app`,
    description: `Sam Goddard Portfolio.`,
    author: `@samuelgoddard`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -25,
        duration: 1000
      }
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sam-goddard-portfolio`,
        short_name: `samgoddard`,
        start_url: `/`,
        background_color: `#262525`,
        theme_color: `#262525`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        include_favicon: false, // exclude favicons
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `${process.env.DATOCMS_KEY}`,
      },
    },
  ],
}
