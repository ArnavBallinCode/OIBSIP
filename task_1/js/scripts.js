document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
    } else {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        e.target.reset(); // Reset the form
    }
});
