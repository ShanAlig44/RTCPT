var app = angular.module('billsReceivableApp', []);
app.controller('billsReceivableCtrl', function(dataService,$scope,$location) {
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
	dataService.getBillReceivable(data).then(
			function(response) {
				if(response.data.data.outstanding.receivable==null){
					alert("No Record Found");
					return false
					document.getElementById('loader').style.display = 'none';
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
					$scope.billsReceivable 			=   response.data.data.outstanding.receivable
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
				if(er.status==400)
					alert(er.data.responseDescription);
				document.getElementById('loader').style.display = 'none';
			});
	
	$scope.dateWiseData = function() {
		var data = {"fromDate":$scope.fromDate,"toDate":$scope.toDate}
		var url='bills-receivable#?fromDate='+$scope.fromDate+'&toDate='+$scope.toDate;
		window.location.href=url;
		window.location.reload();
	}
	
	$scope.sendEmailToCustomer = function(partyName) {
		var data  = {"partyName":partyName}
		document.getElementById('loader').style.display = 'block';
		dataService.sendEmailToCustomer(data).then(
				function(response) {
					if(response.status==200){
						alert("Email has been sent to "+ partyName)
						document.getElementById('loader').style.display = 'none';
						/*var url   = 'bills-receivable';
						window.location.href=url;*/
					}
					
				});
		
	}

});

