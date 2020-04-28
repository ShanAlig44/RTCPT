app.service("regionService", function ($http) {
	this.saveRegion = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+CREATE_REGION+"?region="+data.name,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

