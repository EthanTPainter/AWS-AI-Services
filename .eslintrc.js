module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-unresolved': 'off'
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'paths': ['src']
      }
    }
  }
};
