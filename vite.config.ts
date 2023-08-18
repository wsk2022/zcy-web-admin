import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src")
		}
	},
  server: {
    open: true,
		// 代理跨域（mock 不需要配置，这里只是个事列）
		proxy: {
			"/api": {
				target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, "")
			}
		}
  },
	build: {
		outDir: "dist",
		// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
		minify: "esbuild",
		// minify: "terser",
		// terserOptions: {
		// 	compress: {
		// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
		// 		drop_debugger: true
		// 	}
		// },
		rollupOptions: {
			output: {
				// Static resource classification and packaging
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
			}
		}
	}
})
