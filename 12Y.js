const questions = [
    {
        "type": "closed",
        "question": "Hardly had the curtain risen ______ the audience gasped in amazement.",
        "answers": [
            { "text": "than", "correct": false },
            { "text": "then", "correct": false },
            { "text": "when", "correct": true },
            { "text": "that", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ attitude towards safety regulations was the primary cause of the accident.",
        "answers": [
            { "text": "cavalier", "correct": true },
            { "text": "chivalrous", "correct": false },
            { "text": "cautious", "correct": false },
            { "text": "considerate", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'There is still a lot of work to do.'",
        "answer": ["There is still a lot of work to be done."]
    },
    {
        "type": "closed",
        "question": "The spread of online misinformation has a ______ effect on society, slowly eroding public trust.",
        "answers": [
            { "text": "precious", "correct": false },
            { "text": "pernicious", "correct": true },
            { "text": "precocious", "correct": false },
            { "text": "perfunctory", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A friend keeps making the same mistake despite your advice. How can you express your frustration politely?",
        "answers": [
            { "text": "I told you so!", "correct": false },
            { "text": "With all due respect, we've discussed this before, and it seems we're going in circles.", "correct": true },
            { "text": "Why are you not listening to me?", "correct": false },
            { "text": "That's a hopeless idea.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'There was widespread ____ (SATISFY) with the government's response.'",
        "answer": ["dissatisfaction"]
    },
    {
        "type": "closed",
        "question": "The board decreed that all expenses ______ approved in advance by the finance department.",
        "answers": [
            { "text": "were", "correct": false },
            { "text": "are", "correct": false },
            { "text": "be", "correct": true },
            { "text": "would be", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He spoke about his achievements without a hint of modesty; his ______ was quite off-putting.",
        "answers": [
            { "text": "humility", "correct": false },
            { "text": "vanity", "correct": true },
            { "text": "integrity", "correct": false },
            { "text": "dignity", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: 'I wish I had worked harder,' he said.",
        "answer": ["He said that he wished he had worked harder.", "He regretted not working harder."]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'a moot point'?",
        "answers": [
            { "text": "A very important and decisive issue.", "correct": false },
            { "text": "A topic that is debatable, or of no practical relevance.", "correct": true },
            { "text": "A point that everyone agrees on.", "correct": false },
            { "text": "A secret piece of information.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "______ for his timely intervention, the project would have failed completely.",
        "answers": [
            { "text": "If it hadn't been", "correct": true },
            { "text": "If it wasn't", "correct": false },
            { "text": "Without it was", "correct": false },
            { "text": "Unless it were", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'Well...'. Original sentence: 'He is a great musician, but he is a terrible singer.'",
        "answer": ["Well though he plays the instrument, he is a terrible singer."]
    },
    {
        "type": "closed",
        "question": "The evidence against him is overwhelming and his guilt is ______.",
        "answers": [
            { "text": "questionable", "correct": false },
            { "text": "indisputable", "correct": true },
            { "text": "debatable", "correct": false },
            { "text": "negotiable", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He was constantly agreeing with the manager and laughing at her jokes, clearly trying to ______.",
        "answers": [
            { "text": "break the ice", "correct": false },
            { "text": "curry favour", "correct": true },
            { "text": "spill the beans", "correct": false },
            { "text": "rock the boat", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'This new law is a serious infringement ____ our personal freedoms.'",
        "answer": ["on"]
    },
    {
        "type": "closed",
        "question": "The new CEO's job is to ______ the struggling company and make it profitable again.",
        "answers": [
            { "text": "turn around", "correct": true },
            { "text": "turn over", "correct": false },
            { "text": "turn in", "correct": false },
            { "text": "turn up", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He was a ______ opponent, respected by all for his fairness and skill.",
        "answers": [
            { "text": "formidable", "correct": true },
            { "text": "forgettable", "correct": false },
            { "text": "formative", "correct": false },
            { "text": "formulaic", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The government's ____ (INTERVENE) in the market was heavily criticized.'", "answer": ["intervention"] },
    {
        "type": "closed",
        "question": "What is the function of 'would' in this sentence? 'Back in the day, we would spend all summer playing outside.'",
        "answers": [
            { "text": "Expressing a hypothetical situation.", "correct": false },
            { "text": "Expressing a repeated past habit.", "correct": true },
            { "text": "Expressing irritation.", "correct": false },
            { "text": "Making a polite request.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I couldn't get the car ______ this morning; the battery must be flat.",
        "answers": [
            { "text": "starting", "correct": false },
            { "text": "to start", "correct": true },
            { "text": "started", "correct": false },
            { "text": "to have started", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'I resent people telling me what to do.'",
        "answer": ["I resent being told what to do."]
    },
    {
        "type": "closed",
        "question": "After their team's unexpected victory, the fans were in a state of pure ______.",
        "answers": [
            { "text": "euphoria", "correct": true },
            { "text": "apathy", "correct": false },
            { "text": "lethargy", "correct": false },
            { "text": "melancholy", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Don't become ______ after one success; there is still a long way to go.",
        "answers": [
            { "text": "complaisant", "correct": false },
            { "text": "complacent", "correct": true },
            { "text": "competent", "correct": false },
            { "text": "compliant", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'have'. Original sentence: 'I need to pay a professional to clean the carpets.'",
        "answer": ["I need to have the carpets cleaned."]
    },
    {
        "type": "closed",
        "question": "The director's latest film is ______ a masterpiece; a truly stunning work of art.",
        "answers": [
            { "text": "ostensibly", "correct": false },
            { "text": "allegedly", "correct": false },
            { "text": "veritable", "correct": true },
            { "text": "virtual", "correct": false }
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