var chooseAddress = new Vue({
	el : '.container',
	data : {
		addressList : [],
		limitNum : 3,
		currIndex : 0,
		currShippingMethod : 1,
		editStaus : false,
		deleteStatus : false,
		createStaus : false,
		loadMore : false,
		loadType : 'more'
	},
	mounted: function () {
      this.$nextTick(function () {
    	this.getAddressList();
      });
    },
    computed : {
    	filterAddress : function(){
    		return this.addressList.slice(0,this.limitNum);
    	}
    },
	methods : {
		getAddressList : function(){
			this.$http.get('data/address.json').then(res=>{
				this.addressList = res.data.result;
			});
		},
		setDefault : function(addressId){
			this.addressList.forEach((address,index)=>{
				if(address.addressId == addressId){
					address.isDefault = true;
				}else{
					address.isDefault = false;
				}
			});
		},
		closeAllmd : function(){
			this.createStaus = false;
			this.deleteStatus = false;
		},
		loadMoreAddress : function(){
			this.loadMore = !this.loadMore;
			if(this.loadMore){
				this.loadType = 'close';
				this.limitNum = this.addressList.length;
			}else{
				this.loadType = 'more';
				this.limitNum = 3;
			}
		}
	}
})