app.service("supplierDataPresentationService", function ($http) {
	this.lastSevenSupplierBills = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_SEVEN_SUPPLIER_BILLS,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.lastSupplierDateWiseBills = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_SUPPLIER_DATE_WISE_BILLS,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	

	this.lastSupplierMonthWiseAmount = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_SUPPLIER_MONTH_WISE_AMOUNT,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	this.lastSupplierDateWiseInventoryAmount = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_DATE_WISE_INVENTORY_AMOUNT,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	
	
});

