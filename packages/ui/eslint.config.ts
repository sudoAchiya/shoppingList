// @ts-check
import storybook from 'eslint-plugin-storybook'; // For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import createUltraConfig from '@ultra/eslint-config/client';

export default [
  ...createUltraConfig({
    tsconfigPath: [
      'tsconfig.app.json',
      'tsconfig.node.json',
      'tsconfig.lib.json',
    ],
  }),
  ...storybook.configs['flat/recommended'],
];
