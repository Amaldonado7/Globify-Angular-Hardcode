module.exports = {
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'env': {
		'es6': true,
		'browser': true
	},
	'rules': {
		'indent': [
			'error', 'tab', {
				'SwitchCase': 1,
				'MemberExpression': 0
			}
		],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'eqeqeq': ['error', 'always'],
		'complexity': ['error', {'max': 4}],
		'block-scoped-var': 'error',
		'curly': ['error', 'all'],
		'no-else-return': ['error', {'allowElseIf': true}],
		'no-empty-function': 'error',
		'no-eval': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-console': 'off',
		'no-throw-literal': 'error',
		'newline-per-chained-call': [
			'error', {
				'ignoreChainWithDepth': 4
			}
		]
	},
	'globals': {
		'ExecutorError': true
	},
	'parser': 'babel-eslint'
};
