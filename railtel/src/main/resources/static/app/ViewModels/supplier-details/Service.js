app.service("supplierDetailsService", function ($http) {
	this.getSUpplierDetailsData = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+SUPPLIER_DETAILS_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.getSupplierDetailsByKey = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+SUPPLIER_DETAILS_BY_KEY_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
});

