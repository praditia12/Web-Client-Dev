// getNameInitialUpperCase
let name;

let getNameInitialUpperCase = (name) => {
    return name.match(/[A-Z]/g)?.join("") || "";
};

console.log(getNameInitialUpperCase("Jhon Toe"));
