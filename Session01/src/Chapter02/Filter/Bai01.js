console.log("say Hi!");

const scores = [1, 10, 9, 8, 5];

let score2 = scores.filter((a, b) => {
  return a % 2 == 0; //true
});

// code ngan hon
let score3 = scores.filter((a, b) => a >= 8);

console.log(score2);
console.log(score3);
