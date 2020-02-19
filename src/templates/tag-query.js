import React from 'react';
import { graphql } from "gatsby"
import Tag from "../components/tag"

export default ({ data, pageContext }) => {
  const { allPost } = data

  return <Tag posts={allPost.nodes} pageContext={pageContext} />
}


export const query = graphql`
  query($slug: String!) {
    allPost(sort: { fields: date, order: DESC }, filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        date(formatString: "DD.MM.YYYY")
        tags {
          name
          slug
        }
      }
    }
  }
`
