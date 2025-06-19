const questions = [
    {
        "type": "closed",
        "question": "I didn't fix the leak myself; I ______ by a professional plumber.",
        "answers": [
            { "text": "had it repaired", "correct": true },
            { "text": "had repaired it", "correct": false },
            { "text": "was repaired it", "correct": false },
            { "text": "repaired it", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Read the text: 'Despite the initial major setback, the team rallied, worked overnight, and managed to deliver the project ahead of schedule.' What does this imply about the team?",
        "answers": [
            { "text": "They were lucky to finish on time.", "correct": false },
            { "text": "They are resilient and work well under pressure.", "correct": true },
            { "text": "The project was much easier than expected.", "correct": false },
            { "text": "They had no real difficulties.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence to add emphasis, starting with 'No sooner...'. Original sentences: 'He arrived home. The phone started ringing immediately.'",
        "answer": ["No sooner had he arrived home than the phone started ringing."]
    },
    {
        "type": "closed",
        "question": "The police have decided to ______ the mysterious disappearance of the painting.",
        "answers": [
            { "text": "look up to", "correct": false },
            { "text": "look down on", "correct": false },
            { "text": "look out for", "correct": false },
            { "text": "look into", "correct": true }
        ]
    },
    {
        "type": "closed",
        "question": "Your friend says, 'I'm sure I can finish this entire book tonight.' How would you express polite doubt?",
        "answers": [
            { "text": "That's impossible, don't be silly.", "correct": false },
            { "text": "Are you sure? That seems a bit ambitious, but good luck!", "correct": true },
            { "text": "You'll definitely fail.", "correct": false },
            { "text": "Why would you even try that?", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'Her ____ (DETERMINE) to become a doctor was truly inspiring.'",
        "answer": ["determination"]
    },
    {
        "type": "closed",
        "question": "The lights are off and the curtains are drawn. They _______ gone on holiday.",
        "answers": [
            { "text": "must have", "correct": true },
            { "text": "should have", "correct": false },
            { "text": "can't", "correct": false },
            { "text": "needn't have", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to keep your cards close to your chest'?",
        "answers": [
            { "text": "To be a professional gambler.", "correct": false },
            { "text": "To not reveal your plans or ideas.", "correct": true },
            { "text": "To feel cold and wrap your arms around yourself.", "correct": false },
            { "text": "To be very shy and introverted.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the command using reported speech: The librarian said to the children, 'Do not run in the library.'",
        "answer": ["The librarian told the children not to run in the library."]
    },
    {
        "type": "closed",
        "question": "While the scientist was famous for his discoveries, his brother was a(n) _______ criminal.",
        "answers": [
            { "text": "distinguished", "correct": false },
            { "text": "renowned", "correct": false },
            { "text": "notorious", "correct": true },
            { "text": "acclaimed", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "______ I richer, I would buy a house by the sea. (This is a more formal way of saying 'If I were...')",
        "answers": [
            { "text": "Was", "correct": false },
            { "text": "If", "correct": false },
            { "text": "Am", "correct": false },
            { "text": "Were", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice: 'They should have delivered the package yesterday.'",
        "answer": ["The package should have been delivered yesterday."]
    },
    {
        "type": "closed",
        "question": "It's a very serious matter and we need to ______ a decision as soon as possible.",
        "answers": [
            { "text": "do", "correct": false },
            { "text": "make", "correct": true },
            { "text": "have", "correct": false },
            { "text": "get", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You are in a meeting and you want to add a point. What is the most professional way to interrupt?",
        "answers": [
            { "text": "Wait, I have something to say.", "correct": false },
            { "text": "Listen to me for a second.", "correct": "false" },
            { "text": "Could I just jump in here for a moment?", "correct": true },
            { "text": "Stop talking, it's my turn.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'He is responsible ____ the entire marketing department.'",
        "answer": ["for"]
    },
    {
        "type": "closed",
        "question": "The concert was fantastic. _______, the tickets were incredibly expensive.",
        "answers": [
            { "text": "As a result", "correct": false },
            { "text": "Furthermore", "correct": false },
            { "text": "On the other hand", "correct": true },
            { "text": "Thus", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I really wish I ______ more attention in class last week; I don't understand anything now.",
        "answers": [
            { "text": "paid", "correct": false },
            { "text": "would pay", "correct": false },
            { "text": "had paid", "correct": true },
            { "text": "was paying", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using 'If only...'. First sentence: 'It's a pity you didn't see that movie.'",
        "answer": ["If only you had seen that movie."]
    },
    {
        "type": "closed",
        "question": "The company is looking for a ______ solution to its financial problems, not a temporary fix.",
        "answers": [
            { "text": "momentary", "correct": false },
            { "text": "viable", "correct": true },
            { "text": "debatable", "correct": false },
            { "text": "superficial", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "We regret ______ you that the performance has been cancelled due to unforeseen circumstances.",
        "answers": [
            { "text": "informing", "correct": false },
            { "text": "to inform", "correct": true },
            { "text": "to have informed", "correct": false },
            { "text": "inform", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The plot of the film was so ____ (PREDICT) that I knew how it would end after 20 minutes.'",
        "answer": ["predictable"]
    },
    {
        "type": "closed",
        "question": "There was ______ damage to the building after the storm, but luckily no one was hurt.",
        "answers": [
            { "text": "considerable", "correct": true },
            { "text": "considered", "correct": false },
            { "text": "considerate", "correct": false },
            { "text": "considering", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Due to the accident, there was ______ traffic on the road this morning.",
        "answers": [
            { "text": "a large number of", "correct": false },
            { "text": "many", "correct": false },
            { "text": "a great deal of", "correct": true },
            { "text": "several", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct form of the verb: 'You need to get that strange noise in your car ______ (check) by a mechanic.'",
        "answer": ["checked"]
    },
    {
        "type": "closed",
        "question": "This is by ______ the most difficult exercise we've done so far.",
        "answers": [
            { "text": "far", "correct": true },
            { "text": "much", "correct": false },
            { "text": "long", "correct": false },
            { "text": "way", "correct": false }
        ]
    }
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