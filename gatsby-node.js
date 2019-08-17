const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

const articlesQuery = `
    {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

module.exports = {
    onCreateNode: ({ node, getNode, actions: { createNodeField } }) => {
        if (node.internal.type == 'MarkdownRemark') {
            createNodeField({
                node,
                name: 'slug',
                value: createFilePath({ node, getNode, basePath: 'pages' }),
            });
        }
    },
    createPages: ({ graphql, actions: { createPage } }) =>
        graphql(articlesQuery)
            .then(({ data: { allMarkdownRemark: { edges: articles } } }) => {
                articles.forEach(({ node }) => {
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/article-with-slug.js`),
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.fields.slug,
                        },
                    });
                });
            })
};