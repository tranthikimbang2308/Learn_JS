console.log("say Hi!");

const getElement = document.getElementById("login");

console.log(getElement);

getElement.addEventListener("click", () => {
  console.log("click btn");
  alert("Login error");
});
