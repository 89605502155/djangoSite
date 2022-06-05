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
    var txt1 = '<form>'+
    '<div class="mb-3">'+
    '<label for="inputUserName" class="form-label">User name</label>'+
    '<input type="text" class="form-control" id="inputUserName">'+
    '</div>'+
    '<div class="mb-3">'+
    '<label for="exampleInputPassword1" class="form-label">Password</label>'+
    '<input type="text" class="form-control" id="exampleInputPassword1">'+
    '</div>'+
    '<button type="submit" class="btn btn-primary">Submit</button>'+
    '</form>';               // Create element with HTML 
    // var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    // var txt3 = document.createElement("p");  // Create with DOM
    // txt3.innerHTML = "Text.";
    $("main").append(txt1);
});
