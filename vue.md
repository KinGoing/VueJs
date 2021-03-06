#Vue组件的重要选项：

1.data：数据
2.methods：方法
3.watch：监听

-eg：
```
new Vue({
  data:{
    a:1,
    b:[]
  },
  methods:{
    doSomething:function(){
      this.a++;
    }
  },
  watch:{
    'a':function(val,oldVal){
      console.log(val,oldVal)
    }
  }
})
```
---

#模板指令

1.v-text
2.v-html
3.{{}}
4.v-if
5.v-show
6.v-for

-eg:
```
<html>
  <ul>
    <li v-for='item in item'>
      <p v-text='item.label'></p>
    </li>
  </ul>
</html>
<script>
  data:{
    item:[
      {
        label:'apple'
      },
      {
        label:'banana'
      }
    ]
  },
</script>
```

---

##v-on事件绑定

```
<button v-on:click='doThis'></button>
<button @click='doThis'></button>
```

```
methods:{
  doThis:function(someThing){
   doSomething
  }
}
```

##v-bind属性绑定

```
<img v-bind:src='imageSrc'>
```

```
<div :class="{red:isRed}"></div>
<div :class="[classA,classB]"></div>
<div :class="[classA,{classB:isB,classC:isC}]"</div>
```

##storage

```
const STORAGE_KEY="todos-vuejs"
export default{
  fetch(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
  },
  save (items){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
```

**模板**
```
var name = new Vue({
    el : '#id',
    data : {
      //数据
    },
    filter :{
      //局部过滤器
    },
    mounted: function () {
      this.$nextTick(function () {
        // 代码保证 this.$el 在 document 中
      })
    },
    wathch : {
      //监听
    },
    methods : {
      //事件方法
    },
});
```

---

##过滤器filter

1.局部过滤器
```
filters:{
  formatMoney : function(value){
    return '&yen;' + value.toFixed(2);
  }
}
```
2.全局过滤器
```
Vue.filter('formatMoney' , function(value,type){
  return '&yen;' + value.toFixed(2) + type;
})
```

##v-html添加过滤器

-定义方法
```
    methods: {  
        formatTrend(val) {  
          let trend = 'up';  
          if(val.indexOf('-') > -1){  
            trend = 'down';  
            val = val.substr(1);  
          }  
          return `<i class="trend ${trend}"></i>${val}`;  
        }  
    }  
```

-调用方法
```
    <span v-html="formatTrend(value)"></span> 
```

#组件

**全局组件**

1.创建组件构造器
```
let Profile = Vue.extend({
  -1.1模板选项
  template : `
            <div>
              <input type="date" />
              <p>今天已经是冬天了！</p>
            </div>
              `
});
```

2.注册一个全局的组件
```
Vue.component('my-data',Profile);
```

3.html实例化
```
<my-data></my-data>
```

**局部组件**

1.创建组件构造器
```
let Profile = Vue.extend({
  -1.1模板选项
  template : `
            <div>
              <input type="date" />
              <p>今天已经是冬天了！</p>
            </div>
              `
});
```

2.注册一个局部的组件
```
component ： {
  'my-data' ： Profile
}
```

3.html实例化
```
<my-data></my-data>
```

**简写法**
```
Vue.component('my-data',{
  template : `
            <div>
              <input type="date" />
              <p>今天已经是冬天了！</p>
            </div>
              `
});
```

##父子组件
```
let Child1 = Vue.extend({
  template : `
            <input type="text" />
              `
});
let Child2 = Vue.extend({
  template : `
            <button>选择</button>
              `
});
Vue.component('Parent',{
  components : {
    'my-child1' : Child1,
    'my-child2' : Child2,
  }
  template : `
              <div>
                <my-child1></my-child1>
                <my-child2></my-child2>
              </div>
              `
});
<Parent></Parent>
```