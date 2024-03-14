console.log("Earned amount:");
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");
console.log("");

let bubblegum = 202;
let toffee = 118;
let iceCream = 2250;
let milkChocolate = 1680;
let doughnut = 1075;
let pancake = 80;

console.log("Income $" + (bubblegum + toffee + iceCream + milkChocolate + doughnut + pancake));

let staffExpenses = prompt("Enter staff expenses");
let otherExpenses = prompt("Enter other expenses");

let totalIncome = bubblegum + toffee + iceCream + milkChocolate + doughnut + pancake;
let netIncome = totalIncome - staffExpenses - otherExpenses;

console.log("Income $" + totalIncome);
console.log("Staff Expenses: $" + staffExpenses);
console.log("Other expenses $" + otherExpenses);
console.log("Net Income $" + netIncome);