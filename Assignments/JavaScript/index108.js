let sortfun = function(number1, number2, number3){
    let arr = [number1, number2, number3];
    arr.sort((a,b) => {return a-b});
    console.log(arr);
}
sortfun(10, 8, 25);

let sortNum = function(number1, number2, number3, highToLow){
    if (highToLow == false) {
        let arr = [number1, number2, number3];
        arr.sort((a,b) => {return a-b});
        console.log("Sorted array after Asscending: ", arr);
    } else {
        let arr = [number1, number2, number3];
        arr.sort((a,b) => {return b-a});
        console.log("Sorted array after Descending : ", arr);
    }
}
sortNum(10, 8, 25, true);