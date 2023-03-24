const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

//in c++ or js when we assign array or object to another one we just copying adress of the pointer thats why..

console.log(person1);
console.log(person2);
