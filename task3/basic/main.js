// Select the form element
const form = document.getElementById('userForm');

// Create and add the Username label
const usernameLabel = document.createElement('label');
usernameLabel.htmlFor = 'username';
usernameLabel.textContent = 'Username: ';
form.insertBefore(usernameLabel, document.getElementById('username'));

// Create and add the Password label
const passwordLabel = document.createElement('label');
passwordLabel.htmlFor = 'password';
passwordLabel.textContent = 'Password: ';
form.insertBefore(passwordLabel, document.getElementById('password'));

// Create and add the Confirm Password label
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.htmlFor = 'confirmPassword';
confirmPasswordLabel.textContent = 'Confirm Password: ';
form.insertBefore(confirmPasswordLabel, document.getElementById('confirmPassword'));

// Validate the form on submit
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    let isValid = true;

    // Validate Username
    const username = document.getElementById('username');
    if (username.value.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password');
    if (password.value.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value.trim() === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
        isValid = false;
    }

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false; // This ensures form does not submit but does not disable the submit button.
    }

    // If the form is valid, notify the user of successful registration
    if (isValid) {
        alert('Registration successful!');
    }
});

// Enable/Disable submit button based on field validation
function checkFormValidity() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Only disable button if any of the fields is empty
    if (username !== '' && password !== '' && confirmPassword !== '') {
        document.getElementById('submitBtn').disabled = false;
    } else {
        document.getElementById('submitBtn').disabled = true;
    }
}

// Add event listeners to all fields to check validity in real-time
document.getElementById('username').addEventListener('input', checkFormValidity);
document.getElementById('password').addEventListener('input', checkFormValidity);
document.getElementById('confirmPassword').addEventListener('input', checkFormValidity);

          //...............mid...................
// Add real-time required field validation for Username
document.getElementById('username').addEventListener('blur', function () {
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
    } else {
        document.getElementById('usernameError').textContent = '';
    }
});

// Add real-time required field validation for Password
document.getElementById('password').addEventListener('blur', function () {
    const password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
    } else {
        document.getElementById('passwordError').textContent = '';
    }
});

// Add real-time required field validation for Confirm Password
document.getElementById('confirmPassword').addEventListener('blur', function () {
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }
});