module.exports = api => {
	api.cache(true);

	return {
		presets: [
			['@babel/preset-env', { loose: true }],
			'@babel/preset-react',
			'@babel/preset-typescript'
		],
		plugins: [
			'@babel/plugin-transform-runtime'
		],
	};
};