var app = angular.module('pnlApp', []);
app.controller('pnlCtrl', function(dataService,$scope,$location) {
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
	dataService.getProfitNLoss(data).then(
			function(response) {
				debugger
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
					
					   	$scope.companyNameDashBoard 	    =   response.data.headerValues.companyName;
					 	$scope.openingStockAmount			=   response.data.openingStock.amount
					 	$scope.openingStockName				=   response.data.openingStock.name
					 	$scope.openingStockAllLedger		=   response.data.openingStock.ledgerAmount
					 	
					 	debugger
					 	if(response.data.purchaseAccounts!=null){
					 		$scope.purchaseAccountsAmount		=   response.data.purchaseAccounts.amount
					 		$scope.purchaseAccountsName			=   response.data.purchaseAccounts.name
					 		$scope.purchaseAccountsAllLedger	=   response.data.purchaseAccounts.ledgerAmount

					 	}
					 	 

					 	if(response.data.directExpenses!=null) {
					 		$scope.directExoensesAmount			=	response.data.directExpenses.amount 
					 		$scope.directExoensesName			=	response.data.directExpenses.name
					 		$scope.directExoensesAllLedger		=	response.data.directExpenses.ledgerAmount
					 	}
					 
					 	if(response.data.grossProfit!=null){
					 		$scope.grossProfitCOAmount			=	response.data.grossProfit.amount
					 		$scope.grossProfitCOName			=	response.data.grossProfit.name
					 		$scope.grossProfitCOAllLedger		=	response.data.grossProfit.ledgerAmount
					 	}
					 
					 	if(response.data.indirectExpenses!=null){
					 		$scope.indirectExpensesAmount		=	response.data.indirectExpenses.amount
					 		$scope.indirectExpensesName			=	response.data.indirectExpenses.name
					 		$scope.indirectExpensesAllLedger	=	response.data.indirectExpenses.ledgerAmount
					 	}
					 	
					 	if(response.data.grossProfit!=null){
					 		$scope.grossProfitAmount			=   response.data.grossProfit.amount
					 		$scope.grossProfitName				=   response.data.grossProfit.name
					 		$scope.grossProfitAllLedger			=   response.data.grossProfit.ledgerAmount
					 	}
					 	
					 	if(response.data.nettProfit!=null){
					 		$scope.nettProfitAmount				=   response.data.nettProfit.amount
					 		$scope.nettProfitName				=   response.data.nettProfit.name
					 		$scope.nettProfitAllLedger			=   response.data.nettProfit.ledgerAmount
					 	}
					 
					 
					 	if(response.data.salesAccounts!=null){
					 		$scope.salesAccountsAmount			=	response.data.salesAccounts.amount
					 		$scope.salesAccountsName			=	response.data.salesAccounts.name
					 		$scope.salesAccountsAllLedger		=	response.data.salesAccounts.ledgerAmount
					 	}
						
					 	if(response.data.closingStock!=null){
					 		$scope.closingStockAmount			=	response.data.closingStock.amount
					 		$scope.closingStockName				=	response.data.closingStock.name
					 		$scope.closingStockAllLedger		=	response.data.closingStock.ledgerAmount
					 	}
					 	
					 	if(response.data.grossProfitBF!=null){
					 		$scope.grossProfitBFAmount			=	response.data.grossProfitBF.amount
					 		$scope.grossProfitBFName			=	response.data.grossProfitBF.name
					 		$scope.grossProfitBFAllLedger		=	response.data.grossProfitBF.ledgerAmount
					 	}
					 	
					 	if(response.data.indirectIncomes!=null){
					 		$scope.indirectIncomesAmount		=   response.data.indirectIncomes.amount
					 		$scope.indirectIncomesName			=	response.data.indirectIncomes.name	
					 		$scope.indirectIncomesAllLedger		=	response.data.indirectIncomes.ledgerAmount
					 	}
					 	
					 	if(response.data.grossLossBF!=null){
					 		$scope.grossLossBFAmount		=   response.data.grossLossBF.amount
					 		$scope.grossLossBFName			=	response.data.grossLossBF.name	
					 		$scope.grossLossBFAllLedger		=	response.data.grossLossBF.ledgerAmount
					 	}
					 	
						if(response.data.grossLossCO!=null){
					 		$scope.grossLossCOAmount		=   response.data.grossLossCO.amount
					 		$scope.grossLossCOName			=	response.data.grossLossCO.name	
					 		$scope.grossLossCOAllLedger		=	response.data.grossLossCO.ledgerAmount
					 	}
					 	
					 	
					 	
					 	
					   	$scope.totalExpense					=   response.data.totalExpense
					   	$scope.totalIncome					=   response.data.totalIncome
					   		
					   		
					   		
					   		
					   		
					 
							
							
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
	
	$scope.showOpeningStock  = function() {
		$('.openingStock').show();
		$('.faOpeningStockUp').hide();
		$('.faOpeningStockDown').show();

	}

	$scope.hideOpeningStock  = function() {

		$('.openingStock').hide();
		$('.faOpeningStockUp').show();
		$('.faOpeningStockDown').hide();
	
	}
	
	$scope.showPurAc  = function() {
		$('.purAc').show();
		$('.faPurAcUp').hide();
		$('.faPurAcDown').show();

	}

	$scope.hidePurAc  = function() {
		$('.purAc').hide();
		$('.faPurAcUp').show();
		$('.faPurAcDown').hide();
	}
	
	$scope.showDEAc  = function() {
		$('.dEAc').show();
		$('.faDEUp').hide();
		$('.faDEDown').show();

	}

	$scope.hideDEAc  = function() {
		$('.dEAc').hide();
		$('.faDEUp').show();
		$('.faDEDown').hide();
	}
	
	$scope.showGFAc  = function() {
		$('.gFAc').show();
		$('.faGFUp').hide();
		$('.faGFDown').show();

	}

	$scope.hideGFAc  = function() {
		$('.gFAc').hide();
		$('.faGFUp').show();
		$('.faGFDown').hide();
	}
	
	
	$scope.showIEAc  = function() {
		$('.iEAc').show();
		$('.faIEUp').hide();
		$('.faIEDown').show();

	}

	$scope.hideIEAc  = function() {
		$('.iEAc').hide();
		$('.faIEUp').show();
		$('.faIEDown').hide();
	}
	
	
	$scope.showNPAc  = function() {
		$('.nPAc').show();
		$('.faNPUp').hide();
		$('.faNPDown').show();

	}

	$scope.hideNPAc  = function() {
		$('.nPAc').hide();
		$('.faNPUp').show();
		$('.faNPDown').hide();
	}
	
	
	/****/
	
	$scope.showSAC  = function() {
		$('.sAc').show();
		$('.faSAUp').hide();
		$('.faSADown').show();

	}

	$scope.hideSAC  = function() {
		$('.sAc').hide();
		$('.faSAUp').show();
		$('.faSADown').hide();
	}
	
	$scope.showCS  = function() {
		$('.cStk').show();
		$('.faCSUp').hide();
		$('.faCSDown').show();

	}

	$scope.hideCS  = function() {
		$('.cStk').hide();
		$('.faCSUp').show();
		$('.faCSDown').hide();
	}
	
	
	$scope.showGFBF  = function() {
		$('.gFBF').show();
		$('.faGFBFUp').hide();
		$('.faGFBFDown').show();

	}

	$scope.hideGFBF  = function() {
		$('.gFBF').hide();
		$('.faGFBFUp').show();
		$('.faGFBFDown').hide();
	}
	
	$scope.showII  = function() {
		$('.iI').show();
		$('.faIIUp').hide();
		$('.faIIDown').show();

	}

	$scope.hideII  = function() {
		$('.iI').hide();
		$('.faIIUp').show();
		$('.faIIDown').hide();
	}
	

	
	$scope.showGLBF  = function() {
		$('.gLBF').show();
		$('.faGLBFUp').hide();
		$('.faGLBFDown').show();

	}

	$scope.hideGLBF  = function() {
		$('.gLBF').hide();
		$('.faGLBFUp').show();
		$('.faGLBFDown').hide();
	}



	$scope.showGLCO  = function() {
		$('.gLCO').show();
		$('.faGLCOUp').hide();
		$('.faGLCODown').show();

	}

	$scope.hideGLCO  = function() {
		$('.gLCO').hide();
		$('.faGLCOUp').show();
		$('.faGLCODown').hide();
	}

	
	
	
	
	
	
	$scope.showBalanceSheet = function() {
		
		$('.faPlDown').show();
		$('.faPlUp').hide();
		
		
		$('.openingStock').show();
		$('.faOpeningStockUp').hide();
		$('.faOpeningStockDown').show();
		$('.purAc').show();
		$('.faPurAcUp').hide();
		$('.faPurAcDown').show();
		$('.dEAc').show();
		$('.faDEUp').hide();
		$('.faDEDown').show();
		$('.gFAc').show();
		$('.faGFUp').hide();
		$('.faGFDown').show();
		$('.iEAc').show();
		$('.faIEUp').hide();
		$('.faIEDown').show();

		$('.nPAc').show();
		$('.faNPUp').hide();
		$('.faNPDown').show();

		$('.sAc').show();
		$('.faSAUp').hide();
		$('.faSADown').show();
		$('.cStk').show();
		$('.faCSUp').hide();
		$('.faCSDown').show();
		$('.gFBF').show();
		$('.faGFBFUp').hide();
		$('.faGFBFDown').show();

		$('.iI').show();
		$('.faIIUp').hide();
		$('.faIIDown').show();

		
	}
	$scope.hideBalanceSheet = function() {
		

		$('.faPlDown').hide();
		$('.faPlUp').show();
		
		
		
		$('.openingStock').hide();
		$('.faOpeningStockUp').show();
		$('.faOpeningStockDown').hide();
		
		$('.purAc').hide();
		$('.faPurAcUp').show();
		$('.faPurAcDown').hide();
		
		$('.dEAc').hide();
		$('.faDEUp').show();
		$('.faDEDown').hide();
		
		$('.gFAc').hide();
		$('.faGFUp').show();
		$('.faGFDown').hide();
		
		$('.iEAc').hide();
		$('.faIEUp').show();
		$('.faIEDown').hide();
		
		$('.nPAc').hide();
		$('.faNPUp').show();
		$('.faNPDown').hide();
		
		
		$('.sAc').hide();
		$('.faSAUp').show();
		$('.faSADown').hide();
		
		$('.cStk').hide();
		$('.faCSUp').show();
		$('.faCSDown').hide();
		
		$('.gFBF').hide();
		$('.faGFBFUp').show();
		$('.faGFBFDown').hide();
		
		$('.iI').hide();
		$('.faIIUp').show();
		$('.faIIDown').hide();

	}
	
	
	
	
});

