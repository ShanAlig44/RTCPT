app.service("dataService", function ($http) {
	
	this.getProfitNLoss = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+PROFIT_AND_LOSS,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

