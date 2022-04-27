# 门诊引导

## 项目介绍

门诊导引

## 维护人员

- @liufashi<1325178274@qq.com>

## scripts

```bash
# 安装依赖
npm install

# 启动开发环境
npm run start

# lint检验
npm run lint

# lint自动修复
npm run lint:fix
```

## 项目目录

```bash
    ├── apis
        ├── config.ts
        ├── index.ts
        ├── request.ts
    ├── assets #资源文件
    ├── components #项目组件
    ├── pages #页面
        ├──<Name> #页面名称 驼峰命名
            ├── index.tsx
            ├── index[.module].(scss|sass)
    ├── router #路由配置
    ├── utils #工具函数&&自定义hooks
```

## 项目规范

commit 规范

- "feat", // 新功能（feature）
- "fix", // 修补 bug
- "bugfix", // 修补 bug
- "docs", // 文档（documentation）
- "style", // 格式（不影响代码运行的变动）
- "message", //注释&文案更改
- "refactor", // 重构（即不是新增功能，也不是修改 bug 的代码变动）
- "test", // 增加测试
- "revert", // 回滚
- "config", // 构建过程或辅助工具的变动
- "chore", // 其他改动

