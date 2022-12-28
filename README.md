## eslint-config
> 开发

```bash
pnpm i
pnpm dev
pnpm lint
```

> 使用

```bash
# bash
npm install -D eslint @zheqi/eslint-config
```

```eslint
// .eslintrc
{
  "extends": "@zheqi"
}
```

```eslint
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

```json
// .vscode/setting.json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

参考 antfu 和 chris-zhu 两位大佬的 eslint-config，查阅了大量资料, 整合了两套一起 vue、ts 配置, 添加了 vue 语法糖  
使用了 unbuild 和 monorepo，实现了百分百 ts

从之前那个账号的仓库 https://github.com/zheqi02 换到这个账号了  

eslint的功能已经包含了prettier的功能，所以不需要再使用prettier了  

