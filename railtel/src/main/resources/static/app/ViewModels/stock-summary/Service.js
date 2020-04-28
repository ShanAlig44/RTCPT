app.service("dataService", function ($http) {
	
	this.getStockSummary = function (data) {
		 
		return $http({
			method: 'POST',
			url:baseUrl+STOCK_SUMMARY,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

