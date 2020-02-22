let  even = function(n){
    if (n%2 == 0) {
        console.log("%i is even", n);
        return true;
    } else{
        console.log("%i is odd", n);
        return false;
    }
}
n1=even(2);
console.log(n1)
n2=even(5);
console.log(n2)
