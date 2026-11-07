import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// 仅构建「围棋第二课·气」这一个页面，产物只包含该页依赖的 JS/CSS 与本地语音 mp3
// WebView 用 file:// 加载时 ES module 脚本会被 CORS 拦截导致白屏，
// 这里把注入的 script 标签改成经典脚本（配合下面的 iife 产物）
const classicScript = () => ({
  name: 'classic-script',
  enforce: 'post' as const,
  transformIndexHtml(html: string) {
    return html
      .replace(/<script type="module" crossorigin/g, '<script defer')
      .replace(/<script type="module"/g, '<script defer')
      .replace(/ crossorigin(?=[ >])/g, '')
  },
})

export default defineConfig({
  base: './',
  plugins: [Vue(), classicScript()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    target: 'es2019',
    cssCodeSplit: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        // 输出 IIFE 经典脚本：WebView 用 file:// 加载时，ES module 会被 CORS 拦截
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
