function multiplyByTwo(number) {
  function inner() {
    return number * 2;
  }
  return inner;
}

const result = multiplyByTwo(4);
console.log(result());
