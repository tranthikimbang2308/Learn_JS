console.log("say Hi!");

const getSubmit = document.getElementById("submitBtn");

const input = document.getElementById("name");

const preElement = document.getElementById("pre");
const preName = localStorage.getItem("bang_beo");
if (preName) {
  preElement.innerHTML = `<b>${preName}</b>`;
}
getSubmit.addEventListener("click", () => {
  console.log(input.value);
  //backtik: khai bao chuoi:
  //c1
  //document.getElementById("message").innerHTML = "<b>" + input.value + "</b>";
  ///c2
  document.getElementById("message").innerHTML = `<b>${input.value}</b>`;

  localStorage.setItem("bang_beo", input.value);
});       
