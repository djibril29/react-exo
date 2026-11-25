import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'

// Vite only compiles JSX in .jsx files by default.
// This small plugin lets us write JSX inside .js files in src/ (e.g. App.js).
const jsxInJs = {
  name: 'jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!/\/src\/.*\.js$/.test(id.split('?')[0])) return
    return transformWithOxc(code, id, {
      lang: 'jsx',
      jsx: { runtime: 'automatic' },
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [jsxInJs, react()],
})
