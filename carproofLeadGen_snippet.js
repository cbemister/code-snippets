

// GLOBAL bottom of BODY
//Carproof Dealer ID
var carproofDealerId = "g5iNfG7xd0HpPz/wDh9xlw=="; //EXAMPLE

//VDP
//TRANSFER VIN TO CONFIRMATION PAGE FOR CARPROOF REPORT

var VIN = DDC.dataLayer.vehicles[0].vin;

sessionStorage.setItem("VIN", VIN);

jQuery('.ddc-content.links-list.restricted').append('<a class="vlp-carproof dialog" href="/carproof-form.htm?&itemId="+ carproofId +"&category=AUTO&parentPageAlias=AUTO_USED_DETAILS" rel="nofollow" data-width="400" data-href="/carproof-form.htm?itemId=|itemId|&category=|category|&parentPageAlias=AUTO_USED_DETAILS">View <img alt="View Carproof Report" src="https://pictures.dealer.com/l/lexusontheparktc/1222/8f8b2ace34158a06052f499646274247x.jpg"></a>');

span#ui-dialog-title-2:after {content: ' Carfax Report';}

.vdp a.vlp-carproof {
	background-color: #fff;
	border: 1px solid #999;
	color: #000;
	width: 100%;
	display: inline-block;
	font-family: Nunito, arial, sans-serif;
	font-size: 14px;
	line-height: 38px;
	padding: 0;
	text-align: center;
	vertical-align: top;
}
.vdp  a.vlp-carproof {
	display: block;
}
.vdp  a.vlp-carproof img {
	display: inline-block;
	margin-left: 10px;
	vertical-align: text-top;
	width: 75px;
}
.vdp a.vlp-carproof:hover {
	background: #e2e2e2 none repeat scroll 0 0;
}


//VLP
//TRANSFER VIN TO CONFIRMATION PAGE FOR CARPROOF REPORT

jQuery('.pricing-area').append('<a class="vlp-carproof dialog" href="/carproof-form.htm?&itemId="+ carproofId +"&category=AUTO&parentPageAlias=AUTO_USED_DETAILS" rel="nofollow" data-width="400" data-href="/carproof-form.htm?itemId=|itemId|&category=|category|&parentPageAlias=AUTO_USED_DETAILS">View <img alt="View Carfax Report" src="https://pictures.dealer.com/l/lexusontheparktc/1222/8f8b2ace34158a06052f499646274247x.jpg"></a>');

jQuery( ".vlp-carproof" ).click(function() {
  var VIN = $(this).closest('.hproduct').attr('data-vin');

	sessionStorage.setItem("VIN", VIN);
});

span#ui-dialog-title-1:after {content: ' Carfax Report';}

a.vlp-carproof.dialog {
    margin-top: 5px!important;
}


//CONFIRM PAGE
//GET CARPROOF FUNCTION

var VIN = sessionStorage.getItem("VIN");

$(document).ready(function() {
//    console.log('referrer['+ referrer +']');
    queryFrom = document.location.search;
    if (queryFrom.indexOf('inventory-lead-carproof') > -1 ) {
      jQuery('.page-bd').html('<br><div style="text-align:center"><a href="https://webservice.carproof.com/memberreports/lookup.aspx?id='+ carproofDealerId +'&VIN=' + VIN + '" target="_blank"><img src="http://pictures.dealer.com/a/autocanadatc/0403/1da4c4623a4bed1539458e344d5b6531x.jpg" alt="Download Your Free Carfax Report"><br><h3>Click To Download</h3></a></div>');
    }
});

jQuery('span#ui-dialog-title-1').text('Download Carfax Report');




// Mobile CSS & JS

// VDP

</script><style>



span#ui-dialog-title-1:after {content: ' Carfax Report';}

.vdp a.vlp-carproof {
	background-color: #fff;
	border: 1px solid #999;
	color: #000;
	width: 100%;
	display: inline-block;
	font-family: Nunito, arial, sans-serif;
	font-size: 14px;
	line-height: 38px;
	padding: 0;
	text-align: center;
	vertical-align: top;
}
.vdp  a.vlp-carproof {
	display: block;
}
.vdp  a.vlp-carproof img {
	display: inline-block;
	margin-left: 10px;
	vertical-align: text-top;
	width: 75px;
}
.vdp a.vlp-carproof:hover {
	background: #e2e2e2 none repeat scroll 0 0;
}

.calloutDetails {
    display: none;
}

</style><script>

//TRANSFER VIN TO CONFIRMATION PAGE FOR CARPROOF REPORT

var VIN = DDC.dataLayer.vehicles[0].vin;

sessionStorage.setItem("VIN", VIN);

jQuery('.links-list.ddc-content.restricted').append('<a class="vlp-carproof dialog" href="/carproof-form.htm?&itemId=HQcLlpw5/75CWA3sxUNaFg==&category=AUTO&parentPageAlias=AUTO_USED_DETAILS" rel="nofollow" data-width="400" data-href="/carproof-form.htm?itemId=|itemId|&category=|category|&parentPageAlias=AUTO_USED_DETAILS">View <img alt="View Carfax Report" src="http://pictures.dealer.com/a/autocanadatc/0167/579ab5a0e1f71e2ecfa43fc25c93ae8bx.jpg"></a>');








