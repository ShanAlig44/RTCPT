var app = angular.module('cmpApp', []);
app.controller('cmpCtrl', function(cmpService,$scope,$location) {

	/*get all region */
	
	cmpService.regionsList().then(
			function(response) {
				debugger;
				if (response.status == 200) {
					    $scope.regions   = response.data
				}
			}, function (er) {
				if(er.status==400)
					alert(er.data.responseDescription);
			});
	
	
	/*create region*/
	
	$scope.cmpSubmit = function() {
		var  data = {
				"region":$scope.region,
				"name":$scope.name,
				"concernedExecutive":$scope.concernedExecutive,
				"contactNumber":$scope.contactNumber,
				"email":$scope.email,
				"address":$scope.address,
				"tenderNumber":$scope.tenderNumber,
				"pbgAmount":$scope.pbgAmount,
				"pbgIssueBank":$scope.pbgIssueBank,
				"pbgNumber":$scope.pbgNumber,
				"pbgIssueDate":$scope.pbgIssueDate,
				"pbgExpireDate":$scope.pbgExpireDate,
				"bgRefNumber":$scope.bgRefNumber,
				"poNumber":$scope.poNumber
				
				}
		debugger;
		cmpService.saveCompany(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
							alert("Company has been successfully created")
							var url='company'
							window.location.href=url;
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}

});

