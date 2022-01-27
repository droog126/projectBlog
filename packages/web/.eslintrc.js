module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/display-name': 'off',
    'max-lines-per-function': 'off',
    'node/exports-style': 'off',
    'react/jsx-no-bind': 'off',
    'react/self-closing-comp': ['warn']
  }
};
