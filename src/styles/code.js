import { tint } from '@theme-ui/color';

export default {
	aside: {
		bg: 'aside',
		padding: '1em 2em',
		margin: '2em -2em',
		borderRadius: '1em',
	},
	'.twitter-tweet': {
		margin: '0 auto',
	},
	'.wideframe-video': {
		position: 'relative',
		display: 'block',
		paddingTop: '56.25%',
		background: '#333',
		borderRadius: 5,
		iframe: {
			height: '100%',
		},
		'video, iframe': {
			position: 'absolute',
			top: 0,
			left: 0,
			maxWidth: '100%',
			width: '100%',
		},
	},
	"[data-name='live-editor']": {
		fontSize: 1,
		'textarea, pre': {
			padding: t => `${t.space[3]} !important`,
		},
	},
	"[data-name='live-preview']": {
		padding: t => `calc(${t.space[2]} + 10px) !important`,
		backgroundColor: tint(`primary`, 0.7),
	},
	'.prism-code': {
		fontSize: 1,
		padding: 3,
		webkitOverflowScrolling: `touch`,
		backgroundColor: `transparent`,
		overflow: `initial`,
		float: `left`,
		minWidth: `100%`,
		mb: 0,
		'&[data-linenumber="false"]': {
			'.token-line': {
				pl: 3,
			},
		},
	},
	'.token': {
		display: `inline-block`,
	},
	'p > code, li > code': {
		bg: `text`,
		color: `background`,
		m: 1,
		px: 2,
		py: 1,
		borderRadius: 5,
	},
	'.gatsby-highlight': {
		fontSize: 1,
		position: `relative`,
		webkitOverflowScrolling: `touch`,
		bg: `rgb(1, 22, 39)`,
		overflow: `auto`,
		mx: [0, 0, 0, -3],
		'.token-line': {
			mx: -3,
		},
		'pre.language-': {
			mt: 0,
		},
		'pre.language-noLineNumbers': {
			mt: 0,
		},
		'pre[class*="language-"]:before': {
			bg: `white`,
			borderRadius: `0 0 0.25rem 0.25rem`,
			color: `black`,
			fontSize: `12px`,
			letterSpacing: `0.025rem`,
			padding: `0.1rem 0.5rem`,
			position: `absolute`,
			left: `1rem`,
			textAlign: `right`,
			textTransform: `uppercase`,
			top: 0,
		},
		'pre[class~="language-javascript"]:before': {
			content: `"js"`,
			background: `#f7df1e`,
			color: `black`,
		},
		'pre[class~="language-js"]:before': {
			content: `"js"`,
			background: `#f7df1e`,
			color: `black`,
		},
		'pre[class~="language-jsx"]:before': {
			content: `"jsx"`,
			background: `#61dafb`,
			color: `black`,
		},
		'pre[class~="language-ts"]:before': {
			content: `"ts"`,
			background: `#61dafb`,
			color: `black`,
		},
		'pre[class~="language-tsx"]:before': {
			content: `"tsx"`,
			background: `#61dafb`,
			color: `black`,
		},
		'pre[class~="language-html"]:before': {
			content: `"html"`,
			background: `#005a9c`,
			color: `white`,
		},
		'pre[class~="language-graphql"]:before': {
			content: `"GraphQL"`,
			background: `#E10098`,
		},
		'pre[class~="language-css"]:before': {
			content: `"css"`,
			background: `#ff9800`,
			color: `black`,
		},
		'pre[class~="language-mdx"]:before': {
			content: `"mdx"`,
			background: `#f9ac00`,
			color: `black`,
		},
		'pre[class~="language-text"]:before': {
			content: `"text"`,
		},
		"pre[class~='language-shell']:before": {
			content: `'shell'`,
		},
		"pre[class~='language-sh']:before": {
			content: `'sh'`,
		},
		"pre[class~='language-bash']:before": {
			content: `'bash'`,
		},
		"pre[class~='language-yaml']:before": {
			content: `'yaml'`,
			background: `#ffa8df`,
		},
		"pre[class~='language-markdown']:before": {
			content: `'md'`,
		},
		"pre[class~='language-json']:before, pre[class~='language-json5']:before": {
			content: `'json'`,
			background: `linen`,
		},
		"pre[class~='language-diff']:before": {
			content: `'diff'`,
			background: `#e6ffed`,
		},
	},
	'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
		wordSpacing: `normal`,
		wordBreak: `normal`,
		overflowWrap: `normal`,
		lineHeight: 1.5,
		tabSize: 4,
		hyphens: `none`,
	},
	'.line-number-style': {
		display: `inline-block`,
		width: `3em`,
		userSelect: `none`,
		opacity: 0.3,
		textAlign: `center`,
		position: `relative`,
	},
	'.code-title': {
		backgroundColor: tint(`primary`, 0.7),
		color: `black`,
		fontSize: 0,
		px: 3,
		py: 2,
		fontFamily: `monospace`,
		mx: [0, 0, 0, -3],
	},
	"[data-name='live-preview'], [data-name='live-editor']": {
		mx: [0, 0, 0, -3],
	},
	'.token-line': {
		pr: 3,
	},
	'.highlight-line': {
		backgroundColor: `rgb(2, 55, 81)`,
		borderLeft: `4px solid rgb(2, 155, 206)`,
		'.line-number-style': {
			width: `calc(3em - 4px)`,
			opacity: 0.5,
			left: `-2px`,
		},
	},
};
