const questions = [
    {
        "type": "closed",
        "question": "Little ______ that the quiet librarian was leading a double life as an international spy.",
        "answers": [
            { "text": "they suspected", "correct": false },
            { "text": "did they suspect", "correct": true },
            { "text": "they did suspect", "correct": false },
            { "text": "they were suspecting", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His speech was a ______ of empty promises, designed to placate the crowd but offering no real solutions.",
        "answers": [
            { "text": "tissue", "correct": false },
            { "text": "tissue of lies", "correct": false },
            { "text": "string", "correct": false },
            { "text": "tissue of platitudes", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They must have been repairing the road when the accident happened.'",
        "answer": ["The road must have been being repaired when the accident happened."]
    },
    {
        "type": "closed",
        "question": "The sudden new regulations, introduced without warning, completely ______ and ruined our carefully laid plans.",
        "answers": [
            { "text": "upset the apple cart", "correct": true },
            { "text": "put the cart before the horse", "correct": false },
            { "text": "hitched our wagon to a star", "correct": false },
            { "text": "went off the rails", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A junior colleague has presented a good idea, but it's not fully developed. How do you encourage them constructively?",
        "answers": [
            { "text": "That's not going to work.", "correct": false },
            { "text": "That's a really promising starting point. Have you thought about how we might tackle the potential issue of X? Let's brainstorm some solutions.", "correct": true },
            { "text": "It's a good idea, but...", "correct": false },
            { "text": "Come back when you have a complete plan.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His ____ (ART) behavior and insincere compliments made everyone wary of him.'",
        "answer": ["artful"]
    },
    {
        "type": "closed",
        "question": "A good manager should know when to ______ and when to ______ a compliment.",
        "answers": [
            { "text": "pay / make", "correct": false },
            { "text": "make / pay", "correct": true },
            { "text": "do / make", "correct": false },
            { "text": "give / do", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to sow one's wild oats'?",
        "answers": [
            { "text": "To work hard in agriculture.", "correct": false },
            { "text": "To go through a period of irresponsible or wild behavior in one's youth.", "correct": true },
            { "text": "To invest in a risky but potentially profitable venture.", "correct": false },
            { "text": "To start a family.", "correct": false }
        ]

    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: ''Oh, what a shame we missed the start!' she said.'",
        "answer": ["She exclaimed that it was a shame they had missed the start."]
    },
    {
        "type": "closed",
        "question": "His ______ nature meant he would argue about the smallest, most insignificant details for hours.",
        "answers": [
            { "text": "petulant", "correct": false },
            { "text": "pedantic", "correct": true },
            { "text": "placid", "correct": false },
            { "text": "pious", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's no good ______ with him; once he's made up his mind, he never changes it.",
        "answers": [
            { "text": "to reason", "correct": false },
            { "text": "reasoning", "correct": true },
            { "text": "reasoned", "correct": false },
            { "text": "to have reasoned", "correct": false }
        ]

    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'Someone seems to have made a mistake in the calculations.'",
        "answer": ["A mistake seems to have been made in the calculations."]
    },
    {
        "type": "closed",
        "question": "The old general was a ______ of the old school, believing in discipline and tradition above all.",
        "answers": [
            { "text": "bastion", "correct": true },
            { "text": "baron", "correct": false },
            { "text": "beacon", "correct": false },
            { "text": "baton", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His claims were based on ______ evidence and could not be verified by independent sources.",
        "answers": [
            { "text": "anecdotal", "correct": true },
            { "text": "antidotal", "correct": false },
            { "text": "analytical", "correct": false },
            { "text": "astronomical", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The company is not answerable ____ its customers for the supplier's mistake.'",
        "answer": ["to"]
    },
    {
        "type": "closed",
        "question": "The president's speech was intended to ______ the nation after the terrible tragedy.",
        "answers": [
            { "text": "unify", "correct": true },
            { "text": "undo", "correct": false },
            { "text": "unleash", "correct": false },
            { "text": "unfurl", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The artist was a true ______; he refused to follow any established rules or trends.",
        "answers": [
            { "text": "iconoclast", "correct": true },
            { "text": "idealist", "correct": false },
            { "text": "impostor", "correct": false },
            { "text": "innovator", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The system is ____ (FAULT) simple, yet incredibly effective.'", "answer": ["faultlessly"] },
    {
        "type": "closed",
        "question": "Her ______ comments, though meant to be funny, often hurt people's feelings.",
        "answers": [
            { "text": "fabulous", "correct": false },
            { "text": "facetious", "correct": true },
            { "text": "fastidious", "correct": false },
            { "text": "facile", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The sudden economic boom turned out to be a ______; it was followed by a deep recession.",
        "answers": [
            { "text": "false start", "correct": false },
            { "text": "false dawn", "correct": true },
            { "text": "false alarm", "correct": false },
            { "text": "false step", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They need not have done that.'",
        "answer": ["That need not have been done."]
    },
    {
        "type": "closed",
        "question": "The lawyer's ______ questioning gradually revealed the inconsistencies in the witness's story.",
        "answers": [
            { "text": "incisive", "correct": true },
            { "text": "indecisive", "correct": false },
            { "text": "inclusive", "correct": false },
            { "text": "inconclusive", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "We need to ______ a new marketing strategy to appeal to a younger demographic.",
        "answers": [
            { "text": "devise", "correct": true },
            { "text": "divide", "correct": false },
            { "text": "derive", "correct": false },
            { "text": "deprive", "correct": false }
        ]

    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'have'. Original sentence: 'I am paying a web designer to create a portfolio for me.'",
        "answer": ["I am having a portfolio created for me."]
    },
    { "type": "closed", "question": "The details of the peace treaty are still ______ and subject to change.", "answers": [{ "text": "in flux", "correct": true }, { "text": "at odds", "correct": false }, { "text": "in earnest", "correct": false }, { "text": "at a loss", "correct": false }] }
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