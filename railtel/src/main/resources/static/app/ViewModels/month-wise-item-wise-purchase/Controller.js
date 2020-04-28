var app = angular.module('monthWiseItemWisePurchaseApp', []);
app.controller('monthWiseItemWisePurchaseCtrl', function(dataService,$scope,$location) {
	debugger;

	var fromData = null;
	var toData = null;
	var fromDateValue = $location.search().fromDate; 
	var toDateValue = $location.search().toDate; 

	if(toDateValue!=null ){
		fromData =  fromDateValue;
		toData 	 =  toDateValue;
	}else{
		fromData = "2019-04-01";
		toData   = "2019-04-01";
	}


	var data = {"fromDate":fromData,"toDate":toData}
	dataService.getPurchaseMonthWiseItemWise(data).then(
			function(response) {
				debugger
				if(response.data.data.monthwiseItemwisePurchase==null){
					alert("No Record Found");
					document.getElementById('loader').style.display = 'none';
					return false
				}
				if (response.status == 200) {		
					document.getElementById('loader').style.display = 'none';
					if(toDateValue!=null ){
						$scope.fromDate =  fromDateValue;
						$scope.toDate 	 =  toDateValue;
					}else{
						$scope.fromDate = "2019-04-01";
						$scope.toDate   = "2019-04-01";
					}
					$scope.monthwiseItemwisePurchase =   response.data.data.monthwiseItemwisePurchase
					$scope.companyNameDashBoard 	=   response.data.data.headerValue.companyName
					$scope.ipAddress			 	=   response.data.data.headerValue.ipAddress
					$scope.totalSalesValue			=	response.data.data.headerValue.totalSaleAmt;
					$scope.totalPurchaseValue		=	response.data.data.headerValue.totalPurAmt;
					$scope.totalSalesOrderValue		=	response.data.data.headerValue.totalSOAmt;
					$scope.totalPurchaseOrderValue	=	response.data.data.headerValue.totalPOAmt;
					$scope.totalPaymentValue		=	response.data.data.headerValue.totalPaymentAmt;
					$scope.totalReceiptValue		=	response.data.data.headerValue.totalReceiptAmt;
					
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
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);
				   document.getElementById('loader').style.display = 'none';
			});



	$scope.showDateWiseData = function() {
		debugger;

		var data = {"fromDate":$scope.fromDate,"toDate":$scope.toDate}
		var url='month-wise-item-wise-purchase#?fromDate='+$scope.fromDate+'&toDate='+$scope.toDate;
		window.location.href=url;
		window.location.reload();
	}

});

