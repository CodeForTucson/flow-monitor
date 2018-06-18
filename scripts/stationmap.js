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

// TODO: Verify locations on the map and move this geoJSON code into a separate
//       file called by the JS code.
var monitorStations = [{
	"type": "Feature",
	"properties": {
		"name": "BearCreek_USFS_fence",
		"popupContent": "Bear Creek at the USFS Fence"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8114098, 32.3110538]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SC_WesMillerPark_Wier",
		"popupContent": "Sabino Creek at the Wes Miller Park Weir"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8094518, 32.2972506]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SC_BearCreek_confluence",
		"popupContent": "Confluence of Bear Creek and Sabino Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8077031, 32.2955251]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SnyderRd_crossing",
		"popupContent": "Snyder Road crossing at Sabino Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8073281, 32.2945862]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "Hughes_East",
		"popupContent": "Hughes Road crossing at Sabino Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8059718, 32.2937244]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "Woodin_sewer_crossing",
		"popupContent": "Sewer pipe across Sabino Creek near the Woodin property"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8075518, 32.2763331]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "ParkerRd_crossing",
		"popupContent": "Parker Road crossing at Sabino Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8105535, 32.2696919]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SC_Outlet_TV",
		"popupContent": "Sabino Creek outlet into the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8234632, 32.2603907]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SabinoCanyonRd",
		"popupContent": "Sabino Canyon Road crossing of the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8405996, 32.2648443]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "Rustand_spring",
		"popupContent": "Rustand Spring on the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8677481, 32.2678773]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CraycroftRd_bridge",
		"popupContent": "Craycroft Rd crossing of the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8772505, 32.269595]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SwanRd_bridge",
		"popupContent": "Swan Rd crossing of the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.894805, 32.2713147]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "HoughtonRd_TV",
		"popupContent": "Houghton Rd crossing of the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7711552, 32.2389001]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TV_AC_confluence",
		"popupContent": "Confluence of the Tanque Verde and Agua Caliente"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7866607, 32.2434307]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "WoodlandRd",
		"popupContent": "Woodland Rd crossing of the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7983335, 32.2495055]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TanqueVerdeRd_TanqueVerde",
		"popupContent": "Tanque Verde Rd crossing of the Tanque Verde"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8227975, 32.2560985]
	}
}];

function onEachFeature(feature, layer) {
	if (feature.properties && feature.properties.popupContent) {
		layer.bindPopup(feature.properties.popupContent);
	}
}

// Display the features on the map.
L.geoJSON(monitorStations, {
	onEachFeature: onEachFeature
}).addTo(mymap);
