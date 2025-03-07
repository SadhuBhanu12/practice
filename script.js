document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');
    const themeButton = document.getElementById('themeButton');

    function validateInput(input, errorElement, condition, errorMessage) {
        if (condition) {
            input.style.borderColor = '#10b981';
            errorElement.style.display = 'none';
            return true;
        } else {
            input.style.borderColor = '#ef4444';
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            return false;
        }
    }

    function updateSubmitButton() {
        submitButton.disabled = !(validateInput(nameInput, nameError, nameInput.value.length >= 3, 'Name too short') &&
            validateInput(emailInput, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value), 'Invalid email') &&
            validateInput(passwordInput, passwordError, passwordInput.value.length >= 8, 'Weak password') &&
            validateInput(confirmPasswordInput, confirmPasswordError, confirmPasswordInput.value === passwordInput.value, 'Passwords do not match'));
    }

    form.addEventListener('input', updateSubmitButton);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        successMessage.style.display = 'block';
    });

    themeButton.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
});
