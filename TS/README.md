# 简单理解 Typescript 的配置文件 tsconfig.json

TS 使用 tsconfig.json 作为其配置文件，它主要包含两块内容：

指定待编译的文件
定义编译选项
另外，一般来说，tsconfig.json 文件所处的路径就是当前 TS 项目的根路径。
tsconfig.json 的配置项众多并且复杂。所有的选项可以参考官方文档：
https://www.typescriptlang.org/zh/tsconfig

这里我们分析一个简单示例：

```
{
"compilerOptions": {
"module": "commonjs",
"noImplicitAny": true,
"sourceMap": true,
"declaration": true
},
"files": [
"app.ts",
"foo.ts",
]
}
```

其中，compilerOptions 用来配置编译选项，files 用来指定待编译文件。
这里的待编译文件是指入口文件，任何被入口文件依赖的文件。

也可以使用 include 和 exclude 来指定和排除待编译文件：

```
  "include": [
  "src/**/*"
  ],
  "exclude": [
  "node_modules",
  "**/*.spec.ts"
  ]
```

下面简述 compilerOptions 中的选项配置，这些配置简单来说就是影响整个编译的过程和编译的结果。

```
module - 生成的 Javascript 模块形式：none、commonjs、amd、system、umd、es6、es2015 或 esnext
noImplicitAny - 存在隐式 any 时抛错 （默认为 false）
sourceMap - 生成 map 文件 （默认为 false）
declaration - 生成对应的 .d.ts 文件 (默认为 false)
```
