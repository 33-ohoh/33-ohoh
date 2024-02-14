/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    "no-unused-vars": "off", // 사용하지 않는 변수에 대한 경고 비활성화
    "react/no-unescaped-entities": "off", // React에서 특수 문자가 escape 되지 않았을 때의 경고 비활성화
  },
};
