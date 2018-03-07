// stationmap.js
// Uses leaflet.js to display a map of Flow365 flow monitoring stations.
// Author: Code for Tucson

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZGFpbmlhbHBhZHJhaWciLCJhIjoiY2llZ2xiM2gyMDA0NHNpbTFjczZnaGwzbyJ9.M1qGaryoaG9CzqvE1oqZgg'
}).addTo(mymap);