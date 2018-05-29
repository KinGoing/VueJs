# npm 指令

- 在此目录生成package.json文件
```
	npm init
```

- 安装模块
```
	cd /workplace
	npm install moduleName --save
```

- 卸载模块 **默认使用–save参数，即从package.json中移除**
```
	cd /workplace
	npm uninstall moduleName
```

- 查询安装模块版本
```
	cd /workplace
	npm list moduleName
```

- 查看全局安装地址
```
	npm root -g 
```

- 列出依赖信息，包括历史版本
```
	npm view <package> [field] [--json]
```

- 移除当前不在package.json中但是存在node_modules中的依赖
```
	npm prune 
```