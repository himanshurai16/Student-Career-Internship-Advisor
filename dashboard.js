document.addEventListener("DOMContentLoaded", function () {

    const studentData = JSON.parse(localStorage.getItem("studentData"));
    const careerResult = localStorage.getItem("careerResult");
    const careerScore = localStorage.getItem("careerScore");

    if (studentData) {

        const profileName = document.querySelector(".profile strong");
        const welcomeName = document.querySelector(".welcome h2");
        const profileImg = document.querySelector(".profile-img");

        if (profileName) {
            profileName.textContent = studentData.name;
        }

        if (welcomeName) {
            welcomeName.textContent = "Hello, " + studentData.name + "!";
        }

        if (profileImg) {
            profileImg.textContent = studentData.name.charAt(0).toUpperCase();
        }
    }

    if (careerResult) {

        const careerName = document.querySelector(".career-name h3");
        const matchCircle = document.querySelector(".match-circle");

        if (careerName) {
            careerName.textContent = careerResult;
        }

        if (matchCircle && careerScore) {
            matchCircle.textContent = careerScore + "%";
        }

        const careerMatch = document.querySelector(".stat-card h2");

        if (careerMatch && careerScore) {
            careerMatch.textContent = careerScore + "%";
        }
    }

    const assessmentButtons = document.querySelectorAll(".assessment-btn");

    assessmentButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "assessment.html";
        });
    });

    const notification = document.querySelector(".notification");

    if (notification) {
        notification.addEventListener("click", function () {
            alert("You have no new notifications.");
        });
    }

    const skillButton = document.querySelector(".outline-btn");

    if (skillButton) {
        skillButton.addEventListener("click", function () {
            alert("Skill Gap Analysis will be available soon.");
        });
    }

    const careerButton = document.querySelector(".primary-btn");

    if (careerButton) {
        careerButton.addEventListener("click", function () {
            alert("Career details will be available soon.");
        });
    }

});