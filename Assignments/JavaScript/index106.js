let getUserID = function(){
    return 20;
}
let isUserValid = function(){
    let id = getUserID();
    if (id>30) {
        return true;
    }else {
        return false;
    }
}
if (isUserValid() == true) {
    console.log("User Valid")
} else{
    console.log("User Not Valid")
}