let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
console.log("The Original mutant array : ", mutants);
for (let i = 0; i <= mutants.length; i ++){
    a1 = ["Professor X", "Logan", "Phoenix", "Gambit"];
    if(a1.includes(mutants[i])){
        mutants[i] = "<3" + mutants[i];
    }
}
console.log("The Updated mutant array : ", mutants);