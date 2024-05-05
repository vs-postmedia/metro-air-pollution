// LIBS
import Maplibregl from 'maplibre-gl';
import * as turf from '@turf/helpers';
import PointsWithinPolygon from '@turf/points-within-polygon';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';

// TEMPLATES
import popupBufferTemplate from '../../../data/popup-template-buffers';
import popupFacilitiesTemplate from '../../../data/popup-template-facilities';

// CSS
import './Map.css';
// import './maplibre-gl.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../../../css/popup.css';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';

// VARS	
let buffers, locations, map, popup;

// FUNCTIONS
async function init(options, facilities, buffers_1k) {
	buffers = buffers_1k;
	locations = facilities;

	// setup the map
	map = new Maplibregl.Map({
		antialias: true,
		container: 'map',
		style: options.mapboxStyle,
		center: options.center,
		zoom: options.zoom,
		bearing: options.bearing,
		pitch: options.pitch	
	});

	// setup address search
	const geocoder = await setupGeocoder(map, options);

	// setup popup for buffer zoness
	const popup = setupPopup(map, buffers);

	// Add zoom, geocode, etc, to the map
	addMapFeatures(map, geocoder);

	// add data
	map.on('load', () => {
		map
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
					// 'fill-color': '#0062a3',
					'fill-color': '#898B8E',
					'fill-opacity': 0.2
					// 'fill-outline-color': '#FFF'
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
					'circle-opacity': 1,
					'circle-radius': 6,
					'circle-stroke-color': '#FFF',
					'circle-stroke-width': 0.5
				}
			});
	});
}

function addBufferValues(data) {
	// abort if there's no data to show in a popup...
	if (data.length === 0) return;
	
	const sumByContaminant = {};
	const data_obj = {
		orgs: []
	};

	// EXPLAIN
	data.forEach(d => {
		data_obj.orgs.push(d.properties.organization);
		d.properties.data[0].forEach(obj => {
			const { combined_contaminant, total, /*total_impact_value, total_impact_scale*/ } = obj;
			if (sumByContaminant.hasOwnProperty(combined_contaminant)) {
				sumByContaminant[combined_contaminant].total += total;
				// sumByContaminant[contaminant].total_impact_scale += total_impact_scale;
				// sumByContaminant[contaminant].total_impact_value += total_impact_value;
			} else {
				sumByContaminant[combined_contaminant] = {
					total,
					// total_impact_scale,
					// total_impact_value,
					// avg_impact_value: total_impact_value / 12,
					// avg_impact_scale: total_impact_scale / 12
				};
			}
		});
	});

	// CACHE IN OUR DATA OBJECT
	data_obj.sumByContaminant = sumByContaminant;

	// console.log(sumByContaminant);
	return data_obj;
}

function addMapFeatures(map, geocoder) {
	map
		// geolocate control
		.addControl(
			new Maplibregl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true
			}))
		// geodcoder to search an address
		.addControl(geocoder)
		// zoom
		.addControl(
			new Maplibregl.NavigationControl()
		);

}

function setupFilter() {
	document.getElementById('nav-filter').addEventListener('change', (e) => {
        let filterOnValue = ['all'];

		// eslint-disable-next-line no-unused-expressions

		// e.target.checked ? data.felt = Number(felt.value) : delete data['felt'];
	});
}

async function setupGeocoder(map, options) {
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
		clearOnBlur: true,
		// Filter results to only include addresses in Canada
		countries: 'ca',
		filter: item => { return item.properties.address['ISO3166-2-lvl4'] === 'CA-BC' },
		maplibregl: Maplibregl,
		placeholder: 'Lookup an address...'
	});

	// default zoom is too close
	geocoder.on('result', e => {
		map.flyTo({
		// map.easeTo({
			center: e.result.center,
			// this animation is considered essential with respect to prefers-reduced-motion
			essential: true,
			zoom: options.geocodeZoomLevel
		});
		// Perform actions after the fly-to animation is complete
		map.once('moveend', () => showPopup(e, true));
	});

return geocoder;
}

function setupPopup(map) {
	// create a popup but don't add it to the map yet...
	popup = new Maplibregl.Popup({
		closeButton: true,
		closeonClick: false
	});

	// mouse events for popup
	map.on('click', 'buffers-1k', showBufferPopup);
	map.on('click', 'facilities', showFacilitiesPopup);
	// map.on('click', showPopup)
}

function showFacilitiesPopup(e) {
	const features = e.features[0];

	// fill in the popup template
	const html = popupFacilitiesTemplate(features.properties.data, features.properties.organization);

	// populate the popup, set coordinates & display on map
	popup
		.setLngLat(features.geometry.coordinates)
		.setHTML(html)
		.addTo(map);
}

function showBufferPopup(e, flyto) {
	// console.log(e)
	if (e.features === undefined) return;
	
	// else make the buffer popup
	const data = [];

	// create a geojson & set lnglat coords for our point – differs depending on if it's the result of a map click or geocode result
	const point = (flyto === true) ? turf.point(e.result.center) : turf.point([e.lngLat.lng, e.lngLat.lat]);
	const lng_lat = (flyto === true) ? e.result.center : e.lngLat

	// find out if the point is inside buffers
	buffers.buffers_1k.features.forEach(d => {
		// is point within a buffer polygon?
		const withinPoly = PointsWithinPolygon(point, d);
		// if so, let's cache the buffer
		if (withinPoly.features.length > 0) data.push(d);
	});

	// add up all the values from the overlapping buffers
	const totals = addBufferValues(data);

	// we don't need a popup if we're not inside a buffer...
	if (totals === undefined) return;

	// fill in the popup template
	const html = popupBufferTemplate(totals);

	// populate the popup, set coordinates & display on map
	popup
		.setLngLat(lng_lat)
		.setHTML(html)
		.addTo(map);
}

function showPopup_old(e) {
	const data = {
		contaminants: JSON.parse(e.features[0].properties.data),
		org: e.features[0].properties.organization
	};

	// fill in the popup template
	const html = popupTemplate(data);

	// change the cursor style as UI indicator
	map.getCanvas().style.cursor = 'pointer';

	// coords for points - MAY BE DIFF FOR POLYGONS!!!
	const coords = e.features[0].geometry.coordinates.slice();

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coords[0]) > 180) {
		coords[0] += e.lngLat.lng > coords[0] ? 360 : -360;
	}

	// population the popup & set coordinates
	popup
		// .setLngLat(coords)
		.setLngLat(e.lngLat)
		.setHTML(html)
		.addTo(map);
}

export default { init };


