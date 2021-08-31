// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    extends: [
        'plugin:@next/next/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            classes: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        //        local syntax principles
        'quotes': ['error', 'single'],
        'no-multi-spaces': 'error',
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'function-paren-newline': ['error', 'consistent'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'linebreak-style': ['error', 'unix'],
        //        easy-to-read-and-refactor syntax
        '@typescript-eslint/no-shadow': ['error', { hoist: 'never' }],
        'no-else-return': ['error', { allowElseIf: false }],
        'func-names': ['error', 'never'],
        'dot-notation': 'error',
        'default-case-last': 'error',
        //        code security enhancing syntax
        'init-declarations': ['warn', 'always'],
        'default-param-last': 'error',
        'default-case': 'error',
        //        code cleanup rules
        '@typescript-eslint/no-unused-vars': 'warn',
        //        hindering and useless syntax
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'max-classes-per-file': 'off',
        'no-use-before-define': 'off',
        'react/style-prop-object': 'off',
        'react-hooks/rules-of-hooks': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        //        prettier config
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                jsxBracketSameLine: false,
                jsxSingleQuote: true,
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                quoteProps: 'consistent',
                arrowParens: 'avoid',
            },
        ],
    },
};
