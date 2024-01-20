import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, ({ mode }) => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
    },
    plugins: [
      staticAdapter({
        origin: mode == 'github' ? "https://ansoncheng03.github.io/Skylight_Engineering/" : "https://skylightengineering.com.hk/",
      }),
    ],
  };
});
