import { resolve } from 'path'
import { defineConfig } from 'vite'
import frame3 from 'vite-plugin-frame3'

export default defineConfig({
	plugins: [frame3()],
	resolve: {
		alias: {
			'~': resolve(__dirname, 'src'),
		},
	},
	build: {
		outDir: 'docs',
	},
})
