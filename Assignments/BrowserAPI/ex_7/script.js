
window.alert(`This program adds all the numbers you input`);
let enterNumber1 = parseInt(window.prompt("Enter a number"));
let confirm = window.confirm(`Would you like to input another number?`);
let sum = 0;
if (confirm == true){
    let enterNumber2 = parseInt(window.prompt("Enter another number"));
    sum = enterNumber1+enterNumber2;
}
console.log("The results so far is : ", sum);

/* Create a basic HTML document
Create a script tag on the document head element
Show the user the following message using the alert method:
This program adds all the numbers you input
While the user confirms that he wants to input another number execute the following acctions
Using the prompt method ask the user to input a number
Add the number
Show the partial result with the following message:
The result so far is: %result% */

