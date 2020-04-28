var app = angular.module('dashboardApp', []);
app.controller('dashboardCtrl', function(dashboardService,$scope) {
	debugger;
	$scope.fromDate = "2019-04-01";
	$scope.toDate = "2019-04-01";
	var data = {"fromDate":$scope.fromDate.toString(),"toDate":$scope.toDate.toString()}
	dashboardService.getDashboardData(data).then(
			function(response) {
				debugger
				if(response.data.data.dashboard==null){
					alert("Please Open Tally");
					return false
				}
				if (response.status == 200) {		
					$scope.fromDate = "2019-04-01";
					$scope.toDate = "2019-04-01";
					$scope.companyNameDashBoard 	=  response.data.data.dashboard.companyName
					$scope.userName 				=  response.data.data.userName
					$scope.totalSalesValue			=	response.data.data.dashboard.totalSaleAmt;
					$scope.totalPurchaseValue		=	response.data.data.dashboard.totalPurAmt;

					$scope.totalSalesOrderValue		=	response.data.data.dashboard.totalSOAmt;
					$scope.totalPurchaseOrderValue	=	response.data.data.dashboard.totalPOAmt;

					$scope.totalPaymentValue		=	response.data.data.dashboard.totalPaymentAmt;
					$scope.totalReceiptValue		=	response.data.data.dashboard.totalReceiptAmt;

					$scope.closingStock			=	response.data.data.dashboard.closingStock;
					$scope.openingStock			=	response.data.data.dashboard.openingStock;

					$scope.cashBalanceAmt		=	response.data.data.dashboard.cashBalance;
					$scope.bankBalanceAmt		=	response.data.data.dashboard.bankBalance;

					$scope.osReceivableAmt		=	response.data.data.dashboard.osReceivable;
					$scope.osPayableAmt			=	response.data.data.dashboard.osPayable;

					$scope.grossProfitAmt			=	response.data.data.dashboard.grossProfit;
					$scope.netProfitAmt				=	response.data.data.dashboard.netProfit;

					$scope.soTotalValueAmt			=	response.data.data.dashboard.soTotalValue;
					$scope.soPendingValueAmt		=	response.data.data.dashboard.soPendingValue;

					$scope.poTotalValueAmt				=	response.data.data.dashboard.poTotalValue;
					$scope.poPendingValueAmt			=	response.data.data.dashboard.poPendingValue;

					$scope.topFiveCustNameOneSales		=	response.data.data.dashboard.topFiveCustNameOne;
					$scope.topFiveCustAmtOneSales		=	response.data.data.dashboard.topFiveCustAmtOne;
					$scope.topFiveCustNameTwoSales		=	response.data.data.dashboard.topFiveCustNameTwo;
					$scope.topFiveCustAmtTwoSales		=	response.data.data.dashboard.topFiveCustAmtTwo;
					$scope.topFiveCustNameThreeSales	=	response.data.data.dashboard.topFiveCustNameThree;
					$scope.topFiveCustAmtThreeSales		=	response.data.data.dashboard.topFiveCustAmtThree;
					$scope.topFiveCustNameFourSales		=	response.data.data.dashboard.topFiveCustNameFour;
					$scope.topFiveCustAmtFourSales		=	response.data.data.dashboard.topFiveCustAmtFour;
					$scope.topFiveCustNameFiveSales		=	response.data.data.dashboard.topFiveCustNameFive;
					$scope.topFiveCustAmtFiveSales		=	response.data.data.dashboard.topFiveCustAmtFive;

					$scope.topFiveProductPurchaseNameOne	=	response.data.data.dashboard.topFiveProductPurNameOne;
					$scope.topFiveProductPurchaseAmtOne		=	response.data.data.dashboard.topFiveProductPurAmtOne;
					$scope.topFiveProductPurchaseNameTwo	=	response.data.data.dashboard.topFiveProductPurNameTwo;
					$scope.topFiveProductPurchaseAmtTwo		=	response.data.data.dashboard.topFiveProductPurAmtTwo;
					$scope.topFiveProductPurchaseNameThree	=	response.data.data.dashboard.topFiveProductPurNameThree;
					$scope.topFiveProductPurchaseAmtThree	=	response.data.data.dashboard.topFiveProductPurAmtThree;
					$scope.topFiveProductPurchaseNameFour	=	response.data.data.dashboard.topFiveProductPurNameFour;
					$scope.topFiveProductPurchaseAmtFour	=	response.data.data.dashboard.topFiveProductPurAmtFour
					$scope.topFiveProductPurchaseNameFive	=	response.data.data.dashboard.topFiveProductPurNameFive;
					$scope.topFiveProductPurchaseAmtFive	=	response.data.data.dashboard.topFiveProductPurAmtFive;


					$scope.topFiveProductPurInVolNameOne		=	response.data.data.dashboard.topFiveProductPurInVolNameOne;
					$scope.topFiveProductPurInVolOne			=	response.data.data.dashboard.topFiveProductPurInVolOne;
					$scope.topFiveProductPurInVolNameTwo		=	response.data.data.dashboard.topFiveProductPurInVolNameTwo;
					$scope.topFiveProductPurInVolTwo			=	response.data.data.dashboard.topFiveProductPurInVolTwo;
					$scope.topFiveProductPurInVolNameThree		=	response.data.data.dashboard.topFiveProductPurInVolNameThree;
					$scope.topFiveProductPurInVolThree			=	response.data.data.dashboard.topFiveProductPurInVolThree;
					$scope.topFiveProductPurInVolNameFour		=	response.data.data.dashboard.topFiveProductPurInVolNameFour;
					$scope.topFiveProductPurInVolFour			=	response.data.data.dashboard.topFiveProductPurInVolFour;
					$scope.topFiveProductPurInVolNameFive		=	response.data.data.dashboard.topFiveProductPurInVolNameFive;
					$scope.topFiveProductPurInVolFive			=	response.data.data.dashboard.topFiveProductPurInVolFive;

					$scope.topFiveSupNameOne	=	response.data.data.dashboard.topFiveSupNameOne;
					$scope.topFiveSupAmtOne		=	response.data.data.dashboard.topFiveSupAmtOne;
					$scope.topFiveSupNameTwo	=	response.data.data.dashboard.topFiveSupNameTwo;
					$scope.topFiveSupAmtTwo		=	response.data.data.dashboard.topFiveSupAmtTwo;
					$scope.topFiveSupNameThree	=	response.data.data.dashboard.topFiveSupNameThree;
					$scope.topFiveSupAmtThree	=	response.data.data.dashboard.topFiveSupAmtThree;
					$scope.topFiveSupNameFour	=	response.data.data.dashboard.topFiveSupNameFour;
					$scope.topFiveSupAmtFour	=	response.data.data.dashboard.topFiveSupAmtFour;
					$scope.topFiveSupNameFive	=	response.data.data.dashboard.topFiveSupNameFive;
					$scope.topFiveSupAmtFive	=	response.data.data.dashboard.topFiveSupAmtFive;



					$scope.topFiveProductSaleInVolNameOne	=	response.data.data.dashboard.topFiveProductSaleInVolNameOne;
					$scope.topFiveProductSaleInVolAmtOne	=	response.data.data.dashboard.topFiveProductSaleInVolAmtOne;
					$scope.topFiveProductSaleInVolNameTwo	=	response.data.data.dashboard.topFiveProductSaleInVolNameTwo;
					$scope.topFiveProductSaleInVolAmtTwo	=	response.data.data.dashboard.topFiveProductSaleInVolAmtTwo;
					$scope.topFiveProductSaleInVolNameThree	=	response.data.data.dashboard.topFiveProductSaleInVolNameThree;
					$scope.topFiveProductSaleInVolAmtThree	=	response.data.data.dashboard.topFiveProductSaleInVolAmtThree;
					$scope.topFiveProductSaleInVolNameFour	=	response.data.data.dashboard.topFiveProductSaleInVolNameFour;
					$scope.topFiveProductSaleInVolAmtFour	=	response.data.data.dashboard.topFiveProductSaleInVolAmtFour;
					$scope.topFiveProductSaleInVolNameFive	=	response.data.data.dashboard.topFiveProductSaleInVolNameFive;
					$scope.topFiveProductSaleInVolAmtFive	=	response.data.data.dashboard.topFiveProductSaleInVolAmtFive;
					$scope.topFiveProductSaleNameOne		=	response.data.data.dashboard.topFiveProductSaleNameOne;
					$scope.topFiveProductSaleAmtOne			=	response.data.data.dashboard.topFiveProductSaleAmtOne;
					$scope.topFiveProductSaleNameTwo		=	response.data.data.dashboard.topFiveProductSaleNameTwo;
					$scope.topFiveProductSaleAmtTwo			=	response.data.data.dashboard.topFiveProductSaleAmtTwo;
					$scope.topFiveProductSaleNameThree		=	response.data.data.dashboard.topFiveProductSaleNameThree;
					$scope.topFiveProductSaleAmtThree		=	response.data.data.dashboard.topFiveProductSaleAmtThree;
					$scope.topFiveProductSaleNameFour		=	response.data.data.dashboard.topFiveProductSaleNameFour;
					$scope.topFiveProductSaleAmtFour		=	response.data.data.dashboard.topFiveProductSaleAmtFour;
					$scope.topFiveProductSaleNameFive		=	response.data.data.dashboard.topFiveProductSaleNameFive;
					$scope.topFiveProductSaleAmtFive		=	response.data.data.dashboard.topFiveProductSaleAmtFive;
				}
			}, function (er) {
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);
			});

	$scope.getDashboardDataByDate = function() {
		debugger;
		var data = {"fromDate":$scope.fromDate.toString(),"toDate":$scope.toDate.toString()}

		dashboardService.getDashboardData(data).then(
				function(response) {
					debugger
					if(response.data.data.dashboard==null){
						alert("Please Open Tally");
						return false
					}
					if (response.status == 200) {		
						$scope.companyNameDashBoard 	= response.data.data.dashboard.companyName
						$scope.totalSalesValue			=	response.data.data.dashboard.totalSaleAmt;
						$scope.totalPurchaseValue		=	response.data.data.dashboard.totalPurAmt;

						$scope.totalSalesOrderValue		=	response.data.data.dashboard.totalSOAmt;
						$scope.totalPurchaseOrderValue	=	response.data.data.dashboard.totalPOAmt;

						$scope.totalPaymentValue		=	response.data.data.dashboard.totalPaymentAmt;
						$scope.totalReceiptValue		=	response.data.data.dashboard.totalReceiptAmt;

						$scope.closingStock			=	response.data.data.dashboard.closingStock;
						$scope.openingStock			=	response.data.data.dashboard.openingStock;

						$scope.cashBalanceAmt		=	response.data.data.dashboard.cashBalance;
						$scope.bankBalanceAmt		=	response.data.data.dashboard.bankBalance;

						$scope.osReceivableAmt		=	response.data.data.dashboard.osReceivable;
						$scope.osPayableAmt			=	response.data.data.dashboard.osPayable;

						$scope.grossProfitAmt			=	response.data.data.dashboard.grossProfit;
						$scope.netProfitAmt				=	response.data.data.dashboard.netProfit;

						$scope.soTotalValueAmt			=	response.data.data.dashboard.soTotalValue;
						$scope.soPendingValueAmt		=	response.data.data.dashboard.soPendingValue;

						$scope.poTotalValueAmt				=	response.data.data.dashboard.poTotalValue;
						$scope.poPendingValueAmt			=	response.data.data.dashboard.poPendingValue;

						$scope.topFiveCustNameOneSales		=	response.data.data.dashboard.topFiveCustNameOne;
						$scope.topFiveCustAmtOneSales		=	response.data.data.dashboard.topFiveCustAmtOne;
						$scope.topFiveCustNameTwoSales		=	response.data.data.dashboard.topFiveCustNameTwo;
						$scope.topFiveCustAmtTwoSales		=	response.data.data.dashboard.topFiveCustAmtTwo;
						$scope.topFiveCustNameThreeSales	=	response.data.data.dashboard.topFiveCustNameThree;
						$scope.topFiveCustAmtThreeSales		=	response.data.data.dashboard.topFiveCustAmtThree;
						$scope.topFiveCustNameFourSales		=	response.data.data.dashboard.topFiveCustNameFour;
						$scope.topFiveCustAmtFourSales		=	response.data.data.dashboard.topFiveCustAmtFour;
						$scope.topFiveCustNameFiveSales		=	response.data.data.dashboard.topFiveCustNameFive;
						$scope.topFiveCustAmtFiveSales		=	response.data.data.dashboard.topFiveCustAmtFive;

						$scope.topFiveProductPurchaseNameOne	=	response.data.data.dashboard.topFiveProductPurNameOne;
						$scope.topFiveProductPurchaseAmtOne		=	response.data.data.dashboard.topFiveProductPurAmtOne;
						$scope.topFiveProductPurchaseNameTwo	=	response.data.data.dashboard.topFiveProductPurNameTwo;
						$scope.topFiveProductPurchaseAmtTwo		=	response.data.data.dashboard.topFiveProductPurAmtTwo;
						$scope.topFiveProductPurchaseNameThree	=	response.data.data.dashboard.topFiveProductPurNameThree;
						$scope.topFiveProductPurchaseAmtThree	=	response.data.data.dashboard.topFiveProductPurAmtThree;
						$scope.topFiveProductPurchaseNameFour	=	response.data.data.dashboard.topFiveProductPurNameFour;
						$scope.topFiveProductPurchaseAmtFour	=	response.data.data.dashboard.topFiveProductPurAmtFour
						$scope.topFiveProductPurchaseNameFive	=	response.data.data.dashboard.topFiveProductPurNameFive;
						$scope.topFiveProductPurchaseAmtFive	=	response.data.data.dashboard.topFiveProductPurAmtFive;


						$scope.topFiveProductPurInVolNameOne		=	response.data.data.dashboard.topFiveProductPurInVolNameOne;
						$scope.topFiveProductPurInVolOne			=	response.data.data.dashboard.topFiveProductPurInVolOne;
						$scope.topFiveProductPurInVolNameTwo		=	response.data.data.dashboard.topFiveProductPurInVolNameTwo;
						$scope.topFiveProductPurInVolTwo			=	response.data.data.dashboard.topFiveProductPurInVolTwo;
						$scope.topFiveProductPurInVolNameThree		=	response.data.data.dashboard.topFiveProductPurInVolNameThree;
						$scope.topFiveProductPurInVolThree			=	response.data.data.dashboard.topFiveProductPurInVolThree;
						$scope.topFiveProductPurInVolNameFour		=	response.data.data.dashboard.topFiveProductPurInVolNameFour;
						$scope.topFiveProductPurInVolFour			=	response.data.data.dashboard.topFiveProductPurInVolFour;
						$scope.topFiveProductPurInVolNameFive		=	response.data.data.dashboard.topFiveProductPurInVolNameFive;
						$scope.topFiveProductPurInVolFive			=	response.data.data.dashboard.topFiveProductPurInVolFive;

						$scope.topFiveSupNameOne	=	response.data.data.dashboard.topFiveSupNameOne;
						$scope.topFiveSupAmtOne		=	response.data.data.dashboard.topFiveSupAmtOne;
						$scope.topFiveSupNameTwo	=	response.data.data.dashboard.topFiveSupNameTwo;
						$scope.topFiveSupAmtTwo		=	response.data.data.dashboard.topFiveSupAmtTwo;
						$scope.topFiveSupNameThree	=	response.data.data.dashboard.topFiveSupNameThree;
						$scope.topFiveSupAmtThree	=	response.data.data.dashboard.topFiveSupAmtThree;
						$scope.topFiveSupNameFour	=	response.data.data.dashboard.topFiveSupNameFour;
						$scope.topFiveSupAmtFour	=	response.data.data.dashboard.topFiveSupAmtFour;
						$scope.topFiveSupNameFive	=	response.data.data.dashboard.topFiveSupNameFive;
						$scope.topFiveSupAmtFive	=	response.data.data.dashboard.topFiveSupAmtFive;



						$scope.topFiveProductSaleInVolNameOne	=	response.data.data.dashboard.topFiveProductSaleInVolNameOne;
						$scope.topFiveProductSaleInVolAmtOne	=	response.data.data.dashboard.topFiveProductSaleInVolAmtOne;
						$scope.topFiveProductSaleInVolNameTwo	=	response.data.data.dashboard.topFiveProductSaleInVolNameTwo;
						$scope.topFiveProductSaleInVolAmtTwo	=	response.data.data.dashboard.topFiveProductSaleInVolAmtTwo;
						$scope.topFiveProductSaleInVolNameThree	=	response.data.data.dashboard.topFiveProductSaleInVolNameThree;
						$scope.topFiveProductSaleInVolAmtThree	=	response.data.data.dashboard.topFiveProductSaleInVolAmtThree;
						$scope.topFiveProductSaleInVolNameFour	=	response.data.data.dashboard.topFiveProductSaleInVolNameFour;
						$scope.topFiveProductSaleInVolAmtFour	=	response.data.data.dashboard.topFiveProductSaleInVolAmtFour;
						$scope.topFiveProductSaleInVolNameFive	=	response.data.data.dashboard.topFiveProductSaleInVolNameFive;
						$scope.topFiveProductSaleInVolAmtFive	=	response.data.data.dashboard.topFiveProductSaleInVolAmtFive;
						$scope.topFiveProductSaleNameOne		=	response.data.data.dashboard.topFiveProductSaleNameOne;
						$scope.topFiveProductSaleAmtOne			=	response.data.data.dashboard.topFiveProductSaleAmtOne;
						$scope.topFiveProductSaleNameTwo		=	response.data.data.dashboard.topFiveProductSaleNameTwo;
						$scope.topFiveProductSaleAmtTwo			=	response.data.data.dashboard.topFiveProductSaleAmtTwo;
						$scope.topFiveProductSaleNameThree		=	response.data.data.dashboard.topFiveProductSaleNameThree;
						$scope.topFiveProductSaleAmtThree		=	response.data.data.dashboard.topFiveProductSaleAmtThree;
						$scope.topFiveProductSaleNameFour		=	response.data.data.dashboard.topFiveProductSaleNameFour;
						$scope.topFiveProductSaleAmtFour		=	response.data.data.dashboard.topFiveProductSaleAmtFour;
						$scope.topFiveProductSaleNameFive		=	response.data.data.dashboard.topFiveProductSaleNameFive;
						$scope.topFiveProductSaleAmtFive		=	response.data.data.dashboard.topFiveProductSaleAmtFive;
					}
				}, function (er) {
					debugger;
					if(er.status==400)
						alert(er.data.responseDescription);
				});


	}

});

