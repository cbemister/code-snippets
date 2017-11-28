//PREVENT PROMO JS FROM CACHING
 
var d = new Date();
var n = d.getTime();

    var JSLink = "https://actrader.wpengine.com/wp-content/trader/F11_PROMO/JS/F11_PROMO_HYUNDAI.js?nocache=" + n;
    var JSElement = document.createElement('script');
    JSElement.src = JSLink;
    document.getElementsByTagName('head')[0].appendChild(JSElement);

//END PREVENT PROMO JS FROM CACHING