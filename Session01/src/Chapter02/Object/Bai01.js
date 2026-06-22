console.log("say Hi!");

const scores = [1, 2, 3];

//key: value
const sv1 = {
  score: 10,
  name: "bang ",
  address: {
    city: "Ha noi",
    country: "Yen Lang",
  },
};

const sv2 = {
  score: 10,
  name: "Lan",
  address: {
    city: "Hai Phong",
    country: "Abc",
  },
};

const sinhVien = [sv1, sv2];

//console.log(sinhVien);

const person = {
  name1: "bang",
  age: 18,
};
console.log("before:");
console.log("person:", person);

console.log("age", person.age);

console.log("name", person["name1"]);

//them moi
person.address = "ha noi";

console.log("after");

console.log("person:", person);

//chinh sua
person.age = 30;

console.log("person:", person);

//xoa
delete person.age;
console.log("person:", person);
