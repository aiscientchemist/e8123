// --- GETTING HTML ELEMENTS ---
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const answerArea = document.getElementById('answer-area');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreText = document.getElementById('score-text');
const totalQuestionsText = document.getElementById('total-questions-text');
const questionImage = document.getElementById('question-image'); // NEW: Get the image element

// --- QUIZ QUESTIONS (with image property) ---
const questions = [
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193145.png',
        type: 'multiple-choice',
        options: [
            "Hat",
            "Cat",
            "cap",
            "head"
        ],
        answer: "Hat"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193201.png',
        type: 'multiple-choice',
        options: [
            "bag",
            "some small thing ;)",
            "nothing",
            "grass"
        ],
        answer: "bag"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193218.png',
        type: 'multiple-choice',
        options: [
            "earring",
            "cap",
            "earing",
            "I am sure it doesn't exist"
        ],
        answer: "earring"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193225.png',
        type: 'multiple-choice',
        options: [
            "suit",
            "sut",
            "sit down",
            "yes"
        ],
        answer: "suit"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193230.png',
        type: 'multiple-choice',
        options: [
            "stomach/belly",
            "normal ball",
            "huge ball",
            "small ball"
        ],
        answer: "stomach/belly"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193238.png',
        type: 'multiple-choice',
        options: [
            "male",
            "female",
            "small child",
            "alien"
        ],
        answer: "male"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193244.png',
        type: 'multiple-choice',
        options: [
            "trousers",
            "blue sky",
            "tosers",
            "hat"
        ],
        answer: "trousers"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193250.png',
        type: 'multiple-choice',
        options: [
            "sirt",
            "ttts",
            "shirt",
            "h"
        ],
        answer: "shirt"
    },

    {
        question: "What did he say? your answer [words] follow by comma (przecinek)",

        type: 'open-ended',
        answer: "Cascading Style Sheets",
        tolerance: 3
    },
    {
        question: "What is the capital city of France? (No Image for this one)",
        // No image property here, so none will be shown.
        type: 'open-ended',
        answer: "Paris",
        tolerance: 1
    },
    {
        question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
        type: 'multiple-choice',
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        answer: "const"
    }
];

// --- STATE VARIABLES AND EVENT LISTENERS (No changes here) ---
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

submitBtn.addEventListener('click', handleSubmit);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', restartQuiz);


// --- FUNCTIONS ---

// ** UPDATED showQuestion function **
function showQuestion(question) {
    resetState();

    // Check for an image and display it if it exists
    if (question.image) {
        questionImage.src = question.image;
        questionImage.classList.remove('hide');
    } else {
        // Hide the image element if the question doesn't have one
        questionImage.classList.add('hide');
    }

    questionText.innerText = question.question;
    totalQuestionsText.innerText = questions.length;

    if (question.type === 'multiple-choice') {
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectMultipleChoiceAnswer(button));
            answerArea.appendChild(button);
        });
    } else if (question.type === 'open-ended') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'open-answer-input';
        input.placeholder = 'Type your answer here...';
        answerArea.appendChild(input);
    }
}

// No other functions need to be changed.
// Just copy the rest of your existing script.js from here down.
// ... (startQuiz, resetState, selectMultipleChoiceAnswer, handleSubmit, etc.)

// --- PASTE THE REST OF YOUR SCRIPT.JS CODE BELOW ---
// Levenshtein distance function, startQuiz, resetState, etc. all remain the same.

/**
 * Calculates the Levenshtein distance between two strings.
 */
function levenshteinDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) {
            costs[s2.length] = lastValue;
        }
    }
    return costs[s2.length];
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function resetState() {
    feedback.innerText = '';
    feedback.className = 'feedback';
    nextBtn.classList.add('hide');
    submitBtn.classList.remove('hide');
    answerArea.innerHTML = '';
    selectedAnswer = null;
}

function selectMultipleChoiceAnswer(button) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedAnswer = button.innerText;
}

function handleSubmit() {
    const currentQuestion = questions[currentQuestionIndex];
    let userAnswer;
    let isCorrect = false;

    if (currentQuestion.type === 'multiple-choice') {
        userAnswer = selectedAnswer;
        if (userAnswer) {
            isCorrect = userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();
        }
    } else if (currentQuestion.type === 'open-ended') {
        const input = document.getElementById('open-answer-input');
        userAnswer = input.value.trim();
        if (userAnswer) {
            const correctAnswer = currentQuestion.answer;
            const tolerance = currentQuestion.tolerance;
            const exactMatch = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
            const partialMatch = correctAnswer.toLowerCase().includes(userAnswer.toLowerCase()) && userAnswer.length > 3;
            const distance = levenshteinDistance(userAnswer, correctAnswer);
            const withinTolerance = distance <= tolerance;
            isCorrect = exactMatch || partialMatch || withinTolerance;
        }
    }

    if (!userAnswer) {
        alert("Please provide an answer!");
        return;
    }

    if (isCorrect) {
        score++;
        feedback.innerText = "Correct!";
        feedback.classList.add('correct');
    } else {
        feedback.innerText = `Incorrect. The correct answer is: ${currentQuestion.answer}`;
        feedback.classList.add('incorrect');
    }

    showAnswerStatus(currentQuestion, isCorrect);
    submitBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
}

function showAnswerStatus(question, isCorrect) {
    if (question.type === 'multiple-choice') {
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(button => {
            if (button.innerText.toLowerCase() === question.answer.toLowerCase()) {
                button.classList.add('correct');
            }
            if (button.classList.contains('selected') && !isCorrect) {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });
    } else if (question.type === 'open-ended') {
        const input = document.getElementById('open-answer-input');
        input.disabled = true;
    }
}

function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');
    scoreText.innerText = score;
}

function restartQuiz() {
    startQuiz();
}

// --- INITIALIZE QUIZ ---
startQuiz();