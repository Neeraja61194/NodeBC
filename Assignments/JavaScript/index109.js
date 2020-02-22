/*let validateUser = function(username, password){
    if (username == "nacho" && password == "Nerd1979") {
        console.log(`Welcome ${username}, nice to see you again`)
        return true;
    } else if (username == "pedro" && password == "Batman0217") {
        console.log(`Welcome ${username}, nice to see you again`)
        return true;
    } else if (username == "marta" && password == "Mother2312") {
        console.log(`Welcome ${username}, nice to see you again`)
        return true;
    } else{
        console.log("Please input valid credentials")
    }
}
validateUser("marta", "Mother2312");
*/

let validateUser_arr = function(username, password){
    let name = ["nacho", "pedro", "marta"];
    let pwd = ["Nerd1979", "Batman0217", "Mother2312"];
    if (name.includes(username) && pwd.includes(password)) {
        if (name.indexOf(username) == pwd.indexOf(password)){
            console.log(`Welcome ${username}, nice to see you again`);
        } else{
            console.log("Please input valid credentials")
        } 
    } else{
        console.log("Please input valid credentials")
    } 
}
validateUser_arr("nacho", "Nerd1979");
validateUser_arr("marta", "Mother2312");
validateUser_arr("pedro", "Nerd1979");
validateUser_arr("Neera", "Motjgfgf");