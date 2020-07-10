module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:flowtype/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [ 'error', 2 ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'import/no-unresolved': 0,
  }
};
