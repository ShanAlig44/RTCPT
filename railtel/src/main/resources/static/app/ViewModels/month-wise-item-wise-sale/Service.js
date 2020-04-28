app.service("dataService", function ($http) {
	this.getSaleMonthWiseItemWise = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+MONTH_WISE_ITEM_WISE_SALE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

