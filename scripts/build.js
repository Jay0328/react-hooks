const path = require('path');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const entries = require('./entries');

const root = path.resolve(__dirname, '..');

const buildES = async bundle => {
	const dir = root;
	await bundle.write({
		dir,
		format: 'es',
		sourcemap: false,
		interop: false
	});
};

const build = async () => {
	const input = await entries();
	const plugins = babel({
		exclude: 'node_modules/**',
		extensions: ['.ts', '.js'],
		runtimeHelpers: true
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
		buildES(
			await rollup({
				input,
				external,
				plugins
			})
		)
	]);
};

build();
