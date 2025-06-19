const questions = [
    {
        "type": "closed",
        "question": "To such an extent ______ that the company was forced into bankruptcy.",
        "answers": [
            { "text": "the losses grew", "correct": false },
            { "text": "grew the losses", "correct": false },
            { "text": "did the losses grow", "correct": true },
            { "text": "the losses did grow", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ display of piety, constantly talking about his own morality, was seen by many as hypocritical.",
        "answers": [
            { "text": "sincere", "correct": false },
            { "text": "sanctimonious", "correct": true },
            { "text": "sacred", "correct": false },
            { "text": "secular", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They should have given the employees more time to adapt.'",
        "answer": ["The employees should have been given more time to adapt."]
    },
    {
        "type": "closed",
        "question": "He's not really an impartial observer; everyone knows he has ______ because the new policy directly affects his department.",
        "answers": [
            { "text": "a bee in his bonnet", "correct": false },
            { "text": "an axe to grind", "correct": true },
            { "text": "a chip on his shoulder", "correct": false },
            { "text": "a trick up his sleeve", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A colleague is very sensitive and takes any feedback personally. How do you suggest a change to their work?",
        "answers": [
            { "text": "You need to change this, it's wrong.", "correct": false },
            { "text": "This is a great start. I was thinking, what if we tried exploring this alternative approach for the next section? It might make the final result even stronger.", "correct": true },
            { "text": "The way you've done this isn't good enough.", "correct": false },
            { "text": "I'm just going to do it myself.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The problems seemed ____ (SOLVE), but she refused to give up.'",
        "answer": ["insoluble"]
    },
    {
        "type": "closed",
        "question": "The lecture was so ______ that several students in the back row fell asleep.",
        "answers": [
            { "text": "sophisticated", "correct": false },
            { "text": "soporific", "correct": true },
            { "text": "sporadic", "correct": false },
            { "text": "specific", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It is vital that all personnel ______ with the new safety protocols without exception.",
        "answers": [
            { "text": "complies", "correct": false },
            { "text": "comply", "correct": true },
            { "text": "are complying", "correct": false },
            { "text": "to comply", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: 'You had better see a doctor about that cough,' she warned.",
        "answer": ["She warned me that I had better see a doctor about that cough.", "She advised me to see a doctor about that cough."]
    },
    {
        "type": "closed",
        "question": "The general was a true ______, demanding absolute obedience and ruling his troops with an iron fist.",
        "answers": [
            { "text": "maverick", "correct": false },
            { "text": "martinet", "correct": true },
            { "text": "mentor", "correct": false },
            { "text": "mediator", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The two sides have agreed to ______ their differences and work towards a common goal.",
        "answers": [
            { "text": "set up", "correct": false },
            { "text": "set aside", "correct": true },
            { "text": "set off", "correct": false },
            { "text": "set back", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'I want someone to check these figures very carefully.'",
        "answer": ["I want these figures to be checked very carefully."]
    },
    {
        "type": "closed",
        "question": "The politician tried to ______ when asked a direct question about his involvement, talking instead about the economy.",
        "answers": [
            { "text": "provoke", "correct": false },
            { "text": "prevaricate", "correct": true },
            { "text": "precipitate", "correct": false },
            { "text": "prescribe", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to take umbrage'?",
        "answers": [
            { "text": "To take shelter from the rain.", "correct": false },
            { "text": "To take offence or become annoyed by something said or done.", "correct": true },
            { "text": "To accept a difficult task.", "correct": false },
            { "text": "To take a guess at something.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'He is not amenable ____ any form of compromise.'",
        "answer": ["to"]
    },
    {
        "type": "closed",
        "question": "The new evidence completely ______ the defendant, proving he was not at the scene of the crime.",
        "answers": [
            { "text": "exacerbated", "correct": false },
            { "text": "exonerated", "correct": true },
            { "text": "exaggerated", "correct": false },
            { "text": "exiled", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His theory about the moon being made of cheese simply does not ______. There is no evidence for it.",
        "answers": [
            { "text": "hold water", "correct": true },
            { "text": "make waves", "correct": false },
            { "text": "break new ground", "correct": false },
            { "text": "cut corners", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The company's _____ (REPUTE) practices led to a major investigation.'", "answer": ["disreputable"] },
    {
        "type": "closed",
        "question": "His public display of grief was seen by some as an ______ rather than a genuine expression of sadness.",
        "answers": [
            { "text": "affection", "correct": false },
            { "text": "affectation", "correct": true },
            { "text": "affliction", "correct": false },
            { "text": "affirmation", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "For him, the very idea of censorship was ______ to the principles of a free society.",
        "answers": [
            { "text": "anathema", "correct": true },
            { "text": "a panacea", "correct": false },
            { "text": "an anomaly", "correct": false },
            { "text": "an acronym", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'I remember someone taking my coat.'",
        "answer": ["I remember my coat being taken."]
    },
    {
        "type": "closed",
        "question": "______ he might, he could not lift the heavy stone.",
        "answers": [
            { "text": "As try", "correct": false },
            { "text": "Try as", "correct": true },
            { "text": "Trying as", "correct": false },
            { "text": "For trying", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's time to ______ your responsibilities instead of blaming others for your problems.",
        "answers": [
            { "text": "face up to", "correct": true },
            { "text": "come up with", "correct": false },
            { "text": "get round to", "correct": false },
            { "text": "look down on", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'have'. Original sentence: 'A professional landscaper is designing our garden next month.'",
        "answer": ["We are having our garden designed by a professional landscaper next month."]
    },
    { "type": "closed", "question": "The ______ of the new policy were felt almost immediately, with small businesses struggling to comply.", "answers": [{ "text": "reverberations", "correct": true }, { "text": "revelations", "correct": false }, { "text": "reversions", "correct": false }, { "text": "recollections", "correct": false }] }
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