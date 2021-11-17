#! /usr/bin/env ts-node --compiler-options {"module":"CommonJS","lib":["es2020"]}
//
// Creates a package.json file for the library based on info from
// this repo's package.json

import fs from 'fs';
import packageJson from './package.json';

console.log(`Packaging ${packageJson.name} ${packageJson.version}`);

interface INewPackageJson extends Partial<typeof packageJson> {
  devDependencies: any;
  dependencies: any;
  main: string;
  module: string;
}

// Add name prefix '@my-name/' if you want the package to be privately scoped
// Note: this requires paid subscription to npm
const namePrefix = '';

const distPackageJson: INewPackageJson = {
  ...packageJson,
  name: `${namePrefix}${packageJson.name}`,
  main: `./${packageJson.name}.cjs.js`,
  module: `./${packageJson.name}.esm.js`,
  devDependencies: {
    '@types/three': (packageJson as any).devDependencies['@types/three'],
    three: (packageJson as any).devDependencies['three'],
  },
  dependencies: {
    julian: (packageJson as any).dependencies['julian'],
    'kepler-utils': (packageJson as any).dependencies['kepler-utils'],
  },
};

// Remove pointless stuff:
delete distPackageJson.scripts;
// delete distPackageJson.peerDependencies;
delete distPackageJson.husky;
delete distPackageJson.prettier;
delete distPackageJson['size-limit'];

fs.writeFileSync('dist/package.json', JSON.stringify(distPackageJson, null, 2));

// "module": "dist/sbn-solar-system-viewer.esm.js",
// "main": "dist/index.js",
// "typings": "dist/index.d.ts",
// "files": [
//   "dist/**/*",
//   "dist/temp.txt",
//   "dist"
// ],
