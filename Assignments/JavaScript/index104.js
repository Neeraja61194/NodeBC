let n1 = -1;
let n2 = 1;
let i=2;
let s = 0;
let fib = function(){
    for(i=2;i<=10;i++){
        s = n1 + n2;
        console.log(s)
        n1 = n2;
        n2 = s;
    }
}
fib();
fib();
fib();