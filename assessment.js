const form = document.getElementById("assessmentForm");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const result = document.getElementById("result");

const totalQuestions = 15;

form.addEventListener("change", function () {
    let answered = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) {
            answered++;
        }
    }

    let percentage = (answered / totalQuestions) * 100;

    progressBar.style.width = percentage + "%";
    progressText.textContent = answered + " / " + totalQuestions;
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let scores = {
        ai: 0,
        data: 0,
        web: 0,
        programming: 0
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);

        if (!answer) {
            alert("Please answer all questions.");
            return;
        }

        scores[answer.value]++;
    }

    let career = "";
    let highestScore = 0;

    for (let category in scores) {
        if (scores[category] > highestScore) {
            highestScore = scores[category];
            career = category;
        }
    }

    const careers = {
        ai: "AI / ML Engineer",
        data: "Data Analyst / Data Scientist",
        web: "Web Developer",
        programming: "Backend / Software Developer"
    };

    const descriptions = {
        ai: "You have a strong interest in Artificial Intelligence, Machine Learning and intelligent technologies.",
        data: "You show strong analytical thinking and interest in data and statistics.",
        web: "You have a strong interest in creating websites and web applications.",
        programming: "You show strong programming and problem-solving abilities."
    };

    result.style.display = "block";

    result.innerHTML = `
        <h2>🎯 Your Recommended Career</h2>
        <h1>${careers[career]}</h1>
        <p>${descriptions[career]}</p>
        <p><strong>Match Score:</strong> ${Math.round((highestScore / totalQuestions) * 100)}%</p>
    `;

    result.scrollIntoView({
        behavior: "smooth"
    });
});