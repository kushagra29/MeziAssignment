(function(){

'use strict';

angular.module('ProductModule')
.controller('productListCtrl', ProductListCtrl)



function ProductListCtrl($sessionStorage, $location, productListService){
	var vm = this;
	//vm.sortBy = "RELEVANCE";
	productListService.getProducts().then(function(products){
		vm.products =  products;
	});
}
})();