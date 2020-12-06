import { defineConfig } from 'umi';

import routes from './routes';
import theme from './theme';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  base: isDev ? '/' : '/blog',
  publicPath: isDev ? '/' : '/blog/',
  ssr: {},
  exportStatic: {},
  theme,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
