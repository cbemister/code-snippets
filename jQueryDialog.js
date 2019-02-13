
/* HTML */

<button id="launchDialog">Launch!!!</button>

/* CSS */

/* Hide Calculator, Chart, and Button on page  */
.calculator-payment, .calculator-payment-chart, .ui-dialog #launchDialog   {
    display: none;
}

/* Show Calculator in Dialog Box */
.ui-dialog .calculator-payment, .ui-dialog .calculator-payment-chart {
    display: initial;
}


/* JavaScript */
$(document).ready(function () {

	
	// Copy content to be displayed in dialog
	var page = $('.page-bd').html();

	var $dialog = $('<div></div>')
		.html(page)
		.dialog({
			modal: true,
			resizable: false,
			autoOpen: false,
			title: 'Payment Calculator',
			height: 600,
			width: 800,
			open: function () {

				//$(this).load('/financing/calculator.htm');

			}
		});

	$('#launchDialog').click(function () {


		$('[name="price"]').val('$' + '500').attr('autofocus', true).attr('disabled', true);
		//$('[name="price"]').val('500').blur();

		$dialog.dialog('open');

		// prevent the default action, e.g., following a link
		return false;
	});

	// Add
	$('.calculator-payment').prepend('<p>Calculate your estimated payment by changing the down payment, interest rate, or term.</p>');

});