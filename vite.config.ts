import {defineConfig, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dns from 'dns'
import checkerPlugin from 'vite-plugin-checker';

dns.setDefaultResultOrder('verbatim')

function createCheckerPlugin() {
  return checkerPlugin({
    typescript: true,
    vueTsc: true,
    eslint: {
      lintCommand: 'eslint --max-warnings=0 "./src/**/*.{js,ts,vue}"',
    },
  });
}

const userConfig: UserConfigExport = {
  base: '',
  build: {
    rollupOptions: {
      input: './src/main.ts'
    }
  },
  plugins: [
    vue(),
    createCheckerPlugin(),
  ],
  server: {
    origin: 'http://localhost:4000/',
    https: false,
    host: 'localhost',
    port: 4000,
    strictPort: true,
  }
}

export default defineConfig(userConfig)
