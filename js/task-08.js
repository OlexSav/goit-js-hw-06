function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = form.elements;
  if (!formData.email.value || !formData.password.value) {
    alert("Please fill in all the fields");
    return;
  }
  const formDataObject = {
    email: formData.email.value,
    password: formData.password.value,
  };
  console.log(formDataObject);
  form.reset();
}
