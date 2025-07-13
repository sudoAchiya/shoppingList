import type { Preview } from '@storybook/react';
import { useEffect } from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    direction: {
      name: 'Direction',
      description: 'Text direction for components',
      defaultValue: 'rtl',
      toolbar: {
        icon: 'transfer',
        items: [
          { value: 'ltr', title: 'LTR', right: 'Left-to-Right' },
          { value: 'rtl', title: 'RTL', right: 'Right-to-Left' },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const { globals } = context;
      const direction = globals.direction || 'ltr';

      useEffect(() => {
        document.body.dir = direction;
      }, [direction]);

      return (
        <div style={{ height: '100%' }}>
          <Story {...context} />
        </div>
      );
    },
  ],
};

export default preview;
