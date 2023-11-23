const areaOfSquare = (a) => {
  return a * a;
};

const areaOfRectangle = (l, b) => {
  return l * b;
};

let a = 5;
console.log(
  `Area of square with side ${a} units is equal to ${areaOfSquare(
    a
  )} units squared`
);

let l = 10;
let b = 5;
console.log(
  `Area of rectange with length ${l} units and breadth ${b} is equal to ${areaOfRectangle(
    l,
    b
  )} units squared`
);
