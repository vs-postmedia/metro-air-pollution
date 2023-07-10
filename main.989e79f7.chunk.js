(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(9);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(16);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(85);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(86);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(87);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/maplibre-gl/dist/maplibre-gl.js
var maplibre_gl = __webpack_require__(17);
var maplibre_gl_default = /*#__PURE__*/__webpack_require__.n(maplibre_gl);

// EXTERNAL MODULE: ./node_modules/@turf/helpers/dist/es/index.js
var es = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@turf/points-within-polygon/dist/es/index.js + 3 modules
var dist_es = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/@maplibre/maplibre-gl-geocoder/lib/index.js
var lib = __webpack_require__(81);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/data/popup-template.js
function popupTemplate(data_obj) {
  let list = '';
  const data = data_obj.sumByContaminant; // we're iterating over an object (i know, i know <rolling_eyes>)

  for (const d in data) {
    console.log(data[d].total_released);
    const released = data[d].total_released.toFixed(2).toLocaleString('en-US');
    const cost = data[d].total_impact_value.toLocaleString('en-US').split('.')[0];
    const scale = data[d].total_impact_scale.toFixed(1).toLocaleString();
    console.log(data[d].total_impact_value);
    console.log(released);
    list += `
                <li>
                    <ul>
                        <span class="bold">${d}:</span>
                        <p>Metric tonnes released:</span> ${released}</p>
                        <p>Health cost:</span> $${cost}</p>
                        <p>Impact scale: ${scale}</p>
                    </ul>
                </li>
            `;
  }

  return `
        <div class="popup-container">
            <h2>${data.org}</h2>
            <p class="subhead">Total values, 2009-2021</p>
            <ul class="popup-list">${list}</ul>
        </div>
    `;
}

/* harmony default export */ var popup_template = (popupTemplate);
// EXTERNAL MODULE: ./src/js/components/Map/Map.css
var Map = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/maplibre-gl/dist/maplibre-gl.css
var dist_maplibre_gl = __webpack_require__(139);

// EXTERNAL MODULE: ./src/css/popup.css
var css_popup = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css
var maplibre_gl_geocoder = __webpack_require__(141);

// CONCATENATED MODULE: ./src/js/components/Map/Map.js


















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// LIBS



 // TEMPLATES

 // CSS

 // import './maplibre-gl.css';



 // VARS

var buffers, Map_map, Map_popup; // FUNCTIONS

function init(_x, _x2, _x3) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(options, facilities, buffers_1k) {
    var geocoder, popup;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buffers = buffers_1k; // setup the map

            Map_map = new maplibre_gl_default.a.Map({
              antialias: true,
              container: 'map',
              style: options.mapboxStyle,
              center: options.center,
              zoom: options.zoom,
              bearing: options.bearing,
              pitch: options.pitch
            }); // setup address search

            _context.next = 4;
            return setupGeocoder(Map_map, options);

          case 4:
            geocoder = _context.sent;
            // setup popup for buffer zoness
            popup = setupPopup(Map_map, buffers); // Add zoom, geocode, etc, to the map

            addMapFeatures(Map_map, geocoder); // add data

            Map_map.on('load', function () {
              Map_map // 1k buffers
              .addSource('buffers-1k', {
                type: 'geojson',
                data: buffers.buffers_1k
              }).addLayer({
                id: 'buffers-1k',
                type: 'fill',
                source: 'buffers-1k',
                layout: {},
                paint: {
                  'fill-color': '#0062a3',
                  'fill-opacity': 0.1,
                  'fill-outline-color': '#FFF'
                }
              }) // facility locations
              .addSource('facilities', {
                type: 'geojson',
                data: facilities
              }).addLayer({
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

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

function addBufferValues(data) {
  // abort if there's no data to show in a popup...
  if (data.length === 0) return;
  var sumByContaminant = {};
  var data_obj = {
    orgs: []
  }; // EXPLAIN

  data.forEach(function (d) {
    data_obj.orgs.push(d.properties.organization);
    d.properties.data[0].forEach(function (obj) {
      var contaminant = obj.contaminant,
          total_released = obj.total_released,
          total_impact_value = obj.total_impact_value,
          total_impact_scale = obj.total_impact_scale;

      if (sumByContaminant.hasOwnProperty(contaminant)) {
        sumByContaminant[contaminant].total_released += total_released;
        sumByContaminant[contaminant].total_impact_scale += total_impact_scale;
        sumByContaminant[contaminant].total_impact_value += total_impact_value;
      } else {
        sumByContaminant[contaminant] = {
          total_released: total_released,
          total_impact_scale: total_impact_scale,
          total_impact_value: total_impact_value
        };
      }
    });
  }); // CACHE IN OUR DATA OBJECT

  data_obj.sumByContaminant = sumByContaminant; // console.log(sumByContaminant);

  return data_obj;
}

function addMapFeatures(map, geocoder) {
  map // geolocate control
  .addControl(new maplibre_gl_default.a.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  })) // geodcoder to search an address
  .addControl(geocoder) // zoom
  .addControl(new maplibre_gl_default.a.NavigationControl());
}

function setupGeocoder(_x4, _x5) {
  return _setupGeocoder.apply(this, arguments);
}

function _setupGeocoder() {
  _setupGeocoder = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(map, options) {
    var geocoder_api, geocoder;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // create geolocator
            geocoder_api = {
              forwardGeocode: function () {
                var _forwardGeocode = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(config) {
                  var features, request, response, geojson, _iterator, _step, feature, center, point;

                  return regenerator_default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          features = [];
                          _context2.prev = 1;
                          request = 'https://nominatim.openstreetmap.org/search?q=' + config.query + '&format=geojson&polygon_geojson=1&addressdetails=1';
                          _context2.next = 5;
                          return fetch(request);

                        case 5:
                          response = _context2.sent;
                          _context2.next = 8;
                          return response.json();

                        case 8:
                          geojson = _context2.sent;
                          _iterator = _createForOfIteratorHelper(geojson.features);

                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                              feature = _step.value;
                              center = [feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2, feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2];
                              point = {
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
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }

                          _context2.next = 16;
                          break;

                        case 13:
                          _context2.prev = 13;
                          _context2.t0 = _context2["catch"](1);
                          console.error("Failed to forwardGeocode with error: ".concat(_context2.t0));

                        case 16:
                          return _context2.abrupt("return", {
                            features: features
                          });

                        case 17:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[1, 13]]);
                }));

                function forwardGeocode(_x6) {
                  return _forwardGeocode.apply(this, arguments);
                }

                return forwardGeocode;
              }()
            };
            geocoder = new lib_default.a(geocoder_api, {
              clearOnBlur: true,
              // Filter results to only include addresses in Canada
              countries: 'ca',
              filter: function filter(item) {
                return item.properties.address['ISO3166-2-lvl4'] === 'CA-BC';
              },
              maplibregl: maplibre_gl_default.a,
              placeholder: 'Lookup an address...'
            }); // default zoom is too close

            geocoder.on('result', function (e) {
              map.flyTo({
                // map.easeTo({
                center: e.result.center,
                // this animation is considered essential with respect to prefers-reduced-motion
                essential: true,
                zoom: options.geocodeZoomLevel
              }); // Perform actions after the fly-to animation is complete

              map.once('moveend', function () {
                return showPopup(e, true);
              });
            });
            return _context3.abrupt("return", geocoder);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setupGeocoder.apply(this, arguments);
}

function setupPopup(map) {
  // create a popup but don't add it to the map yet...
  Map_popup = new maplibre_gl_default.a.Popup({
    closeButton: true,
    closeonClick: false
  }); // mouseevents for popup
  // map.on('mouseenter', 'buffers-1k', showPopup);
  // map.on('click', 'buffers-1k', showPopup);

  map.on('click', showPopup);
}

function showPopup(e, flyto) {
  var data = [];
  console.log(e); // create a geojson & set lnglat coords for our point – differs depending on if it's the result of a map click or geocode result

  var point = flyto === true ? es["g" /* point */](e.result.center) : es["g" /* point */]([e.lngLat.lng, e.lngLat.lat]);
  var lng_lat = flyto === true ? e.result.center : e.lngLat; // find out if the point is inside buffers

  buffers.buffers_1k.features.forEach(function (d) {
    // is point within a buffer polygon?
    var withinPoly = Object(dist_es["a" /* default */])(point, d); // if so, let's cache the buffer

    if (withinPoly.features.length > 0) data.push(d);
  }); // add up all the values from the overlapping buffers

  var totals = addBufferValues(data); // we don't need a popup if we're not inside a buffer...

  if (totals === undefined) return; // fill in the popup template

  var html = popup_template(totals); // populate the popup, set coordinates & display on map

  Map_popup // .setLngLat(e.lngLat)
  .setLngLat(lng_lat).setHTML(html).addTo(Map_map);
}

function showPopup_old(e) {
  var data = {
    contaminants: JSON.parse(e.features[0].properties.data),
    org: e.features[0].properties.organization
  }; // fill in the popup template

  var html = popup_template(data); // change the cursor style as UI indicator

  Map_map.getCanvas().style.cursor = 'pointer'; // coords for points - MAY BE DIFF FOR POLYGONS!!!

  var coords = e.features[0].geometry.coordinates.slice(); // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.

  while (Math.abs(e.lngLat.lng - coords[0]) > 180) {
    coords[0] += e.lngLat.lng > coords[0] ? 360 : -360;
  } // population the popup & set coordinates


  Map_popup // .setLngLat(coords)
  .setLngLat(e.lngLat).setHTML(html).addTo(Map_map);
}

/* harmony default export */ var Map_Map = ({
  init: init
});
// EXTERNAL MODULE: ./src/js/components/App/App.css
var App = __webpack_require__(142);

// EXTERNAL MODULE: ./src/data/facilities.js
var data_facilities = __webpack_require__(82);
var facilities_default = /*#__PURE__*/__webpack_require__.n(data_facilities);

// EXTERNAL MODULE: ./src/data/facilities-buffers.js
var facilities_buffers = __webpack_require__(83);
var facilities_buffers_default = /*#__PURE__*/__webpack_require__.n(facilities_buffers);

// CONCATENATED MODULE: ./src/js/components/App/App.js

 // data imports


 // map tiles & attribution

var App_options = {
  bearing: 0,
  center: [-122.98876218587124, 49.24433191299974],
  geocodeZoomLevel: 14,
  mapboxStyle: 'https://api.maptiler.com/maps/basic-v2/style.json?key=arETEBBqRxRrA5v30F6H',
  pitch: 45,
  zoom: 9.25
};

function App_init() {
  Map_Map.init(App_options, facilities_default.a, facilities_buffers_default.a);
}

/* harmony default export */ var App_App = ({
  init: App_init
});
// CONCATENATED MODULE: ./src/index.js



// CSS



 // JS

 // FUNCTIONS

var src_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            App_App.init();

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

src_init();

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9318177, 49.1746695]
    },
    "properties": {
      "organization": "A-Z Foam Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 55.83
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0928851, 49.1220074]
    },
    "properties": {
      "organization": "ACR Group Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.5611
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2243
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5425
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 13.1193
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 10.4715
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 133.0199
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.817
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1005711, 49.1234028]
    },
    "properties": {
      "organization": "Acuren Group Inc.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 7.1341
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 5.21
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1566135, 49.1949545]
    },
    "properties": {
      "organization": "Air Canada",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 17.6271
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 5.888
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 17.0348
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 15.71
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 296.446
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 6.6082
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 21.6
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8278, 49.2241384]
    },
    "properties": {
      "organization": "All Roads Construction Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.7236
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2421
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2927
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.9617
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 4.8571
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2606
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8278, 49.2241384]
    },
    "properties": {
      "organization": "All Roads Construction Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.7236
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2421
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2927
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.9617
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 4.8571
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2606
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0808004, 49.2835094]
    },
    "properties": {
      "organization": "Alliance Grain Terminal Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.0924
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.0355
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 5.8883
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 107.0053
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.2843
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7275729, 49.1227074]
    },
    "properties": {
      "organization": "Astrographic Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.2284
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0759
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2208
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 3.124
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 4.5545
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0888
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 30.3014
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8508135, 49.1398772]
    },
    "properties": {
      "organization": "Astrographic Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.2284
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0759
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2208
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 3.124
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 4.5545
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0888
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 30.3014
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.937082, 49.1723183]
    },
    "properties": {
      "organization": "Atlas Roofing Corporation of Canada",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.9433
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3152
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.9115
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 8.2799
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.3581
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 215.5738
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.937082, 49.1723183]
    },
    "properties": {
      "organization": "Atlas Roofing Corporation of Canada",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.9433
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3152
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.9115
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 8.2799
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.3581
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 215.5738
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9449751, 49.1504829]
    },
    "properties": {
      "organization": "Avcorp Industries Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 4.2444
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.4176
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 4.102
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 182.52
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 74.5397
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.5909
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 44.861
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0186036, 49.3003919]
    },
    "properties": {
      "organization": "B.A. Blacktop Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 8.3983
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.8369
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.795
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 40.2649
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 3.6527
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.998147, 49.1486329]
    },
    "properties": {
      "organization": "B.A. Blacktop Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 8.3983
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.8369
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.795
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 40.2649
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 3.6527
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.5113576, 49.2504032]
    },
    "properties": {
      "organization": "B.A. Blacktop Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 8.3983
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.8369
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.795
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 40.2649
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 3.6527
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0677602, 49.2007076]
    },
    "properties": {
      "organization": "Ball Packaging Products Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0217
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0072
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0207
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.0218
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.378
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0084
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.2156
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9951187, 49.1924186]
    },
    "properties": {
      "organization": "Beaver Electrical Machinery Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0552
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0182
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0533
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 5.75
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.7624
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0375
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.152
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9157177, 49.1785366]
    },
    "properties": {
      "organization": "Bekaert Canada Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 3.7605
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.2535
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 3.6356
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 3.3901
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 65.9805
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.4738
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 2.28
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8854166, 49.1896721]
    },
    "properties": {
      "organization": "Bel-Par Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1644
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0546
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.1591
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 18.15
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 2.8876
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0615
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 7.21
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9451103, 49.1728998]
    },
    "properties": {
      "organization": "Brenntag Canada Inc.",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.5879678, 49.0826094]
    },
    "properties": {
      "organization": "Britco Pork Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.6781
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2267
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.6554
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 11.9161
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2551
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8815226, 49.1600465]
    },
    "properties": {
      "organization": "British Columbia Hydro and Power Authority",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1458.9808
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1632.359
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1410.143
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 20034.6325
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1632.7448
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8870842, 49.2996906]
    },
    "properties": {
      "organization": "British Columbia Hydro and Power Authority",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1458.9808
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1632.359
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1410.143
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 20034.6325
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1632.7448
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0029613, 49.1428507]
    },
    "properties": {
      "organization": "Buckeye Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.408
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.1356
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 6.1944
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 112.4352
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.5096
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0272079, 49.2634108]
    },
    "properties": {
      "organization": "CAE Machinery Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.8294
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2765
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.8019
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.3155
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 14.5539
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.3248
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.18
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8432223, 49.2786883]
    },
    "properties": {
      "organization": "Can-Am Containers Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.7864
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2627
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.7601
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 25.4154
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 13.8056
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.3007
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 11.555
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0100355, 49.1370963]
    },
    "properties": {
      "organization": "Canada Metal (Pacific) Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.4126
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.1381
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 6.1947
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 112.5967
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.4028
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0223958, 49.1348388]
    },
    "properties": {
      "organization": "Canadian Autoparts Toyota Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 17.7139
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 85.1445
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 17.1173
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 249.11
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 257.0839
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 7.1125
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 78.4321
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0708473, 49.1811672]
    },
    "properties": {
      "organization": "Canterbury Coffee Corporation",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.6003
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 55.2929
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5787
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 13.8733
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2959
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0565605, 49.3063722]
    },
    "properties": {
      "organization": "Cargill Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.0524
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3506
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.0176
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 18.4672
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.4123
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0722146, 49.1893497]
    },
    "properties": {
      "organization": "Cascades Canada ULC dba Cascades Containerboard Packaging",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.1343
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.7158
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 4.962
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.5986
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 90.167
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.9243
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0409042, 49.2903998]
    },
    "properties": {
      "organization": "Cascadia Port Management Corporation",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0872
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0292
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0843
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.5334
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0314
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8640696, 49.2288153]
    },
    "properties": {
      "organization": "Catalyst Paper Corporation",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.6642
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.5548
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.6088
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 29.2008
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.6518
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8683364, 49.1522476]
    },
    "properties": {
      "organization": "Century Pacific Foundry Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.1582
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3872
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.1192
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 14.8164
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 20.4441
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.6616
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 18.317
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9391285, 49.1679523]
    },
    "properties": {
      "organization": "CertainTeed Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 21.0185
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 6.8695
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 20.3112
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 369.1321
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 7.8786
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0876692, 49.1907612]
    },
    "properties": {
      "organization": "Chamberlain Spring Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.2006
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0669
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.1941
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 3.5207
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0786
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 2.52
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9173115, 49.288383]
    },
    "properties": {
      "organization": "Chemtrade Chemicals Canada Ltd.",
      "data": [{
        "contaminant": "Sulphur Oxides",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0155001, 49.3013166]
    },
    "properties": {
      "organization": "Chemtrade Electrochem Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.3844
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.722
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.2713
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 257.352
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.8756
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9443396, 49.1761922]
    },
    "properties": {
      "organization": "CIPA Lumber Co. Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 35.4807
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 47.6121
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 7.8587
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 5.47
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 161.407
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 73.525
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 2016.6703
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0854301, 49.2090329]
    },
    "properties": {
      "organization": "City of Vancouver",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.1453
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.8563
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5495
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 35.2067
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.145
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6696527, 49.1070965]
    },
    "properties": {
      "organization": "CKF Inc.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 540.4622
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 92.1034
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0069132, 49.1376388]
    },
    "properties": {
      "organization": "Clean Harbors Canada, Inc.",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8442157, 49.1291245]
    },
    "properties": {
      "organization": "Cloverdale Paint Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0617
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0208
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0598
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 256.8598
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.0875
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0233
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 73.08
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9351286, 49.1805893]
    },
    "properties": {
      "organization": "Coastland Wood Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 25.3661
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 8.6242
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 24.5126
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 60.656
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 14.0644
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 677.115
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1199574, 49.1963068]
    },
    "properties": {
      "organization": "Columbia Foam, Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0521
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0174
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0504
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.9144
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0204
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0751792, 49.2783485]
    },
    "properties": {
      "organization": "CORE Energy Recovery Solutions Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1436
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0477
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.1384
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 2.5218
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0519
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9175208, 49.2765041]
    },
    "properties": {
      "organization": "Corix Utilities Inc",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.7048
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.2828
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.7725
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 25.7557
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.611
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.4467
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1124083, 49.2781966]
    },
    "properties": {
      "organization": "Creative Energy Vancouver Platforms Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 64.932
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 21.693
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 62.748
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 3192.798
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 24.339
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1257521, 49.113026]
    },
    "properties": {
      "organization": "Crown Corrugated Company",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 3.7013
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.2357
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 3.5765
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 22.175
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 32.7108
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.3876
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.471
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9360573, 49.1706506]
    },
    "properties": {
      "organization": "Davis Wire Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.5736
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.8602
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.4859
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.3164
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 45.1904
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.9641
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.054
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9431655, 49.1531925]
    },
    "properties": {
      "organization": "Delta Cedar Products Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 17.9378
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 41.1209
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 17.9255
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 233.8519
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 25.9702
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6660474, 49.2139365]
    },
    "properties": {
      "organization": "E-One Moli Energy (Canada) Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1003
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0335
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0969
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.7592
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0393
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 5.5672
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9296966, 49.1744192]
    },
    "properties": {
      "organization": "Earth Renu Energy Corp.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1399092, 49.1771945]
    },
    "properties": {
      "organization": "Ebco Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 3.5038
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.1714
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 3.3875
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 9.2746
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 61.5453
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.3138
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.405
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0568689, 49.2006939]
    },
    "properties": {
      "organization": "Ebco Metal Finishing L.P.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.5724
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.8277
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.4864
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.11
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 45.1925
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.9631
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.2087
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.70613, 49.04749]
    },
    "properties": {
      "organization": "Ebco Metal Finishing L.P.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.5724
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.8277
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.4864
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.11
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 45.1925
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.9631
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.2087
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.70613, 49.04749]
    },
    "properties": {
      "organization": "Ebco Metal Finishing L.P.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.5724
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.8277
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.4864
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.11
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 45.1925
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.9631
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.2087
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6774405, 49.173763]
    },
    "properties": {
      "organization": "ECP L.P.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.1815
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3945
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.1425
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 1.6948
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 20.732
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.4625
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.52
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7679901, 49.2557033]
    },
    "properties": {
      "organization": "Esco Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 7.9293
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.6466
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 7.6641
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 446.498
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 152.8977
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 20.3779
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 194.141
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0284469, 49.272736]
    },
    "properties": {
      "organization": "Ethical Bean Coffee Company",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.3953
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 6.7336
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.3823
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 6.0273
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.1657
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8571275, 49.1435822]
    },
    "properties": {
      "organization": "Ewos Canada Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.9915
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.133
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 5.7907
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 104.1117
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.265
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.9022
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8571275, 49.1435822]
    },
    "properties": {
      "organization": "Ewos Canada Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.9915
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.133
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 5.7907
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 104.1117
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.265
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.9022
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8571275, 49.1435822]
    },
    "properties": {
      "organization": "Ewos Canada Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.9915
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.133
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 5.7907
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 104.1117
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.265
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.9022
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.811491, 49.3141772]
    },
    "properties": {
      "organization": "FortisBC Energy (Vancouver Island) Inc.",
      "data": [{
        "contaminant": "Nitrogen Oxides",
        "total": 2877.9764
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0308496, 49.1405993]
    },
    "properties": {
      "organization": "FortisBC Energy Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.9154
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.7445
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.7093
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 114.4654
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 226.9139
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 4.5116
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0308496, 49.1405993]
    },
    "properties": {
      "organization": "FortisBC Energy Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.9154
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.7445
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.7093
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 114.4654
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 226.9139
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 4.5116
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.2445265, 49.2567539]
    },
    "properties": {
      "organization": "FP Innovations",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.148
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0495
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.1425
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.66
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 2.5955
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.053
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0694754, 49.1318124]
    },
    "properties": {
      "organization": "Fraser Wharves Ltd.",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.167
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0436872, 49.3042313]
    },
    "properties": {
      "organization": "G3 Terminal Vancouver Limited Partnership",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.2227
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0746
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2151
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.9568
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0803
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.5178
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.67891, 49.1777546]
    },
    "properties": {
      "organization": "General Electric Canada",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.5808
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.192
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.4978
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 10.1949
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2275
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 4.0048
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0819508, 49.2762977]
    },
    "properties": {
      "organization": "General Paint Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 284.3118
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 125.863
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.876352, 49.2129728]
    },
    "properties": {
      "organization": "Georgia-Pacific Canada LP",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 8.104
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.6731
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 7.834
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 142.1955
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 3.1744
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0252502, 49.0806666]
    },
    "properties": {
      "organization": "GFL Environmental Inc.",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 409.0408
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1436584, 49.1744968]
    },
    "properties": {
      "organization": "Grimm's Fine Foods Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.7104
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 38.3652
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.6533
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.8369
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 30.005
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.6699
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.8123
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0983735, 49.1955535]
    },
    "properties": {
      "organization": "H-S Tool and Parts Inc.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 37.78
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 6.02
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0176283, 49.203669]
    },
    "properties": {
      "organization": "Haida Forest Products Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.6171
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2066
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5963
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 10.8461
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2318
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7059682, 49.1787374]
    },
    "properties": {
      "organization": "Hal Industries Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.0118
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 19.1722
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.944
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 40.0949
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.8515
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9710438, 49.1860742]
    },
    "properties": {
      "organization": "Hal Industries Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.0118
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 19.1722
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.944
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 40.0949
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.8515
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0392157, 49.1596196]
    },
    "properties": {
      "organization": "Harvest Fraser Richmond Organics Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1048
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.5406
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.014
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 135.9259
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 19.2253
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 555.9425
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0392157, 49.1596196]
    },
    "properties": {
      "organization": "Harvest Fraser Richmond Organics Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1048
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.5406
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.014
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 135.9259
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 19.2253
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 555.9425
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0392157, 49.1596196]
    },
    "properties": {
      "organization": "Harvest Fraser Richmond Organics Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1048
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.5406
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.014
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 135.9259
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 19.2253
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 555.9425
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7044416, 49.1777925]
    },
    "properties": {
      "organization": "Highland Foundry Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.7643
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.5899
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.7058
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 96.04
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 49.0159
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.8112
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 21.7042
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0448976, 49.0541946]
    },
    "properties": {
      "organization": "Houweling Nurseries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 8.6776
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0648
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 37.937
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.5116
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1075286, 49.2069831]
    },
    "properties": {
      "organization": "Howe Sound Pulp & Paper Ltd Partnership",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 13.9513
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.044
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6873606, 49.1819068]
    },
    "properties": {
      "organization": "Imasco Minerals Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.0075
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3341
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.9737
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 17.6704
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.3775
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8821187, 49.3009909]
    },
    "properties": {
      "organization": "Imperial Oil Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.9754
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.6594
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.9084
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 25.4254
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 34.6628
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.7582
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 26.2131
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0084329, 49.1390552]
    },
    "properties": {
      "organization": "Inteplast Bags and Films Corporation",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.0283
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.343
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.9971
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 1993.5669
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 18.0856
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.386
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 320.13
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9194518, 49.1743808]
    },
    "properties": {
      "organization": "Interfor Corporation",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 28.0848
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 47.4425
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 28.0055
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 179.7167
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 353.5098
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 38.6817
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.6
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.652674, 49.2051746]
    },
    "properties": {
      "organization": "Interfor Corporation",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 28.0848
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 47.4425
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 28.0055
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 179.7167
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 353.5098
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 38.6817
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.6
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9428101, 49.1494562]
    },
    "properties": {
      "organization": "Intertape Polymer Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.4286
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.1433
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.4142
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 7.5386
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.1542
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 6.2614
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6572887, 49.110588]
    },
    "properties": {
      "organization": "IPEX INC.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 9.9455
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.49
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.388917, 49.3651009]
    },
    "properties": {
      "organization": "J & E Backhoe Ltd.",
      "data": [{
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 11.6834
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.6448
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.016
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.6673
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.4266064, 49.1756412]
    },
    "properties": {
      "organization": "Kay-Dee Forest Products Ltd. (dba Valley Kiln and Pattern Ltd.)",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.9276
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3099
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.8964
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 16.2906
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.3477
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9392759, 49.1703844]
    },
    "properties": {
      "organization": "Kemira Chemicals Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.3911
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.7991
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.3118
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 42.0027
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.8961
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9371553, 49.2022293]
    },
    "properties": {
      "organization": "Kruger Products LP",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 106.8919
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 234.9585
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 105.031
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1638.8742
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 96.5912
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 6.3747
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0077031, 49.1563741]
    },
    "properties": {
      "organization": "Lafarge Canada Inc.",
      "data": [{
        "contaminant": "Nitrogen Oxides",
        "total": 34969.8819
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 13332.4723
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 95.14
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8285949, 49.2241505]
    },
    "properties": {
      "organization": "Lafarge Canada Inc. (dba Columbia Bitulithic)",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 17.8147
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 6.0183
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.4747
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 124.7733
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 6.9036
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0744018, 49.2049942]
    },
    "properties": {
      "organization": "Lafarge Canada Inc. (dba Columbia Bitulithic)",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 17.8147
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 6.0183
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.4747
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 124.7733
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 6.9036
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6766213, 49.1832191]
    },
    "properties": {
      "organization": "Lafarge Canada Inc. (dba Columbia Bitulithic)",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 17.8147
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 6.0183
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.4747
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 124.7733
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 6.9036
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0808192, 49.2837666]
    },
    "properties": {
      "organization": "Lantic Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 62.5688
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 20.9149
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 60.4648
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 7.9647
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1500.2422
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 23.4532
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.711
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7726407, 49.321314]
    },
    "properties": {
      "organization": "Lehigh Hanson Materials Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.1136
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.7128
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 68329.919
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 29040.1612
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0185223, 49.1423851]
    },
    "properties": {
      "organization": "Lehigh Hanson Materials Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.1136
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.7128
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 68329.919
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 29040.1612
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6605456, 49.1894763]
    },
    "properties": {
      "organization": "Lhoist North America of Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 42.4331
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 15.1697
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 41.0065
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 745.223
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 15.9068
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7620029, 49.2497992]
    },
    "properties": {
      "organization": "Lucava Farms Inc.",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.0798
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8613004, 49.2160112]
    },
    "properties": {
      "organization": "Mackenzie Sawmill Ltd.",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.2007
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.736663, 49.1025389]
    },
    "properties": {
      "organization": "Maple Leaf Foods Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.6108
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 3.3573
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5907
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 10.7175
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2391
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6717574, 49.1803776]
    },
    "properties": {
      "organization": "Marine Plastics Ltd",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1092
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.036
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.1052
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 12.23
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.9136
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.042
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 146.487
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7069078, 49.1782002]
    },
    "properties": {
      "organization": "McAllister Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 3.3039
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 7.9032
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 3.1375
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 10.7687
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 72.9194
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.5663
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 22.6001
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6746316, 49.1851684]
    },
    "properties": {
      "organization": "McAsphalt Industries Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.6627
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.5552
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.606
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 29.1833
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.6225
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9625816, 49.3040614]
    },
    "properties": {
      "organization": "McKenzie Barge & Marine Ways Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 9.57
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 7.34
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0914481, 49.1947167]
    },
    "properties": {
      "organization": "Metalex Products Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.4083
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.4738
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.3615
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 24.7357
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 421.3172
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6871604, 49.1708249]
    },
    "properties": {
      "organization": "Metrie Canada Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 628.9997
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 304.38
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0742126, 49.1893204]
    },
    "properties": {
      "organization": "Microb Resources Inc. [dba Salt Spring Coffee Co]",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.2898
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 3.5678
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2798
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 6.9316
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.1466
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0993094, 49.1236763]
    },
    "properties": {
      "organization": "Microb Resources Inc. [dba Salt Spring Coffee Co]",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.2898
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 3.5678
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2798
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 6.9316
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.1466
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9663912, 49.1896844]
    },
    "properties": {
      "organization": "Mitchell Press Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.6037
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2014
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5837
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 4.208
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 26.7165
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.5656
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 5.4326
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1440207, 49.2724519]
    },
    "properties": {
      "organization": "Molson Canada 2005",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 16.7514
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 5.5941
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 16.1885
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 294.1317
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 6.3348
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.098047, 49.1937865]
    },
    "properties": {
      "organization": "Montalco Cabinets Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 363.35
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 52.37
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8500015, 49.1429235]
    },
    "properties": {
      "organization": "Mostad Publications Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.3758
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 29.2032
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.3066
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 17.0503
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 24.4375
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.5219
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.376
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.2324372, 49.2451939]
    },
    "properties": {
      "organization": "National Research Council Canada",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0045
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0004
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0012
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.0102
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0017
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.86204, 49.15149]
    },
    "properties": {
      "organization": "National Silicates Partnership dba National Silicates",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.1269
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3754
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.0875
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 19.7631
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.434
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.94237, 49.19328]
    },
    "properties": {
      "organization": "Nikolai Manufacturing Inc.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 31.0739
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 5.113
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.973196, 49.186847]
    },
    "properties": {
      "organization": "Norampac Burnaby, a division of Cascades Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.4076
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.136
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.394
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 11.66
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 19.0823
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.1597
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.1588
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0806581, 49.2086884]
    },
    "properties": {
      "organization": "Nutreco Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.5764
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 2.1966
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 6.3553
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 115.4965
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.465
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.5363876, 49.0667955]
    },
    "properties": {
      "organization": "Otter Farm & Home Co-Operative",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.1465
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3833
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.1075
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 20.1273
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.4293
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6682394, 49.17938]
    },
    "properties": {
      "organization": "Pacific Fermentation Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.211
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0702
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.2038
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 3.699
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0812
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.4827834, 49.1013901]
    },
    "properties": {
      "organization": "Pacific Mako (A Div. of Pacific Bronze Ltd.)",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.5586
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.1339
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5396
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 4.16
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 9.8077
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2078
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.37
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9901317, 49.168334]
    },
    "properties": {
      "organization": "Pan-Abode International Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.6055
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.8698
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 5.418
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0.48
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 98.3773
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.1707
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.11
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9851302, 49.2925041]
    },
    "properties": {
      "organization": "Parkland Refining (B.C.) Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 80.6707
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 44.4049
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 39.8722
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 220.4232
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 2260.2034
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 4899.837
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 298.5833
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1008582, 49.1260474]
    },
    "properties": {
      "organization": "Pedro's Organic Coffee Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0075
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.72
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.36
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.2613
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0054
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8968769, 49.2880164]
    },
    "properties": {
      "organization": "Petro-Canada",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 23.4022
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 7.7249
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 22.3577
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 372.4639
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 8.7238
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1134.026
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1142955, 49.3147536]
    },
    "properties": {
      "organization": "PKM Canada Marine Terminal Limited Partnership",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8571924, 49.1534495]
    },
    "properties": {
      "organization": "Precision Heat Treat Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.6852
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2291
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.6628
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 11.9168
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.255
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.973196, 49.186847]
    },
    "properties": {
      "organization": "PTPC Corrugated Company (Boxmaster)",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 10.9811
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1.91
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7591065, 49.2400652]
    },
    "properties": {
      "organization": "Quad/Graphics Canada, Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.6288
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 30.4823
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.3517
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 50.35
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 31.841
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.7107
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 58.955
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9324491, 49.1789077]
    },
    "properties": {
      "organization": "R. P. Richmond Industrial Contractors Ltd",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0812
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0273
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0786
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 360.89
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.4233
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0304
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 94.779
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8639581, 49.2787177]
    },
    "properties": {
      "organization": "Reichhold Industries Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.7963
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 18.4808
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 5.3902
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 101.7947
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 2.1763
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.46
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.016278, 49.135172]
    },
    "properties": {
      "organization": "Revolution Environmental Solutions Acquisition GP Inc. dba Terrapure",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 148.1402
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.0002
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.012875, 49.3025745]
    },
    "properties": {
      "organization": "Revolution ORS Acquisition GP Inc. dba Terrapure",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 5.8782
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 31.1145
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 5.6656
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 125.6139
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 362.9634
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0660305, 49.3050974]
    },
    "properties": {
      "organization": "Richardson International Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 4.1739
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.3919
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 4.0346
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 73.2549
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.6163
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0711644, 49.1999715]
    },
    "properties": {
      "organization": "Richmond Plywood Corporation Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 130.2124
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 316.9994
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 130.1328
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 57.4568
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1699.2883
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 195.2182
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 1764.0632
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8639921, 49.1456016]
    },
    "properties": {
      "organization": "Robar Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.5037
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.4964
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.4531
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 38.207
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 26.4065
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.564
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 4.5456
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9554247, 49.1889394]
    },
    "properties": {
      "organization": "RockTenn Company of Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.893
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.631
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.83
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 33.2095
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.7415
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0917188, 49.2017331]
    },
    "properties": {
      "organization": "Ropate Equipment Refinishers Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 9.655
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 3.479
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7572672, 49.2486902]
    },
    "properties": {
      "organization": "SAPA Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.0878
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3153
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.3406
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 0
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 24.1441
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.5389
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 17.8563
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8831956, 49.2110505]
    },
    "properties": {
      "organization": "Schnitzer Steel Canada Ltd.",
      "data": [{
        "contaminant": "Total Volatile Organic Compounds",
        "total": 4.5863
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9121557, 49.0899188]
    },
    "properties": {
      "organization": "Seabreeze Farm Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0252
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0084
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0245
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.448
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0091
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9702016, 49.2824557]
    },
    "properties": {
      "organization": "Shell Canada Products",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0001
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0001
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0001
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.0001
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0001
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 217.6624
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9281815, 49.2605735]
    },
    "properties": {
      "organization": "Shell Canada Products",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0001
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0001
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0001
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.0001
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0001
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 217.6624
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0920899, 49.2091967]
    },
    "properties": {
      "organization": "Sofina Foods Inc./Aliments Sofina Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 2.3795
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 34.489
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 2.3
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 41.7425
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.9315
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8796277, 49.2307515]
    },
    "properties": {
      "organization": "Stella Jones Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 4.2008
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.4033
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 4.0598
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 73.779
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.5747
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.88093, 49.2786973]
    },
    "properties": {
      "organization": "Suncor Energy Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 4.1832
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.4002
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 4.0414
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 67.2524
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.5083
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 180.008
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0116529, 49.3032169]
    },
    "properties": {
      "organization": "Superior Plus LP",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0359
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0551
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0056
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0059
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9411397, 49.1666193]
    },
    "properties": {
      "organization": "Supreme Steel LP",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 10.8909
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.938771, 49.256072]
    },
    "properties": {
      "organization": "Swiss Water Decaffeinated Coffee Company Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.3169
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 57.3839
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 6.1038
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 147.8823
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 3.3755
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0086247, 49.1449254]
    },
    "properties": {
      "organization": "Swiss Water Decaffeinated Coffee Company Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 6.3169
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 57.3839
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 6.1038
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 147.8823
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 3.3755
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0742126, 49.1893204]
    },
    "properties": {
      "organization": "Technic Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.05
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0169
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0487
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.8822
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0188
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0729518, 49.1878258]
    },
    "properties": {
      "organization": "Teldon International Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.354
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 13.4672
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 9.7585
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2181
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0878638, 49.2038546]
    },
    "properties": {
      "organization": "Terminal Forest Products Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.2368
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.4132
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.1952
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 11.03
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 21.7208
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.4636
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 6.168
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.083521, 49.204576]
    },
    "properties": {
      "organization": "Terminal Forest Products Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.2368
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.4132
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.1952
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 11.03
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 21.7208
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.4636
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 6.168
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0199236, 49.3020938]
    },
    "properties": {
      "organization": "Terrabiogen Technologies Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.3632
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.1212
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.3512
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 6.3744
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.1424
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0974081, 49.2808145]
    },
    "properties": {
      "organization": "The Canadian Fishing Company Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0025
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0008
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0025
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.0449
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0009
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8749766, 49.151481]
    },
    "properties": {
      "organization": "Thompson Foundry Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.357
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.4535
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.3115
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 1.0646
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 23.8321
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.5089
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0.142
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0781639, 49.1992223]
    },
    "properties": {
      "organization": "Transcontinental Flexstar Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.5988
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.2
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5808
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 459.832
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 10.5428
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.2164
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9651594, 49.1635049]
    },
    "properties": {
      "organization": "Transcontinental Printing 2005 G.P.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 3.3309
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 178.0682
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 3.2185
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 139.947
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 156.7489
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 3.3527
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 30.1117
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9573624, 49.186499]
    },
    "properties": {
      "organization": "Tree Island Industries Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 16.0706
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 5.3291
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 15.531
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 128.709
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 282.2295
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 34.0856
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 42.1613
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1010556, 49.1974262]
    },
    "properties": {
      "organization": "Trident Millwork & Display Industries Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 70.63
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 7.246
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6786779, 49.1696881]
    },
    "properties": {
      "organization": "Unifirst Canada Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.0517
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.3503
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.0159
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 18.4675
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.3943
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1188222, 49.1972291]
    },
    "properties": {
      "organization": "Univar Canada Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 11.7934
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 2.567
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.2546082, 49.2602714]
    },
    "properties": {
      "organization": "University of British Columbia",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 33.9312
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 22.4269
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 18.4801
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 393.5489
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 49.8995
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 49.1063
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.2465839, 49.2671585]
    },
    "properties": {
      "organization": "University of British Columbia",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 33.9312
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 22.4269
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 18.4801
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 393.5489
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 49.8995
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 49.1063
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1223979, 49.260261]
    },
    "properties": {
      "organization": "Vancouver Coastal Health Authority",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 14.8304
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 4.9556
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 14.3312
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 253.7946
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 5.538
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1073737, 49.3162991]
    },
    "properties": {
      "organization": "Vancouver Shipyards Co. Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 156.0786
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 206.2524
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1073737, 49.3162991]
    },
    "properties": {
      "organization": "Vancouver Shipyards Co. Ltd.",
      "data": [{
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 156.0786
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 206.2524
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.999147, 49.086298]
    },
    "properties": {
      "organization": "VF Clean Energy Inc.",
      "data": [{
        "contaminant": "Nitrogen Oxides",
        "total": 1523.99
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0682627, 49.2857245]
    },
    "properties": {
      "organization": "Viterra Canada Inc",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0872
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0292
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.0843
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 1.5334
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0314
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.4294972, 49.1726554]
    },
    "properties": {
      "organization": "Waldun Forest Products Ltd. and Twin Rivers Cedar Products Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.1377
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0461
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.1338
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 2.4257
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0518
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0904418, 49.194107]
    },
    "properties": {
      "organization": "Weir - R. Wales Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.4627
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 6.5493
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.4466
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 51.3293
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 8.1155
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 42.9688
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 7.422
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.7011416, 49.0649678]
    },
    "properties": {
      "organization": "Weir Canada Inc.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 0.0249
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 0.0083
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.024
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 9.4468
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 0.218
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.0091
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 4.6853
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.0708775, 49.2852677]
    },
    "properties": {
      "organization": "West Coast Reduction Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 43.7863
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 112.7955
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 42.3129
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 769.0149
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 16.376
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 0
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.910674, 49.1816442]
    },
    "properties": {
      "organization": "Western Cleanwood Preservers Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 3.1985
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 1.0687
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 3.0913
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 56.1781
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 1.1991
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.5730984, 49.1886767]
    },
    "properties": {
      "organization": "Western Drum Recyclers Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 1.5353
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 8.2862
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 1.4807
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 26.9129
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 0.5727
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 118.7464
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.9476668, 49.1639702]
    },
    "properties": {
      "organization": "Weyerhaeuser Company Limited",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 27.7591
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 211.0235
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 26.259
      }, {
        "contaminant": "Fugitive Volatile Organic Compounds",
        "total": 28.8783
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 450.5063
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 23.2365
      }, {
        "contaminant": "Total Volatile Organic Compounds",
        "total": 179.6526
      }]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.8873514, 49.2230803]
    },
    "properties": {
      "organization": "Winvan Paving Ltd.",
      "data": [{
        "contaminant": "Combustion Condensible Particulate Matter",
        "total": 16.3642
      }, {
        "contaminant": "Combustion Filterable Particulate Matter",
        "total": 5.6523
      }, {
        "contaminant": "Combustion Volatile Organic Compound",
        "total": 0.5807
      }, {
        "contaminant": "Nitrogen Oxides",
        "total": 83.8569
      }, {
        "contaminant": "Sulphur Oxides",
        "total": 6.0457
      }]
    }
  }]
};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[143,1,2]]]);