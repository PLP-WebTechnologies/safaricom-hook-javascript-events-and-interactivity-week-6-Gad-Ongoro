// Toggle background color between two colors
document.getElementById('toggleColorBtn').addEventListener('click', function() {
  const currentColor = document.body.style.backgroundColor;
  if (currentColor === 'lightblue') {
      document.body.style.backgroundColor = 'lightgreen';
  } else {
      document.body.style.backgroundColor = 'lightblue';
  }
});

// Slider to adjust text size
document.getElementById('textSizeSlider').addEventListener('input', function() {
  const size = this.value + 'px';
  document.getElementById('textSizeValue').textContent = size;
  document.body.style.fontSize = size;
});

// Modal functionality
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});

// Form validation
document.getElementById('userForm').addEventListener('submit', function(event) {
  let valid = true;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Name validation
  if (name.length < 3) {
      document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
      valid = false;
  } else {
      document.getElementById('nameError').textContent = '';
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      valid = false;
  } else {
      document.getElementById('emailError').textContent = '';
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, with at least one uppercase letter and one number.';
      valid = false;
  } else {
      document.getElementById('passwordError').textContent = '';
  }

  if (!valid) {
      event.preventDefault();
  }
});

// Dropdown change event
function displayMessage() {
  const dropdown = document.getElementById('dropdown');
  const message = document.getElementById('dropdownMessage');
  message.textContent = `You selected: ${dropdown.value}`;
}
