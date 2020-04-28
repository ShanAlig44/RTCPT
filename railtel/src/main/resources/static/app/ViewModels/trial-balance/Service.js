app.service("dataService", function ($http) {
	
	this.getTrialBalance = function (data) {
		 
		return $http({
			method: 'POST',
			url:baseUrl+TRIAL_BALANCE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

