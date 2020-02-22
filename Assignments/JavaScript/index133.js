mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
for(let i = 0;i < mutants.length; i ++){
    //console.log("Mutants Name : ", mutants[i])
    if (mutants[i] == "Magneto") {
        break;
    } 
}
for(let i = 0;i < mutants.length; i ++){
    if (mutants[i] == "Magneto") {
        mutants.splice(i,1);
    }
}
for(let i = 0;i < mutants.length; i ++){
    console.log(i, mutants[i].toUpperCase())
}


