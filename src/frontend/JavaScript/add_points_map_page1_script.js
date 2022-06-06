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
    addButton.style.display="none";
    // addButton.remove();
    const form1=document.getElementById("authenticForm");
    form1.style.display="block";
    // var txt1 = 
    // '<script src="src/frontend/JavaScript/add_points_map_page2_script.js">'+
    // '$(document).ready(function(){'+
    // '    $(\'form\').submit(function(event){'+
    // '        event.preventDefault();'+
    // '        if ($(\'#inputUserName1\').val()==="" || $(\'#inputPassword1\').val()===""){'+
    // '            alert("You want to sent a pass string");'+
    // '        }'+
    // '        console.log($(this).serialize());'+
    // '        $.ajax({'+
    // '            type: "POST",'+
    // '            url: "src/backend/afrorization_1.php",'+
    // '            data: $(this).serialize(),'+
    // '            success: function(response)'+
    // '            {'+
    // '                var jsonData = response;'+
    // '                if (jsonData.success == "1")'+
    // '                {'+
    // '                    alert("Good");'+
    // '                }'+
    // '                else'+
    // '                {'+
    // '                    alert("Invalid Credentials!");'+
    // '                }'+
    // '             }'+
    // '        })'+
    // '    });'+
    // '}); '+
    // '</script>';

    // $("main").append(txt1);

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
