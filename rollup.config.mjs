// @ts-check

import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs"

/** @type import("rollup").RollupOptions */
export default {
  input: './build/client.js',
  output: {
      dir: 'dist',
      format: 'iife'
  },
  plugins: [
    commonJs(),
    nodeResolve({
      browser: true
    })
  ]
};