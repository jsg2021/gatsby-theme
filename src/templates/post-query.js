import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/post';

export default ({ data }) => {
	const { post } = data;

	return <Post data={{ ...data, post }} />;
};

export const query = graphql`
	query($slug: String!) {
		post(slug: { eq: $slug }) {
			...postFields
		}
	}
`;
