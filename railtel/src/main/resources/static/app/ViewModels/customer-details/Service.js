app.service("customerDetailsService", function ($http) {
	
	this.getCustomerDetailsData = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+CUSTOMER_DETAILS_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.getSaleDetailsByKey = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+SALE_DETAILS_BY_KEY_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	this.deleteVoucher = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+SALE_DELETE_VOUCHER,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
});

