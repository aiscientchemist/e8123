const questions = [
    {
        "type": "closed",
        "question": "Never before in our history ______ faced with such a complex and multifaceted challenge.",
        "answers": [
            { "text": "we have been", "correct": false },
            { "text": "have we been", "correct": true },
            { "text": "we were", "correct": false },
            { "text": "we had been", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The book was a ______ read, full of complex characters and a plot that twisted and turned unexpectedly.",
        "answers": [
            { "text": "compelling", "correct": true },
            { "text": "compendious", "correct": false },
            { "text": "compensatory", "correct": false },
            { "text": "complaisant", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'It is your duty to inform the authorities.'",
        "answer": ["The authorities must be informed.", "It is your duty for the authorities to be informed."]
    },
    {
        "type": "closed",
        "question": "He refused to give a straight answer, ______ behind vague legal jargon and corporate-speak.",
        "answers": [
            { "text": "taking cover", "correct": false },
            { "text": "hiding out", "correct": false },
            { "text": "taking refuge", "correct": true },
            { "text": "falling back", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A team member is consistently dominating conversations in meetings, not letting others speak. How do you address this?",
        "answers": [
            { "text": "Can you please be quiet and let someone else talk?", "correct": false },
            { "text": "Those are great points, John. To ensure we hear all perspectives, I'd like to open the floor to others now. Sarah, what are your thoughts on this?", "correct": true },
            { "text": "You talk too much.", "correct": false },
            { "text": "We've heard enough from you.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The dictator's ____ (TYRANNY) rule lasted for several decades.'",
        "answer": ["tyrannical"]
    },
    {
        "type": "closed",
        "question": "He has a ______ for getting into difficult situations, but also a remarkable talent for getting out of them.",
        "answers": [
            { "text": "knack", "correct": true },
            { "text": "knock", "correct": false },
            { "text": "niche", "correct": false },
            { "text": "need", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It is advisable that all new employees ______ themselves with the company's code of ethics.",
        "answers": [
            { "text": "familiarize", "correct": true },
            { "text": "familiarizes", "correct": false },
            { "text": "are familiarizing", "correct": false },
            { "text": "to familiarize", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: 'I'm so sorry I'm late,' she said.",
        "answer": ["She apologized for being late."]
    },
    {
        "type": "closed",
        "question": "The old mansion, long abandoned, had an air of ______ and decay.",
        "answers": [
            { "text": "decrepitude", "correct": true },
            { "text": "dedication", "correct": false },
            { "text": "decoration", "correct": false },
            { "text": "declamation", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The ______ of the argument is that individual freedom should not come at the expense of public safety.",
        "answers": [
            { "text": "crisis", "correct": false },
            { "text": "crest", "correct": false },
            { "text": "crux", "correct": true },
            { "text": "crutch", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using an inversion. Original sentence: 'I would only help him if he apologized first.'",
        "answer": ["Only if he apologized first would I help him."]
    },
    {
        "type": "closed",
        "question": "The author's writing style is ______; it is so concise that not a single word is wasted.",
        "answers": [
            { "text": "laudatory", "correct": false },
            { "text": "laconic", "correct": true },
            { "text": "loquacious", "correct": false },
            { "text": "lethargic", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to give someone short shrift'?",
        "answers": [
            { "text": "To give someone a small gift.", "correct": false },
            { "text": "To treat someone's concerns or opinions with little sympathy or attention.", "correct": true },
            { "text": "To give someone a quick summary.", "correct": false },
            { "text": "To praise someone briefly.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The company is now operating in compliance ____ all international regulations.'",
        "answer": ["with"]
    },
    {
        "type": "closed",
        "question": "His ______ to detail is legendary; he checks every comma and every full stop.",
        "answers": [
            { "text": "attention", "correct": true },
            { "text": "intention", "correct": false },
            { "text": "attraction", "correct": false },
            { "text": "attendance", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His brief, ______ comment cut to the heart of the matter and ended the long, pointless debate.",
        "answers": [
            { "text": "poignant", "correct": false },
            { "text": "pithy", "correct": true },
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The politician's speech was full of ____ (PLATITUDE) and offered no new ideas.'", "answer": ["platitudes"] },
    {
        "type": "closed",
        "question": "I would sooner we ______ this discussion until we have all the facts.",
        "answers": [
            { "text": "postpone", "correct": false },
            { "text": "postponed", "correct": true },
            { "text": "are postponing", "correct": false },
            { "text": "will postpone", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He has a ______ for the dramatic, often exaggerating stories for effect.",
        "answers": [
            { "text": "penchant", "correct": true },
            { "text": "pendant", "correct": false },
            { "text": "penalty", "correct": false },
            { "text": "pennant", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They must have sent the package to the wrong address.'",
        "answer": ["The package must have been sent to the wrong address."]
    },
    {
        "type": "closed",
        "question": "After the public outcry, the company had no choice but to ______ its controversial advertisement.",
        "answers": [
            { "text": "retract", "correct": true },
            { "text": "retreat", "correct": false },
            { "text": "return", "correct": false },
            { "text": "retrace", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's no use ______ over spilt milk; we need to focus on finding a solution.",
        "answers": [
            { "text": "to cry", "correct": false },
            { "text": "crying", "correct": true },
            { "text": "cry", "correct": false },
            { "text": "about crying", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'have'. Original sentence: 'I pay a gardener to mow the lawn every two weeks.'",
        "answer": ["I have the lawn mowed every two weeks."]
    },
    { "type": "closed", "question": "The two theories are ______, as they start from completely opposite assumptions.", "answers": [{ "text": "irreconcilable", "correct": true }, { "text": "irrefutable", "correct": false }, { "text": "irreplaceable", "correct": false }, { "text": "irrespective", "correct": false }] }
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