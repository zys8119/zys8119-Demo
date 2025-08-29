import { defineConfig, Plugin } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoRoute from "vitejs-plugin-vue-route-auto-import";
import AutoApi from "vitejs-plugin-api-auto-import";
import AutoConfig from "vitejs-plugin-config-auto-import/vite";
import VueSql from "vitejs-plugin-vue-sql";

// vite.config.ts
import ReactivityTransform from "@vue-macros/reactivity-transform/vite";
import UnoCss from "unocss/vite";
import VineBrowser from "./vite/VineBrowser";
import GetVueRef from "vitejs-get-vue-ref";
import Markdown from "unplugin-vue-markdown/vite";
import hljs from "highlight.js";
import MarkdownVueDemo from "vitejs-markdown-vue-demo/vite";
export default defineConfig({
  base: "",
  build: {
    outDir: "docs",
  },
  plugins: [
    MarkdownVueDemo(),
    VueSql({
      file: "./src/sql/sql.ts",
    }),
    UnoCss(),
    // MarkdownVueDemo(),
    Markdown({
      markdownItOptions: {
        highlight(code, lang) {
          if (lang) {
            try {
              return hljs.highlight(code, {
                language:
                  {
                    vue: "html",
                    js: "javascript",
                    jsx: "javascript",
                    ts: "typescript",
                    tsx: "typescript",
                    css: "css",
                    less: "css",
                    sass: "css",
                  }[lang] || lang,
              }).value;
            } catch (error) {
              return hljs.highlight(code, { language: "text" }).value;
            }
          }
          return hljs.highlight(code, { language: "text" }).value;
        },
      },
    }),
    Vue({
      include: [
        /\.vue$/,
        /\.md$/, // .md
      ],
    }),
    vueJsx(),
    ReactivityTransform(),
    Components({
      dts: "components.d.ts",
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.md$/, // .md
      ],
      resolvers: [NaiveUiResolver()],
      extensions: ["vue", "md", "ts", "tsx"],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue", "vue-router", "@vueuse/core"],
      dts: "auto-import.d.ts",
      resolvers: [
        [
          (name) => {
            if (name === "request") {
              return {
                name,
                from: "request",
              };
            }
            if (/\$(message|dialog|notification|loadingBar)/.test(name)) {
              return {
                name: name.replace("$", ""),
                from: "@/src/utils/createDiscreteApi",
              };
            }
          },
        ],
      ],
    }),
    AutoApi({
      dir: "src/api",
    }),
    AutoRoute({
      views: "src/views2",
      routes_extend: "./routes_extend.ts",
      handleHotUpdate: () => true,
    }),
    AutoConfig({
      globalActive: "b",
      globalData: {
        a: {
          a: "asda",
          b: "asda",
        },
        b: "bbbb",
      },
    }),
    VineBrowser(),
    GetVueRef(),
  ],
  resolve: {
    alias: {
      "@": process.cwd(),
    },
  },
  server: {
    port: 8899,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://szrd.nbyz.cn/",
        // rewrite:path => path.replace(/^\/api/,''),
        // changeOrigin:true,
        // configure(proxy, o){
        //     proxy.on('proxyReq', function(proxyReq, req, res, options) {
        //         proxyReq.setHeader('referer', 'http://szrd.nbyz.cn/');
        //     });
        // }
        // secure:false,
        // headers:{
        //     referer:"http://szrd.nbyz.cn/"
        // },
        // prependPath:false,
      },
      "/v1": {
        target: "http://192.168.110.46:8000",
      },
      "/bpm": {
        target: "http://c2b7a201a62f9c86.zhijiasoft.com",
        rewrite: (path) => path.replace(/^\/bpm/, ""),
      },
    },
  },

  optimizeDeps: {
    exclude: ["pdfjs-dist", "@zys/wujue-vue/wujie-vue.vue"],
  },
});
