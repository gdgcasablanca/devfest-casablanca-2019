module.exports = {
  siteMetadata: {
    title: `DevFest 19 Casablanca`,
    description: `DevFests are community-led, developer events hosted by GDG chapters around the globe focused on community building and learning about Google’s technologies.`,
    author: `@omarhoumz`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DevFest 19 Casablanca`,
        short_name: `DevFest19`,
        start_url: `/`,
        background_color: `#1a73e8`,
        theme_color: `#1a73e8`,
        display: `minimal-ui`,
        icon: `src/images/gdg-casa-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
