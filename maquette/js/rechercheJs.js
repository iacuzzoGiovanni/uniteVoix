/* JS Document
 * coded by GIOVANNI IACUZZO 2383
 * 2013
 */

/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";

	// --- global vars
	var gmap,
		map,
		jStyles = [ 
					{ "stylers": [  
								   { "saturation": -100 } 
								 ] 
					} 
				 ],
		styledMap = new google.maps.StyledMapType(jStyles, {name: "Unité voix"}),
		mapOptions = {
			zoom: 3,
			center: new google.maps.LatLng(50,-25),
			scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: false,
			mapTypeControlOptions: {
	  			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		},
		iMarker = new google.maps.MarkerImage( "../img/marker.png" );
	
	// --- methods
	var generateMap = function(){
		map = new google.maps.Map(document.getElementById('Gmap'), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');	
	};

	var generateMarkers = function(lat, lng, town){
		new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(lat,lng),
			title: town,	
			icon: iMarker
		});
	};

	$( function () {
		// --- onload routines
		$("#unitedStates").before('<div id="Gmap"></div>');
		generateMap();
		$("#aTraversLeMonde section").each(function(){
			generateMarkers($(this).attr('data-lat'), $(this).attr('data-lon'), $(this).find(".icon-location").text());
		});
	} );

}( jQuery ) );