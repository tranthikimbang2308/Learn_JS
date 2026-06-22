console.log("say Hi!");

const myClass = ["an", "bang", "lan", "my", "linh"];

// for (i = 0; i < myClass.length; i++) {
//   console.log("i = ", i, "and value = ", myClass[i]);
// }

// console.log("////////////////////////////////////////");
// for (i = 1; i < myClass.length; i++) {
//   console.log("i = ", i, "and value = ", myClass[i]);
// }

//for-each
myClass.forEach(function (value, index) {
  console.log("value = ", value, "index = ", index);
});

console.log("========");
//arrow func
myClass.forEach((value, index) => {
  console.log(value, index);
});
