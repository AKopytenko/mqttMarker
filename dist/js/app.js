"use strict";function valid(t,o){if("undefined"!==t){var i=t.val();if(i.length)switch(o){case"coords":return/^-?\d{1,3}\.\d{0,6}$/.test(i)&&i<=180&&-180<=i?!0:!1;default:return/^[A-Za-zА-Яа-я\d\s\.]{3,75}$/.test(i)?!0:!1}}return!1}$(function(){$("#pointX, #pointY").focusout(function(){valid($(this),"coords")?$(this).removeClass("invalid"):$(this).addClass("invalid")}),$("#pointName").focusout(function(){valid($(this))?$(this).removeClass("invalid"):$(this).addClass("invalid")}),ymaps.ready(function(){new ymaps.Map("map",{center:[55.849004,37.544095],zoom:15,controls:["zoomControl","geolocationControl","typeSelector"]})})});