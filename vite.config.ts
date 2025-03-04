import { defineConfig, type UserConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { builderDevTools } from '@builder.io/dev-tools/vite';
import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      builderDevTools(),
      staticAdapter({
        origin: 'https://first-funnel.netlify.app',
      }),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    server: {
      open: true,
    },
  };
});
