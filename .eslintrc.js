module.exports = {
    //此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    parser: 'babel-eslint',
    //此项指定环境的全局变量
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['prettier', 'react', 'react-hooks'],
    // "off" -> 0 关闭规则
    // "warn" -> 1 开启警告规则
    // "error" -> 2 开启错误规则
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'off',
      'no-debugger': 'off',
      eqeqeq: 'off',
    },
  }
  