var app = angular.module('specializationApp', []);
app.controller('specializationCtrl', function(specializationService,$scope,$location) {

	
	/*get all channel partner  by range*/
	
	
	
	$scope.submitRange = function() {
		 
	var data  = {"range":$scope.range}
	specializationService.getSpecializationByRange(data).then(
			function(response) {
				debugger;
				if (response.status == 200) {
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
					
					    $scope.specializationByRange   = response.data
					   
				}
			}, function (er) {
				//if(er.status==400)
					//alert(er.data.responseDescription);
			});
	}
	 

});

