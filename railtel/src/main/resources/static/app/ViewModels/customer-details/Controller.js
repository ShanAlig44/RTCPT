var app = angular.module('customerDetailsdApp', []);
app.controller('customerDetailsCtrl', function(customerDetailsService,$scope,$location) {
	debugger;
	//document.getElementById('loader').style.display = 'none';

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
	customerDetailsService.getCustomerDetailsData(data).then(
			function(response) {
				debugger
				//document.getElementById('loader').style.display = 'block';
				if(response.data.data.customerDetails==null){
					document.getElementById('loader').style.display = 'none';
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
					$scope.customerDetails 			=   response.data.data.customerDetails

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



	$scope.saleDetailByVoucherNumber = function(masterId) {
		debugger;
		$scope.ledgerEntries 			=   null;
		$scope.inventoryEntries 		=   null;
		$scope.voucherNumber 			=   null;
		$scope.voucherDate			 	=   null;
		$scope.partyLedgerName			=	null;
		var data = {"masterId":masterId}
		customerDetailsService.getSaleDetailsByKey(data).then(
				function(response) {
					debugger
					if(response.data.data.saleDtlByKey==null){
						alert("No Record Found");
						return false
					}
					if (response.status == 200) {		
						$scope.ledgerEntries 			=   response.data.data.saleDtlByKey.ledgerEntries
						$scope.inventoryEntries 		=   response.data.data.saleDtlByKey.inventoryEntries
						$scope.voucherNumber 			=   response.data.data.saleDtlByKey.voucherNumber
						$scope.voucherDate			 	=   response.data.data.saleDtlByKey.voucherDate
						$scope.partyLedgerName			=	response.data.data.saleDtlByKey.partyLedgerName;
						$scope.amount					= 	response.data.data.saleDtlByKey.amount;

					}
				}, function (er) {
					debugger;
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}



	$scope.dateWiseCustomerDetails = function() {
		debugger;

		var data = {"fromDate":$scope.fromDate,"toDate":$scope.toDate}
		var url='customer-report#?fromDate='+$scope.fromDate+'&toDate='+$scope.toDate;
		window.location.href=url;
		window.location.reload();
	}


	$scope.delete   = function(masterId,vchdate) {
		if(masterId==null || masterId=="" || masterId==undefined){
			alert("Not getting voucher number")
			return false;
		}
		if(vchdate==null || vchdate=="" || vchdate==undefined){
			alert("Not getting voucher date")
			return false;
		}
		if(confirm("Do you want to delete  Voucher? Y/N"))
		{
		var data  = {"masterId":masterId, "voucherDate":vchdate}
			customerDetailsService.deleteVoucher(data).then(
				function(response) {
					debugger;
					if (response.status == "200") {
						alert("Voucher  has been deleted")
						var url='customer-report';
						window.location.href=url;
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
		} 
	}


	$scope.showLedgerDetails = function() {
		 
		 $('#ledgerEntries').show();
		 $('#ledgerEntriesShow').hide();
		 $('#ledgerEntriesHide').show();
		 $('#ledgerEntriesTbl').show();
		 $('#add-new-ledger').show();
		 
		 
		 
		 
	}
	$scope.hideLedgerDetails = function() {
		 $('#ledgerEntriesHide').hide();
		 $('#ledgerEntries').hide();
		 $('#ledgerEntriesShow').show();
		 $('#ledgerEntriesTbl').hide();
		 $('#add-new-ledger').hide();
	}
	   
	 
	 
	
	

});

