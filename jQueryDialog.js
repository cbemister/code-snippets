
/* HTML */

<button id="launchDialog">Launch!!!</button>

/* CSS */

/* Hide Calculator, Chart, and Button on page  */
.gg-chat-bubble.gg-app ~ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable {
    display: none!important;
}
/* Show Calculator in Dialog Box */
.ui-dialog .calculator-payment, .ui-dialog .calculator-payment-chart {
    display: initial;
}


/* JavaScript */
$(document).ready(function () {

	$('.links-list.ddc-content.restricted').append('<a class="btn ddc-btn btn-default ddc-btn-default btn-xl ddc-btn-xlarge btn-block ddc-btn-block" href="#" target="_self" id="launchDialog">Explore Payments</a>')

	var paymentCalculator= $('.dialog.calculator-payment')[0].outerHTML;

	var $dialog = $('<div></div>')
		.html(paymentCalculator)
		.dialog({
			modal: true,
			resizable: false,
			autoOpen: false,
			title: 'Payment Calculator',
			height: 600,
			width: 600
		});

	$('#launchDialog').click(function () {

		var internetPrice = DDC.dataLayer.vehicles["0"].internetPrice;

		$('[name="price"]').val('$' + internetPrice).attr('autofocus', true).attr('disabled', true);

		$dialog.dialog('open');

		// prevent the default action, e.g., following a link
		return false;
	});


	$('.calculator-payment').prepend('<p>Estimate your monthly payment by changing the down payment, interest rate, or term.</p>');

});
