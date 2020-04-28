app.service("dashboardService", function ($http) {
	this.getDashboardData = function (data) {
		debugger;
		return $http({
			
			method: 'POST',
			url:baseUrl+DASHBOARD_URL,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
});

