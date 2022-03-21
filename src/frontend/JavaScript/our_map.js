window.onload=init

function init(){
	const map=new ol.Map({
		view: new ol.View({
			center: [12333691.37451099, 14420057.976483416],
			zoom: 2
		}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target: "js-map"
	})

	map.on('click', function(e){
		console.log(e.coordinate);
	})
}


