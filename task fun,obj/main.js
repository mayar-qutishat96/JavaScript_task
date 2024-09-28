"use strict"
// Create an object represents you
// have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)

function Persona(f_name, l_name, age, dob, fav_food, fav_movie) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.age = age;
    this.dob = dob;
    this.fav_food = fav_food; //Array
    this.fav_movie = fav_movie; // Array 
}

const person = new Persona("Mayar", "qutishat", 28, "24/06", ["Pasta", "Pizza"], ["Harry potter", "Inception"]);

console.log(person);
var persons = [
    { firstName: "Ali", lastName: "Doe" },
    { firstName: "Omar", lastName: "Smith" },
    { firstName: "Maya", lastName: "Johnson" },
    { firstName: "Bashar", lastName: "Odinson" },
    { firstName: "Rawand", lastName: "Jones" }
];

function firstName(persons) {
    return persons.map(person => person.firstName);
}
console.log(firstName(persons)); 