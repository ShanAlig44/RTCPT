var app = angular.module('regionApp', []);
app.controller('regionCtrl', function(regionService,$scope,$location) {

	/*get all region */
	
//	regionService.regionList(data).then(
//			function(response) {
//				debugger;
//				if (response.status == 200) {
//					var url='region'
//						window.location.href=url;
//				}
//			}, function (er) {
//				if(er.status==400)
//					alert(er.data.responseDescription);
//			});
	
	
	/*create region*/
	
	$scope.regionSubmit = function() {
		var  data = {"name":$scope.region}
		debugger;
		regionService.saveRegion(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
							alert("Region has been successfully created")
							var url='region'
							window.location.href=url;
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}

});

