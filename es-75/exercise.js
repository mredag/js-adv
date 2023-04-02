function repeatHello(callback) {
    const intervalId = setInterval(() => {
        callback();
    }, 1000);
    console.log(intervalId); // To check whats going on.
    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

const sayHello = () => {
    console.log("Hello");
};

repeatHello(sayHello);
