console.log("say Hi!");

const names = ["bang", "roses", "bang_beo", "bla bla"];
const numbers = [3, 4, 5, 6];
const others = ["bang", 23, [2, 3, 4]];

console.log(others);

console.log(names);
// truy cap phan tu cua mang
console.log("0:", names[0]);
console.log("1:", names[1]);
console.log("2:", names[2]);
console.log("10:", names[10]); // undefined

//update
names[2] = "upadate name";
console.log("2:", names[2]);

//Push

console.log("before:", names);
names.push("chi chi", 14);
console.log("after:", names);

console.log("before:", names);
names.unshift("na na", 84884);
console.log("after:", names);

//delete
names.pop();
console.log(names);

names.shift();
console.log(names);
