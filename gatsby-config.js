const proxy = require("http-proxy-middleware");

let contentfulConfig;
try {
  contentfulConfig = require("./.contentful");
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN
    }
  };
} finally {
  const { spaceId, accessToken } = contentfulConfig.production;
  if (!spaceId || !accessToken) {
    throw new Error(
      "Contentful space ID and access token need to be provided."
    );
  }
}

module.exports = {
  // // for avoiding CORS while developing Netlify Functions locally
  // // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": ""
  //       }
  //     })
  //   );
  // },
  siteMetadata: {
    title: "San Francisco Dharma Collective",
    description:
      "San Francisco Dharma Collective's website: The SF Dharma Collective is a community-led sangha. Meditate with us.",
    siteUrl: "https://sfdharmacollective.org",
    image: "/images/share.jpg",
    basePath: "/"
  },
  plugins: [
    `gatsby-plugin-emotion`,
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: "white",
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-contentful",
      options:
        process.env.NODE_ENV === "development"
          ? contentfulConfig.development
          : contentfulConfig.production
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "SF Dharma Collective",
        short_name: "SFDC",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "./static/images/favicon.png"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT
      }
    },
    "gatsby-plugin-netlify"
  ]
};
