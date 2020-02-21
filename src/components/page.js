/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';
import SEO from './seo';

const Page = ({ data: { page } }) => (
	<Layout>
		<SEO title={page.title} description={page.excerpt} />
		<Styled.h2>{page.title}</Styled.h2>
		<section sx={{ my: 5 }}>
			<MDXRenderer>{page.body}</MDXRenderer>
		</section>
	</Layout>
);

export default Page;
