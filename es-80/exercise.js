const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocalUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getLocalUser() {
  const getUser = localStorage.getItem("user"); // Getting string from local
  const user = JSON.parse(getUser); //Strung To object
  console.log(user);
}

saveLocalUser();
getLocalUser();