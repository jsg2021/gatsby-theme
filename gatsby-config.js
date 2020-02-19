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
  const options = withDefaults(themeOptions)
  const { mdx = true } = themeOptions
  return {
    siteMetadata: {
      siteTitle: 'Lupin',
      siteTitleAlt: 'Minimal Blog - @lekoarts/gatsby-theme-minimal-blog',
      siteHeadline: 'Minimal Blog - Gatsby Theme from @lekoarts',
      siteUrl: 'https://minimal-blog.lekoarts.de',
      siteDescription: 'Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.',
      siteLanguage: 'en',
      siteImage: '/banner.jpg',
      author: '@lekoarts_de',
    },
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: options.postsPath,
          path: options.postsPath,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: options.pagesPath,
          path: options.pagesPath,
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
        options: newsletterFeed,
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
