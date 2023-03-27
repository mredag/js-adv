function printName() {
    const helloName = "Hello Emre";
    function inner() {
        console.log(helloName);
    }
    return inner;
}

const sayHello = printName();
setTimeout(sayHello, 1000); // after 1 second, prints "Hello Emre"