const formData={
    email:"",
    message:""
};
const keyOfFeedback = "feedback-form-state";
const form=document.querySelector(".feedback-form");

form.addEventListener("input", function (event) {
  const { name, value } = event.target;
  if (name === "email" || name === "message") {
    const currentData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };
    localStorage.setItem(keyOfFeedback, JSON.stringify(currentData));
  }
});


const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  } else {
    console.log(formData);
  }

  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  form.reset();
});
