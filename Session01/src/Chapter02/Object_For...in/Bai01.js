console.log("say Hi!");

const sv1 = {
  name: "bang",
  score: 2,
};

const sv2 = {
  name: "ly",
  score: 10,
};

const sv3 = {
  name: "linh",
  score: 9,
};

const sinhvien = [sv1, sv2, sv3];
// console.log("check sv", sinhvien);
// sinhvien.forEach((item, index) => {
//   console.log(item.name);
// });
const person = {
  name: "bang beo",
  age: 25,
  address: "HA NOI",
};
// for (let key in person) {
//   console.log(key, person[key]);
// }

for (let value of Object.values(person)) {
  console.log(value);
}
