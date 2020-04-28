app.service("dataService", function ($http) {
	
	this.getRatioAnalysis = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+RATIO_ANALYSIS,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

