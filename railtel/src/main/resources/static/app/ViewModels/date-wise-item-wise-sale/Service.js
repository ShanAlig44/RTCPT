app.service("dataService", function ($http) {
	this.getSaleDateWiseItemWise = function (data) {
		debugger;
		return $http({
			method: 'POST',
			url:baseUrl+DATE_WISE_ITEM_WISE_SALE,
			contentType: 'application/json',
			data: JSON.stringify(data),
		});
	}
	
});

