let element = document.querySelector('a');

let id1 = element.className;
let id2= element.attributes[0].name;

console.log(element);
console.log(element.getAttribute('class'));
console.log(id1);
console.log(id2);

