//ASSIGNMENT OF Array

//QUESTION 01

//CREATE ARRAY (STRING)
let fruits : string [] = ["orange" , "grapes" , "pineapple" , "kiwi" ] ;
console.log(fruits)

//QUESTION 02
//DECLARE ARRAY (NUMBER) 
let numbers : number [] = [10 , 20 , 30 , 40 , 50 , 60];
console.log (numbers) 

//QUESTION 03
// ACCESSING THIRD ELEMENT
let thirdFruit = fruits [2];
console.log (thirdFruit)

//QUESTION 04
// CHANGING SECOND ELEMENT
numbers [1] = 25
console.log (numbers)

//QUESTION 05
//ADD ELEMENT END OF THE FRUIT ARRAY
fruits.push ("mango");
console.log (fruits)

//QUESTION 06
//REMOVE THE LAST ELEMENT FROM THE FRUITS ARRAY
let lastFruit = fruits.pop();
console.log(fruits)

//QUESTION 07
//REMOVE THE FRIST ELEMENT FROM THE FRUITS ARRAY
let fruitFirst = fruits.shift();
console.log(fruits)

//QUESTION 08
//ADD THE ELEMENT BEGINING OF THE FRUITS ARRAY
fruits.unshift ("apple");
console.log (fruits)

//QUESTION 09
//2 ELEMENT REMOVE FROM INDEX 1
fruits.splice(1 , 2);
console.log (fruits)

//QUESTION 10
//INSERT THE ELEMENT STARTING FRUIT INDEX 2
fruits.splice (2 , 0 , "banana" , "mango");
console.log (fruits)

//QUESTION 11
//CREATE A NEW ARRAY CITRUS FRUITS
let citrusFruits = fruits.splice ( 0 , 2 );
console.log (citrusFruits)

//QUESTION 12
//CREATE A NEW ARRAY LAST TWO FRUITS
let lastTwoFruits = fruits.slice (-2);
console.log (lastTwoFruits)


