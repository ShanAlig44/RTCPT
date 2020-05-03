app.service("specializationService", function ($http) {	
	 

	this.getSpecializationByRange= function (data) {
		return $http({
			method: 'GET',
			url:baseUrl+LIST_SPECIALIZATION_BY_RANGE+"?range="+data.range,
			contentType: 'application/json',
		});
	}

});

