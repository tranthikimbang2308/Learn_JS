console.log("bai Scope");

let globalVar = "toi la bien toan cuc";

function show() {
  console.log(globalVar);
}
show();
console.log(globalVar);

function name() {
  let a = "tran bang";
  console.log(a);
}
name();
console.log(a);
