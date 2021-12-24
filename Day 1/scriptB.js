const fs = require('fs');
const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split('\n').map(Number);
const output = []
let lessers = 0

input.reduce((prev, cur, i) => {
    output.push(prev + cur + input[++i])
    return cur;
})
output.reduce((prev, cur, i) => {
    if (prev < cur) {
        lessers += 1;
    }
    return cur;
})
console.log(lessers);