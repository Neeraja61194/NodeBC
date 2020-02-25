window.alert(`This program adds all the numbers you input and keep count`);
let enterNumber1 = parseInt(window.prompt("Enter a number"));
let confirm = window.confirm(`Would you like to input another number?`);
let sum = 0;
let count = 1;
if (confirm == true){
    let enterNumber2 = parseInt(window.prompt("Enter another number"));
    sum = enterNumber1+enterNumber2;
    count += 1;
}
console.log("The results so far is : ", sum);

/* Copy and paste the code from the previous exercise
Refactor the code to math the new requirements:
Now we need to keep track of how many numbers the user input
Once the user doesn't want to add any more numbers show the following message:
The final result is: %result%
The user input %numbers% numbers
The average is: %average% */