const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // First Name
    const first = document.getElementById('first');
    const firstError = document.getElementById('first-error');
    if (!first.value.trim()) {
    showError(first, firstError);
    valid = false;
    } else {
    clearError(first, firstError);
    }

    // Last Name
    const last = document.getElementById('last');
    const lastError = document.getElementById('last-error');
    if (!last.value.trim()) {
    showError(last, lastError);
    valid = false;
    } else {
    clearError(last, lastError);
    }

    // Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
    showError(email, emailError);
    valid = false;
    } else {
    clearError(email, emailError);
    }

    // Query Type
    const querySelected = document.querySelector('input[name="QueryType"]:checked');
    const queryError = document.getElementById('query-error');
    if (!querySelected) {
    queryError.classList.add('visible');
    valid = false;
    } else {
    queryError.classList.remove('visible');
    }

    // Message
    const msg = document.getElementById('msg');
    const msgError = document.getElementById('msg-error');
    if (!msg.value.trim()) {
    showError(msg, msgError);
    valid = false;
    } else {
    clearError(msg, msgError);
    }

    // Consent
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consent-error');
    if (!consent.checked) {
    consentError.classList.add('visible');
    valid = false;
    } else {
    consentError.classList.remove('visible');
    }

    // If all valid, show toast
    if (valid) {
    toast.classList.add('show');
    form.reset();
    setTimeout(() => toast.classList.remove('show'), 4000);
    }
});

function showError(input, errorEl) {
    input.classList.add('input-error');
    errorEl.classList.add('visible');
}

function clearError(input, errorEl) {
    input.classList.remove('input-error');
    errorEl.classList.remove('visible');
}