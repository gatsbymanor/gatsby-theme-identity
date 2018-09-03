var gtk = require('gatsby-themes-kit')

var sitePlugins = [
  'gatsby-plugin-react-next',
  'gatsby-plugin-catch-links',
]

gtk.loadPlugins().forEach(plugin => {
  sitePlugins.push(plugin)
})

module.exports = {
  pathPrefix: process.env.CI ? `/identity` : `/`,
  siteMetadata: {
    author: 'You!',
    title: `Gatsby theme starter`,
  },
  plugins: sitePlugins,
}
