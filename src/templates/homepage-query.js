import React from 'react';
import { graphql } from 'gatsby';
import Homepage from '../components/homepage';

export default ({ data }) => {
	const { allPost } = data;

	return <Homepage posts={allPost.nodes} />;
};

export const query = graphql`
	query {
		allPost(sort: { fields: date, order: DESC }, limit: 3) {
			nodes {
				...postListItemFields
			}
		}
	}
`;
