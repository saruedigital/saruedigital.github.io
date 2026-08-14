// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  outDir: "docs/",
  site: 'https://saruedigital.github.io/',

  build: {
    assets: 'assets',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  integrations: [expressiveCode({
    themes: ['github-dark'],
    emitExternalStylesheet: false,
    styleOverrides: {
      borderRadius: "var(--radius-xl)",
      codeFontSize: "var(--text-base)",
      uiFontSize: "var(--text-sm)",
      frames: {
        editorActiveTabIndicatorTopColor: 'transparent',
      }
    }
  })]
});