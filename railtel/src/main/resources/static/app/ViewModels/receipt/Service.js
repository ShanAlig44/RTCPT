app.service("receiptService", function ($http) {
	this.getReceiptData = function (data) {
		 
		return $http({
			method: 'POST',
			url:baseUrl+RECEIPT_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.getReceiptDataByVchNumber = function (data) {
		 
		return $http({
			method: 'POST',
			url:baseUrl+RECEIPT_BY_VOUCHER_NUMBER_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	

	
	
	
});

