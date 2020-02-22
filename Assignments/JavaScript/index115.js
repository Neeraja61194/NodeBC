let getLongerText = function (s1, s2){
    if (s1.length>s2.length) {
        console.log("The longer Text : ", s1);
    } else if (s2.length>s1.length){
        console.log("The longer Text : ", s2);
    } else {
        console.log("Both texts are same : ", s2);
    }
}
getLongerText("Hello", "Hi");
getLongerText("Neeraja", "Neerajaji");
getLongerText("neer", "neer")