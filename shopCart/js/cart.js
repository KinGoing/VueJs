var shopCart = new Vue({
    el : '#app',
    data : {
        productLists : [],
        totalMoney : 0,
        allChecked : false,
        delFlag : false,
        currProduct : ''
    },
    filters: {
        formatMoney: function(value) {
          return "¥ " + value.toFixed(2);
        }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getGoodsList();
      })
    },
    methods : {
        getGoodsList : function(){
            this.$http.get('data/cartData.json').then(res=>{
                this.productLists = res.data.result.list;
                //this.totalMoney = res.data.result.totalMoney;
            });
        },
        changeCount : function(item,flag){
            if(flag < 0){
                item.productQuantity --;
                if(item.productQuantity < 1){
                    item.productQuantity = 1;
                }
            }else{
                item.productQuantity ++;
            }
            this.calaAllPrice();
        },
        checkProduct : function(item){
            if(typeof item.ischecked == 'undefined'){
                this.$set(item, 'ischecked', true);
            }else{
                item.ischecked = !item.ischecked;
            }
            this.calaAllPrice();
        },
        checkAll : function(flag){
            this.allChecked = flag;
            this.productLists.forEach((item,index)=>{
                if(typeof item.ischecked == 'undefined'){
                    this.$set(item, 'ischecked', this.allChecked);
                }else{
                    item.ischecked = this.allChecked;
                }
            });
            this.calaAllPrice();
        },
        calaAllPrice : function(){
            this.totalMoney = 0;
            this.productLists.forEach((item,index)=>{
                if(item.ischecked){
                    this.totalMoney += item.productPrice*item.productQuantity;
                }
            });
        },
        delConfirm : function(item){
            this.delFlag = true;
            this.currProduct = item;
        },
        delProduct : function(){
            let proIndex = this.productLists.indexOf(this.currProduct);
            this.productLists.splice(proIndex,1);
            this.delFlag = false;
        }
    }
})