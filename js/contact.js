// contact.js

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    document.getElementById('error-message').classList.remove('d-none');
                    document.getElementById('thank-you-message').classList.add('d-none');
                } else {
                    event.preventDefault(); // Prevent the default form submission
                    submitForm(event.target);
                }

                form.classList.add('was-validated');
            }, false);
        });

    // Check if the form was submitted successfully and show the thank you message
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        var thankYouMessage = document.getElementById('thank-you-message');
        if (thankYouMessage) {
            thankYouMessage.classList.remove('d-none');
        }
    }
});

function submitForm(form) {
    var formData = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                form.reset();
                form.classList.remove('was-validated');
                document.getElementById('thank-you-message').classList.remove('d-none');
                document.getElementById('error-message').classList.add('d-none');
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        data.errors.forEach(error => {
                            console.error(error.message);
                        });
                    }
                    document.getElementById('error-message').classList.remove('d-none');
                    document.getElementById('thank-you-message').classList.add('d-none');
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('error-message').classList.remove('d-none');
            document.getElementById('thank-you-message').classList.add('d-none');
        });
}
