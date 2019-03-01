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
			[
				"@babel/plugin-proposal-decorators",
				{
					"legacy": true
				}
			],
			[
				"@babel/plugin-proposal-class-properties",
				{
					"loose": true
				}
			],
			"@babel/plugin-proposal-object-rest-spread",
			"@babel/plugin-proposal-json-strings"
		],
	};
};
