/** @jsx jsx */
import React from 'react';
import { jsx, Styled, Image } from 'theme-ui';
import { Box } from '@theme-ui/components';
import { Link, graphql } from 'gatsby';
import ItemTags from './item-tags';

export const query = graphql`
	fragment postListItemFields on Post {
		banner {
			childImageSharp {
				resize(width: 360, quality: 90) {
					src
				}
			}
		}
		date(formatString: "MMMM D, YYYY")
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
	<Box mb={4} sx={{ clear: 'both', position: 'relative' }}>
		{post.banner && (
			<div
				sx={{
					mr: 3,
					width: [50, 75],
					height: [50, 75],
					// paddingTop: ['56%', 0],
					display: 'block',
					float: 'left',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					borderRadius: 100,
					boxShadow: 'default',
				}}
				style={{
					backgroundImage: `url(${post.banner.childImageSharp.resize.src})`,
				}}
			/>
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
);

export default BlogListItem;
