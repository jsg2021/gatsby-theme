import React from 'react';
import { graphql } from "gatsby"
import Blog from "../components/blog"

export default ({ data, ...props }) => {
  const { allPost } = data
  return <Blog posts={allPost.nodes} {...props} />
}

export const query = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
    allPost(
      limit: $limit
      skip: $skip
      filter: { draft: { ne: true } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...postListItemFields
      }
    }
  }
`
