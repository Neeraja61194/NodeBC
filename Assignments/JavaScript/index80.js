let n = 0;
let s =0;
do{
    if (n%2 !== 0){
        s += n;
        console.log(`The Partial Outputs : ${s}`)
    }
    n +=1;
}while (n <= 1000)
console.log(`The final output : ${s}`)