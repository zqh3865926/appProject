var vm = null;
var domObj = "#aui-waterfall";
function setRefreshHeaderInfo(requestUrl){
	var dataUrl = requestUrl;
	api.setRefreshHeaderInfo({
	    visible: true,
	    loadingImg: 'widget://image/refresh.png',
	    bgColor: '#ccc',
	    textColor: '#fff',
	    textDown: '下拉刷新...',
	    textUp: '松开刷新...',
	    showTime: true
	}, function(ret, err){
	      ApiAjaxLoad( true,requestUrl );
	});
}
function ApiAjaxLoad( isPull,requestUrl ){
	var dataUrl = requestUrl;
	api.ajax({
	    url: dataUrl, 
	    method: 'get',
	},function(ret, err){
	    if (ret) { 
	        if(isPull){ 
	        	vm.items = []; 
	        	for (var i = 0; i < ret.length ; i++) { 
	        		vm.items.unshift( ret[i] );
	        	}
	        	return ;
	        }
	        vm = new Vue({
	        	el:domObj,
	        	data:{
	        		items:ret
	        	}
	        });
	    } 
	});
	api.refreshHeaderLoadDone();
}