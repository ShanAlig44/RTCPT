var app = angular.module('balanceSheetApp', []);
app.controller('balanceSheetCtrl', function(dataService,$scope,$location) {
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
	dataService.getBalanceSheet(data).then(
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

					$scope.companyNameDashBoard 	=   response.data.headerValues.companyName;
					$scope.userName 				=  response.data.userName
					$scope.capitalAmount     		= response.data.liabilities['Capital Account'];
					$scope.loanLiabilities   		= response.data.liabilities['Loans (Liability)'];
					$scope.currentLiabilities     	= response.data.liabilities['Current Liabilities'];
					$scope.profitAndLoss   			= response.data.liabilities['Profit & Loss A/c'];


					$scope.capitalAmountTotal     		= response.data.liabilities['Capital AccountTotal'];
					$scope.loanLiabilitiesTotal   		= response.data.liabilities['Loans (Liability)Total'];
					$scope.currentLiabilitiesTotal     	= response.data.liabilities['Current LiabilitiesTotal'];
					$scope.profitAndLossTotal   		= response.data.liabilities['Profit & Loss A/cTotal'];


					$scope.currentAssets				=	response.data.assets['Current Assets'];
					$scope.fixedAssets					=   response.data.assets['Fixed Assets'];
					$scope.fixedAssetsTotal				=   response.data.assets['Fixed AssetsTotal'];
					$scope.currentAssetsTotal			=   response.data.assets['Current AssetsTotal'];

					$scope.assetsTotal					=  response.data.assetsTotal
					$scope.liabilitiesTotal				=  response.data.liabilitiesTotal



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

	$scope.showCapitalAmount = function() {
		$('.capitalAmount').show();
		$('.faCapitalAmountUp').show();
		$('.faCapitalAmountDown').hide();
	}

	$scope.hideCapitalAmount = function() {
		$('.capitalAmount').hide();
		$('.faCapitalAmountUp').hide();
		$('.faCapitalAmountDown').show();
	}
	
	$scope.showLoanLiabilityAmount = function() {
		$('.loanLiabilityAmount').show();
		$('.faLoanLiabilityAmountUp').show();
		$('.faLoanLiabilityAmountDown').hide();
	}

	$scope.hideLoanLiabilityAmount = function() {
		$('.loanLiabilityAmount').hide();
		$('.faLoanLiabilityAmountUp').hide();
		$('.faLoanLiabilityAmountDown').show();
	}
	
	$scope.showCurrentLiabilityAmount = function() {
		$('.currentLiabilityAmount').show();
		$('.faCurrentLiabilityAmountUp').show();
		$('.faCurrentLiabilityAmountDown').hide();
	}

	$scope.hideCurrentLiabilityAmount = function() {
		$('.currentLiabilityAmount').hide();
		$('.faCurrentLiabilityAmountUp').hide();
		$('.faCurrentLiabilityAmountDown').show();
	}
	
	$scope.showPLACAmount = function() {
		$('.pLACAmount').show();
		$('.faPLACAmountUp').show();
		$('.faPLACAmountDown').hide();
	}

	$scope.hidePLACAmount = function() {
		$('.pLACAmount').hide();
		$('.faPLACAmountUp').hide();
		$('.faPLACAmountDown').show();
	}
	
	
	
	/**Assets**/
	
	$scope.showFixedAssetsAmount = function() {
		$('.fixedAssetsAmount').show();
		$('.faFixedAssetsAmountUp').show();
		$('.faFixedAssetsAmountDown').hide();
	}

	$scope.hideFixedAssetsAmount = function() {
		$('.fixedAssetsAmount').hide();
		$('.faFixedAssetsAmountUp').hide();
		$('.faFixedAssetsAmountDown').show();
	}
	
	
	$scope.showCurrentAssetsAmount = function() {
		$('.assetsLiabilityAmount').show();
		$('.faCurrentAssetsAmountUp').show();
		$('.faCurrentAssetsAmountDown').hide();
	}

	$scope.hideCurrentAssetsAmount = function() {
		$('.assetsLiabilityAmount').hide();
		$('.faCurrentAssetsAmountUp').hide();
		$('.faCurrentAssetsAmountDown').show();
	}


	$scope.showBalanceSheet = function() {
		 
		
		$('.fashowBalanceSheetDown').hide();
		$('.fashowBalanceSheetUp').show();
		
		
		
		$('.fixedAssetsAmount').show();
		$('.faFixedAssetsAmountUp').show();
		$('.faFixedAssetsAmountDown').hide();

		$('.assetsLiabilityAmount').show();
		$('.faCurrentAssetsAmountUp').show();
		$('.faCurrentAssetsAmountDown').hide();
		
		$('.capitalAmount').show();
		$('.faCapitalAmountUp').show();
		$('.faCapitalAmountDown').hide();
	 
		$('.loanLiabilityAmount').show();
		$('.faLoanLiabilityAmountUp').show();
		$('.faLoanLiabilityAmountDown').hide();
	 
		$('.currentLiabilityAmount').show();
		$('.faCurrentLiabilityAmountUp').show();
		$('.faCurrentLiabilityAmountDown').hide();
	 
		$('.pLACAmount').show();
		$('.faPLACAmountUp').show();
		$('.faPLACAmountDown').hide();
	 
		
		
		
		


	}


	$scope.hideBalanceSheet = function() {
		
		$('.fashowBalanceSheetDown').show();
		$('.fashowBalanceSheetUp').hide();

		$('.fixedAssetsAmount').hide();
		$('.faFixedAssetsAmountUp').hide();
		$('.faFixedAssetsAmountDown').show();

		$('.assetsLiabilityAmount').hide();
		$('.faCurrentAssetsAmountUp').hide();
		$('.faCurrentAssetsAmountDown').show();

		
		$('.capitalAmount').hide();
		$('.faCapitalAmountUp').hide();
		$('.faCapitalAmountDown').show();
		$('.loanLiabilityAmount').hide();
		$('.faLoanLiabilityAmountUp').hide();
		$('.faLoanLiabilityAmountDown').show();
		$('.currentLiabilityAmount').hide();
		$('.faCurrentLiabilityAmountUp').hide();
		$('.faCurrentLiabilityAmountDown').show();
		$('.pLACAmount').hide();
		$('.faPLACAmountUp').hide();
		$('.faPLACAmountDown').show();
		
		
	}


	});

