const element = document.querySelector('a');
const className = window.prompt('Please choose & input one of the following colors: green, blue or red');
if (className == 'blue' || className == 'green' || className == 'red'){
    element.classList.add(className);
} else{
    window.alert("Please input a valid colour only");
}
