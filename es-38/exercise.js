function multiplyByTwo(num) {
    let number = 2;

    function inside() {
        return num * number
    }

    return inside;
  }


console.log(multiplyByTwo(5)());
