const path = require('path');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');
const { terser } = require('rollup-plugin-terser');
const { exec } = require('child_process');
const entries = require('./entries');

const root = path.resolve(__dirname, '..');
const onlyStripCommentsOptions = {
	compress: false,
	mangle: false,
	output: {
		comments: false,
		beautify: true,
	},
};
const buildDeclaration = async dir => {
	await exec(`tsc --noEmit false --emitDeclarationOnly --declaration --declarationDir ${dir}`);
};

const buildCommonJS = async bundle => {
	const dir = path.resolve(root, 'cjs');
	await bundle.write({
		dir,
		format: 'cjs',
		sourcemap: false,
		interop: false
	});
	await buildDeclaration(dir);
};

const buildES = async bundle => {
	const dir = path.resolve(root, 'es');
	await bundle.write({
		dir,
		format: 'es',
		sourcemap: false,
		interop: false
	});
	await buildDeclaration(dir);
};

const build = async () => {
	const input = await entries();
	const babelPlugin = babel({
		exclude: 'node_modules/**',
		extensions: ['.ts', '.js']
	});
	const external = [
		...(
			Object
				.entries(input)
				.map(([ignored, filePath]) => {
					if (filePath.includes('index.ts')) {
						return filePath.replace('/index.ts', '');
					}

					return filePath.replace('.ts', '');
				})
		),
		'react',
		'react-dom'
	];

	await Promise.all([
		buildCommonJS(
			await rollup({
				input,
				external,
				plugins: [
					babelPlugin,
					uglify(onlyStripCommentsOptions)
				]
			})
		),
		buildES(
			await rollup({
				input,
				external,
				plugins: [
					babelPlugin,
					terser(onlyStripCommentsOptions)
				]
			})
		)
	]);
};

build();
