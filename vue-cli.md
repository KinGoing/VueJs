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

# 推荐项目结构

```
src:
	\api\			(数据接口)
	\assets\		(静态数据)
	\common\		(公用文件)
	\utils\			(工具、插件)
	\view\			(视图路由/组件)
	\components\	(最小组件)
	\app.vue		(入口)
	\main.js		(js入口)
	\router.js		(路由配置)
```

## 文件关联

+ app.vue
入口文件 一般是最大的框架文件

+ components\
组件文件 .vue
```
<template></template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
```

+ view\
路由文件 .vue
```
<template>
	<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
```

+ main.js
js文件的入口
```
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

+ router.js
路由配置文件
```
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
```

--------------------------------------------------

# 打包上线

+ 优化-打包大小分析
```
	npm run build --report
```

+ file协议打开

1.安装 node-static
```
	npm install node-static -g
```

2.开启static——本地可测试
```
	static dist
```