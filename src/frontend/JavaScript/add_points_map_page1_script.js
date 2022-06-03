const addButton = document.getElementById("addPointsButtonid");

const firstUser={
    username: "admin",
    password: "qwerty"
}
addButton.addEventListener("click",function(){
    var username=prompt("Give me your username");
    username===firstUser.username ? console.log("Good usn"):console.log("Bad very bad");
    console.log(firstUser.username);
    var password=prompt("Your password");
    password===firstUser.password? console.log("Good password"):console.log("Bad password");
});