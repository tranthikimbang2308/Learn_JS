console.log("say Hi!");

const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");

const backBtnElement = document.getElementById("backBtn");

console.log(myBtnElement, myTextElement, backBtnElement);

myBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "green";
  myTextElement.classList.add("bang_beo");
});

backBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "blue";
  myTextElement.style.backgroundColor = "pink";
  myTextElement.classList.remove("bang_beo");
});
