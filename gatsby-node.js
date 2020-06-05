const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        wikiPages: allContentfulWikiPage(limit: 1000) {
          edges {
            node {
              name
              content {
                json
              }
            }
          }
        }

        resourcePages: allContentfulResourcePage(limit: 1000) {
          edges {
            node {
              title
              page {
                title
                subTitle
                contentSections {
                  title
                  content {
                    json
                  }
                  media {
                    fluid(maxWidth: 500) {
                      ... on ContentfulFluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                      }
                    }
                    fixed(width: 500) {
                      ... on ContentfulFixed {
                        base64
                        width
                        height
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                      }
                    }
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { wikiPages, resourcePages } = result.data;

  // create wiki page index
  const wikiPageIndexTemplate = path.resolve(`src/templates/wikiPageIndex.js`);
  createPage({
    path: 'teaching-resources',
    component: wikiPageIndexTemplate,
    context: {
      wikiPageNames: wikiPages.edges.map(({ node }) => node.name),
    },
  });

  // Create individual wiki pages
  const wikiPageTemplate = path.resolve(`src/templates/wikiPage.js`);
  wikiPages.edges.forEach(({ node }) => {
    const path = node.name
      .toLowerCase()
      .split(' ')
      .join('-');

    createPage({
      path: `teaching-resources/${path}`,
      component: wikiPageTemplate,
      context: {
        name: node.name,
        contentJson: node.content.json,
      },
    });
  });

  // create resource page index
  const resourcePageIndexTemplate = path.resolve(
    `src/templates/resourcePageIndex.js`
  );
  createPage({
    path: 'resources',
    component: resourcePageIndexTemplate,
    context: {
      resourcePages,
    },
  });

  // Create individual resource pages
  const resourcePageTemplate = path.resolve(`src/templates/resourcePage.js`);
  resourcePages.edges.forEach(({ node }) => {
    const path =
      node.urlSlug ||
      node.title
        .toLowerCase()
        .split(' ')
        .join('-');

    createPage({
      path: `resources/${path}`,
      component: resourcePageTemplate,
      context: {
        pageData: node.page,
      },
    });
  });
};
