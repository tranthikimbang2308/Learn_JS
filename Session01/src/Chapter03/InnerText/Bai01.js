console.log("say Hi!");

const myBtn = document.getElementById("myBtn");
const backBtn = document.getElementById("backBtn");
const myText = document.getElementById("myText");

console.log(myBtn, myText);

myBtn.addEventListener("click", () => {
  console.log("you click btn");
  myText.innerText = "xin chao toi la bang";
});

backBtn.addEventListener("click", () => {
  myText.innerText = "toi la nhan cach t2";
});
