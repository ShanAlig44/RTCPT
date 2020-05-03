var app = angular.module('channelPartnerApp', []);
app.controller('channelPartnerCtrl', function(channelPartnerService,$scope,$location) {

	
	/*get all channel partner  */
	
	channelPartnerService.getAllChannelPartner().then(
			function(response) {
				debugger;
				if (response.status == 200) {
					    $scope.allChannelPartnerList   = response.data
					    
					    $(document).ready(function() {
							$('#datatables').DataTable( {
								dom: 'Bfrtip',
								buttons: [{
									extend: "copy",
									className: "btn-sm"
								}, {
									extend: "csv",
									className: "btn-sm"
								}, {
									extend: "excel",
									className: "btn-sm"
								}, {
									extend: "pdf",
									className: "btn-sm"
								}, {
									extend: "print",
									className: "btn-sm"
								}],
								responsive: !0

							} );
						} );
				}
			}, function (er) {
				if(er.status==400)
					alert(er.data.responseDescription);
			});
	
	
	/*get all region */
	
	channelPartnerService.regionsList().then(
			function(response) {
				debugger;
				if (response.status == 200) {
					    $scope.regions   = response.data
				}
			}, function (er) {
				if(er.status==400)
					alert(er.data.responseDescription);
			});
	
	
	$scope.cmpByRegion  = function(region) {
		
		var data = {"region":region	}
		channelPartnerService.cmpByRegionList(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
						    $scope.companies   = response.data
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
		
		
	}
	
	
	
	$scope.cmpData = function(id) {
		var data  =  {"id":id}
		
		channelPartnerService.cmpDataById(data).then(
				function(response) {
					debugger;
					if (response.status == 200) {
						    
						$scope.region                     = response.data.region			
						$scope.name					= response.data.name              
						$scope.concernedExecutive       = response.data.concernedExecutive
						$scope.contactNumber            = response.data.contactNumber     
						$scope.email                    = response.data.email             
						$scope.address                  = response.data.address           
						$scope.tenderNumber             = response.data.tenderNumber      
						$scope.pbgAmount                = response.data.pbgAmount         
						$scope.pbgIssueBank             = response.data.pbgIssueBank      
						$scope.pbgNumber                = response.data.pbgNumber         
						$scope.pbgIssueDate             = response.data.pbgIssueDate      
						$scope.pbgExpireDate            = response.data.pbgExpireDate     
						$scope.bgRefNumber              = response.data.bgRefNumber       
						$scope.poNumber                 = response.data.poNumber                
						
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
		
	}
	
	
	 

});

