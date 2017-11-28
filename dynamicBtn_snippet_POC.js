
var result = {}

$('.dynamic-btn').each(function () {

	var model = $(this).attr('data-model');
	var bodystyle = $(this).attr('data-bodystyle');

	$.ajax({
		url: '/all-inventory/index.htm?search=' + model + '&bodyStyle=' + bodystyle,
		dataType: 'html',
		success: function (html) {
			
			var qtyInStock = $('.item', $(html)).length;

			if (qtyInStock > 0) {
				
				var response = true; 
				
				result['true'] = {'model': model};

				//console.log('we have ' + model + ' in stock');
								

			} else {
				
				var response = false;
				
				result['false'] = {'model': model};
				
				//result.push({model: response});

				//console.log('we don\'t have any ' + model + ' in stock');

			}

		}
	});
	
});

	$(document).ajaxStop(function () {
		console.log(result);

		$('.dynamic-btn').each(function () {

			var model = $(this).attr('data-model');

			if (result.true.model !== model) {

				$(this).text('Get More Info');

			} 

		});

	});



//$('#checkBtn').on('click', function(e){
//	
//		$('.dynamic-btn').each(function () {
//
//			var model = $(this).attr('data-model');
//
//
//
//			if (result.true.model !== model) {
//
//				$(this).text('Get More Info');
//
//			} else {
//				//$(this).text('fail');
//
//			}
//
//		});
//	
//	e.preventDefault();
//});


//
//
//result {'true': 
//			{'model': 
//				},
//	   'false': 
//	   		{'model': 
//				} 
//	   }


