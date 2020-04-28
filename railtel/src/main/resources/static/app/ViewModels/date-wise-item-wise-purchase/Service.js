app.service("dataService", function ($http) {
	this.getPurchaseDateWiseItemWise = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+DATE_WISE_ITEM_WISE_PURCHASE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	/*
	this.getSupplierDetailsByKey = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+SUPPLIER_DETAILS_BY_KEY_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	*/
	
});

