const questions = [
    {
        "type": "closed",
        "question": "In no way ______ the terms of this agreement; they are non-negotiable.",
        "answers": [
            { "text": "we can alter", "correct": false },
            { "text": "can we alter", "correct": true },
            { "text": "we alter", "correct": false },
            { "text": "we are able to alter", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The constant, nitpicking criticism from the manager began to ______ the team's morale.",
        "answers": [
            { "text": "bolster", "correct": false },
            { "text": "sap", "correct": true },
            { "text": "augment", "correct": false },
            { "text": "fortify", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They will have completed all the necessary research by the end of the year.'",
        "answer": ["All the necessary research will have been completed by the end of the year."]
    },
    {
        "type": "closed",
        "question": "Having to choose between two equally bad options, she felt she was caught ______.",
        "answers": [
            { "text": "in the crossfire", "correct": false },
            { "text": "between a rock and a hard place", "correct": true },
            { "text": "on the horns of a dilemma", "correct": false },
            { "text": "out of the frying pan into the fire", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A manager notices an employee's work is not up to standard. What is the most constructive way to begin the conversation?",
        "answers": [
            { "text": "Your work has been terrible lately.", "correct": false },
            { "text": "I wanted to check in and see how you're getting on with the project, and discuss a few areas we could potentially improve.", "correct": true },
            { "text": "You need to start working harder.", "correct": false },
            { "text": "Do this again and you're fired.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The political ____ (STABLE) in the region is a cause for global concern.'",
        "answer": ["instability"]
    },
    {
        "type": "closed",
        "question": "The contract stipulates that payment ______ made within 30 days of receipt of the invoice.",
        "answers": [
            { "text": "is", "correct": false },
            { "text": "be", "correct": true },
            { "text": "would be", "correct": false },
            { "text": "should to be", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The benefits of the new policy are ______, but the long-term risks are very real.",
        "answers": [
            { "text": "tangible", "correct": false },
            { "text": "illusory", "correct": true },
            { "text": "obvious", "correct": false },
            { "text": "concrete", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: 'Shall I help you with those bags?' he asked.",
        "answer": ["He offered to help me with those bags."]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to rest on one's laurels'?",
        "answers": [
            { "text": "To be satisfied with your past successes and to stop striving for more.", "correct": true },
            { "text": "To take a well-deserved break.", "correct": false },
            { "text": "To publicly celebrate your achievements.", "correct": false },
            { "text": "To be very modest about your accomplishments.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "______ for the dense fog, our flight would not have been delayed.",
        "answers": [
            { "text": "If it wasn't", "correct": false },
            { "text": "Without it being", "correct": false },
            { "text": "Had it not been", "correct": true },
            { "text": "If it wouldn't be", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'He hopes they will select him for the national team.'",
        "answer": ["He hopes to be selected for the national team."]
    },
    {
        "type": "closed",
        "question": "His comments only served to ______ an already difficult situation.",
        "answers": [
            { "text": "mitigate", "correct": false },
            { "text": "aggravate", "correct": true },
            { "text": "alleviate", "correct": false },
            { "text": "placate", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Everyone started buying the new smartphone, and soon my friends ______ and bought one too.",
        "answers": [
            { "text": "went against the grain", "correct": false },
            { "text": "jumped on the bandwagon", "correct": true },
            { "text": "threw in the towel", "correct": false },
            { "text": "bit the bullet", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'This device is not compatible ____ older models of the software.'",
        "answer": ["with"]
    },
    {
        "type": "closed",
        "question": "He was a ______ worker, known for his attention to every tiny detail.",
        "answers": [
            { "text": "fastidious", "correct": true },
            { "text": "facetious", "correct": false },
            { "text": "fabulous", "correct": false },
            { "text": "facile", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The ______ reason for the new security measures is employee safety; this is our guiding ______.",
        "answers": [
            { "text": "principle / principal", "correct": false },
            { "text": "principal / principle", "correct": true },
            { "text": "principal / principals", "correct": false },
            { "text": "principle / principles", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'Don't let a minor setback ____ (COURAGE) you from pursuing your goals.'", "answer": ["discourage"] },
    {
        "type": "closed",
        "question": "The ______ of life in the city is very different from the calm of the countryside.",
        "answers": [
            { "text": "pace", "correct": true },
            { "text": "piece", "correct": false },
            { "text": "place", "correct": false },
            { "text": "path", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His argument, ______ convincing, was based on flawed data.",
        "answers": [
            { "text": "while", "correct": true },
            { "text": "despite", "correct": false },
            { "text": "therefore", "correct": false },
            { "text": "because", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'People believe him to be one of the greatest artists of our time.'",
        "answer": ["He is believed to be one of the greatest artists of our time."]
    },
    {
        "type": "closed",
        "question": "The issue of the new bypass has been a real ______ in the town for years.",
        "answers": [
            { "text": "bone of contention", "correct": true },
            { "text": "pain in the neck", "correct": false },
            { "text": "shot in the arm", "correct": false },
            { "text": "blessing in disguise", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "My colleague has to leave early, so I'm going to ______ for her during the last hour of the meeting.",
        "answers": [
            { "text": "stand up", "correct": false },
            { "text": "stand in", "correct": true },
            { "text": "stand by", "correct": false },
            { "text": "stand for", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb in the past. Original sentence: 'A professional photographer took my passport photo yesterday.'",
        "answer": ["I had my passport photo taken yesterday."]
    },
    { "type": "closed", "question": "The Eiffel Tower is the ______ symbol of Paris, recognized all over the world.", "answers": [{ "text": "quintessential", "correct": true }, { "text": "questionable", "correct": false }, { "text": "quivering", "correct": false }, { "text": "quiescent", "correct": false }] }
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