document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    const startBtn = document.querySelector(".primary-btn");
    const internshipBtn = document.querySelector(".secondary-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            window.location.href = "ragistration.html";
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            window.location.href = "ragistration.html";
        });
    }

    if (startBtn) {
        startBtn.addEventListener("click", function () {
            window.location.href = "assessment.html";
        });
    }

    if (internshipBtn) {
        internshipBtn.addEventListener("click", function () {
            alert("Internship recommendations will be available after completing your profile.");
        });
    }

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

});