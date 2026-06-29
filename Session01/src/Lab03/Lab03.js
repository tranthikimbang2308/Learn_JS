console.log("bai Lab 038383");

const product = {
  name: "T-shirt",
  price: 15,
  inStock: true,
};
const product1 = {
  name: "Glass",
  price: 20,
  inStock: true,
};
const product2 = {
  name: "Hat",
  price: 40,
  inStock: false,
};
const product3 = {
  name: "Jacket",
  price: 50,
  inStock: true,
};
const product4 = {
  name: "Sweater",
  price: 66,
  inStock: false,
};

const products = [product, product1, product2, product3, product4];
//1
console.log(product);

//2.Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm

product1.price = "150";
console.log(products);

//3.Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm

products.push(
  (product5 = {
    name: "Balo",
    price: 89,
    inStock: false,
  })
);
console.log(products);

//4 xoa sp cuoi cung cua danh sach và in ra danh sách tất cả sản phẩm

products.pop();
console.log(products);

//5. Dung forEach() de in ra tat ca ten sp

products.forEach((Element, index) => console.log(Element, index));

//6. Dung Map() de tao mang moi chi chua gia sp

let priceList = products.map((value, index) => {
  return value.price;
});
console.log(priceList);

//7. Dung filter() de lay ra cac san pham con hang(inStock = true)

let inStock = products.filter((value, index) => {
  return value.inStock == true;
});

console.log(inStock);

//8. Dung for... in de duyet qua cac thuoc tinh cua sp dau tien
for (let key in product) {
  console.log(key, product[key]);
}
