// Signup function
// Signup function
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === newEmail);

    if (existingUser) {
        alert("Email already registered. Please use a different email.");
    } else {
        users.push({ email: newEmail, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Signup successful! Please log in.");
        window.location.href = "login.html";
    }
});


// Login function
// Login function
// Login function
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful");
        localStorage.setItem('loggedInUserEmail', email); // Store the logged-in user's email
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});



// Logout function
document.getElementById('logoutButton')?.addEventListener('click', function () {
    localStorage.removeItem('loggedInUserEmail'); // Clear logged-in user email
    alert("Logged out successfully");
    window.location.href = "login.html";
});

// Forgot Password function
// Forgot Password function
document.getElementById('forgotPasswordForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const recoveryEmail = document.getElementById('recoveryEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Check if the user exists
    const userIndex = users.findIndex(user => user.email === recoveryEmail);
    if (userIndex === -1) {
        alert("Email not found.");
    } else {
        // Update the password in users array
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users)); // Save the updated users array
        alert("Password has been reset successfully!");
        window.location.href = "login.html";
    }
});

