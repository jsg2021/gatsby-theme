import React from 'react';
import { graphql } from "gatsby"
import Tags from "../components/tags"

export default ({ data }) => {
  const { allPost } = data

  return <Tags list={allPost.group} />
}

export const query = graphql`
  query {
    allPost(sort: { fields: tags___name, order: DESC }) {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`
