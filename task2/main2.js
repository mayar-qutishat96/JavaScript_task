"use strict"
// 1.Create a function that will display the smallest value in the array. 
const array1 = [1, 2, 3];
function smallest(array) {
    if (array.length === 0) {
        console.log("Array is empty.");
        return; 
    }

    let smallest = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]; 
        }
    }

    console.log("The smallest value in the array is:", smallest);
}
smallest(array1);

// 2.Function that will return your string in Alphabetical order 

function AlphabeticalString(inputString) {
    var letters = inputString.split('');
    letters.sort(); 
    var sortedString = letters.join(''); 
    return sortedString; 
}

var string = "hey its Mayar"; 
const sortedString = AlphabeticalString(string);
console.log("Sorted string:", sortedString);

//3. Return how many words was given 

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

console.log(countWords('hello from CodingAcademy!'));

//4. Return  Multiply all elements in an array by it's length 
function multiplyByLength(arr) {
    const length = arr.length;
    return arr.map(element => element * length);
}
console.log(multiplyByLength([4, 2, 5]));


//5. Return  repeat each string character two times  
function repeatCharacters(str) {
    return str.split('').map(char => char.repeat(2)).join('');
}
console.log(repeatCharacters('conding'));


