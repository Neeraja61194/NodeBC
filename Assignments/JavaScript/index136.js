let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let st = '';
mutants.forEach(function(mutant, index) { 
    if(index == 2 || index == 7 || index == 6){
        st += mutant + " ";
    }
});
console.log("String : ", st);