var app = angular.module('loginApp', []);
app.controller('loginCtrl', function(loginService,$scope,$location) {
	
	$scope.regIpAddress = $location.search().ipaddress; 

	$scope.setIpAddress = function() {
		if($scope.setIpAddressChk){
			$scope.IPAddress = null
			document.getElementById("iPAddressId").disabled = false;
		}else{
			$scope.IPAddress = $scope.regIpAddress
			document.getElementById("iPAddressId").disabled = true;
		}
		
	}
	
	$scope.loginContent = function() {
		var  data = {"name":$scope.name, "password":$scope.password}
		debugger;
		loginService.checkCredential(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
						var url='tally-url#?ipaddress='+response.data.ipAddress;
						//var url='tally-url'
						window.location.href=url;
						$scope.regIpAddress = response.data.ipAddress
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}

	$scope.registration = function() {
		var  data = {"name":$scope.name, "password":$scope.password,"mobile":$scope.mobile,"address":$scope.address
				,"confirmPassword":$scope.confirmPassword, "tallySerialNumber":$scope.tallySerialNumber,"email":$scope.email
		}
		debugger;
		loginService.registration(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
						var url='index';

						window.location.href=url;

					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}

	$scope.checkIpAddress = function() {

		if($scope.IPAddress == null || $scope.IPAddress == undefined || $scope.IPAddress === ""){
			alert("Enter IP Address");
			return false;
		}
		var  data = {"ipAddress":$scope.IPAddress}
		debugger;
		loginService.checkIpAddress(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
						document.getElementById("ipAddress").style.display = "none";
						document.getElementById("companyList").style.display = "block";
						$scope.companyList = response.data.data.companies
	
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}


	$scope.getDashBoard = function() {
		var  data = {"companyName":$scope.companyName}
		debugger;
		loginService.addCmpIntoSession(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
						var url='index';
						window.location.href=url;
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}



});

