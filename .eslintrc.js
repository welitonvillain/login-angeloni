module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "prettier",
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "no-unused-expressions": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
};
