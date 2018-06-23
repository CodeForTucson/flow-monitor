// stationmap.js
// Uses leaflet.js to display a map of Flow365 flow monitoring stations.
// Author: Code for Tucson

var mymap = L.map('mapid').setView([32.2148174, -110.8467341], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.satellite',
	accessToken: 'pk.eyJ1IjoiZGFpbmlhbHBhZHJhaWciLCJhIjoiY2llZ2xiM2gyMDA0NHNpbTFjczZnaGwzbyJ9.M1qGaryoaG9CzqvE1oqZgg'
}).addTo(mymap);

// TODO: Verify locations on the map and move this geoJSON code into a separate
//       file called by the JS code.

function onEachFeature(feature, layer) {
	if (feature.properties && feature.properties.popupContent) {
		layer.bindPopup(feature.properties.popupContent);
	}
}

// Display the features on the map.
L.geoJSON(monitorStations, {
	onEachFeature: onEachFeature
}).addTo(mymap);
