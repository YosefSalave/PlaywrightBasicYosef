const { escape } = require("node:querystring");

let isLoggedIn =true;
let userRole = "Editor";

if(isLoggedIn){
    if(userRole==="admin"){
        console.log("admin can do all the things");
    }else if(userRole==="Editor"){
        console.log("Welcome editor -- edit access granted.")
    }else if(userRole === "Viewer"){
        console.log("Welcome viewer - Read only")
    }else{
        console.log("No idea which role you are!!");
    }
}else{
    console.log("You are not looged in!!")
}