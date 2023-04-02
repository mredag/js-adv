function printAsyncName(callback, name) {
    setTimeout(() => {
      callback();
    }, 1000);
  
    setTimeout(() => {
      console.log(name);
    }, 2000);
  }
  
  const printHello = () => {
    console.log('Hello');
  };
  
  printAsyncName(printHello, 'John Doe');

   //I dont understand why o should use setinterval for this question ?
   // it doesnt suits the solution

  