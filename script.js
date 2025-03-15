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

// angleOfTriangle
let angleA;
let angleB;

let angleOfTriangle = (angleA, angleB) => {
    return 180 - (angleA + angleB);
};

console.log(angleOfTriangle(80, 65));

// differenceBetweenDates
let date1;
let date2;

let differenceBetweenDates = (date1, date2) => {
    let tgl1 = new Date(date1);
    let tgl2 = new Date(date2);

    let timeDifference = Math.abs(tgl2 - tgl1);

    let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return dayDifference;
};

console.log(differenceBetweenDates("2023-01-01", "2023-01-10"));

// getNameInitialUpperCase
let name;

let getNameInitialUpperCase = (name) => {
    return name.match(/[A-Z]/g)?.join("") || "";
};

console.log(getNameInitialUpperCase("Jhon Toe"));
