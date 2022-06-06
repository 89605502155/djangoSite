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


addButton.addEventListener("click",function(){
    var username=prompt("Give me your username");
    const request = new XMLHttpRequest();
    const url = "../../backend/aftorization_script1.go";
    const params = "username=" + username;


    
    let userid=-1;
    var continueAdded=false;
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
    // console.log(users[userid].username);
    var password=prompt("Your password");
    password===users[userid].password? continueAdded=true : alert("Your password is bad");
    // console.log(continueAdded);
    if(continueAdded){
        var numberOfDepths=prompt("How much depths you want to add on our map?");
        for (var i=0;i<5;i++){
            if(((Number(numberOfDepths>0))&&(Number.isInteger(Number(numberOfDepths))))){
                continueAdded=true;
                break;
            }
            numberOfDepths=prompt("Your number were bad. Can you input your number again.");
            continueAdded=false;
        };
        // ((Number(numberOfDepths>0))&&(Number.isInteger(Number(numberOfDepths))))?continueAdded=true:continueAdded=false;        
    }
    console.log(continueAdded);
    console.log(numberOfDepths);
});
