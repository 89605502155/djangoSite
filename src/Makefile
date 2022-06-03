.PHONY: all

all: \
	frontend/css/bootstrap.min.css \
	frontend/JavaScript/libs/v6.13.0-dist/ol.css \
	frontend/JavaScript/libs/v6.13.0-dist/ol.js \
	frontend/JavaScript/leaflet1_7/leaflet.js \
	frontend/JavaScript/leaflet1_7/leaflet.css \
	frontend/JavaScript/leaflet1_7/images/layers-2x.png \
	frontend/JavaScript/leaflet1_7/images/marker-icon-2x.png \
	frontend/JavaScript/leaflet1_7/images/marker-shadow.png \
	frontend/JavaScript/leaflet1_7/images/layers.png \
	frontend/JavaScript/leaflet1_7/images/marker-icon.png \
	frontend/JavaScript/jQuery/jquery-3.6.0.min.js \

	sha512sum -c SHA512SUM

frontend/css/bootstrap.min.css:
	curl -o $@ https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css

# now contains local edits
#frontend/css/cover.css:
#	curl -o $@ https://getbootstrap.com/docs/5.1/examples/cover/cover.css

frontend/JavaScript/libs/v6.13.0-dist/ol.css:
	curl -o $@ https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.13.0/css/ol.css

frontend/JavaScript/libs/v6.13.0-dist/ol.js:
	curl -o $@ https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.13.0/build/ol.js

frontend/JavaScript/leaflet1_7/leaflet.js:
	curl -o leaflet.zip https://leafletjs-cdn.s3.amazonaws.com/content/leaflet/v1.7.1/leaflet.zip
	unzip leaflet.zip -d frontend/JavaScript/leaflet1_7
	rm leaflet.zip

frontend/JavaScript/leaflet1_7/leaflet.css: frontend/JavaScript/leaflet1_7/leaflet.js
frontend/JavaScript/leaflet1_7/images/layers-2x.png: frontend/JavaScript/leaflet1_7/leaflet.js
frontend/JavaScript/leaflet1_7/images/marker-icon-2x.png: frontend/JavaScript/leaflet1_7/leaflet.js
frontend/JavaScript/leaflet1_7/images/marker-shadow.png: frontend/JavaScript/leaflet1_7/leaflet.js
frontend/JavaScript/leaflet1_7/images/layers.png: frontend/JavaScript/leaflet1_7/leaflet.js
frontend/JavaScript/leaflet1_7/images/marker-icon.png: frontend/JavaScript/leaflet1_7/leaflet.js

frontend/JavaScript/jQuery/jquery-3.6.0.min.js:
	curl -o $@ https://code.jquery.com/jquery-3.6.0.min.js
