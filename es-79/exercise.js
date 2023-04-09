const user = {
  id: 1,
  name: 'John',
  age: 25,
};

function saveLocalUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}


saveLocalUser();
