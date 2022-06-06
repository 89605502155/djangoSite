const addButton = document.getElementById("addPointsButtonid");

// const users=[
//     {
//         username: "admin",
//         password: "qwerty"
//     },
//     {
//         username: "scientist",
//         password: "1234"
//     }
// ];


addButton.addEventListener("click",function(){
    addButton.remove();
    var txt1 = '<form action="src/backend/afrorization_1.php" method="POST">'+
    '<div class="mb-3">'+
    '<label for="inputUserName1" class="form-label">User name</label>'+
    '<input type="text" class="form-control" id="inputUserName1" name="inputUserName1">'+
    '</div>'+
    '<div class="mb-3">'+
    '<label for="inputPassword1" class="form-label">Password</label>'+
    '<input type="text" class="form-control" id="inputPassword1" name="inputPassword1">'+
    '</div>'+
    '<button type="submit" class="btn btn-primary" id="mapPagesubmitButton1">Submit</button>'+
    '</form>'+
    '<script>'+
    '$(document).ready(function(){'+
    '    $(\'form\').submit(function(event){'+
    '        event.preventDefault();'+
    '        if ($(\'#inputUserName1\').val()==="" || $(\'#inputPassword1\').val()===""){'+
    '            alert("You want to sent a pass string");'+
    '        }'+
    '        console.log($(this).serialize());'+
    '        $.ajax({'+
    '            type: "POST",'+
    '            url: "src/backend/afrorization_1.php",'+
    '            data: $(this).serialize(),'+
    '            success: function(response)'+
    '            {'+
    '                var jsonData = response;'+
    '                if (jsonData.success == "1")'+
    '                {'+
    '                    alert("Good");'+
    '                }'+
    '                else'+
    '                {'+
    '                    alert("Invalid Credentials!");'+
    '                }'+
    '             }'+
    '        })'+
    '    });'+
    '}); '+
    '</script>';

    $("main").append(txt1);

    // '<script type="text/javascript" src="src/frontend/JavaScript/add_points_map_page1_script.js"></script>';        
    // var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    // var txt3 = document.createElement("p");  // Create with DOM
    // txt3.innerHTML = "Text.";

    // '            .done(function() {'+
    // '             console.log("Ты зареган, всё круто");'+
    // '        });'+
    // .done(function(post){'+
    // '            console.log(post);'+
    // '        });'+
    // '        return false;
    // '            async: true,'+
    
});
