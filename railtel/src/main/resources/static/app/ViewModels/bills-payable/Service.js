app.service("dataService", function ($http) {
	
	this.getBillPayable = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+BILLS_PAYABLE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

