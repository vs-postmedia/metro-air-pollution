import maplibregl from 'maplibre-gl';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';

import popupTemplate from '../../../data/popup-template';

// CSS
import './Map.css';
import './maplibre-gl.css';
import '../../../css/popup.css';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';

// VARS
let map, popup;

// FUNCTIONS
async function init(options, facilities, buffers) {
	console.log(buffers);

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

	// setup address search
	const geocoder = await setupGeocoder(map);

	// setup popup for facilities
	const popup = setupPopup(map);

	// Add features to the map
	addMapFeatures(map, geocoder);

	// add map data
	map.on('load', () => {
		map
			// 2k buffers
			// .addSource('buffers-2k', {
			// 	type: 'geojson',
			// 	data: buffers.buffers_2k
			// })
			// .addLayer({
			// 	id: 'buffers-2k',
			// 	type: 'fill',
			// 	source: 'buffers-2k',
			// 	layout: {},
			// 	paint: {
			// 		'fill-color': '#898b8e',
			// 		'fill-opacity': 0.1
			// 	}
			// })
			// 1k buffers
			.addSource('buffers-1k', {
				type: 'geojson',
				data: buffers.buffers_1k
			})
			.addLayer({
				id: 'buffers-1k',
				type: 'fill',
				source: 'buffers-1k',
				layout: {},
				paint: {
					'fill-color': '#0062a3',
					'fill-opacity': 0.1,
					'fill-outline-color': '#FFF'
				}
			})
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
					'circle-opacity': 0.8,
					'circle-radius': 5,
					'circle-stroke-color': '#FFF',
					'circle-stroke-width': 0.5
				}
			});
		
			map.on('click', 'buffers-1k', function (e) {
				new maplibregl.Popup()
				.setLngLat(e.lngLat)
				.setHTML(e.features[0].properties.organization)
				.addTo(map);
				});
	});
}

async function setupGeocoder(map) {
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
	
		const geocoder = new MaplibreGeocoder(geocoder_api, {
			maplibregl: maplibregl
		});
		// default zoom is too close
		geocoder.on('result', e => {
			map.flyTo({
				center: e.result.center,
				zoom: options.geocodeZoomLevel
			});
		});

	return geocoder;
}

function addMapFeatures(map, geocoder) {
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
		.addControl(geocoder)
		// zoom
		.addControl(
			new maplibregl.NavigationControl()
		);

}

function setupPopup(map) {
	// create a popup but don't add it to the map yet...
	popup = new maplibregl.Popup({
		closeButton: true,
		closeonClick: false
	});

	// mouseevents for popup
	map.on('mouseenter', 'facilities', showPopup);
	map.on('click', 'facilities', showPopup);
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

export default { init };
