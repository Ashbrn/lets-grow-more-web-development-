document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const output = `
        <h3>Registration Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    document.getElementById('output').innerHTML = output;
});
