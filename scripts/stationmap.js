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
		"popupContent": "Sabino Creek outlet into Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8234632, 32.2603907]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SabinoCanyonRd",
		"popupContent": "Sabino Canyon Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8405996, 32.2648443]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "Rustand_spring",
		"popupContent": "Rustand Spring on Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8677481, 32.2678773]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CraycroftRd_bridge",
		"popupContent": "Craycroft Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8772505, 32.269595]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SwanRd_bridge",
		"popupContent": "Swan Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.894805, 32.2713147]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "HoughtonRd_TV",
		"popupContent": "Houghton Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7711552, 32.2389001]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TV_AC_confluence",
		"popupContent": "Confluence of Tanque Verde Creek and Agua Caliente"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7866607, 32.2434307]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "WoodlandRd",
		"popupContent": "Woodland Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7983335, 32.2495055]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TanqueVerdeRd_TanqueVerde",
		"popupContent": "Tanque Verde Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8227975, 32.2560985]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "HoughtonRd_AC",
		"popupContent": "Houghton Road crossing of Agua Caliente Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8227975, 32.2490404]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "FtLowellRd_AC",
		"popupContent": "Fort Lowell Road crossing of Agua Caliente Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7520644, 32.2656578]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "PrinceRd_AC",
		"popupContent": "Prince Road crossing of Agua Caliente Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7458746, 32.2731236]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SoldierTrl_AC",
		"popupContent": "Soldier Trail crossing of Agua Caliente Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7382582, 32.2841179]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "MilagrosaLane_AC",
		"popupContent": "Milagrosa Lane crossing of Agua Caliente Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7218192, 32.2944735]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TVLoopRd",
		"popupContent": "Tanque Verde Loop Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.75626, 32.2406627]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SoldierTrl_FreemanRd",
		"popupContent": "Soldier Trail and Freeman Road intersection with Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7383846, 32.2422181]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "WentworthRd",
		"popupContent": "Wentworth Road crossing of Tanque Verde Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7230797, 32.2397744]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TucsonWildlifeCenter",
		"popupContent": "Tucson Wildlife Center"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7111397, 32.2363015]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TanqueVerdeFalls",
		"popupContent": "Tanque Verde Falls"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.6559603, 32.2549997]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CountryClubRd_loop_crossing",
		"popupContent": "Country Club Road crossing of Rillito River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9281637, 32.2818768]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CampbellAve_bridge",
		"popupContent": "Campbell Ave crossing of Rillito River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9460421, 32.2844432]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "StoneAve_bridge",
		"popupContent": "Stone Ave crossing of Rillito River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9721316, 32.2896528]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "LaCanada_Rillito",
		"popupContent": "La Canada crossing of Rillito River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.997035, 32.2946405]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CaminoDeLaTierra_crossing",
		"popupContent": "Camino de La Tierra crossing of Rillito River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-111.0395913, 32.3113666]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "GrantRd",
		"popupContent": "Grant Road crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9990954, 32.2505098]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SpeedwayBlvd",
		"popupContent": "Speedway Blvd crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.986572, 32.2357137]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "StMarysRd",
		"popupContent": "St Mary's Road crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9843308, 32.2294736]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CongressSt",
		"popupContent": "Congress St crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9842057, 32.2209185]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "StarrPassBlvd",
		"popupContent": "Starr Pass Blvd crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9907774, 32.206223]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SilverlakeRd",
		"popupContent": "Silverlake Road crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9893619, 32.1995914]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "IrvingtonRd",
		"popupContent": "Irvington Road crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9937532, 32.1631775]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "SanXavierRd",
		"popupContent": "San Xavier Road crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9953427, 32.1056421]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "PimaMineRd",
		"popupContent": "Pima Mine Road crossing of Santa Cruz River"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.9645638, 32.0013714]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "TanqueVerdeRd_Pantano",
		"popupContent": "Tanque Verde Road crossing of Pantano Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8505027, 32.2491506]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "GolfLinksRd",
		"popupContent": "Golf Links Road crossing of Pantano Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.8122706, 32.1919002]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "HoughtonRd_Pantano",
		"popupContent": "Houghton Road crossing of Pantano Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7728251, 32.1675824]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "PW_ColossalCaveRd_UP",
		"popupContent": "Colossal Cave Road crossing of Pantano Wash"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.6986694, 32.0504121]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CC_MarshStationRd_CC",
		"popupContent": "Marsh Station Road crossing of Cienega Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.6464466, 32.0200289]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "OldSpanishTrl_RinconCrk",
		"popupContent": "Old Spanish Trail crossing of Rincon Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.7347533, 32.1339813]
	}
}, {
	"type": "Feature",
	"properties": {
		"name": "CmLomaAlta",
		"popupContent": "Camino Loma Alta crossing of Rincon Creek"
	},
	"geometry": {
		"type": "Point",
		"coordinates": [-110.6892376, 32.1201293]
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
