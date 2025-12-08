import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
	build: {
		outDir: 'docs',
	},
	base: '/docs/',
	plugins: [vue()],
});
