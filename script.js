let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.Login-form');
    const registerForm = document.querySelector('.Register-form');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const phoneRegex = /^\d{10}$/;
    const usernameRegex = /^[a-zA-Z0-9]{4,}$/;

    function displayError(inputElement, errorMessage) {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'error-message';
        errorContainer.textContent = errorMessage;

        // Assuming your input elements are within a container
        inputElement.parentNode.appendChild(errorContainer);
    }

    function validateLoginForm() {
        const emailInput = loginForm.querySelector('input[type="text"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');

        if (!emailRegex.test(emailInput.value)) {
            displayError(emailInput, 'Invalid email address');
            return false;
        }

        if (!passwordRegex.test(passwordInput.value)) {
            alert('Invalid password. Password must be at least 8 characters, including at least one digit, one lowercase, and one uppercase letter.');
            return false;
        }

        return true;
    }

    function validateRegisterForm() {
        const usernameInput = registerForm.querySelector('input[type="text"]');
        const emailInput = registerForm.querySelector('input[type="text"]');
        const phoneInput = registerForm.querySelector('input[type="phone number"]');
        const passwordInput = registerForm.querySelector('input[type="password"]');
        const agreeCheckbox = registerForm.querySelector('#register-checkbox');

        
        if (!usernameRegex.test(usernameInput.value)) {
            displayError(usernameInput, 'Invalid username. Username must be at least 4 characters and can only contain letters and numbers.');
            return false;
        }

        if (!emailRegex.test(emailInput.value)) {
            alert('Invalid email address');
            return false;
        }

        if (!phoneRegex.test(phoneInput.value)) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            return false;
        }

        if (!passwordRegex.test(passwordInput.value)) {
            alert('Invalid password. Password must be at least 8 characters, including at least one digit, one lowercase, and one uppercase letter.');
            return false;
        }

        if (!agreeCheckbox.checked) {
            alert('Please agree to the terms and conditions');
            return false;
        }

        return true;
    }

    loginForm.addEventListener('submit', function (e) {
        if (!validateLoginForm()) {
            e.preventDefault();
        }
    });

    registerForm.addEventListener('submit', function (e) {
        if (!validateRegisterForm()) {
            e.preventDefault();
        }
    });
});
