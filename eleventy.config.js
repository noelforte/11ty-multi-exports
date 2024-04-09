export const test = 'hi!';

export default function eleventyConfig(config) {
	return {
		dir: {
			input: 'source',
			output: 'build',
		},
	};
}
