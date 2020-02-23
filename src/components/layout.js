/** @jsx jsx */
import React from 'react';
import { Global } from '@emotion/core';
import { Box, Styled, Container, css, jsx } from 'theme-ui';
import 'typeface-ibm-plex-sans';

import CodeStyles from '../styles/code';

import SEO from './seo';
import Header from './header';
import Footer from './footer';
import Fonts from './fonts';

const Layout = ({ children, className }) => (
	<Styled.root data-testid="theme-root">
		<Global
			styles={css({
				'*': {
					boxSizing: `inherit`,
				},
				body: {
					margin: 0,
					padding: 0,
					boxSizing: `border-box`,
					textRendering: `optimizeLegibility`,
				},
				'::selection': {
					backgroundColor: `primary`,
					color: `white`,
				},
				a: {
					transition: `all 0.3s ease-in-out`,
					color: `text`,
				},
			})}
		/>
		<Fonts />
		<SEO />
		<Container sx={{ p: 3 }}>
			<Header />
			<Box as="main" css={css({ ...CodeStyles })} className={className}>
				{children}
			</Box>
			<Footer />
		</Container>
	</Styled.root>
);

export default Layout;
