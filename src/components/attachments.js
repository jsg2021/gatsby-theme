/** @jsx jsx */
import React from 'react';
import { jsx, Styled, Box } from 'theme-ui';

const empty = x => !x || !x.length;

export default function Component({ items }) {
	return empty(items) ? null : (
		<Box sx={{ mt: 5 }}>
			<div>Attachments:</div>
			{items.map(x => (
				<Attachment key={x.name} {...x} />
			))}
		</Box>
	);
}

function Attachment({ src, name, size }) {
	return (
		<Styled.a sx={{ variant: 'links.tagCloud' }} href={src} download={name} title={`${name} (${size})`}>
			{name}
		</Styled.a>
	);
}
