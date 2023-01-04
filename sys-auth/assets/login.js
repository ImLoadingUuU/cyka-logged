var inputUsername = document.getElementById("input_username"),
  inputPassword = document.getElementById("input_password"),
  inputRemember = document.getElementById("input_remember");
(function () {
  inputUsername.focus();
  localStorage.rememberedUsername &&
    ((inputUsername.value = localStorage.rememberedUsername),
    inputPassword.focus(),
    inputPassword.parentNode.classList.add("focused"),
    (inputRemember.checked = !0));
})();
function handleSubmit() {
  var a = !0;
  /^[a-zA-Z0-9]{1,6}_[0-9]{8}$/.test(inputUsername.value)
    ? checkPassed(inputUsername)
    : (hasError(inputUsername, "Username is not valid"), (a = !1));
  6 <= inputPassword.value.length
    ? checkPassed(inputPassword)
    : (0 == inputPassword.value.length &&
        hasError(inputPassword, "Password cannot be empty"),
      hasError(inputPassword, "Password is too short"),
      (a = !1));
  a &&
    (inputRemember.checked
      ? localStorage.setItem("rememberedUsername", inputUsername.value)
      : localStorage.removeItem("rememberedUsername"));
  return false;
}
