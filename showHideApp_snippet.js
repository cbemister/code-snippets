"use strict";

var searchField = document.querySelector("#searchField");
var searchBtn = document.querySelector("#searchBtn");
var resetBtn = document.querySelector("#resetBtn");
var showPrevious = document.querySelector("#showPrevious");

//var showAllBtn = document.querySelector("#showAll");
var resultsDisplay = false;
var resultSelected;
var searchArray = [];
var i = 1;

$("td").parent("tr:not(.heading)").toggle();
searchBtn.addEventListener("click", function () {
    var searchQuery = searchField.value;
    if (searchQuery) {
        var capitalize = searchQuery.toUpperCase();
		//Add class for search query
		$("td:contains(" + capitalize + ")").parent().addClass(capitalize);
		searchArray.unshift(capitalize);
		console.log(searchArray);
		//Show table results with search query 
        $("td:contains(" + capitalize + ")").parent().toggleClass('visible').toggle();
        $(searchField).val('');
        toggleBtn();
        resultsDisplay = true;
    }
    else {
        $(searchField).before('<p id="message">Please Enter a Model Name i.e. Golf </p>');
    }
});
showPrevious.addEventListener("click", function () {
    if (resultsDisplay === true) {
        $('tr.'+ searchArray[0] + '').toggleClass('visible').toggle();
    }
});

resetBtn.addEventListener("click", function () {
    toggleBtn();
    if (resultsDisplay === true) {
        $("tr.visible").removeClass('visible').toggle();
		$('.ddc-content.parts-lead.type-1 input').val('');
		$(showPrevious).toggle();
		i = 1;
        resultsDisplay = false;
    } 
});
// get partNumber
//$(function(){
    $('table').on('click', 'td', function(){
		resultSelected = true;
		
		if (resultSelected === true) {
			$(showPrevious).show();
		} else {
			$(showPrevious).hide();
		}
		
		//$(this).parent().addClass('selected');
        var partNumber = $(this).parent().find('.partNumber').text();
		//Get year & model for form
		var yearModel = $(this).parent().find('.yearModel').text();
		var yearModelArray = yearModel.replace(' ','&').split('&');
	
		
		if (i <= 3) {
			$('input[data-id="partNumber'+ i +'"]').val(partNumber);
		} else {
			alert('Maximium stock numbers reached');
		}
		
		if (i === 1 ) {
			
			//Inject vehicle details into form
			$('input[data-id="Year"]').val(yearModelArray[0]);
			$('input[data-id="make"]').val('VW');
			$('input[data-id="model"]').val(yearModelArray[1]);
			
		} 

		//Hide other table rows
        $("tr.visible").removeClass('visible').toggle();
		//Show select table row
		$(this).parent().addClass('visible').toggle();
		i++;
		
    });
//});
//showAllBtn.addEventListener("click", function () {
//    $("td").parent("tr:not('.heading')").toggleClass('visible').toggle();
//    showAllResults = true;
//    resultsDisplay = true;
//});
$(searchField).keypress(function (e) {
    if (e.which === 13) { //Enter key pressed
        $(searchBtn).click(); 
     }
});

function toggleBtn() {
    $(resetBtn).toggle();
    $(searchBtn).toggle();
    $(searchField).toggle();
    $('.instruction').toggle();
}