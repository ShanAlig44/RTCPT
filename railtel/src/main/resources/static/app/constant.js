var baseUrl="http://localhost:8080/tally-dashborad/";
//var baseUrl="http://gotallydashboard.com/";
//var baseUrl="http://192.168.0.107:8080/tally-dashborad/";

var dataType="json";
var successCode=200;
var noContentCode=204;


var LOGIN_URL 									= "login/v1/login";
var DASHBOARD_URL 								= "dashboard/v1/data";
var REGISTRATION 								= "login/v1/registration";
var IP_ADDRESS 									= "ip-address/v1/tally";
var COMPANY_LIST 								= "company-list/v1/data";
var SUPPLIER_DETAILS_URL    					=  "supplier/v1/data"; 
var CUSTOMER_DETAILS_URL    					=  "sales/v1/data";
var PAYMENT_URL									=  "payment/v1/data";
var RECEIPT_URL									=  "receipt/v1/data";
var RECEIPT_BY_VOUCHER_NUMBER_URL				=  "receipt/v1/by-voucher-number";
var PAYMEMT_BY_VOUCHER_NUMBER_URL				=  "payment/v1/by-voucher-number";
var SUPPLIER_DETAILS_BY_KEY_URL					=  "supplier/v1/by-voucher-number";

var LAST_SEVEN_SUPPLIER_BILLS					=  "supplier/v1/last-seven-supplier";
var LAST_SUPPLIER_DATE_WISE_BILLS               = "supplier/v1/last-datewise-supplier-amount";
var LAST_SUPPLIER_MONTH_WISE_AMOUNT				= "supplier/v1/last-month-wise-purchase-amount";
var LAST_DATE_WISE_INVENTORY_AMOUNT				=  "supplier/v1/last-month-wise-purchase-inventory-amount";

var DATE_WISE_ITEM_WISE_PURCHASE				 = "supplier/v1/date-wise-item-wise-purchase";
var MONTH_WISE_ITEM_WISE_PURCHASE				 = "supplier/v1/month-wise-item-wise-purchase";

var SALE_DETAILS_BY_KEY_URL					 = "sales/v1/by-voucher-number";
var DATE_WISE_ITEM_WISE_SALE				 = "sales/v1/date-wise-item-wise-sale";
var MONTH_WISE_ITEM_WISE_SALE				 = "sales/v1/month-wise-item-wise-sale";


var LAST_SEVEN_SALE_BILLS					= "sales/v1/last-seven-sale";
var LAST_SALE_DATE_WISE_BILLS               = "sales/v1/last-datewise-sale-amount";
var LAST_SALE_MONTH_WISE_AMOUNT				= "sales/v1/last-month-wise-sale-amount";
var LAST_DATE_WISE_INVENTORY_AMOUNT_SALE    =  "sales/v1/last-month-wise-sale-inventory-amount";

var BILLS_RECEIVABLE  = "outstading/v1/bills-receivable";
var BILLS_PAYABLE	  = "outstading/v1/bills-payable";

var SAVE_EMIAL_CONFIGURATION  = "email/v1/save";
var All_EMIAL_CONFIGURATION  =  "email/v1/data";


var UPDATE_EMIAL_CONFIGURATION  = "email/v1/update";
var DELETE_EMIAL_CONFIGURATION  =  "email/v1/delete";

var SEND_EMAIL_BILLS_RECEIVABLE  =  "outstading/v1/email_bills-receivable";
var BALANCE_SHEET				= "report/v1/balance-sheet";
var PROFIT_AND_LOSS  			= "report/v1/profit-and-loss";
var STOCK_SUMMARY  				= "report/v1/stock-summary";

var RATIO_ANALYSIS  				= "report/v1/ratio-analysis";
var TRIAL_BALANCE  				    = "report/v1/trial-balance";

var SALE_DELETE_VOUCHER             = "sales/v1/delete";
var CREATE_SALE_WITH_INVENTORY      = "sales/v1/create-inventory-sale"
var MASTER							= "sales/v1/get_all_master"


