const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'src');

const removeES = async () => {
	await Promise.all(
		await fs
			.readdirSync(path.resolve(src))
			.map(async dir => {
				const stat = await fs.statSync(path.resolve(src, dir));

				if (stat.isDirectory()) {
					return exec(`rm -rf ${path.resolve(root, dir)}`)
				}

				const filename = dir
					.split('.')
					.slice(0, -1)
					.join('.');

				return exec(`rm ${path.resolve(root, filename)}.*`);
			})
	);

	await exec(`rm ${path.resolve(root, 'index.js')}`);
	await exec(`rm ${path.resolve(root, 'index.d.ts')}`);
};

const removeBuild = async () => await Promise.all([
	removeES(),
]);

removeBuild();
