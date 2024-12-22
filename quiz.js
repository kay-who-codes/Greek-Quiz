let quizData = [];
let currentQuestion = {};
let correctCount = 0;
let incorrectCount = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const correctEl = document.getElementById("correct");
const incorrectEl = document.getElementById("incorrect");
const resetButton = document.getElementById("reset");
const nextButton = document.getElementById("next");
const answerFeedbackEl = document.getElementById("answerFeedback");

async function loadQuizData() {
    try {
        const response = await fetch("quiz-data.json");
        quizData = await response.json();
        loadQuestion();
    } catch (error) {
        console.error("Error loading quiz data:", error);
    }
}

function loadQuestion() {
    if (quizData.length === 0) return;

    const randomIndex = Math.floor(Math.random() * quizData.length);
    currentQuestion = quizData[randomIndex];

    questionEl.textContent = `What is the gender and case of the word "${currentQuestion.word}"?`;

    const allOptions = [
        `${currentQuestion.gender}, ${currentQuestion.case}`,
        `${currentQuestion.gender}, Accusative`,
        `Feminine, ${currentQuestion.case}`,
        `Neuter, Genitive`
    ].sort(() => Math.random() - 0.5);

    optionsEl.innerHTML = "";
    allOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option, button));
        optionsEl.appendChild(button);
    });

    answerFeedbackEl.textContent = ''; // Clear previous feedback
    nextButton.style.display = 'none'; // Hide next button
}

function checkAnswer(selectedOption, button) {
    const correctAnswer = `${currentQuestion.gender}, ${currentQuestion.case}`;

    if (selectedOption === correctAnswer) {
        correctCount++;
        correctEl.textContent = correctCount;
        answerFeedbackEl.innerHTML = `Correct!<br>Answer: ${correctAnswer}<br>Translation: ${currentQuestion.translation}`;
        answerFeedbackEl.style.color = 'green';

        // Disable all buttons and highlight the correct one
        Array.from(optionsEl.children).forEach(btn => btn.disabled = true);

        // Hide the options and show the feedback
        optionsEl.style.display = 'none';

        // Show the next button
        nextButton.style.display = 'block';
    } else {
        incorrectCount++;
        incorrectEl.textContent = incorrectCount;

        // Highlight incorrect answer
        button.classList.add("incorrect");
        button.disabled = true; // Prevent multiple clicks on the same button

        // Provide feedback to the user
        answerFeedbackEl.textContent = `Incorrect. Try again!`;
        answerFeedbackEl.style.color = 'red';
    }
}

nextButton.addEventListener("click", () => {
    answerFeedbackEl.textContent = ''; // Clear feedback
    loadQuestion();
    optionsEl.style.display = 'flex'; // Show the options again
    nextButton.style.display = 'none'; // Hide the next button again
});

resetButton.addEventListener("click", () => {
    correctCount = 0;
    incorrectCount = 0;
    correctEl.textContent = correctCount;
    incorrectEl.textContent = incorrectCount;
    loadQuestion();
});

// Initialise the quiz
loadQuizData();

document.getElementById("viewTables").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});