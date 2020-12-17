/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: [...require('@sveltejs/snowpack-config').plugins, '@snowpack/plugin-typescript'],
	mount: {
		'src/components': '/_components',
	},
	alias: {
		$components: './src/components',
	},
}
