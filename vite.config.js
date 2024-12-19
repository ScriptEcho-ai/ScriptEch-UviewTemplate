import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  extensions: ['.js', '.vue', '.ts'],
  resolve: {
    alias: [
      {
        find: "/@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "ScriptEcho/lib",
        replacement: resolve(__dirname, "src"),
      },
    ]
  }
})
