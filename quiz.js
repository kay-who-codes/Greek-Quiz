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
const darkModeToggle = document.getElementById("darkModeToggle");
const quizTypeEl = document.getElementById("quizType");

// HEADER BAR
// Toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
  }
  // Close dropdown when clicking outside
  window.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  });

// QUIZ
async function loadQuizData() {
    const quizType = quizTypeEl.value;
    let dataUrl = '';

    if (quizType === 'greek-cases') {
        dataUrl = 'word-cases.json';
    } else if (quizType === 'word-roots') {
        dataUrl = 'word-roots.json';
    }

    try {
        const response = await fetch(dataUrl);
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

    if (quizTypeEl.value === 'greek-cases') {
        questionEl.textContent = `${currentQuestion.word}`;

        // Define the fixed order of case options
        const allOptions = [
            "Nominative",
            "Genitive",
            "Accusative",
            "Vocative",
            "Dative"
        ];

        // The correct answer is already present in the 'case' field of the current question
        const correctAnswer = currentQuestion.case;

        // Ensure the correct answer is included in the options
        const options = [correctAnswer, ...allOptions.filter(option => option !== correctAnswer)];

        optionsEl.innerHTML = "";
        options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option, button));
            optionsEl.appendChild(button);
        });
    } else if (quizTypeEl.value === 'word-roots') {
        questionEl.textContent = `${currentQuestion.root}`;

        // Generate unique incorrect options
        const incorrectOptions = [];
        while (incorrectOptions.length < 3) {
            const randomIncorrectIndex = Math.floor(Math.random() * quizData.length);
            const incorrectOption = `${quizData[randomIncorrectIndex].english}`;
            if (incorrectOption !== currentQuestion.english && !incorrectOptions.includes(incorrectOption)) {
                incorrectOptions.push(incorrectOption);
            }
        }

        const allOptions = [
            currentQuestion.english,
            ...incorrectOptions
        ].sort(() => Math.random() - 0.5);

        optionsEl.innerHTML = "";
        allOptions.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option, button));
            optionsEl.appendChild(button);
        });
    }

    answerFeedbackEl.textContent = ''; // Clear previous feedback
    nextButton.style.display = 'none'; // Hide next button
}

// Check if the selected option is correct
function checkAnswer(selectedOption, button) {
    let correctAnswer = "";

    if (quizTypeEl.value === 'greek-cases') {
        // For Greek Cases quiz, the correct answer is the case of the word
        correctAnswer = currentQuestion.case;
    } else if (quizTypeEl.value === 'word-roots') {
        // For Word Roots quiz, the correct answer is the English meaning
        correctAnswer = currentQuestion.english;
    }

    // Trim whitespace and convert both answers to lowercase for case-insensitive comparison
    if (selectedOption.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
        correctCount++;
        correctEl.textContent = correctCount;

        // Show detailed answer feedback based on the quiz type
        if (quizTypeEl.value === 'greek-cases') {
            answerFeedbackEl.innerHTML = `Correct!<br><br>Word Case: ${currentQuestion.singularPlural}, ${currentQuestion.gender}, ${currentQuestion.case}<br><br>Translation: ${currentQuestion.translation}`;
        } else {
            answerFeedbackEl.innerHTML = `Translation: ${currentQuestion.english}<br><br>Origin: ${currentQuestion.origin}<br><br>Etymology: ${currentQuestion.etymology}<br><br>Examples: ${currentQuestion.examples}`;
        }

        // Apply correct feedback style using class-based styling
        answerFeedbackEl.classList.remove('incorrect'); // Remove any previous incorrect class
        answerFeedbackEl.classList.add('correct'); // Add the 'correct' class for styling
        Array.from(optionsEl.children).forEach(btn => btn.disabled = true); // Disable all options
        optionsEl.style.display = 'none'; // Hide options
        nextButton.style.display = 'block'; // Show the next button

        // Hide the quiz type selector
        quizTypeSelector.style.display = 'none';
    } else {
        incorrectCount++;
        incorrectEl.textContent = incorrectCount;

        // Add the 'incorrect' class for styling
        button.classList.add("incorrect");
        button.disabled = true;

        // Provide incorrect feedback using class-based styling
        answerFeedbackEl.textContent = `Incorrect. Try again!`;
        answerFeedbackEl.classList.remove('correct'); // Remove 'correct' class if present
        answerFeedbackEl.classList.add('incorrect'); // Add 'incorrect' class for styling
    }
}

// Event listeners
nextButton.addEventListener("click", () => {
    answerFeedbackEl.textContent = ''; // Clear feedback
    loadQuestion();
    optionsEl.style.display = 'flex'; // Show the options again
    nextButton.style.display = 'none'; // Hide the next button again

    // Show the quiz type selector
    quizTypeSelector.style.display = 'block';
});

// AUTO DARK MODE
document.addEventListener('DOMContentLoaded', () => {
    // Check local storage for theme preference
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
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

// Dark mode toggle functionality
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
