import Maplibregl from 'maplibre-gl';
import * as turf from '@turf/helpers';
import PointsWithinPolygon from '@turf/points-within-polygon';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';


//TEMPLATES
import popupTemplate from '../../../data/popup-template';

// CSS
import './Map.css';
import './maplibre-gl.css';
import '../../../css/popup.css';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';

// VARS
let buffers, map, popup;

// FUNCTIONS
async function init(options, facilities, buffers_1k) {
	buffers = buffers_1k;

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
					'circle-radius': 3.5,
					'circle-stroke-color': '#FFF',
					'circle-stroke-width': 0.5
				}
			});
	});
}

function addBufferValues(data) {
	console.log(data)
	const data_obj = {
		orgs: []
	};
	const sumByContaminant = {};
	// console.log(JSON.stringify(data))

	data.forEach(d => {
		data_obj.orgs.push(d.properties.organization);
		d.properties.data[0].forEach(obj => {
			const { contaminant, total_released, total_impact_value, total_impact_scale } = obj;
			if (sumByContaminant.hasOwnProperty(contaminant)) {
				sumByContaminant[contaminant].total_released += total_released;
				sumByContaminant[contaminant].total_impact_scale += total_impact_scale;
				sumByContaminant[contaminant].total_impact_value += total_impact_value;
			} else {
				sumByContaminant[contaminant] = {
					total_released,
					total_impact_scale,
					total_impact_value
				};
			}
		});
	});

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
		})
	}, () => {
		// this doesn't trigger... hmm....
		console.log('Done!')
	});

return geocoder;
}

function setupPopup(map) {
	// create a popup but don't add it to the map yet...
	popup = new Maplibregl.Popup({
		closeButton: true,
		closeonClick: false
	});

	// mouseevents for popup
	// map.on('mouseenter', 'buffers-1k', showPopup);
	// map.on('click', 'buffers-1k', showPopup);
	map.on('click', showPopup_v2)
}

function showPopup_v2(e) {
	const data = [];
	// console.log(e.lngLat);
	// create a geojson of our point
	const point = turf.point([e.lngLat.lng, e.lngLat.lat]);

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
	if (totals.orgs.length === 0) return;

	// fill in the popup template
	const html = popupTemplate(totals);

	// populate the popup, set coordinates & display on map
	popup
		.setLngLat(e.lngLat)
		.setHTML(html)
		.addTo(map);
}

function showPopup(e) {
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
