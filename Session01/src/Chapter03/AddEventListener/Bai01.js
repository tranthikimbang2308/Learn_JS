console.log("say Hi!");

// lay doi tuong HTML
const getID = document.getElementById("bangBtn");

const handleClickBtn = () => {
  console.log("you click a button ");
};

function abc() {
  console.log("click2");
}
// thuc hanh voi doi tuong
//getID.addEventListener("click", handleClickBtn);

getID.addEventListener("click", abc);
//console.log(getID);
