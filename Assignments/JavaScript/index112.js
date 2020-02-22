let showNumbers = function(start, end){
    if ((typeof(start) == 'number') && typeof(end) == 'number'){
        if ((start>end)) {
            for(i = start; i>=end; i--){
                console.log(i);
            }
        } else if (start<end){
            for(i = start; i <= end; i++){
                console.log(i);
            }
        } else if (start == end) {
            console.log("Start and End numbers are same and is equal to : ", start);
        }
    } else {
        console.log('The parameters must be numbers');
    }
}
showNumbers(20, '20');
showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100, 100);