import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/threejs/workers/asteroid-belt-worker.ts',
  output: {
    file: `assets/scripts/asteroid-belt-worker-${pkg.version}.js`,
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    production && terser(), // minify, but only in production
    typescript({
      outDir: 'assets/scripts',
    }),
    serve({
      contentBase: 'assets/scripts',
      port: 3001,
      headers: {
        // 'Access-​Control-Allow-Origin': '*',
      },
    }),
  ],
};
