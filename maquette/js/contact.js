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
			zoom: 15,
			center: new google.maps.LatLng(50.59139,5.571320000000014),
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
		generateMarkers();	
	};

	var generateMarkers = function(lat, lng, town){
		new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(50.59139,5.571320000000014),
			title: 'nous sommes ici!',	
			icon: iMarker
		});
	};

	$( function () {
		// --- onload routines
		$("#acces h1").after('<div id="Gmap" class="contactMap"></div>');
		generateMap();
	} );

}( jQuery ) );