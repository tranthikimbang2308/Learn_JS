console.log("say Hi!");

const scores = [1, 10, 9, 8, 5];

// su dung arrow func, forEach
// ten trong ham chi la tuong doi
scores.forEach((a, b) => {
  console.log("value", a, "index", b);
});

console.log("===============");

const scores2 = scores.map((a, b) => {
  return a * 2;
});

console.log(scores2);
