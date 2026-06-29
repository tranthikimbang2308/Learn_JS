console.log("hi");

const UserN = document.getElementById("username");
const Pass = document.getElementById("password");
const Login = document.getElementById("login");

//const User01 = UserN.value;
console.log(UserN, Pass, Login);
Login.addEventListener("click", () => {
  if (UserN.value == "hoidanit@gmail.com" && Pass.value == "123456") {
    alert("Success Login!");
    window.location.href = "Success.html";
  } else {
    alert("Incorrect Username or Password");
    UserN.style.borderColor = "red";
    Pass.style.borderColor = "red";
  }
  localStorage.setItem("UserName", UserN.value);
  localStorage.setItem("PassWord", Pass.value);
});
