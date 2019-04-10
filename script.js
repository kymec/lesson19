"use strict"
//Задание 1
function isNumberInRange(number){
    return (number > 0 && number < 10);
}
console.log(isNumberInRange(5));

//Задание 2
function isEven(number){
    return !(number % 2);
}
console.log(isEven(5));

//Задание 3
var value = +prompt('value?', '');
switch (value){
    case 0:
        alert( 0 );
        break;
    case 1: 
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

//Задание 4
function min(a, b){
    if (a < b){
        return a;
    } else{
        return b;
    }
}
console.log(min(5, 3))