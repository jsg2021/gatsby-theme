import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/post';

export default props => {
	const { post } = props.data || {};

	return <Post {...props} post={post} />;
};

export const query = graphql`
	query($slug: String!) {
		post(slug: { eq: $slug }) {
			...postFields
		}
	}
`;
