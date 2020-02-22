let n = 0;
let s =0;
for(n = 0;n <= 1000;n++){
    if (n%2 !== 0){
        s += n;
        console.log(`The Partial Outputs : ${s}`)
    }
}
console.log(`The final output : ${s}`)