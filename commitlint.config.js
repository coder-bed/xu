export default {
	extends: ['@commitlint/config-conventional'],
	rules: {},
	prompt: {
		types: [
			{ value: 'feat', name: '新功能：新增功能' },
			{ value: 'fix', name: '修复：修复缺陷' },
			{ value: 'docs', name: '文档：更新文档' },
			{ value: 'style', name: '格式：代码格式化，不影响功能' },
			{ value: 'refactor', name: '重构：代码重构（不新增功能也不修复 bug）' },
			{ value: 'perf', name: '性能：提升性能' },
			{ value: 'test', name: '测试：添加测试' },
			{ value: 'build', name: '构建：构建项目' },
			{ value: 'ci', name: 'CI：CI 配置' },
			{ value: 'chore', name: '杂项：其他修改' },
			{ value: 'revert', name: '回滚：代码回滚' },
			{ value: 'wip', name: 'WIP：工作进行中' },
			{ value: 'workflow', name: '工作流：工作流配置' },
			{ value: 'types', name: '类型：类型定义' },
			{ value: 'release', name: '发布：发布版本' },
		],
		scopes: ['root', 'src', 'md', 'utils'],
		allowCustomScopes: true,
		skipQuestions: ['body', 'footerPrefix', 'footer', 'breaking'], // 跳过“详细描述”和“底部信息”
		messages: {
			type: '请选择提交类型：',
			scope: '请选择影响范围（可选）：',
			subject: '请简短描述更改：',
			body: '详细描述（可选）：',
			footer: '请输入关联的 issue 编号（可选）：',
			confirmCommit: '确认提交吗？',
		},
	},
};
