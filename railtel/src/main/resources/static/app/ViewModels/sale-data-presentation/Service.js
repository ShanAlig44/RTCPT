app.service("saleDataPresentationService", function ($http) {
	this.lastSevenSaleBills = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_SEVEN_SALE_BILLS,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.lastSaleDateWiseBills = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_SALE_DATE_WISE_BILLS,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	

	this.lastSaleMonthWiseAmount = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_SALE_MONTH_WISE_AMOUNT,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	this.lastSaleDateWiseInventoryAmount = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LAST_DATE_WISE_INVENTORY_AMOUNT_SALE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	
	
});

