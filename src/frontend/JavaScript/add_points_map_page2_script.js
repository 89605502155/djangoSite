$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();
        if ($('#inputUserName1').val()==="" || $('#inputPassword1').val()===""){
            alert("You want to sent a pass string");
        }
        // console.log($(this).serialize());
        $.ajax({
            type: "POST",
            url: "src/backend/afrorization_1.php",
            data: $(this).serialize(),
            success: function(jsonData)
            {
                // var jsonData = response;
                if (jsonData.success == "1")
                {
                    // var txt2='<script src="src/frontend/JavaScript/add_points_map_page3_script.js"></script>';
                    // $("main").append(txt2);
                    alert("Great!");
                }
                else
                {
                    const formForRemove=document.getElementById("authenticForm");
                    formForRemove.style.display="none";
                    alert("Invalid Credentials!");
                    const addButton = document.getElementById("addPointsButtonid");
                    addButton.style.display="block";
                    // var txt2='<script src="src/frontend/JavaScript/add_points_map_page1_script.js"></script>';
                    // $("main").append(txt2);
                }
            }
        })
    });
});

