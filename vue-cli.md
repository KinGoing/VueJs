# vue-cli 搭建Vue框架 
- time 2018-05-19 14:58:48
--------------------------------------------------

## 安装vue-cli

**确保**
- 已安装 node.js
- PC可联网

1.全局安装vue-cli(3.0+)
```
npm install -g @vue/cli
```

2.创建项目
```
vue create my-project
```

3.简单配置

4.项目启动
```
npm run serve
```

5.项目打包(可选)
```
npm run build
```
--------------------------------------------------

#推荐项目结构

```
src:
	\api		(数据接口)
	\assets		(静态数据)
	\common		(公用文件)
	\utils		(工具、插件)
	\view		(视图路由)
	\components	(组件)
	\app.vue
	\main.js/router.js
