const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split(" ");

let A = Number(input[0])
let B = Number(input[1])

if (A > B) return console.log('>');
if (A < B) return console.log('<');
if (A === B) return console.log('==');