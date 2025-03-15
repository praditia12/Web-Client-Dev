// circleFormula
let radius;
const pi = 3.14;

let diameterCricle = (radius) => {
    return radius * 2;
};

let circumferenceCricle = (radius) => {
    return diameterCricle(radius) * pi;
};

let areaCricle = (radius) => {
    return pi * radius * radius;
};

radius = 12;

console.log(diameterCricle(radius));
console.log(circumferenceCricle(radius));
console.log(areaCricle(radius));