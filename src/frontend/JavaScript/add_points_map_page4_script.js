$(document).ready(function(){
    $('#howMuchDepthButton1').click(function(event){
        event.preventDefault();
        // console.log($('#inputNameAddedStation1').val());
        for(var i=0;i<$('#inputDepthAddedStation1').val();i++){
            // console.log(i);
            var strDepth="addedPointDepth"+i;
            var strSalinity="addedPointSalinit"+i;
            var strDoc="addedPointDoc"+i;
            // console.log(strDepth);
            $('#addStationsParentForm').append('<div class="col-auto">'+
            '<h4>Depth number '+(i+1)+'</h4>'+
            '<div><label for='+strDepth+'>Depth</label><input type="number" class="form-control" id='+strDepth+' name='+strDepth+' placeholder=Depth></div>'+
            '<div><label for='+strSalinity+'>Salinity</label><input type="number" class="form-control" id='+strSalinity+' name='+strSalinity+' placeholder=Salinity></div>'+
            '<div><label for='+strDoc+'>DOC</label><input type="number" class="form-control" id='+strDoc+' name='+strDoc+' placeholder=DOC></div>'+
            '</div>');
        }
        $('#addStationsParentForm').append('<button type="submit" class="btn btn-primary" id="mapPagesubmitButton2">Submit</button>')
    });
});