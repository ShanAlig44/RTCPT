app.service("dataService", function ($http) {
	
	this.getBalanceSheet = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+BALANCE_SHEET,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

