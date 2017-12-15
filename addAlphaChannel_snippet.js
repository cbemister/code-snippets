// JavaScript Document



(function addAlphaChannel() {
    var oldBGColor = jQuery('#myShowroom').css('background-color');  //set Brand Color as Variable
    var newBGColor = oldBGColor.replace('rgb', 'rgba').replace(')', ',.8)'); //rgba(100,100,100,.8)
    jQuery('#myShowroom').css({ backgroundColor: newBGColor });
}());