import eslintPluginAstro from 'eslint-plugin-astro';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import jsPlugin from '@eslint/js';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.ts', '**/*.astro'],
    plugins: {
      'jsx-a11y': a11yPlugin,
      import: importPlugin,
      js: jsPlugin,
      '@typescript-eslint': typescriptPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          comments: 120,
          tabWidth: 2,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreTrailingComments: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
];
