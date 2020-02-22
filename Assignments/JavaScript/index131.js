let femaleStudents = ["Nancy", "Neera", "Macy", "Chloe", "Sarah"];
let maleStudents = ["John", "Peter", "Jacob", "Jithin", "Santa"];
let students = femaleStudents.concat(maleStudents);
let sortStudents = students.sort();
for(let i = 0; i <= femaleStudents.length-1; i ++){
    console.log("Female Students : ", femaleStudents[i]);
}
let j = 0;
while(j < maleStudents.length){
    console.log("Male Students : ", maleStudents[j]);
    j ++;
}
for(let i = 0; i <= students.length-1; i ++){
    console.log("Students : ", students[i]);
}