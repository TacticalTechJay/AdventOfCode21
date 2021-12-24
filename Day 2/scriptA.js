const fs = require('fs');
const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split('\r\n');
let HCount = 0;
let HTotal = 0;
let VCount = 0;
let VTotal = 0;
const dirs = input.map(x => x.split(' '));
for (const input of dirs) {
    if (input[0] === "forward") HTotal += Number(input[1])
    else if (input[0] === "up") VTotal -= Number(input[1])
    else if (input[0] === "down") VTotal += Number(input[1])
};
console.log(HTotal * VTotal)