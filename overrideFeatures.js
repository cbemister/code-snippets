//REMOVE INCORRECT FEATURES

var stockNumber = DDC.dataLayer.vehicles["0"].stockNumber;

var modelCode = DDC.dataLayer.vehicles["0"].modelCode;


//stockNumber === '1908011' || stockNumber === '1908013' stockNumber ===  '1908034'

if (modelCode === 'SA4SAA20DV00') {


	$("ul.details.list-unstyled li").each(function () {
		

		var span = $(this).find('span.title');
		var spanText = $(span).text();
		
		if (spanText === 'Leather upholstery' || spanText ===  'Rear cargo' || spanText === 'Power liftgate') {
			$(span).parent().remove();
		}
	});

}
