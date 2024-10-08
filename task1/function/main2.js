"use strict"
window.onload = function() {
    // Task 1: Conditional logic for candidate eligibility based on age using prompt
    function checkEligibility() {
        const birthYear = prompt("Enter your year of birth:");
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        if (age > 60) {
            alert("You may join the seniors’ program.");
        } else if (age > 30) {
            alert("You are not eligible. You may join other programs.");
        } else if (age >= 18) {
            alert("You are eligible. Start your application.");
        } else {
            alert("You may join the kids' program.");
        }
    }

    // Task 2: Function to switch the case of each letter in a string using prompt
    function switchCase() {
        const str = prompt("Enter a string to switch case:");
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (char === char.toUpperCase()) {
                result += char.toLowerCase();
            } else {
                result += char.toUpperCase();
            }
        }
        alert(result);
    }

    // Task 3: Function to capitalize the first letter of each word and remove spaces using prompt
    function toCamelCase() {
        const str = prompt("Enter a string to convert to camel case:");
        const camelCaseStr = str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
        alert(camelCaseStr);
    }

    // Task 4: Function to remove a specific element from an array using prompt
    function removeElement() {
        const array = prompt("Enter array elements separated by commas:").split(",");
        const elementToRemove = prompt("Enter the element to remove:");
        const newArray = array.filter(item => item.trim() !== elementToRemove);
        alert(newArray);
    }

    // Task 5: Function to check if a number is odd or even using prompt
    function isOddOrEven() {
        const number = parseInt(prompt("Enter a number:"));
        const result = number % 2 === 0 ? "Even" : "Odd";
        alert(result);
    }

    // Task 6: Function to check if a variable is a number using prompt
    function isNumber() {
        const input = prompt("Enter a value:");
        const isNum = !isNaN(input) && input.trim() !== '';
        alert(isNum ? "It's a number" : "It's not a number");
    }

    // Task 7: Function to find the largest of two numbers using prompt
    function findLargest() {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));
        alert(Math.max(num1, num2));
    }

    // Task 8: Function to check if a triangle is equilateral, scalene, or isosceles using prompt
    function triangleType() {
        const a = parseFloat(prompt("Enter the length of the first side:"));
        const b = parseFloat(prompt("Enter the length of the second side:"));
        const c = parseFloat(prompt("Enter the length of the third side:"));

        if (a === b && b === c) {
            alert("Equilateral");
        } else if (a === b || b === c || a === c) {
            alert("Isosceles");
        } else {
            alert("Scalene");
        }
    }

    // Task 9: Function to check if a number is in a range using prompt
    function isInRange() {
        const number = parseFloat(prompt("Enter a number:"));
        const min = parseFloat(prompt("Enter the minimum value of the range:"));
        const max = parseFloat(prompt("Enter the maximum value of the range:"));

        alert(number >= min && number <= max ? "In range" : "Out of range");
    }

    // Task 10: Function to check if a year is a leap year using prompt
    function isLeapYear() {
        const year = parseInt(prompt("Enter a year:"));
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        alert(isLeap ? "Leap year" : "Not a leap year");
    }

    // Execute all functions
    checkEligibility();
    switchCase();
    toCamelCase();
    removeElement();
    isOddOrEven();
    isNumber();
    findLargest();
    triangleType();
    isInRange();
    isLeapYear();
}