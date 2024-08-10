const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');

const production = !process.env.ROLLUP_WATCH;
const options = {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs',
			sourcemap: !production,
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm',
			sourcemap: !production,
		},
		{
			file: 'dist/index.js',
			format: 'umd',
			name: 'tsutils',
			sourcemap: !production,
		},
	],
	plugins: [
		resolve(),
		commonjs(),
		typescript({
			// will produce the declaration file
			declaration: true,
			// declaration file will appear inside dist/types folder
			declarationDir: 'dist/types',
			sourceMap: !production,
		}),
	],
	external: [],
};

module.exports = options;
