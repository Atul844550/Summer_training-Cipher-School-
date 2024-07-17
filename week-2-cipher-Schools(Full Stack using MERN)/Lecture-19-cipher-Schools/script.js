document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const logoutButton = document.getElementById("logoutButton");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (!username || !password || !confirmPassword) {
                alert("All fields are required.");
                return;
            }

            if (password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Simulating successful login
            alert(`Successfully Logged In as ${username}`);
            window.location.href = "homepage.html";
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
