const questions = [
    {
        "type": "closed",
        "question": "Scarcely had she finished her speech ______ the power went out.",
        "answers": [
            { "text": "than", "correct": false },
            { "text": "then", "correct": false },
            { "text": "when", "correct": true },
            { "text": "that", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ attention to detail, while sometimes tedious, ensured that no mistakes were ever made.",
        "answers": [
            { "text": "assiduous", "correct": true },
            { "text": "asinine", "correct": false },
            { "text": "astute", "correct": false },
            { "text": "austere", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They could have done much more to prevent the accident.'",
        "answer": ["Much more could have been done to prevent the accident."]
    },
    {
        "type": "closed",
        "question": "The sudden resignation of the project manager just before the deadline really ______.",
        "answers": [
            { "text": "threw a spanner in the works", "correct": true },
            { "text": "put a sock in it", "correct": false },
            { "text": "kicked the bucket", "correct": false },
            { "text": "spilt the beans", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You are in a conversation with someone who is talking endlessly and you need to leave. What is a polite way to exit?",
        "answers": [
            { "text": "I have to go now, bye.", "correct": false },
            { "text": "It's been fascinating to hear your thoughts on this, but I'm afraid I have another commitment I must get to. We must continue this conversation another time.", "correct": true },
            { "text": "Can you please stop talking? I'm leaving.", "correct": false },
            { "text": "This is getting boring.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'He has an ____ (SATISFY) appetite for knowledge, always reading and learning.'",
        "answer": ["insatiable"]
    },
    {
        "type": "closed",
        "question": "The building is of great ______ importance, but it has no real ______ value today.",
        "answers": [
            { "text": "historic / historical", "correct": false },
            { "text": "historical / historic", "correct": true },
            { "text": "historic / historic", "correct": false },
            { "text": "historical / historical", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The judge insisted that the witness ______ the whole truth and nothing but the truth.",
        "answers": [
            { "text": "tells", "correct": false },
            { "text": "tell", "correct": true },
            { "text": "is telling", "correct": false },
            { "text": "told", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: ''What do you think I should do next?' he asked.'",
        "answer": ["He asked what I thought he should do next."]
    },
    {
        "type": "closed",
        "question": "He has a natural ______ for making friends wherever he goes.",
        "answers": [
            { "text": "proclivity", "correct": true },
            { "text": "problem", "correct": false },
            { "text": "process", "correct": false },
            { "text": "prohibition", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I wouldn't ______ him arriving on time; he's notoriously unreliable.",
        "answers": [
            { "text": "bank on", "correct": true },
            { "text": "break in", "correct": false },
            { "text": "bring about", "correct": false },
            { "text": "call for", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They let him go after questioning.'",
        "answer": ["He was let go after questioning."]
    },
    {
        "type": "closed",
        "question": "The facts of the case are clear and no one can ______ them.",
        "answers": [
            { "text": "gainsay", "correct": true },
            { "text": "gamble", "correct": false },
            { "text": "gather", "correct": false },
            { "text": "garner", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The threat of a hostile takeover hangs over the company like ______.",
        "answers": [
            { "text": "a Trojan horse", "correct": false },
            { "text": "the sword of Damocles", "correct": true },
            { "text": "a Gordian knot", "correct": false },
            { "text": "a Pyrrhic victory", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'It is incumbent ____ the management to ensure a safe working environment.'",
        "answer": ["upon"]
    },
    {
        "type": "closed",
        "question": "Over the years, she managed to ______ considerable support for her political cause.",
        "answers": [
            { "text": "garner", "correct": true },
            { "text": "garnish", "correct": false },
            { "text": "gasp", "correct": false },
            { "text": "grapple", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ apology, delivered without any eye contact, felt worse than no apology at all.",
        "answers": [
            { "text": "profound", "correct": false },
            { "text": "perfunctory", "correct": true },
            { "text": "perfect", "correct": false },
            { "text": "pompous", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'Many of his claims are ____ (PROVE) and based on speculation.'", "answer": ["unproven"] },
    {
        "type": "closed",
        "question": "His methods were unorthodox, to ______.",
        "answers": [
            { "text": "say the most", "correct": false },
            { "text": "say the least", "correct": true },
            { "text": "tell the truth", "correct": false },
            { "text": "be honest", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "If you keep ignoring the regulations, you will eventually ______ the authorities.",
        "answers": [
            { "text": "fall foul of", "correct": true },
            { "text": "get wind of", "correct": false },
            { "text": "make light of", "correct": false },
            { "text": "take stock of", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They suppose he is living abroad.'",
        "answer": ["He is supposed to be living abroad."]
    },
    {
        "type": "closed",
        "question": "His ______ reason for the visit was business, but he really wanted to see his old friends.",
        "answers": [
            { "text": "ostensible", "correct": true },
            { "text": "outstanding", "correct": false },
            { "text": "outlandish", "correct": false },
            { "text": "outright", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I don't ______ people gossiping about their colleagues; I find it unprofessional.",
        "answers": [
            { "text": "hold with", "correct": true },
            { "text": "hold up", "correct": false },
            { "text": "hold on", "correct": false },
            { "text": "hold back", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb. Original sentence: 'The comedian managed to make the whole audience laugh hysterically.'",
        "answer": ["The comedian had the whole audience laughing hysterically."]
    },
    { "type": "closed", "question": "She is the ______ of grace and professionalism.", "answers": [{ "text": "epilogue", "correct": false }, { "text": "epitome", "correct": true }, { "text": "epigram", "correct": false }, { "text": "epistle", "correct": false }] }
];

// --- Pobranie elementów z HTML ---
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const openAnswerContainer = document.getElementById("open-answer-container");
const openAnswerInput = document.getElementById("open-answer-input");
const correctAnswerText = document.getElementById("correct-answer-text");
const actionButton = document.getElementById("action-btn");

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results-container");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-btn");

// --- Zmienne stanu quizu ---
let currentQuestionIndex = 0;
let score = 0;
let questionAnswered = false; // Flaga sprawdzająca, czy odpowiedź została już udzielona

// --- Funkcje Główne ---
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionAnswered = false;
    quizContainer.classList.remove("hidden");
    resultsContainer.classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    if (currentQuestion.type === 'closed') {
        answerButtonsElement.classList.remove("hidden");
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answer.correct) {
                button.dataset.correct = "true";
            }
            button.addEventListener("click", selectClosedAnswer);
            answerButtonsElement.appendChild(button);
        });
    } else if (currentQuestion.type === 'open') {
        openAnswerContainer.classList.remove("hidden");
        actionButton.innerHTML = "Sprawdź";
        actionButton.style.display = "block";
    }
}

function resetState() {
    questionAnswered = false;

    // Ukryj wszystko
    answerButtonsElement.classList.add("hidden");
    openAnswerContainer.classList.add("hidden");
    correctAnswerText.classList.add("hidden");
    actionButton.style.display = "none";

    // Wyczyść przyciski i pole input
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    openAnswerInput.value = "";
    openAnswerInput.disabled = false;
    openAnswerInput.classList.remove("correct-input", "incorrect-input");
}

function selectClosedAnswer(e) {
    if (questionAnswered) return;
    questionAnswered = true;

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    actionButton.innerHTML = "Następne";
    actionButton.style.display = "block";
}

function checkOpenAnswer() {
    if (questionAnswered) return;
    questionAnswered = true;

    const userAnswer = openAnswerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer;

    // Sprawdzamy, czy odpowiedź użytkownika znajduje się w tablicy poprawnych odpowiedzi
    if (correctAnswer.includes(userAnswer)) {
        openAnswerInput.classList.add("correct-input");
        score++;
    } else {
        openAnswerInput.classList.add("incorrect-input");
        correctAnswerText.innerHTML = `Poprawna odpowiedź: ${correctAnswer.join(" lub ")}`;
        correctAnswerText.classList.remove("hidden");
    }
    openAnswerInput.disabled = true;
    actionButton.innerHTML = "Następne";
}

function handleActionButton() {
    const currentQuestion = questions[currentQuestionIndex];

    // Jeśli pytanie jest otwarte i odpowiedź nie została sprawdzona
    if (currentQuestion.type === 'open' && !questionAnswered) {
        checkOpenAnswer();
    } else {
        // Przejdź do następnego pytania
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    scoreText.innerHTML = `Zdobyłeś ${score} z ${questions.length} punktów!`;
}

// --- Event Listeners ---
actionButton.addEventListener("click", handleActionButton);
restartButton.addEventListener("click", startQuiz);

// --- Rozpoczęcie quizu ---
startQuiz();