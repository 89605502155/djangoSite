$(document).ready(function(){
    $('#authenticForm').submit(function(event){
        event.preventDefault();
        // if ($('#inputUserName1').val()==="" || $('#inputPassword1').val()===""){
        //     alert("You want to sent a pass string");
        // }
        // console.log($(this).serialize());
        document.getElementById("mapPagesubmitButton1").style.pointerEvents="none";
        $.ajax({
            type: "POST",
            url: "src/backend/afrorization_1.php",
            data: $(this).serialize(),
            success: function(jsonData)
            {
                // var jsonData = response;
                document.getElementById("authenticForm").style.display="none";
                document.getElementById("mapPagesubmitButton1").style.pointerEvents="auto";
                if (jsonData.success == "1")
                {
                    document.getElementById("addStationsParentForm").style.display="block";
                    // var txt2='<script src="src/frontend/JavaScript/add_points_map_page3_script.js"></script>';
                    // $("main").append(txt2);
                    alert("Great!");
                }
                else
                {
                    alert("Invalid Credentials!");
                    document.getElementById("addPointsButtonid").style.display="block";
                    // var txt2='<script src="src/frontend/JavaScript/add_points_map_page1_script.js"></script>';
                    // $("main").append(txt2);
                }
            }
        });
    });
});

