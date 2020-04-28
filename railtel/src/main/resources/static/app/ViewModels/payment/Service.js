app.service("paymentService", function ($http) {
	this.getPaymentData = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+PAYMENT_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.getPaymentDataByVchNumber = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+PAYMEMT_BY_VOUCHER_NUMBER_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

