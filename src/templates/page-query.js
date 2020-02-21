import React from 'react';
import { graphql } from 'gatsby';
import Page from '../components/page';

export default ({ data }) => {
	const { page } = data;

	return <Page data={{ ...data, page }} />;
};

export const query = graphql`
	query($slug: String!) {
		page(slug: { eq: $slug }) {
			title
			slug
			excerpt
			body
		}
	}
`;
