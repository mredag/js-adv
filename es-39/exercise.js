function multiplyByTwo(number) {
  function inner() {
    return number * 2;
  }
  return inner;
}
//// I'm like a chameleon, always changing... my code, because I'm not sure what I'm doing!
const result = multiplyByTwo(4);
console.log(result());
