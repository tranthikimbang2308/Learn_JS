console.log("bai return");

const sum = (a, b, c) => {
  console.log("run before");
  if (typeof a !== Number) {
    return 0;
  }
  return a + b + c;
  console.log("run after");
};

console.log(sum("bang", 4, 5));
