const form=document.getElementById('allVariantsOfVizualization');

function retrieveFormValue(event){
    event.preventDefault();
    var name=form.querySelector('[name="nameStf"]');
    var longitude=form.querySelector('[name="longitudef"]');
    var latitude=form.querySelector('[name="latitudef"]');
    var depth=form.querySelector('[name="depthf"]');
    var salinity=form.querySelector('[name="salinityf"]');
    var docf=form.querySelector('[name="docf"]');

    const values={
        nameOfStation: name.checked,
        longitude: longitude.checked,
        latitude: latitude.checked,
        depth: depth.checked,
        salinity: salinity.checked,
        docf: docf.checked
    }

    console.log("hhh",values);
}

form.addEventListener('submit', retrieveFormValue);
