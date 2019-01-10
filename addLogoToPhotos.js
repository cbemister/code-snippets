// JavaScript Document

/*

</script><style>

.vcard .photo ~ img.chairman-winner {
	position: absolute;
	max-width: 150px;
}
dl#activeStaff-item img.chairman-winner {
	right: 0;
	top: 0;
}

</style><script>

*/


// SHOW CHAIRMAN'S CLUB LOGO ON WINNERS PHOTOS

(function  () {

	// Add Chairman's Club Winners
	var chairmansClubWinners = ['Dale Roach', 'Sean Miles', 'winner3'] 
	// First boolean - Chairman's Club winner is the default selection  
	// Second boolean - Page organized by departments  
	addChairmanLogo(chairmansClubWinners, true, false); 	

	function addChairmanLogo(a,e,t){var i=new Date("December 31, 2019 19:59:59"),n=new Date;if(i.getTime()/1e3-n.getTime()/1e3>=0){var s=e,c=a[0],o=a[1],r=a[2];if(s)addLogoToSelected($("dl#activeStaff-item dt.fn"));$(t?"div#staffList .staff dt.fn":"ul#staffList dt.fn").each(function(a,e){switch(e.innerText){case c:case o:case r:addLogoToList(this,e)}}),$("ul#staffList").after("<div>The Chairman's club ...</div>")}}function addLogoToSelected(a){$(a).parent().css("position","relative"),$(a).parent().append('<img src="//pictures.dealer.com/a/autocanadatc/0520/5e3d11c9f55384173fb31bb3ea862508x.jpg" alt="Chairman\'s Club Winner" class="chairman-winner" />')}function addLogoToList(a,e){$(a).parent().css("position","relative"),$(e).siblings(".photo").after('<img src="//pictures.dealer.com/a/autocanadatc/0520/5e3d11c9f55384173fb31bb3ea862508x.jpg" alt="Chairman\'s Club Winner" class="chairman-winner"/>')}

}())


(function(){
	// Add Chairman's Club Winners
	var chairmansClubWinners = ['Dale Roach', 'Sean Miles', 'winner3'] 
	// First boolean - Chairman's Club winner is the default selection  
	// Second boolean - Page organized by departments  
	addChairmanLogo(chairmansClubWinners, true, false); 	
	
	function addChairmanLogo(winners, featured, departmentLayout) {

		//DATE DECLARATION
		var expiryDate = new Date("December 31, 2019 19:59:59"); //Month Days, Year HH:MM:SS
		var nowDate = new Date();
		var diffDate = (expiryDate.getTime() / 1000) - (nowDate.getTime() / 1000);

		//SHOW IF WITHIN RANGE	
		if (diffDate >= 0) {
			// Set to true if a winner is the selected photo	
			// Set to false on mobile - No selected photo
			var selectedWinner = featured;

			// Set winner names from list
			var winner1 = winners[0];
			var winner2 = winners[1];
			var winner3 = winners[2];

			// Add logo to selected staff if applicable
			if (selectedWinner) {
				var selectedStaffNode = $('dl#activeStaff-item dt.fn');
				addLogoToSelected(selectedStaffNode);
			}

			// Loop through main staff listings
				
				var staffSelector = departmentLayout ? 'div#staffList .staff dt.fn' : 'ul#staffList dt.fn';
				
				$(staffSelector).each(function (staffIndex, staffValue) {

					switch (staffValue.innerText) {
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

				});
			
		$("ul#staffList").after("<div>The Chairman's club ...</div>");

		}

	}

	function addLogoToSelected(node) {
		$(node).parent().css('position', 'relative');
		$(node).parent().append('<img src="//pictures.dealer.com/a/autocanadatc/0520/5e3d11c9f55384173fb31bb3ea862508x.jpg" alt="Chairman\'s Club Winner" class="chairman-winner" />');
	}

	function addLogoToList(item, staff) {
		$(item).parent().css('position', 'relative');
		$(staff).siblings('.photo').after('<img src="//pictures.dealer.com/a/autocanadatc/0520/5e3d11c9f55384173fb31bb3ea862508x.jpg" alt="Chairman\'s Club Winner" class="chairman-winner"  />');
	}

}());
