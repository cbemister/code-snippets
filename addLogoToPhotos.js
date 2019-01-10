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
	var chairmansClubWinners = ['winner1', 'winner2', 'winner3'] 
	// First boolean - is page organized by departments    
	// Second boolean -  is website mobile
	addChairmanLogo(chairmansClubWinners, true, false); 	

	function addChairmanLogo(a,t,e){var i=new Date("December 31, 2019 19:59:59"),s=new Date;if(i.getTime()/1e3-s.getTime()/1e3>=0){var n,f=a[0],c=a[1],r=a[2];n=e&&t?"div#staffList .staff-member dt.fn":t?"div#staffList .staff dt.fn":"ul#staffList dt.fn",$(n).each(function(a,t){switch($(this).find("span").attr("name")){case f:case c:case r:addLogoToList(this,t)}}),$("ul#staffList").after("<div>The Chairman's club ...</div>")}}function addLogoToList(a,t){$(a).parent().css("position","relative"),$(t).siblings(".photo").after('<img src="//pictures.dealer.com/a/autocanadatc/0520/5e3d11c9f55384173fb31bb3ea862508x.jpg" alt="Chairman\'s Club Winner" class="chairman-winner"  />')}

}())


(function(){
	// Add Chairman's Club Winners
	var chairmansClubWinners = ['winner1', 'winner2', 'winner3'] 
	// First boolean - is page organized by departments    
	// Second boolean -  is website mobile
	addChairmanLogo(chairmansClubWinners, true, false); 	
	
	function addChairmanLogo(winnersArray, departmentLayout, isMobile) {

		//DATE DECLARATION
		var expiryDate = new Date("December 31, 2019 19:59:59"); //Month Days, Year HH:MM:SS
		var nowDate = new Date();
		var diffDate = (expiryDate.getTime() / 1000) - (nowDate.getTime() / 1000);

		//SHOW IF WITHIN RANGE	
		if (diffDate >= 0) {
			
			// Set winner names from list
			var winner1 = winnersArray[0];
			var winner2 = winnersArray[1];
			var winner3 = winnersArray[2];

			// Set staff element selector
			var staffSelector;
			
			if (isMobile && departmentLayout ) {
				staffSelector =  'div#staffList .staff-member dt.fn'
			} else {
				staffSelector = departmentLayout ? 'div#staffList .staff dt.fn' : 'ul#staffList dt.fn';
			}
						
			// Loop through main staff listings
				

			$(staffSelector).each(function (staffIndex, staffValue) {

				var staffName = $(this).find('span').attr('name');

				switch (staffName) {
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

	function addLogoToList(item, staff) {
		$(item).parent().css('position', 'relative');
		$(staff).siblings('.photo').after('<img src="//pictures.dealer.com/a/autocanadatc/0520/5e3d11c9f55384173fb31bb3ea862508x.jpg" alt="Chairman\'s Club Winner" class="chairman-winner"  />');
	}

}());
