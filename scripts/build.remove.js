const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'src');

const removeCommonJS = async () => {
	await exec(`rm -rf ${path.resolve(root, 'cjs')}`);
};

const removeES = async () => {
	await exec(`rm -rf ${path.resolve(root, 'es')}`);
};

const removeBuild = async () => await Promise.all([
	removeCommonJS(),
	removeES(),
]);

removeBuild();
