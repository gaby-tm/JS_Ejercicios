console.log("EXERCISE 1");
console.log("++++++ Part 1 ++++++");
let line = ["SofIa", "David", "Juan"];  //There are three people waiting for the bank
console.log(line);

console.log("++++++ Part 2 ++++++");
line [3] = "Sara";                      //Two more people get added to the back of the line
line [4] = "Agustin";
console.log(line);
line.shift();                           //The first person in line is called to the teller.
console.log(line);

console.log("++++++ Part 3 ++++++");
line.splice(1, 0, "Renata");            //It turns out David was saving a spot for his friend Renata
line.push("Elena");                     //libros.push("Farenheit 451");
console.log(line);

// https://github.com/gaby-tm/JS_Ejercicios/tree/master/JS-04%20-%20Arrays%20and%20Loops