var app = angular.module('salePresentationdApp', []);
app.controller('salePresentationCtrl', function(saleDataPresentationService,$scope) {
	Chart.defaults.global.legend = {
			enabled : false
	};
	
	var data = {};
	saleDataPresentationService.lastSevenSaleBills(data).then(
			function(response) {
				var amount = [];
				var party = [];
				var date = [];
				debugger;
				$scope.companyNameDashBoard 	=   response.data.data.headerValue.companyName;
				$scope.ipAddress			 	=   response.data.data.headerValue.ipAddress
				$scope.totalSalesValue			=	response.data.data.headerValue.totalSaleAmt;
				$scope.totalPurchaseValue		=	response.data.data.headerValue.totalPurAmt;
				$scope.totalSalesOrderValue		=	response.data.data.headerValue.totalSOAmt;
				$scope.totalPurchaseOrderValue	=	response.data.data.headerValue.totalPOAmt;
				$scope.totalPaymentValue		=	response.data.data.headerValue.totalPaymentAmt;
				$scope.totalReceiptValue		=	response.data.data.headerValue.totalReceiptAmt;
				
				
				if(response.data.data.lastSevenSaleBills!=null){
					
					party.push(response.data.data.lastSevenSaleBills.partySeven);
					party.push(response.data.data.lastSevenSaleBills.partySix);
					party.push(response.data.data.lastSevenSaleBills.partyFive);
					party.push(response.data.data.lastSevenSaleBills.partyFour);
					party.push(response.data.data.lastSevenSaleBills.partyThree);
					party.push(response.data.data.lastSevenSaleBills.partyTwo);
					party.push(response.data.data.lastSevenSaleBills.partyOne);
					date.push(response.data.data.lastSevenSaleBills.dateSeven);
					date.push(response.data.data.lastSevenSaleBills.dateSix);
					date.push(response.data.data.lastSevenSaleBills.dateFive);
					date.push(response.data.data.lastSevenSaleBills.dateFour);
					date.push(response.data.data.lastSevenSaleBills.dateThree);
					date.push(response.data.data.lastSevenSaleBills.dateTwo);
					date.push(response.data.data.lastSevenSaleBills.dateOne);
					amount.push(response.data.data.lastSevenSaleBills.amountSeven);
					amount.push(response.data.data.lastSevenSaleBills.amountSix);
					amount.push(response.data.data.lastSevenSaleBills.amountFive);
					amount.push(response.data.data.lastSevenSaleBills.amountFour);
					amount.push(response.data.data.lastSevenSaleBills.amountThree);
					amount.push(response.data.data.lastSevenSaleBills.amountTwo);
					amount.push(response.data.data.lastSevenSaleBills.amountOne);
					var ctx = document.getElementById("lineChart");
					var lineChart = new Chart(ctx, {
						type : 'line',
						data : {
							labels : date,//[ "January", "February", "March", "April", "May","June", "July" ],
								datasets : [ {
									label : "Sale Amount",
									backgroundColor : "rgba(38, 185, 154, 0.31)",
									borderColor : "rgba(38, 185, 154, 0.7)",
									pointBorderColor : "rgba(38, 185, 154, 0.7)",
									pointBackgroundColor : "rgba(38, 185, 154, 0.7)",
									pointHoverBackgroundColor : "#fff",
									pointHoverBorderColor : "rgba(220,220,220,1)",
									pointBorderWidth : 1,
									data : amount//[ 271455, 740, 60, 390, 200, 850, 70 ]
								} ]
						},
					});
				}
			}, function (er) {
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);
			});
	
	
	var data = {};
	saleDataPresentationService.lastSaleDateWiseBills(data).then(
			function(response) {
				 
				var amount = [];
				var date = [];
				if(response.data.data.lastDateWiseSaleAmount!=null){
					
					date.push(response.data.data.lastDateWiseSaleAmount.dateSeven);
					date.push(response.data.data.lastDateWiseSaleAmount.dateSix);
					date.push(response.data.data.lastDateWiseSaleAmount.dateFive);
					date.push(response.data.data.lastDateWiseSaleAmount.dateFour);
					date.push(response.data.data.lastDateWiseSaleAmount.dateThree);
					date.push(response.data.data.lastDateWiseSaleAmount.dateTwo);
					date.push(response.data.data.lastDateWiseSaleAmount.dateOne);

					amount.push(response.data.data.lastDateWiseSaleAmount.amountSeven);
					amount.push(response.data.data.lastDateWiseSaleAmount.amountSix);
					amount.push(response.data.data.lastDateWiseSaleAmount.amountFive);
					amount.push(response.data.data.lastDateWiseSaleAmount.amountFour);
					amount.push(response.data.data.lastDateWiseSaleAmount.amountThree);
					amount.push(response.data.data.lastDateWiseSaleAmount.amountTwo);
					amount.push(response.data.data.lastDateWiseSaleAmount.amountOne);
					var ctx = document.getElementById("daywisequantity");
					var lineChart = new Chart(ctx, {
						type : 'line',
						data : {
							labels : date,//[ "January", "February", "March", "April", "May",	"June", "July" ],
								datasets : [ {
									label: "Records",
									backgroundColor: "rgba(3, 88, 106, 0.3)",
									borderColor: "rgba(3, 88, 106, 0.70)",
									pointBorderColor: "rgba(3, 88, 106, 0.70)",
									pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
									pointHoverBackgroundColor: "#fff",
									pointHoverBorderColor: "rgba(151,187,205,1)",
									pointBorderWidth: 1,
									data: amount//[82, 23, 66, 9, 99, 4, 2]
								} ]
						},
					});

				}
			}, function (er) {
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);
			});
	
	
	var data = {};
	saleDataPresentationService.lastSaleMonthWiseAmount(data).then(
			function(response) {
				 
				var amount = [];
				var month = [];
				if(response.data.data.lastMonthWiseSaleAmount!=null){
					
					month.push(response.data.data.lastMonthWiseSaleAmount.monthSeven);
					month.push(response.data.data.lastMonthWiseSaleAmount.monthSix);
					month.push(response.data.data.lastMonthWiseSaleAmount.monthFive);
					month.push(response.data.data.lastMonthWiseSaleAmount.monthFour);
					month.push(response.data.data.lastMonthWiseSaleAmount.monthThree);
					month.push(response.data.data.lastMonthWiseSaleAmount.monthTwo);
					month.push(response.data.data.lastMonthWiseSaleAmount.monthOne);

					amount.push(response.data.data.lastMonthWiseSaleAmount.amountSeven);
					amount.push(response.data.data.lastMonthWiseSaleAmount.amountSix);
					amount.push(response.data.data.lastMonthWiseSaleAmount.amountFive);
					amount.push(response.data.data.lastMonthWiseSaleAmount.amountFour);
					amount.push(response.data.data.lastMonthWiseSaleAmount.amountThree);
					amount.push(response.data.data.lastMonthWiseSaleAmount.amountTwo);
					amount.push(response.data.data.lastMonthWiseSaleAmount.amountOne);
					var ctx = document.getElementById("mybarChart");
					
					 var uniqueMonth = []; 
					 var count = 0; 
					 var start = false; 
					 
					 for (j = 0; j < month.length; j++) { 
				            for (k = 0; k < uniqueMonth.length; k++) { 
				                if ( month[j] == uniqueMonth[k] ) { 
				                    start = true; 
				                } 
				            } 
				            count++; 
				            if (count == 1 && start == false) { 
				            	uniqueMonth.push(month[j]); 
				            } 
				            start = false; 
				            count = 0; 
				        } 
			
					 
					 
					 var uniqueAmount= []; 
					 var countAmount = 0; 
					 var startAmount = false; 
					 
					 for (j = 0; j < amount.length; j++) { 
				            for (k = 0; k < uniqueAmount.length; k++) { 
				                if ( amount[j] == uniqueAmount[k] ) { 
				                	startAmount = true; 
				                } 
				            } 
				            countAmount++; 
				            if (countAmount == 1 && startAmount == false) { 
				            	uniqueAmount.push(amount[j]); 
				            } 
				            startAmount = false; 
				            countAmount = 0; 
				        } 
	 				var mybarChart = new Chart(ctx, {
						type : 'bar',
						data : {
							labels : uniqueMonth, //[ "January", "February", "March", "April", "May","June", "July" ],
								datasets : [ {
									label : 'Sale month wise amount',
									backgroundColor : "#26B99A",
									data : uniqueAmount//[ 51, 30, 40, 28, 92, 50, 45 ]
								}]
						},

						options : {
							scales : {
								yAxes : [ {
									ticks : {
										beginAtZero : true
									}
								} ]
							}
						}
					});


				}
			}, function (er) {
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);
			});
	
	
	
	var data = {};
	saleDataPresentationService.lastSaleDateWiseInventoryAmount(data).then(
			function(response) {
				debugger
				var amount = [];
				var date = [];
				if(response.data.data.lastDateWiseSaleInventoryAmount!=null){
					
					date.push(response.data.data.lastDateWiseSaleInventoryAmount.dateSeven);
					date.push(response.data.data.lastDateWiseSaleInventoryAmount.dateSix);
					date.push(response.data.data.lastDateWiseSaleInventoryAmount.dateFive);
					date.push(response.data.data.lastDateWiseSaleInventoryAmount.dateFour);
					date.push(response.data.data.lastDateWiseSaleInventoryAmount.dateThree);
					date.push(response.data.data.lastDateWiseSaleInventoryAmount.dateTwo);
					date.push(response.data.data.lastDateWiseSaleInventoryAmount.dateOne);

					amount.push(response.data.data.lastDateWiseSaleInventoryAmount.amountSeven);
					amount.push(response.data.data.lastDateWiseSaleInventoryAmount.amountSix);
					amount.push(response.data.data.lastDateWiseSaleInventoryAmount.amountFive);
					amount.push(response.data.data.lastDateWiseSaleInventoryAmount.amountFour);
					amount.push(response.data.data.lastDateWiseSaleInventoryAmount.amountThree);
					amount.push(response.data.data.lastDateWiseSaleInventoryAmount.amountTwo);
					amount.push(response.data.data.lastDateWiseSaleInventoryAmount.amountOne);
					var ctx = document.getElementById("dateWiseSaleDetails");
					var mybarChart = new Chart(ctx, {
						type : 'bar',
						data : {
							labels : date,// [ "January", "February", "March", "April", "May","June", "July" ],
								datasets : [ {
									label: '#Inventory Amount',
									backgroundColor: "#03586A",
									data: amount////[41, 56, 25, 48, 72, 34, 12]
								}]
						},

						options : {
							scales : {
								yAxes : [ {
									ticks : {
										beginAtZero : true
									}
								} ]
							}
						}
					});


				}
			}, function (er) {
				debugger;
				if(er.status==400)
					alert(er.data.responseDescription);
			});
	
	
	
});

