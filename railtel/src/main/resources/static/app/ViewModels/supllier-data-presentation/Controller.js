var app = angular.module('supplierPresentationdApp', []);
app.controller('supplierPresentationCtrl', function(supplierDataPresentationService,$scope) {
	Chart.defaults.global.legend = {
			enabled : false
	};
	
	var data = {};
	supplierDataPresentationService.lastSevenSupplierBills(data).then(
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
				
				if(response.data.data.lastSevenSupplierBills!=null){
					
					party.push(response.data.data.lastSevenSupplierBills.partySeven);
					party.push(response.data.data.lastSevenSupplierBills.partySix);
					party.push(response.data.data.lastSevenSupplierBills.partyFive);
					party.push(response.data.data.lastSevenSupplierBills.partyFour);
					party.push(response.data.data.lastSevenSupplierBills.partyThree);
					party.push(response.data.data.lastSevenSupplierBills.partyTwo);
					party.push(response.data.data.lastSevenSupplierBills.partyOne);
					date.push(response.data.data.lastSevenSupplierBills.dateSeven);
					date.push(response.data.data.lastSevenSupplierBills.dateSix);
					date.push(response.data.data.lastSevenSupplierBills.dateFive);
					date.push(response.data.data.lastSevenSupplierBills.dateFour);
					date.push(response.data.data.lastSevenSupplierBills.dateThree);
					date.push(response.data.data.lastSevenSupplierBills.dateTwo);
					date.push(response.data.data.lastSevenSupplierBills.dateOne);
					amount.push(response.data.data.lastSevenSupplierBills.amountSeven);
					amount.push(response.data.data.lastSevenSupplierBills.amountSix);
					amount.push(response.data.data.lastSevenSupplierBills.amountFive);
					amount.push(response.data.data.lastSevenSupplierBills.amountFour);
					amount.push(response.data.data.lastSevenSupplierBills.amountThree);
					amount.push(response.data.data.lastSevenSupplierBills.amountTwo);
					amount.push(response.data.data.lastSevenSupplierBills.amountOne);
					var ctx = document.getElementById("lineChart");
					var lineChart = new Chart(ctx, {
						type : 'line',
						data : {
							labels : date,//[ "January", "February", "March", "April", "May","June", "July" ],
								datasets : [ {
									label : "Supplier Amount",
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
	supplierDataPresentationService.lastSupplierDateWiseBills(data).then(
			function(response) {
				 
				var amount = [];
				var date = [];
				if(response.data.data.lastDateWiseSupplierAmount!=null){
					
					date.push(response.data.data.lastDateWiseSupplierAmount.dateSeven);
					date.push(response.data.data.lastDateWiseSupplierAmount.dateSix);
					date.push(response.data.data.lastDateWiseSupplierAmount.dateFive);
					date.push(response.data.data.lastDateWiseSupplierAmount.dateFour);
					date.push(response.data.data.lastDateWiseSupplierAmount.dateThree);
					date.push(response.data.data.lastDateWiseSupplierAmount.dateTwo);
					date.push(response.data.data.lastDateWiseSupplierAmount.dateOne);

					amount.push(response.data.data.lastDateWiseSupplierAmount.amountSeven);
					amount.push(response.data.data.lastDateWiseSupplierAmount.amountSix);
					amount.push(response.data.data.lastDateWiseSupplierAmount.amountFive);
					amount.push(response.data.data.lastDateWiseSupplierAmount.amountFour);
					amount.push(response.data.data.lastDateWiseSupplierAmount.amountThree);
					amount.push(response.data.data.lastDateWiseSupplierAmount.amountTwo);
					amount.push(response.data.data.lastDateWiseSupplierAmount.amountOne);
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
	supplierDataPresentationService.lastSupplierMonthWiseAmount(data).then(
			function(response) {
				 
				var amount = [];
				var month = [];
				if(response.data.data.lastMonthWiseSupplierAmount!=null){
					
					month.push(response.data.data.lastMonthWiseSupplierAmount.monthSeven);
					month.push(response.data.data.lastMonthWiseSupplierAmount.monthSix);
					month.push(response.data.data.lastMonthWiseSupplierAmount.monthFive);
					month.push(response.data.data.lastMonthWiseSupplierAmount.monthFour);
					month.push(response.data.data.lastMonthWiseSupplierAmount.monthThree);
					month.push(response.data.data.lastMonthWiseSupplierAmount.monthTwo);
					month.push(response.data.data.lastMonthWiseSupplierAmount.monthOne);

					amount.push(response.data.data.lastMonthWiseSupplierAmount.amountSeven);
					amount.push(response.data.data.lastMonthWiseSupplierAmount.amountSix);
					amount.push(response.data.data.lastMonthWiseSupplierAmount.amountFive);
					amount.push(response.data.data.lastMonthWiseSupplierAmount.amountFour);
					amount.push(response.data.data.lastMonthWiseSupplierAmount.amountThree);
					amount.push(response.data.data.lastMonthWiseSupplierAmount.amountTwo);
					amount.push(response.data.data.lastMonthWiseSupplierAmount.amountOne);
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
									label : 'supplier month wise amount',
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
	supplierDataPresentationService.lastSupplierDateWiseInventoryAmount(data).then(
			function(response) {
				debugger
				var amount = [];
				var date = [];
				if(response.data.data.lastDateWiseSuppliersInventoryAmount!=null){
					
					date.push(response.data.data.lastDateWiseSuppliersInventoryAmount.dateSeven);
					date.push(response.data.data.lastDateWiseSuppliersInventoryAmount.dateSix);
					date.push(response.data.data.lastDateWiseSuppliersInventoryAmount.dateFive);
					date.push(response.data.data.lastDateWiseSuppliersInventoryAmount.dateFour);
					date.push(response.data.data.lastDateWiseSuppliersInventoryAmount.dateThree);
					date.push(response.data.data.lastDateWiseSuppliersInventoryAmount.dateTwo);
					date.push(response.data.data.lastDateWiseSuppliersInventoryAmount.dateOne);

					amount.push(response.data.data.lastDateWiseSuppliersInventoryAmount.amountSeven);
					amount.push(response.data.data.lastDateWiseSuppliersInventoryAmount.amountSix);
					amount.push(response.data.data.lastDateWiseSuppliersInventoryAmount.amountFive);
					amount.push(response.data.data.lastDateWiseSuppliersInventoryAmount.amountFour);
					amount.push(response.data.data.lastDateWiseSuppliersInventoryAmount.amountThree);
					amount.push(response.data.data.lastDateWiseSuppliersInventoryAmount.amountTwo);
					amount.push(response.data.data.lastDateWiseSuppliersInventoryAmount.amountOne);
					var ctx = document.getElementById("dateWiseSupplierDetails");
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
	
	
	/*var ctx = document.getElementById("daywisequantity");
	var lineChart = new Chart(ctx, {
		type : 'line',
		data : {
			labels : [ "January", "February", "March", "April", "May",
				"June", "July" ],
				datasets : [ {
					label: "My Second dataset",
					backgroundColor: "rgba(3, 88, 106, 0.3)",
					borderColor: "rgba(3, 88, 106, 0.70)",
					pointBorderColor: "rgba(3, 88, 106, 0.70)",
					pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(151,187,205,1)",
					pointBorderWidth: 1,
					data: [82, 23, 66, 9, 99, 4, 2]
				} ]
		},
	});
*/

	// Bar chart
	/*var ctx = document.getElementById("mybarChart");
	var mybarChart = new Chart(ctx, {
		type : 'bar',
		data : {
			labels : [ "January", "February", "March", "April", "May",
				"June", "July" ],
				datasets : [ {
					label : '# of Votes',
					backgroundColor : "#26B99A",
					data : [ 51, 30, 40, 28, 92, 50, 45 ]
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
*/

	// Bar chart
	/*var ctx = document.getElementById("dateWiseSupplierDetails");
	var mybarChart = new Chart(ctx, {
		type : 'bar',
		data : {
			labels : [ "January", "February", "March", "April", "May",
				"June", "July" ],
				datasets : [ {
					label: '# of Votes',
					backgroundColor: "#03586A",
					data: [41, 56, 25, 48, 72, 34, 12]
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
*/

});

