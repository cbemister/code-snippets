// JavaScript Document

/*
.vcard .photo ~ img {
	position: absolute;
}
dl#activeStaff-item img {
	right: 0;
	top: 0;
}
ul#staffList .vcard img {
	left: 5%;
	bottom: 3%;
}
*/


// SHOW CHAIRMAN'S CLUB LOGO ON WINNERS PHOTOS

(function(){var expiryDate=new Date("December 31, 2019 19:59:59");var nowDate=new Date();var diffDate=(expiryDate.getTime()/1000) - (nowDate.getTime()/1000);if (diffDate >=0){var selectedWinner=___false___;var winner1='___WINNER1___';var winner2='___WINNER2';var winner3='___WINNER3___';if ( selectedWinner ){var selectedStaffNode=$('dl#activeStaff-item dt.fn');var selectedStaffValue=selectedStaffNode[0].innerText;addLogoToSelected(selectedStaffNode);}$('ul#staffList dt.fn').each(function(staffIndex, staffValue){switch(staffValue.innerText){case winner1:addLogoToList(this, staffValue);break; case winner2:addLogoToList(this, staffValue);break; case winner3:addLogoToList(this, staffValue);break; default:break;}});function addLogoToSelected(node){$(node).parent().css('position', 'relative');$(node).parent().append('<img src="//pictures.dealer.com/a/autocanadatc/1700/7ac08f70c1c329684c7942d22083e956x.jpg" alt="Winner" style="max-width: 105px;"/>');}function addLogoToList(item, staff){$(item).parent().css('position', 'relative');$(staff).siblings('.photo').after('<img src="//pictures.dealer.com/a/autocanadatc/1700/7ac08f70c1c329684c7942d22083e956x.jpg" alt="Winner" class="winner" style="max-width: 45px;"/>');}}}())

(function(){
	
	//DATE DECLARATION
	var expiryDate = new Date("December 31, 2019 19:59:59"); //Month Days, Year HH:MM:SS
	var nowDate = new Date();
	var diffDate = (expiryDate.getTime()/1000) - (nowDate.getTime()/1000);

	//SHOW IF WITHIN RANGE	
	if (diffDate >= 0) {
		// Set to true if a winner is the selected photo	
		// Set to false on mobile - No selected photo
		var selectedWinner = false;
		
		// Set winner names from list
		var winner1 = 'Dale Roach';
		var winner2 = 'Sean Miles';
		var winner3 = '';

		// Add logo to selected staff if applicable
		if ( selectedWinner ) { 	
			var selectedStaffNode = $('dl#activeStaff-item dt.fn');
			var selectedStaffValue = selectedStaffNode[0].innerText;
			addLogoToSelected(selectedStaffNode); 
		}	

		// Loop through main staff listings
		$('ul#staffList dt.fn').each(function(staffIndex, staffValue){

			switch(staffValue.innerText) {
			  case winner1:
				addLogoToList(this, staffValue);
				break;
			  case winner2:
				addLogoToList(this, staffValue);
				break;
			  case winner3:
				addLogoToList(this, staffValue);
				break;
			  default:
				break;
			}

		})	

		function addLogoToSelected(node) {
			$(node).parent().css('position', 'relative');
			$(node).parent().append('<img src="//pictures.dealer.com/a/autocanadatc/1700/7ac08f70c1c329684c7942d22083e956x.jpg" alt="Winner" style="max-width: 105px;" />');
		}

		function addLogoToList(item, staff) {
			$(item).parent().css('position', 'relative');
			$(staff).siblings('.photo').after('<img src="//pictures.dealer.com/a/autocanadatc/1700/7ac08f70c1c329684c7942d22083e956x.jpg" alt="Winner" class="winner" style="max-width: 45px;" />');
		}
		
	}

}())
