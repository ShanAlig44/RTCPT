app.service("saleCreateService", function ($http) {
	
	this.createSaleVoucherInventory = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+CREATE_SALE_WITH_INVENTORY,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.getMaster = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+MASTER,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	/*
	this.deleteVoucher = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+SALE_DELETE_VOUCHER,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}*/
	
	
});

