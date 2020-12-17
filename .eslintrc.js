module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'airbnb-base', 'eslint-config-prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'svelte3', 'eslint-plugin-prettier'],
	ignorePatterns: ['build/'],
	// overrides: [
	// 	{
	// 		files: ['*.svelte'],
	// 		processor: 'svelte3/svelte3',
	// 	},
	// ],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
			{ usePrettierrc: true },
		],
	},
}
