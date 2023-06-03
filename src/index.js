// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import App from './js/components/App/App';

// import * as turf from '@turf/helpers';
// import PointsWithinPolygon from '@turf/points-within-polygon';
// import * as turf from '@turf/turf'

const init = async () => {
	App.init()
	// var points = turf.points([
	// 	[-46.6318, -23.5523],
	// 	[-46.6246, -23.5325],
	// 	[-46.6062, -23.5513],
	// 	[-46.663, -23.554],
	// 	[-46.643, -23.557]
	// ]);
	// const point = turf.point([-46.6246, -23.5325])
	
	// var searchWithin = turf.polygon([[
	// 	[-46.653,-23.543],
	// 	[-46.634,-23.5346],
	// 	[-46.613,-23.543],
	// 	[-46.614,-23.559],
	// 	[-46.631,-23.567],
	// 	[-46.653,-23.560],
	// 	[-46.653,-23.543]
	// ]]);
	
	// var ptsWithin = PointsWithinPolygon(points, searchWithin);

	// console.log(ptsWithin)
};

init();