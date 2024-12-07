const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const signupForm = document.getElementById('signupForm');
const passwordCorrect = document.getElementById('passwordCorrect');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (validateEmail(emailValue) && validatePassword(passwordValue)) {
    alert('Successful signup!');
    signupForm.reset();
    emailError.textContent = '';
    passwordError.textContent = '';
    passwordCorrect.innerText = 'All good to go';
    passwordCorrect.style.color = 'green';
  } else {
    alert('Please check your email and password!');
  }

});

const emailValue = emailInput.value.trim();
const passwordValue = passwordInput.value.trim();

if (validateEmail(emailValue) && validatePassword(passwordValue)) {
  passwordCorrect.innerText = 'All good to go';
  passwordCorrect.style.color = 'green';
} 

emailInput.addEventListener('input', function() {
  const emailValue = emailInput.value.trim();
  if (!validateEmail(emailValue)) {
    emailError.textContent = 'Make sure email is more than 3 characters and has @ and a.';
  } else {
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('input', function() {
  const passwordValue = passwordInput.value.trim();
  if (!validatePassword(passwordValue)) {
    passwordError.textContent = 'Make sure Password is more than 8 characters.';
  } else {
    passwordError.textContent = '';
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}
