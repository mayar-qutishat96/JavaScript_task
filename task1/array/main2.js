"use strict"
var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce,"];  
vegetables .pop();
console.log(vegetables);
fruit.shift();
console.log(fruit);
var orange=fruit.indexOf("orange");
console.log(orange);
fruit.push(9);
console.log(fruit);
var vegetableLength =vegetables.length;
console.log(vegetableLength);
vegetables.push(8);
console.log(vegetables);
var food_1= (fruit.concat( vegetables));
console.log(food_1);
var food_1 = ["apple", "orange", "watermelon", 9, "carrot", "tomato", "pepper", 8];
food_1.splice(4, 2); 
console.log(food_1); 
//.................
var food_1 = ["apple", "orange", "watermelon", 9, "pepper", 8];
food_1.reverse();
console.log(food_1); 
//.................
var food_1 = [8, "pepper", 9, "watermelon", "orange", "apple"];
var foodString = food_1.toString();
console.log(foodString); 


