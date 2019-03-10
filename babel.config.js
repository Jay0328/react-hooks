module.exports = api => {
	const test = api.env('test');
	return {
		presets: [
			[
				'@babel/preset-env',
				{
					loose: true,
					useBuiltIns: 'entry',
					modules: test ? 'commonjs' : false,
				},
			],
			"@babel/preset-react",
			'@babel/preset-typescript'
		],
		plugins: [
			"@babel/plugin-proposal-json-strings"
		],
	};
};
