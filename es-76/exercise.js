const number = 6;

//if the number is greater than 10
const checkNumber = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve("number is correct");
    } else {
        reject("number is wrong");
    }
});

// handle resolve and reject cases
checkNumber
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
;
