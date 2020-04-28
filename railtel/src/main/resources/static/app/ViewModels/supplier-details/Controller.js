var app = angular.module('supplierDetailsdApp', []);
app.controller('supplierDetailsCtrl', function(supplierDetailsService,$scope,$location) {

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
	supplierDetailsService.getSUpplierDetailsData(data).then(
			function(response) {
				debugger
				if(response.data.data.supllierDetails==null){
					alert("No Record Found");
					return false
				}
				if (response.status == 200) {		
					
					//angular.element(document.getElementById('item_id'))[0].disabled = true;
					document.getElementById('loader').style.display = 'none';

					if(toDateValue!=null ){
						$scope.fromDate =  fromDateValue;
						$scope.toDate 	 =  toDateValue;
					}else{
						$scope.fromDate = "2019-04-01";
						$scope.toDate   = "2019-04-01";
					}
					$scope.supplierDetails 			=   response.data.data.supllierDetails
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
			});



	$scope.dataWiseDataSupplierDetails = function() {
		debugger;
		var data = {"fromDate":$scope.fromDate,"toDate":$scope.toDate}
		var url='supplier-report#?fromDate='+$scope.fromDate+'&toDate='+$scope.toDate;
		window.location.href=url;
		window.location.reload();




	}

	$scope.supllierDetailByVoucherNumber = function(masterId) {
		debugger;
		$scope.ledgerEntries 			=   null;
		$scope.inventoryEntries 		=   null;
		$scope.voucherNumber 			=   null;
		$scope.voucherDate			 	=   null;
		$scope.partyLedgerName			=	null;
		var data = {"masterId":masterId}
		supplierDetailsService.getSupplierDetailsByKey(data).then(
				function(response) {
					debugger
					if(response.data.data.suplierDtlByKey==null){
						alert("No Record Found");
						return false
					}
					if (response.status == 200) {		
						$scope.ledgerEntries 			=   response.data.data.suplierDtlByKey.ledgerEntries
						$scope.inventoryEntries 		=   response.data.data.suplierDtlByKey.inventoryEntries
						$scope.voucherNumber 			=   response.data.data.suplierDtlByKey.voucherNumber
						$scope.voucherDate			 	=   response.data.data.suplierDtlByKey.voucherDate
						$scope.partyLedgerName			=	response.data.data.suplierDtlByKey.partyLedgerName;
						$scope.amount					= 	response.data.data.suplierDtlByKey.amount;

					}
				}, function (er) {
					debugger;
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}

	$scope.closePop = function() {
		$scope.ledgerEntries 			=   null;
		$scope.inventoryEntries 		=   null;
		$scope.voucherNumber 			=   null;
		$scope.voucherDate			 	=   null;
		$scope.partyLedgerName			=	null;

		var url='supplier-report';
		window.location.href=url;	
	}
});






