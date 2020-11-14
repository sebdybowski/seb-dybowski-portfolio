/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const { resolve } = path;

const PAGES = [
  { path: '/', component: resolve('src/pages/index/Index.jsx'), context: {} },
  { path: '/404', component: resolve('src/pages/404/404.jsx'), context: {} },
  { path: '/portfolio', component: resolve('src/pages/portfolio/Portfolio.jsx'), context: {} },
];

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  PAGES.forEach((page) => createPage({
    path: page.path,
    component: page.component,
    context: page.context,
  }));
};
