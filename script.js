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
