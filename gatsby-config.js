require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      require('http-proxy-middleware').createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  siteMetadata: {
    title:
      'San Francisco Dharma Collective, a community-run Buddhist sangha. Come meditate with us!',
    description:
      'San Francisco Dharma Collective is a community-led Buddhist sangha. Come meditate with us!',
    siteUrl: 'https://sfdharmacollective.org',
    image: '/src/assets/images/lotus-social.png',
    basePath: '/',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SF Dharma Collective',
        short_name: 'SFDC',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_SUBSCRIBE_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/events/*`] },
    },
  ],
};
