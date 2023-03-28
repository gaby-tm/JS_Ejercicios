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
line.push("Elena");                   
console.log(line);

console.log("EXERCISE 2");
for (let a = 1; a <= 5; a++) {
    let pattern = "";

    for(let b = 1; b<= a; b++) {
        pattern += "* ";
    }
    console.log (pattern);
}

console.log("EXERCISE 3");              
console.log("++++++ 1 ++++++");
//– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// console.log("Elige un valor para la función x escribiendo: x(valor);");      //Para el caso de querer introducir el valor de x
// function x (xValue){               //Para el caso de querer introducir el valor de x
let xValue = 4;                      //Para el caso de querer que X inicie en un valor establecido previamente
while (xValue >= 0) {
    console.log (xValue);
    xValue = xValue - 0.5;
}
// ]

console.log("++++++ 2 ++++++");     //Print all the odd numbers between 1 - 100.
let odd = 1;
while (odd <= 100) {
    if (odd % 2 != 0) {             //Si el residuo de odd entre 2 es diferente de 0
        console.log (odd);
    }
    odd ++;
}

console.log("++++++ 3 ++++++");                     //Write a method with a while loop to print 1 through n in square brackets. 
console.log("Elige un valor para la función n escribiendo: n(valor);");
function n (nValue) {
    let brackets =1;
    while ( brackets <= nValue) {
    console.log ("[" + brackets + "]" );
    brackets ++;
    }
}

console.log("++++++ 4 ++++++");     //Write a method with a while loop that computes the sum of first n positive integers:
console.log("Elige un valor para la función sum escribiendo: sum(valor);");
function sum (max) {
let b = 0;
let num = 1;
while (num <= max) {
    b = b + num;
    // console.log (b);
    num++;
} return ("La suma es " + b);
}


// https://github.com/gaby-tm/JS_Ejercicios/tree/master/JS-04%20-%20Arrays%20and%20Loops