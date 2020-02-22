let username = window.prompt("Please enter the User Name");
let pwd = window.prompt("Please enter the Password");
window.alert(`Welcome ${username}`);

let wait = function() {
    let yes = window.confirm(`Do you still want to be logged in?`);
    if(yes == true){
        return true;
    } else{
        return false;
    }
}
setTimeout(wait, 10000);
if (wait() == true){
    window.alert(`${username} your session has been restored`);
} else{
    window.alert(`${username} your session has expired`);
}