// JavaScript Document

		jQuery(document).ready(function () {

			// CONTENT PERSONALIZATION JS 
			function getParameterByName(e, a) {
				a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
				var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
					r = n.exec(a);
				return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
			}
			dynamicContent = getParameterByName("offer");

		});