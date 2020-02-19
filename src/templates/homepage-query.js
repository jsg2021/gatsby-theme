import React from 'react';
import { graphql } from "gatsby"
import Homepage from "../components/homepage"

export default ({ data }) => {
  const { allPost } = data

  return <Homepage posts={allPost.nodes} />
}

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 3) {
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
