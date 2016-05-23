angular.module('starter.controllers').service("listService", ['$http', function($http){
	
	//var self = this;
	this.getData = function(id, sub_id, sub_id2, sub_id3, sub_id4){
		return $http.get(urlPath, {
			params: {
				"field_category_tid": id,
				"field_product_sub_category_tid": sub_id,
				"field_jewellery_or_collection_ty_tid": sub_id2,
				"sort_by": sub_id3,
				"sort_order":sub_id4
			}
		});	
	}	
	
}])