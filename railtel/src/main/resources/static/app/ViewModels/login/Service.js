app.service("loginService", function ($http) {
	this.checkCredential = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+LOGIN_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	this.registration = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+REGISTRATION,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	this.checkIpAddress = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+IP_ADDRESS,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	this.addCmpIntoSession = function (data) {
		return $http({
			method: 'POST',
			url:baseUrl+COMPANY_LIST,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
	
	
	
});

