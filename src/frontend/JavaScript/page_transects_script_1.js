fetch('./oldStations.json')
    .then(resoults => resoults.json())
    .then(console.log);

