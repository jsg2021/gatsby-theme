/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

// type BlogListItemProps = {
//   post: {
//     slug: string
//     title: string
//     date: string
//     tags?: {
//       name: string
//       slug: string
//     }[]
//   }
//   showTags?: boolean
// }

const BlogListItem = ({ post, showTags = true }) => (
  <Box mb={4}>
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
