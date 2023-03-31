class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj) {
    switch (true) {
      case obj instanceof Square:
        return obj.side * obj.side;
      case obj instanceof Rectangle:
        return obj.width * obj.height;
      case obj instanceof Circle:
        return Math.PI * obj.radius * obj.radius;
      default:
        console.log('Unsupported object type');
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);
const test = new Circle('emre');

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate(test));