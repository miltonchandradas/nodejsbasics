const areaOfSquare = (a) => {
  return Math.pow(a, 2);
};

const areaOfRectangle = (l, b) => {
  return l * b;
};

const areaOfCircle = (r) => {
  return Math.PI * Math.pow(r, 2);
  // return (Math.PI * Math.pow(r, 2)).toFixed(2);
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

let r = 5;
console.log(
  `Area of circle with radius ${r} units is equal to ${areaOfCircle(
    r
  )} units squared`
);
