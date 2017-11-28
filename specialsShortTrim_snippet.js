//REPLACE FULL TRIM WITH SHORTENED TRIM ON CUSTOM SPECIALS TEMPLATE

$('.ddc-content.special').each(function(){

	var trim = $(this).find('.dsbCont2').text();

	var editedTrim = trim.indexOf("miles");

	if (editedTrim < 0) {

		var modelWithTitle = $(this).find('h4.vehicle').text();

		var modelOnly = modelWithTitle.split('|');

		$(this).find('h4.vehicle').text(modelOnly[0] + ' ' + trim);

	} 
	
});