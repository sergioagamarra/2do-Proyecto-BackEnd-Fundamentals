/*Expand General information Form for Editing */
const editButton = document.getElementById("edit-btn");

editButton.addEventListener("click", (e) => {
  const generalInformationForm = document.getElementById("general-info");
  const inputList = generalInformationForm.querySelectorAll("input");
  editButton.classList.add("is-hidden");

  inputList.forEach((input) => {
    input.removeAttribute("disabled");
  });
  generalInformationForm.querySelectorAll(".is-hidden").forEach((item) => {
    item.classList.remove("is-hidden");
  });
});

/* Forms Container Declaration*/
const generalInfoFormContainer = document.getElementById(
  "general-form-container"
);
const passwordFormContainer = document.getElementById(
  "password-form-container"
);
const adminFormContainer = document.getElementById("admin-form-container");


//Make General Information Appear
const generalInfoBtn = document.getElementById('general-button')
generalInfoBtn.addEventListener("click", (e) => {
    changeVisibilityForm(generalInfoFormContainer);
});

//Make Change Password Form Appear
const changePasswordBtn = document.getElementById("change-password");
changePasswordBtn.addEventListener("click", (e) => {
    changeVisibilityForm(passwordFormContainer);    
});

//Make Change Admin Form Appear
const adminButton = document.getElementById("admin-button");
adminButton.addEventListener("click", (e) => {
    changeVisibilityForm(adminFormContainer)
});

function changeVisibilityForm(form) {
  adminFormContainer.classList.add("is-hidden");
  passwordFormContainer.classList.add("is-hidden");
  generalInfoFormContainer.classList.add("is-hidden");
  form.classList.remove("is-hidden");
}

