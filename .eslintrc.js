const eslintSveltePreprocess = require('eslint-svelte3-preprocess')
const svelteConfig = require('./svelte.config')

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'airbnb-base', 'eslint-config-prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		createDefaultProgram: true,
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'svelte3', 'eslint-plugin-prettier'],
	ignorePatterns: ['build/'],
	// overrides: [
	// 	{
	// 		files: ['*.svelte'],
	// 		processor: 'svelte3/svelte3',
	// 	},
	// 	{
	// 		files: ['*.ts', '*.json'],
	// 		extends: [
	// 			'plugin:@typescript-eslint/recommended',
	// 			'plugin:prettier/recommended',
	// 			'prettier/@typescript-eslint',
	// 		],
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
	settings: {
		'svelte3/preprocess': eslintSveltePreprocess(svelteConfig.preprocess),
	},
}
