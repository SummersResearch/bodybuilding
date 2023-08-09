// let person  = new Object();
//
// person.name = "Jason";
// person.eyeColor = "Blue";
// person.age  = 27;
// person.updateAge    = function () {
//     return ++person.age;
// }
//
// console.log(person.age);
// person.updateAge();
// console.log(person.age);


// shorthand JavaScript

let person  = {
    name:   "Jason",
    eyeColor: "Blue",
    age:   27,
    updateAge:  function() {
        return ++person.age;
    }
}

console.log(person.age);
person.updateAge();
console.log(person.age);