module.exports = {
    extends: ['taro/react', require.resolve('@realibox-cli/fabric/dist/eslint')],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-plusplus': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        'no-console': 2,
        'import/no-commonjs': 'off',
        "import/no-named-as-default": 'off',
        "@typescript-eslint/consistent-type-imports": 'off'
    },
};
