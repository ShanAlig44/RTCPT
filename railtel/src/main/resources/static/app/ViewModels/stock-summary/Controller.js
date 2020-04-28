var app = angular.module('stockSummaryApp', []);
app.controller('stockSummaryCtrl', function(dataService,$scope,$location) {
	debugger;
	document.getElementById('loader').style.display = 'none';
	
	var fromData = null;
	var toData = null;
	var fromDateValue = $location.search().fromDate; 
	var toDateValue = $location.search().toDate; 

	if(toDateValue!=null ){
		fromData =  fromDateValue;
		toData 	 =  toDateValue;
	}else{
		fromData = null;
		toData   = null;
	}


	var data = {"fromDate":fromData,"toDate":toData}
	dataService.getStockSummary(data).then(
			function(response) {
				 
				if (response.status == 200) {		
					document.getElementById('loader').style.display = 'none';
					if(toDateValue!=null ){
						$scope.fromDate =  fromDateValue;
						$scope.toDate 	 =  toDateValue;
					}else{
						$scope.fromDate = null;
						$scope.toDate   = null;
					}
					 debugger
					
					 	$scope.stockSummary                =   response.data.response.stocksummary
					   	$scope.companyNameDashBoard 	    =   response.data.headvalue.companyName;
					 	
							
					/*$(document).ready(function() {
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
					} );*/
				}
			}, function (er) {
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);
				document.getElementById('loader').style.display = 'none';
			});
	
	$scope.showStockSummary  = function() {
		 
		$('.details').show();
		$('.faStockSummaryDown').hide();
		$('.faStockSummaryUp').show();

	}	
	$scope.hideStockSummary  = function() {
		
		$('.details').hide();
		$('.faStockSummaryDown').show();
		$('.faStockSummaryUp').hide();

		 
	
	}	
	
});

