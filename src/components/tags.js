/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import kebabCase from 'lodash.kebabcase';
import { Link } from 'gatsby';
import Layout from './layout';
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config';
import SEO from './seo';
import replaceSlashes from '../utils/replaceSlashes';

const Tags = ({ list }) => {
	const { tagsPath, basePath } = useMinimalBlogConfig();

	return (
		<Layout>
			<SEO title="Tags" />
			<Styled.h2>Tags</Styled.h2>
			<Flex
				mt={[4, 5]}
				sx={{
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
				}}
			>
				{list.map(listItem => (
					<Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
						<Styled.a
							as={Link}
							sx={{ variant: 'links.tagCloud' }}
							to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
						>
							{listItem.fieldValue} <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
						</Styled.a>
					</Flex>
				))}
			</Flex>
		</Layout>
	);
};

export default Tags;
