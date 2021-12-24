const fs = require('fs');
const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split('\n').map(Number);
let lessers = 0

input.reduce((prev, cur, i) => {
    if (prev < cur) {
        total -= (2 * cur);
        lessers += 1;
    }
    return cur;
})
return console.log(lessers);