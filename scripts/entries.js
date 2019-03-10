const path = require('path');
const fs = require('fs');
const root = path.resolve(__dirname, '..', 'src');

const getEntries = async () => await fs
	.readdirSync(path.resolve(root))
	.reduce(
		async (prev, result) => {
			const entries = await prev;
			const stat = await fs.statSync(path.resolve(root, result));

			if (!stat.isFile()) {
				return entries;
			}

			const filename = result
				.split('.')
				.slice(0, -1)
				.join('.');

			return {
				...entries,
				[filename]: path.resolve(root, result)
			};
		},
		{},
	);

module.exports = getEntries;
