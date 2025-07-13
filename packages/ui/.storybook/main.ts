import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';
import path, { join, dirname } from 'path';

const getAbsolutePath = (value: string): any =>
  dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  stories: ['../lib/**/*.mdx', '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async config => {
    config.resolve = {
      alias: {
        ...(config.resolve?.alias || {}),
        '@': path.resolve(__dirname, '../lib'),
      },
    };
    config.plugins = await withoutVitePlugins(config.plugins, ['vite:dts']);

    return config;
  },
};

export default config;
