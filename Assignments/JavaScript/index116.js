let hex = '';
let getHexaColor = function(col){
    switch (col){
        case 'white': 
            hex = "#FFFFFF";
            break;
        case 'black':
            hex = '#000000';
            break;
        case  'blue':
            hex = '#0b24fb';
            break;
        case  'green':
            hex = '#0e7e12';
            break;
        case  'yellow':
            hex = '#fffd38';
            break;
        case  'pink':
            hex = '#fec1cc';
            break;
        default :
            hex = 'Not applicable for this colour';
    }
    return hex;
}
getHexaColor("white");
console.log("The hex code = ", getHexaColor("white"));