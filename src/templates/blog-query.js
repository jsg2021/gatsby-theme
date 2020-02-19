import React from 'react';
import { graphql } from "gatsby"
import Blog from "../components/blog"

export default ({ data }) => {
  const { allPost } = data

  return <Blog posts={allPost.nodes} />
}

export const query = graphql`
  query {
    allPost(
      limit: 10
      filter: { draft: { ne: true } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
        title
        date(formatString: "MMMM D, YYYY")
        banner {
          childImageSharp {
            resize(cropFocus: ENTROPY, width: 75, quality: 90, fit: COVER, height: 75) {
              src
            }
          }
        }
        tags {
          name
          slug
        }
      }
    }
  }
`
