document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");
    const loginBtn = document.querySelector(".login-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const education = document.getElementById("education").value;
        const branch = document.getElementById("branch").value;
        const college = document.getElementById("college").value.trim();
        const cgpa = document.getElementById("cgpa").value;
        const year = document.getElementById("year").value;
        const skills = document.getElementById("skills").value.trim();
        const interests = document.getElementById("interests").value.trim();

        if (!name || !email || !education || !branch || !college || !cgpa || !year) {
            alert("Please fill all required fields.");
            return;
        }

        if (cgpa < 0 || cgpa > 10) {
            alert("Please enter a valid CGPA between 0 and 10.");
            return;
        }

        const student = {
            name: name,
            email: email,
            education: education,
            branch: branch,
            college: college,
            cgpa: cgpa,
            year: year,
            skills: skills,
            interests: interests
        };

        localStorage.setItem("studentData", JSON.stringify(student));

        alert("Registration successful!");

        window.location.href = "dashboard.html";
    });

});