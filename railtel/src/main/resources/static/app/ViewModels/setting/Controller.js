var app = angular.module('settingApp', []);
app.controller('settingCtrl', function(dataService,$scope,$location) {
	var data = {}
	dataService.allEmailConfiguration(data).then(
			function(response) {
				if (response.status == 200) {		
					document.getElementById('loader').style.display = 'none';
					$scope.companyNameDashBoard 	=   response.data.data.headerValue.companyName
					$scope.ipAddress			 	=   response.data.data.headerValue.ipAddress
					$scope.emailList 	=   response.data.data.emailList
				}
			}, function (er) {
				if(er.status==400)
					alert(er.data.responseDescription);
				document.getElementById('loader').style.display = 'none';
			});




	$scope.updateEmail = function(emailPrimaryKey) {
		var data =  {"id" :$scope.id,
				     "emailServer":$scope.serverName, "serverAddress":$scope.serverAddress,
				     "emailId":$scope.emailId,"password":$scope.emailPassword,
				     "asDefault" : $scope.setDefalut,"serverPort":$scope.serverPort
				     	}
		dataService.updateEmailService(data).then(
				function(response) {
					if (response.status == 200) {		
						alert("Email Configuration Updated")
						var url='setting';
						window.location.href=url;

					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
					document.getElementById('loader').style.display = 'none';
				});
	}

	$scope.updateEmailInfo = function(emailPrimaryKey,server,address,emailId,asDefault,serverPort) {
		debugger;
		$scope.id			  = emailPrimaryKey;
		$scope.serverName     = server; 
		$scope.serverAddress  = address;
		$scope.emailId        = emailId;
		$scope.serverPort	  = serverPort	
		$scope.setDefalut     = asDefault=='false'?null:true;
		
		document.getElementById('btnEmailUpdate').style.display = 'block';
		document.getElementById("btnEmailCreate").disabled = true;
		
		
		
	}

	
	$scope.deleteEmail = function(emailPrimaryKey) {
		var data =  {"id" :$scope.id}
		dataService.deleteEmailService(data).then(
				function(response) {
					if (response.status == 200) {		
						alert("Email Configuration Deleted")
						var url='setting';
						window.location.href=url;
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
					document.getElementById('loader').style.display = 'none';
				});
	}

	$scope.selectEmailServer = function() {

		var serverName = $scope.serverName;
		if(serverName=="gmail"){
			$scope.serverAddress   = "smtp.gmail.com"
				document.getElementById("idServerAddress").disabled = true;
		}

		if(serverName=="yahoomail"){
			$scope.serverAddress   = "smtp.mail.yahoo.com"
				document.getElementById("idServerAddress").disabled = true;
		}


		if(serverName=="hotmail"){
			$scope.serverAddress   = "smtp.live.com"
				document.getElementById("idServerAddress").disabled = true;
		}

		if(serverName == "userDdfined")
			document.getElementById("idServerAddress").disabled = false;

	}


	$scope.emailSubmit = function() {
		document.getElementById('loader').style.display = 'none';
		if($scope.serverName==null || $scope.serverName == "" || $scope.serverName == undefined){
			alert("Invalid Server Name");
			return   false;
		}
		if($scope.serverAddress==null || $scope.serverAddress == "" || $scope.serverAddress == undefined){
			alert("Invalid Server Address");
			return   false;
		}

		if($scope.emailId==null || $scope.emailId == "" || $scope.emailId == undefined){
			alert("Invalid Email Id");
			return   false;
		}

		if($scope.emailPassword==null || $scope.emailPassword == "" || $scope.emailPassword == undefined){
			alert("Invalid Password");
			return   false;
		}
		var asDefaultValue  =  $scope.setDefalut==null?false:true;
		var data = {"emailServer":$scope.serverName, "serverAddress":$scope.serverAddress,"emailId":$scope.emailId,"password":$scope.emailPassword
				,"asDefault" :asDefaultValue,"serverPort":$scope.serverPort
		}
		dataService.emailConfigurationService(data).then(
				function(response) {

					if(response.status == 200){
						alert("Email Configuration Saved");
						document.getElementById('loader').style.display = 'none';
						$scope.serverName=null;
						$scope.serverAddress=null;
						$scope.emailId=null;
						$scope.emailPassword=null;

						var url='setting';
						window.location.href=url;

					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
					document.getElementById('loader').style.display = 'none';
				});
	}

});

