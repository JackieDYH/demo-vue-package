/*
 * @Author: Jackie
 * @Date: 2023-06-17 10:54:29
 * @LastEditTime: 2023-06-17 11:22:56
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/.eslintrc.js
 * @version: 
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    // "eslint:recommended",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
