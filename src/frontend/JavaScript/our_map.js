<<<<<<< HEAD
window.onload=init

function init(){
	const map=new ol.Map({
		view: new ol.View({
			center: [0,0],
			zoom: 2
		}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target: "map"
	})
}
=======
var map = new ol.Map({
target: 'map',
layers: [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  })
],
view: new ol.View({
  center: ol.proj.fromLonLat([0, 0]),
  zoom: 3
})
});
>>>>>>> 17136a4941eb9995f74275debd7d55ae72d94aba

