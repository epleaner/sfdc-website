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
        }),
    );
  },
  siteMetadata: {
    title: 'San Francisco Dharma Collective',
    description:
      'San Francisco Dharma Collective\'s website: The SF Dharma Collective is a community-led sangha. Meditate with us.',
    siteUrl: 'https://sfdharmacollective.org',
    image: '/images/share.jpg',
    basePath: '/',
  },
  plugins: [
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
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
        icon: './static/images/favicon.png',
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
        endpoint:
          'https://protonmail.us19.list-manage.com/subscribe/post?u=5e50289148a8d3072490ebc26&amp;id=5fb6916e41',
      },
    },
  ],
};
