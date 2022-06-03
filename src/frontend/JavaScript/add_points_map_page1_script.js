const addButton = document.getElementById("addPointsButtonid");

const users=[
    {
        username: "admin",
        password: "qwerty"
    },
    {
        username: "scientist",
        password: "1234"
    }
];

var continueAdded=false;
addButton.addEventListener("click",function(){
    var username=prompt("Give me your username");
    let userid=-1;
    for(var i=0;i<users.length;i++){
        if(username===users[i].username){
            userid=i;
            break;
        }
    }
    if(userid===-1){
        alert("Your user name is not good, try again.");
        return 0;
    }
    // username===firstUser.username ? console.log("Good usn"):console.log("Bad very bad");
    console.log(users[userid].username);
    var password=prompt("Your password");
    password===users[userid].password? continueAdded=true : alert("Your password or username is bad");
});
// if(continueAdded){

// }