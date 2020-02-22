let time = window.prompt(`Input the number of seconds you would like to stay in this site`);
const timeLeft = function(time){
    for(let i= 0; i<=time;i++){
        console.log("time left : ", time - i);
        if(time==0){
            window.alert("Your session has expired, come again soon!");
        }
    }
}
const id  = setInterval(timeLeft(time), 10000);
        