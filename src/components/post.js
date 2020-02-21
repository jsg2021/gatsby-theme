/** @jsx jsx */
import { graphql } from 'gatsby';
import { jsx, Styled, Image } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from './layout';
import ItemTags from './item-tags';
import SEO from './seo';

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

export const query = graphql`
	fragment postFields on Post {
		banner {
			childImageSharp {
				resize(width: 1200, quality: 90) {
					src
				}
			}
		}
		body
		date(formatString: "MMMM D, YYYY")
		description
		excerpt
		hero {
			childImageSharp {
				resize(width: 1200, height: 675, quality: 90, cropFocus: ENTROPY, fit: COVER) {
					src
				}
			}
		}
		slug
		tags {
			name
			slug
		}
		timeToRead
		title
	}
`;

const Post = ({ data: { post } }) => (
	<Layout>
		{post.hero && <Image variant="hero" src={post.hero.childImageSharp.resize.src} />}
		<SEO
			title={post.title}
			description={post.description ? post.description : post.excerpt}
			image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
		/>
		<Styled.h2>{post.title}</Styled.h2>
		<p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
			<time>{post.date}</time>
			{post.tags && (
				<React.Fragment>
					{` — `}
					<ItemTags tags={post.tags} />
				</React.Fragment>
			)}
			{` — `}
			<span>{post.timeToRead} min read</span>
		</p>
		<section sx={{ my: 5, '.gatsby-resp-image-wrapper': { my: [4, 4, 5], boxShadow: shadow.join(`, `) } }}>
			<MDXRenderer>{post.body}</MDXRenderer>
		</section>
	</Layout>
);

export default Post;
