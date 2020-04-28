app.service("dataService", function ($http) {
	
	this.getBillReceivable = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+BILLS_RECEIVABLE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.sendEmailToCustomer = function(data) {
		return $http({
			method: 'POST',
			url:baseUrl+SEND_EMAIL_BILLS_RECEIVABLE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

