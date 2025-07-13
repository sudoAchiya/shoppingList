// @ts-check
import createUltraConfig from '@ultra/eslint-config/client';

export default [
  ...createUltraConfig({
    tsconfigPath: ['tsconfig.json', 'tsconfig.node.json'],
  }),
];
