/** @jsx jsx */
import React from "react"
import { jsx, Styled, Image } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link, graphql } from "gatsby"
import ItemTags from "./item-tags"

export const query = graphql`
  fragment postListItemFields on Post {
    banner {
      childImageSharp {
        resize(width: 128, height: 96, cropFocus: ENTROPY, quality: 90, fit: COVER) {
          src
        }
      }
    }
    date(formatString: "MMMM D, YYYY")
    description
    excerpt
    slug
    tags {
      name
      slug
    }
    timeToRead
    title
  }
`;

const BlogListItem = ({ post, showTags = true }) => (
  <Box mb={4}>
    {post.banner && (
      <Image variant='blog-list' src={post.banner.childImageSharp.resize.src} />
    )}
    <Styled.a as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      {post.title}
    </Styled.a>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && showTags && (
        <>
          {` — `}
          <ItemTags tags={post.tags} />
        </>
      )}
    </p>
  </Box>
)

export default BlogListItem
