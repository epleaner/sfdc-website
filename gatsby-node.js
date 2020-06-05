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
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const wikiPageIndexTemplate = path.resolve(`src/templates/wikiPageIndex.js`);
  createPage({
    path: `teaching-resources`,
    component: wikiPageIndexTemplate,
    context: {
      wikiPageNames: result.data.wikiPages.edges.map(({ node }) => node.name),
    },
  });
  // Create pages for each markdown file.
  const wikiPageTemplate = path.resolve(`src/templates/wikiPage.js`);
  result.data.wikiPages.edges.forEach(({ node }) => {
    const path = node.name
      .toLowerCase()
      .split(" ")
      .join("-");

    createPage({
      path: `teaching-resources/${path}`,
      component: wikiPageTemplate,
      context: {
        name: node.name,
        contentJson: node.content.json,
      },
    });
  });
};
