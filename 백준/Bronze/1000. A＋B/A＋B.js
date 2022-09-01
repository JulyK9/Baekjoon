const fs = require('fs');

const input = fs.readFileSync(process.platform === "linux"
  ? "/dev/stdin"
  : __filename.split("/").pop().slice(0, -3) + ".txt").toString().split(" ")

let num1 = Number(input[0])
let num2 = Number(input[1])

console.log(String(num1 + num2))