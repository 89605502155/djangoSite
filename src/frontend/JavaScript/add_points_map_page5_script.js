$(document).ready(function(){
    $('#addStationsParentForm').submit(function(event){
        event.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            type: "POST",
            url: "src/backend/add_poins_1.php",
            data: $(this).serialize(),
            success: function(jsonData)
            {
                document.getElementById("inputDepthAddedStation1").style.pointerEvents="auto";
                document.getElementById("addStationsParentForm").style.display="none";
                document.getElementById("addPointsButtonid").style.display="block";
                // var jsonData = response;
                if(jsonData.success == "1"){
                    alert("You add point, good!");
                } else{
                    alert("Panic Error!!!");
                }
                window.location.reload();
            }
        });
    });
});