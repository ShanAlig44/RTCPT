var app = angular.module('saleCreateApp', []);
app.controller('saleCreateCtrl', function(saleCreateService,$scope,$location,$window,$filter) {
	//debugger;
	
	$scope.batchAllocationsShow = []
	/*get All master*/
	var data  = {}
	saleCreateService.getMaster(data).then(
			function(response) {
				debugger;
				if (response.status == 200) {		

					$scope.ledgers  = response.data.data.ledgers.ledgers;
					$scope.items  = response.data.data.items.items;
					

				}
			}, function (er) {
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);

			});

	/*end*/

	
	
	var totalInvoiveAmount = '';
	var totalInvoiveInventoryAmount = '';
	
debugger
	
$scope.mulQtyRate  = function() {
	var qty  = $scope.quantity;
	var rate  = $scope.rate;
	$scope.amount  =  qty * rate;
}

$scope.batchMulQtyRate  = function() {
	var qty  = $scope.batchQuantity;
	var rate  = $scope.batchRate;
	$scope.batchAmount  =  qty * rate;
}



	$scope.inventoryEntries = []
	$scope.addInventory = function (stkName) {
		document.getElementById("quantity").disabled = false;
		document.getElementById("rate").disabled = false;
		
		if($scope.stockItemName==null || $scope.stockItemName == undefined || $scope.stockItemName == ''){
			alert('Select Stock Item Name');
			return false;
		}
		if($scope.quantity==null || $scope.quantity == undefined || $scope.quantity == ''){
			alert('Please Enter Quantity');
			return false;
		}
		if($scope.rate==null || $scope.rate == undefined || $scope.rate == ''){
			alert('Please Enter Rate');
			return false;
		}
		if($scope.amount==null || $scope.amount == undefined || $scope.amount == ''){
			alert('Please Enter Amount');
			return false;
		}
		
		/*check duplicate entries*/
		/*for(var i=0; i<$scope.inventoryEntries.length; i++){
			if($scope.inventoryEntries[i].ieStockItemName==stkName){
				alert("Duplicate Stock Item " +stkName)
				return false;
			}
			
		}*/
		/*end*/
		
		
		$('.tbl_employees').show();
		
		var iEntries = {
				ieStockItemName : $scope.stockItemName,
				ieQuantity : $scope.quantity,
				ieRate : $scope.rate,
				ieAmount : $scope.amount
		};

		//debugger;
		$scope.inventoryEntries.push(iEntries);
		$scope.stockItemName = '';
		$scope.quantity = '';
		$scope.rate = '';
		$scope.amount = '';
		
		
		var totalQuantity = null;
		var totalAmount = null;
		debugger;
		for(var i=0; i<$scope.inventoryEntries.length; i++){
			totalQuantity+= parseInt($scope.inventoryEntries[i].ieQuantity);
			totalAmount+= parseInt($scope.inventoryEntries[i].ieAmount);
		}
			$scope.totalQuantityVar = parseInt(totalQuantity);
			$scope.totalAmountVar = parseInt(totalAmount);
			 
			 
		
	}
	
	
	$scope.removeRow = function (index) {
		var name = $scope.inventoryEntries[index].ieStockItemName;
		var qty = $scope.inventoryEntries[index].ieQuantity;
		var amount = $scope.inventoryEntries[index].ieAmount;
	 
		
		if ($window.confirm("Do you want to delete stock : " + name + "?")) {
			$scope.inventoryEntries.splice(index, 1);
			var totalQuantity = null;
			var totalAmount = null;
		 
			for(var i=0; i<$scope.inventoryEntries.length; i++){
				totalQuantity+= parseInt($scope.inventoryEntries[i].ieQuantity);
				totalAmount+= parseInt($scope.inventoryEntries[i].ieAmount);
			}
				$scope.totalQuantityVar = parseInt(totalQuantity);
				$scope.totalAmountVar = parseInt(totalAmount);
		}
	}
	
	 
	
	$scope.editRow = function (index) {
		 $scope.enabledEdit[index] =  true;
	}
	
	$scope.checkDuplicateItem = function(stkName) {
		for(var i=0; i<$scope.inventoryEntries.length; i++){
			if($scope.inventoryEntries[i].ieStockItemName==stkName){
				alert("Duplicate  Item " +stkName)
				$('#batchAllocationSave').modal("hide");
				$scope.stockItemName = ''
				return false;
			}
			
		}
	}
	
	$('#batchAllocation').change(function(){
		debugger
	 	$scope.batchAllocations = []
		$scope.batchRate = '';
		document.getElementById("batchRate").disabled = false;
		  var title = $(this).val();
		  $('.modal-title').html(title);
		  $('#batchAllocationSave').modal();
		});
	
	
	
	$('#batchAllocationShow').change(function(){
		debugger
	 	$scope.batchAllocations = []
		$scope.batchRate = '';
		document.getElementById("batchRate").disabled = false;
		  var title = $(this).val();
		  $('.modal-title').html(title);
		  $('#batchAllocationShow').modal();
		});
	
	
	$scope.batchAllocations = []
	$scope.addBatchAllocations = function() {
			if($scope.batchQuantity==null || $scope.batchQuantity == undefined || $scope.batchQuantity == ''){
				alert('Please Enter Quantity');
				return false;
			}
			if($scope.batchRate==null || $scope.batchRate == undefined || $scope.batchRate == ''){
				alert('Please Enter Rate');
				return false;
			}
			if($scope.batchAmount==null || $scope.batchAmount == undefined || $scope.batchAmount == ''){
				alert('Please Enter Amount');
				return false;
			}
			var bAEntries = {
					bAstockItemName : $scope.stockItemName,
					bAgodown : $scope.godownName,
					bAorderNumber : $scope.orderNumber,
					bAbatchAmount : $scope.batchAmount,
					bAbatchRate : $scope.batchRate,
					bAbatchQuantity : $scope.batchQuantity
					 
			};
			$scope.batchAllocations.push(bAEntries);
			$scope.batchAllocationsShow.push(bAEntries);
			var totalBatchAmount = null;
			var totalBatchQty = null;
			for(var i=0; i<$scope.batchAllocations.length; i++){
				totalBatchAmount+= parseInt($scope.batchAllocations[i].bAbatchAmount);
				totalBatchQty+= parseInt($scope.batchAllocations[i].bAbatchQuantity);

			}
			$scope.batchTotalQuantityVar = parseInt(totalBatchQty);
			$scope.batchTotalAmountVar   = parseInt(totalBatchAmount);
			
			document.getElementById("batchRate").disabled = true;
			$scope.godownName = '';
			$scope.orderNumber = '';
			$scope.batchQuantity = '';
			$scope.batchAmount = '';
			$scope.batchRate = $scope.batchAllocations[0].bAbatchRate;
	}
	
	$scope.removeRowBatchAllocations = function(index) {
			if ($window.confirm("Do you want to delete ?")) {
				$scope.batchAllocations.splice(index, 1);
				$scope.batchAllocationsShow.splice(index, 1);
				var totalBatchAmount = null;
				var totalBatchQty = null;
				debugger;
				for(var i=0; i<$scope.batchAllocations.length; i++){
					totalBatchAmount+= parseInt($scope.batchAllocations[i].bAbatchAmount);
					totalBatchQty+= parseInt($scope.batchAllocations[i].bAbatchQuantity);

				}
				$scope.batchTotalQuantityVar = parseInt(totalBatchQty);
				$scope.batchTotalAmountVar   = parseInt(totalBatchAmount);
					
			}
	}
	

	$scope.ledgerEntries = []
	$scope.addLedgerEntries = function () {
		if($scope.ledgerName==null || $scope.ledgerName == undefined || $scope.ledgerName == ''){
			alert('Select Ledge Name');
			return false;
		}

		if($scope.ledgerAmount==null || $scope.ledgerAmount == undefined || $scope.ledgerAmount == ''){
			alert('Please Enter Amount');
			return false;
		}


		$('.ledgerEntries_tbl').show();

		var lEntries = {
				leLedgerName : $scope.ledgerName,
				leLedgerPercentage : $scope.ledgerPercentage,
				leLedgerAmount : $scope.ledgerAmount
		};

		$scope.ledgerEntries.push(lEntries);
		$scope.ledgerName = '';
		$scope.ledgerPercentage = '';
		$scope.ledgerAmount = '';

		var totalLedgerAmount = null;
		for(var i=0; i<$scope.ledgerEntries.length; i++){
			totalLedgerAmount+= parseInt($scope.ledgerEntries[i].leLedgerAmount);

		}
		$scope.totalLedgerAmountVar = parseInt(totalLedgerAmount);
		totalInvoiveLedgderAmount = parseInt(totalLedgerAmount);

	}
	
	
	$scope.removeLedgreEntriesRow = function (index) {
		var name = $scope.ledgerEntries[index].leLedgerName;
		 
		
		if ($window.confirm("Do you want to delete ledger: " + name + "?")) {
			$scope.ledgerEntries.splice(index, 1);
			var totalAmount = null;
			for(var i=0; i<$scope.ledgerEntries.length; i++){
				totalAmount+= parseInt($scope.ledgerEntries[i].leLedgerAmount);
			}
				$scope.totalLedgerAmountVar = parseInt(totalAmount);
				
		}
	}
	
	
	$scope.showLedgerEntries =  function() {
		
		$('.ledgerEntries').show();
		$('.ledgerEntriesHeader').show();
		$('.showLedgerEntriesId').hide();
		$('.hideLedgerEntriesId').show();
		$('.ledgerEntries_tbl').show();
		
		
		
		
	} 

	$scope.hideLedgerEntries =  function() {
		$('.ledgerEntries').hide();
		$('.ledgerEntriesHeader').hide();
		$('.showLedgerEntriesId').show();
		$('.hideLedgerEntriesId').hide();
		$('.ledgerEntries_tbl').hide();
	}
	
	debugger;
	$scope.saveBatchAllocation = function(stockItemName) {
		debugger;
		
		if($scope.batchAllocations.length==0 || $scope.batchAllocations==null || $scope.batchAllocations == undefined){
			alert("No record, Batch allocation")
			return false;
		}
		if ($window.confirm("Do you want to save batch details for particular item: " + stockItemName + "?")) {
			
		
			//$('#batchAllocationshow').modal().hide();
			$('.batchAllocationSave').modal('hide');
			$scope.amount 	= $scope.batchTotalAmountVar;
			$scope.quantity = $scope.batchTotalQuantityVar;
			$scope.rate		= $scope.batchAllocations[0].bAbatchRate;
			document.getElementById("amount").disabled = true;
			document.getElementById("quantity").disabled = true;
			document.getElementById("rate").disabled = true;

		}
		
	}
	
	 
	
	
	$scope.showBatchAllocations = function(stockItemName) {
		
		debugger
		$scope.batchAllocationsShowByItem = [];
		for(var i = 0; i<$scope.batchAllocationsShow.length; i++){
			if(stockItemName == $scope.batchAllocationsShow[i].bAstockItemName){
				var bAEntries = {
						bAstockItemName : $scope.batchAllocationsShow[i].bAstockItemName,
						bAgodown        : $scope.batchAllocationsShow[i].bAgodown,
						bAorderNumber   : $scope.batchAllocationsShow[i].bAorderNumber,
						bAbatchAmount   : $scope.batchAllocationsShow[i].bAbatchAmount,
						bAbatchRate 	: $scope.batchAllocationsShow[i].bAbatchRate,
						bAbatchQuantity : $scope.batchAllocationsShow[i].bAbatchQuantity

				};
				$scope.batchAllocationsShowByItem.push(bAEntries);		 
			}
		}
	}

	$scope.saveSaleWithInventory = function() {
		
		if($scope.voucherNumber== null || $scope.voucherNumber == undefined || $scope.voucherNumber == ''){
			alert("Enter voucher number")
			return false;
		}
		
		if($scope.voucherDate== null || $scope.voucherDate == undefined || $scope.voucherDate == ''){
			alert("Enter voucher date")
			return false;
		}
		
		if($scope.inventoryEntries== null || $scope.inventoryEntries == undefined || $scope.inventoryEntries == ''){
			alert("Enter Stock Name")
			return false;
		}
		/*if($scope.ledgerEntries== null || $scope.ledgerEntries == undefined || $scope.ledgerEntries == ''){
			alert("Enter voucher date")
			return false;
		}*/
		
		var inventoryAmount = ($scope.totalAmountVar==undefined)?0:$scope.totalAmountVar; 
		var ledgerAmount    = ($scope.totalLedgerAmountVar==undefined)?0:$scope.totalLedgerAmountVar;
		var invoiveAmount  = inventoryAmount + ledgerAmount;
		 var vchDate  = $filter('date')($scope.voucherDate, "yyyyMMdd");
		
		
		
		var data= {
				
				"voucherNumber":$scope.voucherNumber,
				"reference":$scope.reference,
				"voucherDate":vchDate,
				"narration":$scope.narration,
				"partyLedgerName":$scope.partyLedgerName,
				"saleLedger":$scope.saleLedger,
				"totalAmount":invoiveAmount,
				"inventoryEntries":$scope.inventoryEntries,
				"batchAllocations":$scope.batchAllocations,
				"ledgerEntries":$scope.ledgerEntries				
		}
		debugger;
		
		saleCreateService.createSaleVoucherInventory(data).then(
				function(response) {
					debugger;
					if (response.status == "200") {
						alert("Voucher  has been created")
						var url='create-sale';
						window.location.href=url;
					}
				}, function (er) {
					if(er.status==400)
						alert(er.data.responseDescription);
				});
	}

	
	
	
});

