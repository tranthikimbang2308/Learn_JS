console.log("bai ");

// // Score: gioi, kha, tb, yeu

// const score = 9;
// switch (score) {
//   case 9:
//     console.log("gioi");

//   case 8:
//     console.log("kha");

//   case 5:
//   default:
//     console.log("tb");
// }

const diem = 5;
switch (true) {
  case diem >= 9:
    console.log("xuat xac");
    break;
  case diem >= 7 && diem < 9:
    console.log("kha");
    break;
  case diem >= 5 && diem < 7:
    console.log("tb");
    break;

  default:
    console.log("yeu");
    break;
}
