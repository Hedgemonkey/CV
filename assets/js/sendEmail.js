window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('gmail', 'form', this)
            .then((response) => {
                console.log('SUCCESS!', response);
                alert('Message sent successfully! I will contact you soon.');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Something went wrong. Please try again or email hedgemonkey@gmail.com directly from your email service.');
            });
    });
}