import 'ol/ol.css';

window.onload=init

function init(){
	const map=new ol.Map({
		view: new ol.View({
			projection: 'EPSG:4326',
			center: [12333691.37451099, 14420057.976483416],
			zoom: 2
		}),
		layers: [
			new ol.TileLayer({
			  source: new ol.OGCMapTile({
				url: 'https://maps.ecere.com/ogcapi/collections/blueMarble/map/tiles/WorldCRS84Quad',
			  }),
			}),
		],
		target: "js-map"
	})
}


