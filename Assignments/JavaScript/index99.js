let s = 0;
let i;
for(i=0;i<=1000;i++){
    if (i%2==0) {
        s = s+i;
        if (i>=40) {
            break;
        }
        console.log(s)
    }
}