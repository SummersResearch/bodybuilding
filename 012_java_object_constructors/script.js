function Person (name, eyeColor, age) {
    this.name   =   name;
    this.eyeColor   =   eyeColor;
    this.age    =   age;
    this.updateAge  = function () {
       return ++this.age;
    };
}

let person01    =   new Person("Jason", "Blue", 27);
let person02    =   new Person("Jane", "Brown", 37);

console.log(person01.updateAge());