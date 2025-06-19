const questions = [
    {
        "type": "closed",
        "question": "Not for a single moment ______ that his revolutionary idea might actually fail.",
        "answers": [
            { "text": "he considered", "correct": false },
            { "text": "he did consider", "correct": false },
            { "text": "did he consider", "correct": true },
            { "text": "was he considering", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Her ______ critique of the new policy, though brief, exposed all its fundamental weaknesses.",
        "answers": [
            { "text": "transient", "correct": false },
            { "text": "trenchant", "correct": true },
            { "text": "tangible", "correct": false },
            { "text": "torpid", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'We must have been being followed the whole time.'",
        "answer": ["We must have been being followed the whole time."]
    },
    {
        "type": "closed",
        "question": "He kept adding more and more unnecessary special effects to the film, essentially ______.",
        "answers": [
            { "text": "gilding the lily", "correct": true },
            { "text": "calling a spade a spade", "correct": false },
            { "text": "throwing caution to the wind", "correct": false },
            { "text": "dotting the i's and crossing the t's", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You must cancel an important dinner with a client at the last minute. What is the most professional apology?",
        "answers": [
            { "text": "Sorry, something came up and I can't make it.", "correct": false },
            { "text": "I'm deeply sorry for the last-minute cancellation, but an urgent and unavoidable matter has arisen. I was very much looking forward to our dinner and hope we can reschedule at your earliest convenience.", "correct": true },
            { "text": "I have to cancel. Let's reschedule.", "correct": false },
            { "text": "It's not my fault, but I can't come tonight.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The committee's decision was final and ____ (REVOCABLE).'",
        "answer": ["irrevocable"]
    },
    {
        "type": "closed",
        "question": "A wise leader must be ______, making careful and sensible decisions, and also understand ______ protocol when dealing with foreign dignitaries.",
        "answers": [
            { "text": "judicial / judicious", "correct": false },
            { "text": "judicious / judicial", "correct": true },
            { "text": "judicious / judicious", "correct": false },
            { "text": "judicial / judicial", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His tendency to ______ on subjects he knew little about was infuriating to the experts in the room.",
        "answers": [
            { "text": "pontificate", "correct": true },
            { "text": "ponder", "correct": false },
            { "text": "pander", "correct": false },
            { "text": "peruse", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: ''What a magnificent performance!' he exclaimed.'",
        "answer": ["He exclaimed that it was a magnificent performance.", "He exclaimed that it had been a magnificent performance."]
    },
    {
        "type": "closed",
        "question": "The room was so quiet you could hear a pin drop. The silence was almost ______.",
        "answers": [
            { "text": "deafening", "correct": true },
            { "text": "defining", "correct": false },
            { "text": "defying", "correct": false },
            { "text": "defusing", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "This room needs ______ before the guests arrive; it's a mess.",
        "answers": [
            { "text": "to clean", "correct": false },
            { "text": "cleaned", "correct": false },
            { "text": "cleaning", "correct": true },
            { "text": "to be cleaning", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using an absolute construction. Original sentence: 'After the sun had set, the air grew cold.'",
        "answer": ["The sun having set, the air grew cold."]
    },
    {
        "type": - "closed",
        "question": "The new soundproofing was designed to ______ the noise from the nearby motorway.",
        "answers": [
            { "text": "accentuate", "correct": false },
            { "text": "attenuate", "correct": true },
            { "text": "articulate", "correct": false },
            { "text": "amplify", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's a ______: we can either accept the deal and lose money, or reject it and lose our reputation.",
        "answers": [
            { "text": "Pyrrhic victory", "correct": false },
            { "text": "Hobson's choice", "correct": true },
            { "text": "fait accompli", "correct": false },
            { "text": "cause célèbre", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'His speech was notable for its preoccupation ____ minor historical details.'",
        "answer": ["with"]
    },
    {
        "type": "closed",
        "question": "He was a gifted orator and could ______ for hours on his favourite subjects.",
        "answers": [
            { "text": "get off", "correct": false },
            { "text": "hold forth", "correct": true },
            { "text": "put up", "correct": false },
            { "text": "let on", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The ceasefire offered a brief ______ from the relentless fighting.",
        "answers": [
            { "text": "respite", "correct": true },
            { "text": "reprisal", "correct": false },
            { "text": "retort", "correct": false },
            { "text": "remnant", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The politician's career was ruined by a single thoughtless ____ (DISCREET).'", "answer": ["indiscretion"] },
    {
        "type": "closed",
        "question": "His explanation was a ______ attempt to avoid taking responsibility for his mistake.",
        "answers": [
            { "text": "transparent", "correct": false },
            { "text": "veiled", "correct": true },
            { "text": "valid", "correct": false },
            { "text": "virtuous", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The initial excitement for the new social media platform eventually ______ and it was shut down.",
        "answers": [
            { "text": "grew up", "correct": false },
            { "text": "petered out", "correct": true },
            { "text": "ran down", "correct": false },
            { "text": "got by", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'He was seen to enter the restricted area.'",
        "answer": ["He was seen entering the restricted area."]
    },
    {
        "type": "closed",
        "question": "She's so ______; she gave her lottery winnings to charity.",
        "answers": [
            { "text": "altruistic", "correct": true },
            { "text": "avaricious", "correct": false },
            { "text": "austere", "correct": false },
            { "text": "arrogant", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I simply won't have you ______ to your mother in that disrespectful tone.",
        "answers": [
            { "text": "to speak", "correct": false },
            { "text": "speak", "correct": false },
            { "text": "speaking", "correct": true },
            { "text": "spoke", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'have'. Original sentence: 'The director told an editor to shorten the final scene.'",
        "answer": ["The director had the final scene shortened."]
    },
    { "type": "closed", "question": "The company's success can be explained, ______ as it has invested heavily in research and development.", "answers": [{ "text": "whereas", "correct": false }, { "text": "nonetheless", "correct": false }, { "text": "inasmuch", "correct": true }, { "text": "otherwise", "correct": false }] }
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