// stationmap.js
// Uses leaflet.js to display a map of Flow365 flow monitoring stations.
// Author: Code for Tucson

var mymap = L.map('mapid').setView([32.2148174, -110.8467341], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.satellite',
	accessToken: 'pk.eyJ1IjoiZGFpbmlhbHBhZHJhaWciLCJhIjoiY2llZ2xiM2gyMDA0NHNpbTFjczZnaGwzbyJ9.M1qGaryoaG9CzqvE1oqZgg'
}).addTo(mymap);

var marker1 = L.marker([32.2972506, -110.8094518]).addTo(mymap);
marker1.bindPopup("<b>SC_WesMillerPark_Wier</b>");

var geojsonFeature = {
	"type": "Feature",
	"properties": {
		"name": "BearCreek_USFS_fence"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8114098, 32.3110538]
	}
}
L.geoJSON(geojsonFeature).addTo(mymap);