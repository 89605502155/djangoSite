var iconFeature1 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.1526069, 51.4790309]),),
	name: 'Somewhere',
  });
  
  var iconFeature2 = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.1426069, 51.4840309])),
	name: 'Somewhere else'
  });
  
  // specific style for that one point
  iconFeature1.setStyle(new ol.style.Style({
	image: new ol.style.Icon({
	  anchor: [0.5, 46],
	  anchorXUnits: 'fraction',
	  anchorYUnits: 'pixels',
	  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/200px-Map_marker_font_awesome.svg.png',
	})
  }));
  
  
  
  
  const iconLayerSource = new ol.source.Vector({
	features: [iconFeature1, iconFeature2]
  });
  
  const iconLayer = new ol.layer.Vector({
	source: iconLayerSource,
	 // style for all elements on a layer
	style: new ol.style.Style({
	  image: new ol.style.Icon({
		anchor: [0.5, 46],
		anchorXUnits: 'fraction',
		anchorYUnits: 'pixels',
		src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
	  })
	})
  });
  
		
  const map = new ol.Map({
	  target: 'js-map',
	  layers: [
		  new ol.layer.Tile({
			  source: new ol.source.OSM(),
		  }),
		  iconLayer
	  ],
	  view: new ol.View({
		  center: [12333691.37451099, 14420057.976483416],
		  zoom: 1
	  })
  });


