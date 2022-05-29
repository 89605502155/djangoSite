function answerCheckboxMap(){
    var name=document.getElementById('nameStf');
    console.log(name);
}

/*Эта функция главная. Она отрисовывает карту */
function mymap(leftmargin_,rightmargin_,data_,maxzoom_,size_){
    var map = L.map('map').setView([leftmargin_, rightmargin_], size_);
    /*
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);

    https://leaflet-extras.github.io/leaflet-providers/preview/

    var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    });
    Esri_WorldStreetMap.addTo(map);
    */
    var Esri_OceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
        maxZoom: maxzoom_
    });
    Esri_OceanBasemap.addTo(map);
    for (var i = 0; i < data_.length; ++i) {
        L.marker([data_[i][1], data_[i][2]]).addTo(map).bindPopup(`Name: ${data[i][0].toString()} <br>
            Longitude: ${data_[i][2].toString()}<br>Latitude: ${data_[i][1].toString()}`);
    }
}


var data = [
    [5586,	73.1105,	61.3195],
    [5587,	74.7819,	66.5903],
    [5588,	73.9047,	72.9762],
    [5590,	77.1743,	114.6749],
    [5590-2,	77.1743,	114.6749],
    [5591,	75.4237,	115.4092],
    [5591-2,	75.4237,	115.4092],
    [5592,	75.8082,	130.4886],
    [5592-2,	75.8082,	130.4886],
    [5596,	74.2625,	130.4749],
    [5596-2,	74.2625,	130.4749],
    [5598,	71.466416666667,	152.89943333333],
    [5600,	72.3199,	154.5133],
    [5602,	73.2342,	156.4292],
    [5604,	74.0795,	158.3475],
    [5605,	74.8733,	160.1832],
    [5606,	75.6362,	161.9968],
    [5607,	76.16515,	163.05431666667],
    [5612,	74.382966666667,	168.1917],
    [5613,	73.3373,	166.7887],
    [5615,	72.3471,	165.4402],
    [5617,	71.362,	164.3406],
    [5619,	70.4342,	163.0687],
    [5627,	73.494366666667,	108.1808],
    [5629,	73.8665,	109.2012],
    [5630,	74.2542,	110.3401],
    [5631,	74.582916666667,	111.6707],
    [5633,	76.3549,	114.9411],
    [5634,	77.6472,	115.5372],
    ['5641-2. 5642',	75.6071,	63.6658],
    [5642,	75.68605,	63.7118],
    [5632,	74.84765,	113.817],
    [5644,	75.6483333333333,	63.7166666666667],
    [5649,	75.3966666666667,	64.3666666666667],
    ];
    
var ourmap_=mymap(75, 124.1240,data,13,3.5);
var ttt=answerCheckboxMap();
    //map.setView([data[0][1], data[0][2]], 3.1);
