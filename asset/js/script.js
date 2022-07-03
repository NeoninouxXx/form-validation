const form = document.querySelector(".form");
const inputsText = document.querySelectorAll(".needs-validation-text");
const inputEmail = document.querySelector(".needs-validation-email");
const inputPassWord = document.querySelector(".needs-validation-passwOrd");
const arrayText = Array.from(inputsText);
const check = document.querySelector(".form-check-input");
const regex = /^[a-zA-Z-/s]+$/;

form.addEventListener("submit", (e) => {
  for (let i = 0; arrayText[i]; i++) {
    if (
      arrayText[i].value == "" ||
      arrayText[i].value == null ||
      regex.test(arrayText[i].value) == false
    ) {
      arrayText[i].nextElementSibling.style.display = "block";
      arrayText[i].classList.add("is-invalid");
      e.preventDefault();
      e.stopPropagation();
    } else {
      arrayText[i].nextElementSibling.style.display = "none";
      arrayText[i].classList.remove("is-invalid");
      arrayText[i].classList.add("is-valid");
    }
  }

  if (inputEmail.value == "" || inputEmail.value == null) {
    inputEmail.nextElementSibling.style.display = "block";
    inputEmail.classList.add("is-invalid");
    e.preventDefault();
    e.stopPropagation();
  } else {
    inputEmail.nextElementSibling.style.display = "none";
    inputEmail.classList.remove("is-invalid");
    inputEmail.classList.add("is-valid");
  }
  if (
    inputPassWord.value == "" ||
    inputPassWord.value == null ||
    inputPassWord.value.length < 6
  ) {
    inputPassWord.nextElementSibling.style.display = "block";
    inputPassWord.classList.add("is-invalid");
    e.preventDefault();
    e.stopPropagation();
  } else {
    inputPassWord.nextElementSibling.style.display = "none";
    inputPassWord.classList.remove("is-invalid");
    inputPassWord.classList.add("is-valid");
  }

  if (check.checked === false) {
    check.nextElementSibling.style.display = "block";
    check.classList.add("is-invalid");
    e.preventDefault();
    e.stopPropagation();
  } else {
    check.nextElementSibling.style.display = "none";
    check.classList.remove("is-invalid");
    check.classList.add("is-valid");
  }
});
