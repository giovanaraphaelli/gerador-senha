let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePass = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPass = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";

let newPass = "";

sizePass.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePass.innerHTML = this.value;
};

function generatePass() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
    newPass = pass;
  }
  containerPass.classList.remove("hide");
  password.innerHTML = pass;
}

function copyPass() {
  navigator.clipboard.writeText(newPass);
  alert("Senha Copiada!");
}

buttonElement.addEventListener("click", generatePass);
containerPass.addEventListener("click", copyPass);
