document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);


    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'asifzayed@gmail.com' && userPassword == 'asif') {
        // console.log('valid');
        window.location.href = 'banking.html'
    }
});


