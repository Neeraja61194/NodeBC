numbers = [];
for(let i =1; i<=1000; i ++){
    numbers.push(i);
}
const addTenMap = numbers.map(function(ten){
    return ten += 10;
});
for (let i = 0; i < numbers.length; i++){
    console.log(`Index: ${i+1} Original Number: ${numbers[i]} Incremented Value: ${addTenMap[i]}`);
}
