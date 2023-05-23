import maplibregl from 'maplibre-gl';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';

import popupTemplate from '../../../data/popup-template';

// CSS
import './Map.css';
import './maplibre-gl.css';
import '../../../css/popup.css';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';

let map, popup;


function init(facilities, options) {
	console.log(facilities);

	// setup the map
	map = new maplibregl.Map({
		antialias: true,
		container: 'map',
		style: options.mapboxStyle,
		center: options.center,
		zoom: options.zoom,
		bearing: options.bearing,
		pitch: options.pitch	
	});

	// create geolocator
	const geocoder_api = {
		forwardGeocode: async (config) => {
			const features = [];
			
			try {
				let request =
				'https://nominatim.openstreetmap.org/search?q=' + config.query + '&format=geojson&polygon_geojson=1&addressdetails=1';
				const response = await fetch(request);
				const geojson = await response.json();
				
				for (let feature of geojson.features) {
					let center = [
						feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
						feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2
					];

					let point = {  
							type: 'Feature',
							geometry: {
							type: 'Point',
							coordinates: center
						},
						place_name: feature.properties.display_name,
						properties: feature.properties,
						text: feature.properties.display_name,
						place_type: ['place'],
						center: center
					};
				
					features.push(point);
				}
			} catch (e) {
				console.error(`Failed to forwardGeocode with error: ${e}`);
			}
			
			return {
				features: features
			};
		}
	};

	const geo = new MaplibreGeocoder(geocoder_api, {
		maplibregl: maplibregl,
		zoom: 18,
		setFlyTo: {
			zoom: 18,
			minZoom: 18
		}
	});

	console.log(geo.getFlyTo())

	// create a popup but don't add it to the map yet...
	popup = new maplibregl.Popup({
		closeButton: true,
		closeonClick: false
	});

	//
	map.on('mouseenter', 'facilities', showPopup);
	map.on('click', 'facilities', showPopup);

	// Add features to the map
	map
		// geolocate control
		.addControl(
			new maplibregl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true
			}))
		// geodcoder to search an address
		.addControl(
			new MaplibreGeocoder(geocoder_api, {
				maplibregl: maplibregl,
				zoom: 18,
				setFlyTo: {
					zoom: 18,
					minZoom: 18
				}
			})
		)
		// zoom
		.addControl(
			new maplibregl.NavigationControl()
		);

	// add map data
	map.on('load', () => {
		map
			// facility locations
			.addSource('facilities', {
				type: 'geojson',
				data: facilities
			})
			.addLayer({
				id: 'facilities',
				type: 'circle',
				source: 'facilities',
				paint: {
					'circle-color': '#0062a3',
					'circle-opacity': 0.7,
					'circle-radius': 5,
					'circle-stroke-color': '#FFF',
					'circle-stroke-width': 0.5
				}
			});
	});

	// On every scroll event, check which element is on screen
	// window.onscroll = (map) => {
	// 	const sections = Object.keys(data);

	// 	for (let i = 0, l = sections.length; i < l; i++) {
	// 		const section = sections[i];

	// 		if (isElementOnScreen(section)) {
	// 			setActiveChapter(section, options.activeSection, data);
	// 			break;
	// 		}
	// 	}
	// };
}

function showPopup(e) {
	const data = {};
	// change the cursor style as UI indicator
	map.getCanvas().style.cursor = 'pointer';

	const coords = e.features[0].geometry.coordinates.slice();
	data.org = e.features[0].properties.organization;

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coords[0]) > 180) {
		coords[0] += e.lngLat.lng > coords[0] ? 360 : -360;
	}

	// fill in the popup template
	const html = popupTemplate(data);

	// population the popup & set coordinates
	popup.setLngLat(coords).setHTML(html).addTo(map);
}

// function setActiveChapter(section, activeSection, data) {
// 	if (section === activeSection) return;
	 
// 	map.flyTo(data[section]);
	 
// 	document.getElementById(section).setAttribute('class', 'active');
// 	document.getElementById(activeSection).setAttribute('class', '');
	 
// 	activeSection = section;
// }

// function isElementOnScreen(id) {
// 	var element = document.getElementById(id);
// 	var bounds = element.getBoundingClientRect();

// 	return bounds.top < (window.innerHeight * 2) && bounds.bottom > 0;
// }

export default { init };
