module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': 0,
        'no-plusplus': 0,
        'no-useless-concat': 0
    },
};
