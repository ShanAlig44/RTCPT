app.service("cmpService", function ($http) {	
	this.saveCompany= function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+CREATE_COMPANY,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}

	this.regionsList= function () {
		return $http({
			method: 'GET',
			url:baseUrl+REGIONS_LIST,
			contentType: 'application/json',
			//data: JSON.stringify(data),
		});
	}
	
		
});

