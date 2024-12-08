import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import zipPack from "vite-plugin-zip-pack";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const config = {
    plugins: [
      vue(),
      zipPack({
        outFileName: `${env.VITE_APP_CODE}-${process.env.npm_package_version}.zip`
      })
    ],
    base: "./",
    server: {
      proxy: {
          "/sd/services/": {
            target: env.VITE_APP_REAL_URL,
            changeOrigin: true,
            secure: false,
            ws: true
          }
        }
    }
  }

  // if (env.mode === 'production') {
  //   config.plugins.push(
  //     zipPack()
  //   )
  // }

  return defineConfig(config) 
})
