// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

function sum(...arrayOfNumbers) {
    return arrayOfNumbers.reduce((sum, arrayValue) => sum + arrayValue, 0);
}

console.log(sum(1, 2, 3, 4, 5,6,7,'test'));