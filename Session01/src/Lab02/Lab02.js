console.log("bai Lab 022");

function tinhTrungBinh(a, b, c) {
  return (a + b + c) / 3;
}

function xepLoai(diemTB) {
  if (diemTB >= 9) {
    console.log("xuat sac");
  } else if ((diemTB >= 8) & (diemTB < 9)) {
    console.log("gioi");
  } else if ((diemTB >= 6, 5 & (diemTB < 8))) {
    console.log("kha");
  } else {
    console.log("trung binh");
  }
}
console.log("diem tb:", tinhTrungBinh(10, 9, 8));
xepLoai("xep loai:", tinhTrungBinh(10, 9, 8));
