import { defineConfig } from 'umi';

import routes from './routes';
import theme from './theme';

export default defineConfig({
  theme,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
