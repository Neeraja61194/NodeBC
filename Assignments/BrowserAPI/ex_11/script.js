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

/*
Ask the user to input his username
Ask the user to input his password
Show the following alert message
Welcome %username%
After 10 seconds and for one time only show the following message to the user
Do you still want to be logged?
If the user confirms that he wants to be logged show the following message:
%username% your session has been restored
Else show the following message
%username% your session has expaired */