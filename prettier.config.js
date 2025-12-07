// https://www.prettier.cn/docs/options.html
export default {
	// 一行最多多少个字符
	printWidth: 150,
	// 指定每个缩进级别的空格数
	tabWidth: 4,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 在语句末尾打印分号
	semi: true,
	// 使用单引号而不是双引号
	singleQuote: true,
	// 更改引用对象属性的时间
	quoteProps: 'as-needed',
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	// 多行时尽可能打印尾随逗号
	trailingComma: 'es5',
	// 在对象文字中的括号之间打印空格
	bracketSpacing: true,
	// jsx 标签的反尖括号需要换行
	jsxBracketSameLine: false,
	// 在单独的箭头函数参数周围包括括号
	arrowParens: 'always',
	// 使用默认的折行标准
	proseWrap: 'preserve',
	// 指定HTML文件的全局空格敏感度
	htmlWhitespaceSensitivity: 'css',
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false,
	// 换行符使用 lf
	endOfLine: 'lf',
};
