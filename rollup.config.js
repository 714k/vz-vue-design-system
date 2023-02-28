import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";

export default [
  {
    input: './src/index.js',
    output: [
      {
        format: 'esm',
        file: './dist/index.mjs'
      },
      {
        format: 'cjs',
        file: './dist/index.js'
      }
    ],
    plugins: [
      vue(),
      peerDepsExternal(),
      nodeResolve(),
      css()
    ]
  }
]