app.service("channelPartnerService", function ($http) {	
	 

	this.regionsList= function () {
		return $http({
			method: 'GET',
			url:baseUrl+REGIONS_LIST,
			contentType: 'application/json',
			//data: JSON.stringify(data),
		});
	}

	this.cmpByRegionList= function (data) {
		return $http({
			method: 'GET',
			url:baseUrl+COMPANY_LIST+""+data.region,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}


	this.cmpDataById= function (data) {
		return $http({
			method: 'GET',
			url:baseUrl+COMPANY_DATA_BY_ID+""+data.id,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}





});

