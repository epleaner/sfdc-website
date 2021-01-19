import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import defaultImagePath from '../assets/images/onelotus.png';

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  );

  const defaultImage = site.siteMetadata.siteUrl + defaultImagePath;
  const metaDescription = description
    ? [description, site.siteMetadata.description].join(' ')
    : site.siteMetadata.description;
  const metaTitle = `${title} | ${site.siteMetadata.title}`;
  const metaImage = image || defaultImage;

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {/* General tags */}
      <meta name='image' content={metaImage} />
      <meta name='description' content={metaDescription} />
      <meta name='robots' content='index, follow' />

      {/* OpenGraph tags */}
      <meta property='og:url' content={site.siteMetadata.siteUrl} />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={metaImage} />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={site.siteMetadata.siteUrl} />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:image' content={metaImage} />
      <meta name='twitter:description' content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
