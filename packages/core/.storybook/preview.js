import { themes } from '@storybook/theming';
import PlongTheme from './PlongTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Colors'],
      locales: 'en-ID',
    },
  }
}