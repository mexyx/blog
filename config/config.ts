import { defineConfig } from 'umi';

import routes from './routes';
import theme from './theme';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  base: isDev ? '/' : '/blog',
  publicPath: isDev ? '/' : '/blog/',
  ssr: {},
  exportStatic: {
    extraRoutePaths: async () => {
      return Promise.resolve(['/post/1', '/post/2']);
    },
  },
  theme,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
