const newsletterFeed = require('./src/utils/newsletterFeed')
const withDefaults = require('./src/utils/default-options')
const vimeo = require('./src/utils/vimeo');

const gatsbyRemarkPlugins = [
  {
    resolve: 'gatsby-remark-embedder',
    options: {
      customTransformers: [vimeo],
    },
  },
  'gatsby-remark-responsive-iframe',
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 960,
      quality: 90,
      linkImagesToOriginal: false,
    },
  },
];

module.exports = themeOptions => {
  const { postsPath, pagesPath } = withDefaults(themeOptions);
  const { mdx = true, feedTitle } = themeOptions;
  return {
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: postsPath,
          path: postsPath,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: pagesPath,
          path: pagesPath,
        },
      },
      mdx && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          gatsbyRemarkPlugins,
          plugins: [...gatsbyRemarkPlugins],
        },
      },
      {
        resolve: 'gatsby-plugin-feed',
        options: newsletterFeed(feedTitle),
      },
      'gatsby-plugin-catch-links',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
      'gatsby-plugin-twitter',
      'gatsby-plugin-theme-ui',
      'gatsby-transformer-sharp',
    ].filter(Boolean)
  }
}
