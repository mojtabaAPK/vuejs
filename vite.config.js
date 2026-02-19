import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";

import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	//base: "/vuejs/",
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	define: {
		__VUE_OPTIONS_API__: false,
		__VUE_PROD_DEVTOOLS__: false
	},
	plugins: [vue(), tailwindcss(),],
	server: {
		port: 80,
		host: '0.0.0.0',
	},
	preview: {
		port: 45,
		host: '0.0.0.0',
	},

	build: {
		ssr: false,
		cssMinify: true
	},

})
