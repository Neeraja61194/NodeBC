let i = 0;
let n = 100;
for(n=10000;n>=0;n--){
    if (n%10 == 0 && n != 0 && n != 100) {
        console.log("**" + n + "**");
    } else{
        console.log(n);
    }
}