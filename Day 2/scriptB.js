const fs = require('fs');
const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split('\r\n');
let HTotal = 0;
let depth = 0;
let aim = 0;
const dirs = input.map(x => x.split(' '));
for (const input of dirs) {
    if (input[0] === "forward") {
        HTotal += Number(input[1])
        depth += Number(input[1])*aim
    }
    else if (input[0] === "up") aim -= Number(input[1])
    else if (input[0] === "down") aim += Number(input[1])
};
console.log(HTotal * depth)