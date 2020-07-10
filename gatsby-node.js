/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const cs = path.resolve('src/pages/coming-soon.jsx');

  createPage({
    path: '/cs',
    component: cs,
    context: {},
  });
};
