let getShapePerimeter = function(b, h){
    if (b == h) {
        perim = 4*b; 
        console.log(`${perim} is the shape Perimeter`)
    } else if (b != h) {
        perim = 2*(b+h);
        console.log(`${perim} is the shape Perimeter`);
    }
    if (perim>100) {
        console.log("Perimeter is too big");
    } else{
        console.log("Perimeter is fine");
    }
}

getShapePerimeter(20, 50);
getShapePerimeter(5, 5);
