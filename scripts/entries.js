const path = require('path');
const fs = require('fs');
const root = path.resolve(__dirname, '..', 'src');

const getEntries = async (dir = '') => await fs
	.readdirSync(path.resolve(root, dir))
	.reduce(
		async (prev, result) => {
			const entries = await prev;
			const stat = await fs.statSync(path.resolve(root, dir, result));
			const filePath = `${dir ? `${dir}${path.sep}` : ''}`;

			if (result === '__tests__') {
				return entries;
			} else if (stat.isDirectory()) {
				return {
					...entries,
					...(await getEntries(`${filePath}${result}`))
				};
			}

			const filename = result
				.split('.')
				.slice(0, -1)
				.join('.');

			return {
				...entries,
				[`${filePath}${filename}`]: path.resolve(root, filePath, result)
			};
		},
		{},
	);

module.exports = getEntries;
