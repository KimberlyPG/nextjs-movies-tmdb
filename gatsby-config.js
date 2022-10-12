require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {}, 
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-tmdb",
      options: {
        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,
      }
    }
  ],
}
