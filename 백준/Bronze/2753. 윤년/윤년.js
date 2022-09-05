const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split(" ");

// console.log(input[0]);

let year = Number(input[0]);

// 윤년 : 연도가 4의 배수이면서, 100의 배수가 아닐 때 or 400의 배수일 때
if (year % 4 === 0) {
  if (year % 100 !== 0 || year % 400 === 0) {
    return console.log(1);
  } else return console.log(0);
} else return console.log(0);