var app = angular.module('receiptApp', []);
app.controller('receiptCtrl', function(receiptService,$scope,$location) {
	
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
	receiptService.getReceiptData(data).then(
			function(response) {
				debugger
				if(response.data.data.receipts==null){
					alert("No Record Found");
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
					$scope.receipts 			=   response.data.data.receipts

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


	/*$scope.dateWiseDataReceipts= function() {
		//debugger;
		var data = {"fromDate":$scope.fromDate,"toDate":$scope.toDate}
		receiptService.getReceiptData(data).then(
				function(response) {
					//debugger
					if(response.data.data.receipts==null){
						alert("No Record Found");
						return false
					}
					if (response.status == 200) {		
						$scope.receipts 			=   response.data.data.receipts

						$scope.companyNameDashBoard 	=   response.data.data.headerValue.companyName
						$scope.ipAddress			 	=   response.data.data.headerValue.ipAddress
						$scope.totalSalesValue			=	response.data.data.headerValue.totalSaleAmt;
						$scope.totalPurchaseValue		=	response.data.data.headerValue.totalPurAmt;

						$scope.totalSalesOrderValue		=	response.data.data.headerValue.totalSOAmt;
						$scope.totalPurchaseOrderValue	=	response.data.data.headerValue.totalPOAmt;

						$scope.totalPaymentValue		=	response.data.data.headerValue.totalPaymentAmt;
						$scope.totalReceiptValue		=	response.data.data.headerValue.totalReceiptAmt;

					}
				}, function (er) {
					debugger;
					if(er.status==400)
						alert(er.data.responseDescription);
				});

	}*/

	$scope.receiptDetailByVoucherNumber = function(masterId,VchNumber) {
		
		$scope.creditDetails 	=   null;
		$scope.ledgerName 		=   null;
		$scope.ledgerAmount 	=   null;
		$scope.instrumentDate 		=   null;
		$scope.instrumentNumber 	=   null;
		
		var data = {"masterId":masterId}
		receiptService.getReceiptDataByVchNumber(data).then(
				function(response) {
					debugger
					if(response.data.data.receiptDetail==null){
						alert("No Record Found");
						return false
					}
					if (response.status == 200) {		
						$scope.creditDetails 	=   response.data.data.receiptDetail.creditDetails
						$scope.ledgerName 		=   response.data.data.receiptDetail.ledgerName
						$scope.ledgerAmount 	=   response.data.data.receiptDetail.ledgerAmount
						$scope.instrumentDate 		=   response.data.data.receiptDetail.instrumentDate
						$scope.instrumentNumber 	=   response.data.data.receiptDetail.instrumentNumber
						$scope.voucherNumber		=   VchNumber
						
						
					}
				}, function (er) {
					debugger;
					if(er.status==400)
						alert(er.data.responseDescription);
					document.getElementById('loader').style.display = 'none';
				});
	}

	

	$scope.dateWiseData = function() {
		debugger;
		var data = {"fromDate":$scope.fromDate,"toDate":$scope.toDate}
		var url='receipt-report#?fromDate='+$scope.fromDate+'&toDate='+$scope.toDate;
		window.location.href=url;
		window.location.reload();




	}
	
	

});

