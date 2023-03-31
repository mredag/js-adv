const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, ...personInfo } = person;
//The rest operator ...personInfo collects the remaining properties of the person
// object (excluding id) into a new constant variable named personInfo.

console.log(id, personInfo);
