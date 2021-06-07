[![Netlify Status](https://api.netlify.com/api/v1/badges/f10eb3d8-cb47-4b37-8b91-a6ecc3a04896/deploy-status)](https://app.netlify.com/sites/gifted-lewin-da9fd6/deploys)

## San Francisco Dharma Collective's website

[sfdharmacollective.org](sfdharmacollective.org)

### Environment requirements:

- `yarn` will install package dependencies
- Contentful API integration:
  - `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` are required in PATH
    - These can be found within Contentful > Settings > API Keys > Content delivery / preview tokens > "SFDC Website"
- Google Calendar integration:
  - `GATSBY_GCAL_CLIENT_EMAIL` and `GATSBY_GCAL_PRIVATE_KEY` are required in PATH
    - These can be found within Google Cloud Platform > SFDC Project > IAM & Admin > Service Accounts
- Mailchip integration:
  - `GATSBY_MAILCHIMP_SUBSCRIBE_ENDPOINT` is required in PATH
    - The easiest way to find this is within Netlify's [Environment Variables configuration](https://app.netlify.com/sites/sfdharmacollective/settings/deploys#environment)

### Development:

`yarn start` will run both the frontend and a server proxy for Netlify lambda functions (required for events).

### Deployment:

[Netlify](https://app.netlify.com/sites/sfdharmacollective/overview) builds automatically on remote pushes to dev and master branches.

To build locally:
`yarn build` will build both the frontend and Netlify lambda functions.
