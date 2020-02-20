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
        ...postListItemFields
      }
    }
  }
`
