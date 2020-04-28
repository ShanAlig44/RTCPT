app.service("dataService", function ($http) {
	
	this.emailConfigurationService = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+SAVE_EMIAL_CONFIGURATION,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.allEmailConfiguration = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+All_EMIAL_CONFIGURATION,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.updateEmailService = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+UPDATE_EMIAL_CONFIGURATION,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	this.deleteEmailService = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+DELETE_EMIAL_CONFIGURATION,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	
	
});

