// JavaScript Document


$.getScript("https://actrader.acmediaworks.com/wp-content/trader/F11_TRADER/BOOTSTRAP/js/modal.js");

jQuery.extend(myObject, { name : 'don', gender : 'male' });

jQuery('<script src="https://actrader.acmediaworks.com/wp-content/trader/JavaScript/jquery.copycss.js" type="text/javascript" charset="utf-8"><\/script>').appendTo(document.body);

window.VWO = window.VWO || [];


var obj = {
    key1: value1,
    key2: value2
};
Using dot notation:

obj.key3 = "value3";
Using square bracket notation:

obj["key3"] = "value3";



$.ajax({
    url: 'test.html',
    dataType: 'html',
    success: function(html) {
        var div = $('#sourceDiv', $(html)).addClass('done');
        $('#targetDiv').html(div);
    }
});


$.each([ 52, 97 ], function( index, value ) {
  alert( index + ": " + value );
});




var currenttime = new Date();
var endtime = new Date("November 30, 2017 19:59:59"); //Month Days, Year HH:MM:SS
if ((((currenttime - endtime)/1000)/60) <= 0)
	
	
var JSLink = "https://actrader.wpengine.com/wp-content/trader/F11_PROMO/JS/F11_PROMO_GM.js?nocache=" + n;
var JSElement = document.createElement('script');
JSElement.src = JSLink;
document.getElementsByTagName('head')[0].appendChild(JSElement);




createCookie('mwlogin', mwCookie, 30);

<script src="http://actrader.acmediaworks.com/wp-content/trader/JavaScript/createCookie.js" type="text/javascript" charset="utf-8"/></script>

var returnUser = readCookie('fonce_current_user');



$('html, body').animate({scrollTop:$(document).height()}, 'slow');






function Create(callback) {
  var isGreen = false;
  var isRunning = false;
  return { 
    getIsGreen   : function()  { return isGreen; },
    setIsGreen   : function(p) { isGreen = p; callback(isGreen, isRunning); },
    getIsRunning : function()  { return isRunning; },
    setIsRunning : function(p) { isRunning = p; callback(isGreen, isRunning); }
  };
}



var traffic = Create(function(isGreen, isRunning) {
  if (isGreen && !isRunning) {
    go();
  }
});

traffic.setIsGreen(true);








// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
var data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();





jQuery('img.testPhoto').hover(function () {
	console.log('I hovered');
}, function () {
	console.log('Hover no more.');
});




var bemiLayer = window.bemiLayer = window.bemiLayer || [];
bemiLayer.push({
  page: {
    category1: 'Auto',
    category2: 'Life hacks',
    platform: 'Foo',
    wordCount: 40,
    length: 400
  },
  user: {
    backendId: '20d75b5c-5143-11e7-b114-b2f933d5fe66'
  },
  site: {
    owner: 'bar'
  },
  session: {
    status: 'anonymous',
    checkedOut: false
  }
});



(function() {
  var arr = bemiLayer;
  var valToCheck = '88-N';
  var i, l;
  for (i = 0, l = arr.length; i < len; i++) {
    if (arr[i].id === valToCheck) {
      return true;
    }
  }
  return false;
})();


