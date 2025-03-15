// differenceBetweenDates
const differenceBetweenDates = (date1, date2) => {
    const tgl1 = new Date(date1);
    const tgl2 = new Date(date2);

    const timeDifference = Math.abs(tgl2 - tgl1);

    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return dayDifference;
};

console.log(differenceBetweenDates("2023-01-01", "2023-01-10"));