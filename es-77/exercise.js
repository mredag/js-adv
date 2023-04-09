function checkIsLogged(isLogged) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLogged) {
          resolve(Math.random());
        } else {
          reject(new Error("Not logged in!"));
        }
      }, 1000); // 1-second delay
    });
  }
  
  function getUserDetails(randomNumber) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomNumber > 0.5) {
          resolve({ name: "John", age: 24 });
        } else {
          reject(new Error("User does not exist"));
        }
      }, 2000); // 2-second delay
    });
  }
  
  const isLogged = false;
  
  checkIsLogged(isLogged)
    .then(getUserDetails)
    .then((user) => {
      console.log(user); //{ name: "John", age: 24 }
    })
    .catch((error) => {
      console.error(error);
    });
   