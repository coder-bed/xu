// https://eslint.org/
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import vueParser from 'vue-eslint-parser';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

const ignores = ['**/dist/**', '**/node_modules/**', '.*', 'scripts/**', '**/*.d.ts'];

export default defineConfig([
	// 通用配置
	{
		ignores, // 忽略项
		extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...eslintPluginVue.configs['flat/recommended'], eslintConfigPrettier], // 继承规则
		plugins: {
			prettier: eslintPluginPrettier,
		},
		languageOptions: {
			ecmaVersion: 'latest', // ecma语法支持版本
			sourceType: 'module', // 模块化类型
			parser: vueParser, // 解析器
			parserOptions: {
				parser: tseslint.parser,
			},
			globals: {
				...globals.browser, // 浏览器环境如： window
			},
		},
		rules: {
			// 自定义
			'no-var': 'error', // 禁止使用var
			'vue/multi-word-component-names': 'off',
		},
	},
]);
