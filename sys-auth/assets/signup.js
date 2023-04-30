var inputUsername=document.getElementById("input_username"),inputDomain=document.getElementById("input_domain")?document.getElementById("input_domain"):!1,inputEmail=document.getElementById("input_email"),inputPassword=document.getElementById("input_password"),inputConfirmPassword=document.getElementById("input_confirm_password"),inputCaptcha=document.getElementById("input_captcha");(function(){inputUsername.focus()})();
function handleSubmit(){var a=!0,b=inputUsername.value;switch(!0){case 0==b.length:hasError(inputUsername,"Subdomain cannot be empty");a=!1;break;case 4>b.length:hasError(inputUsername,"Subdomain must be at least 4 characters");a=!1;break;case 16<b.length:hasError(inputUsername,"Subdomain cannot exceeds 16 characters"),a=!1}a&&("-"==b[b.length-1]?(hasError(inputUsername,"Cannot have hyphens at the end of subdomain"),a=!1):/^[A-Za-z0-9-]+$(?<!-)/.test(b)?checkPassed(inputUsername):(hasError(inputUsername,
"Only alphanumeric characters and hyphens are allowed"),a=!1));"undefined"!==typeof inputDomain&&!1!==inputDomain&&0===inputDomain.length&&hasError(inputDomain,"Please select a domain");0===inputEmail.value.length?(hasError(inputEmail,"Email cannot be empty"),a=!1):/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(inputEmail.value).toLowerCase())?checkPassed(inputEmail):(hasError(inputEmail,
"Email seems to be inccorect"),a=!1);b=inputPassword.value;switch(!0){case 0==b.length:hasError(inputPassword,"Password cannot be empty");a=!1;break;case 6>b.length:hasError(inputPassword,"Password must be at least 6 characters");a=!1;break;case 20<b.length:hasError(inputPassword,"Password cannot exceeds 20 characters");a=!1;break;default:checkPassed(inputPassword)}0===inputConfirmPassword.value.length?(hasError(inputConfirmPassword,"Confirm password cannot be empty"),a=!1):inputConfirmPassword.value!==
inputPassword.value?(hasError(inputConfirmPassword,"Password mismatched"),a=!1):checkPassed(inputConfirmPassword);0===inputCaptcha.value.length?(hasError(inputCaptcha,"Captcha cannot be empty"),a=!1):5!==inputCaptcha.value.length?(hasError(inputCaptcha,"Captcha seems incorrect"),a=!1):checkPassed(inputCaptcha);return a};