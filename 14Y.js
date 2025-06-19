const questions = [
    {
        "type": "closed",
        "question": "On no condition ______ permitted to access the server room without authorization.",
        "answers": [
            { "text": "anyone is", "correct": false },
            { "text": "is anyone", "correct": true },
            { "text": "is no one", "correct": false },
            { "text": "no one is", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Despite being an expert on the subject, she was surprisingly ______ and unwilling to share her opinions in the meeting.",
        "answers": [
            { "text": "garrulous", "correct": false },
            { "text": "reticent", "correct": true },
            { "text": "eloquent", "correct": false },
            { "text": "boastful", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They expect the company to announce its merger next week.'",
        "answer": ["The company is expected to announce its merger next week."]
    },
    {
        "type": "closed",
        "question": "The promotion was a ______; it came with a huge workload and immense pressure for only a small pay rise.",
        "answers": [
            { "text": "golden handshake", "correct": false },
            { "text": "poisoned chalice", "correct": true },
            { "text": "golden opportunity", "correct": false },
            { "text": "safe bet", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You notice a flaw in a colleague's argument during a presentation. What's the most diplomatic way to address it?",
        "answers": [
            { "text": "Your logic is completely wrong here.", "correct": false },
            { "text": "That's an interesting point, but I'm not sure I follow how you got from A to B. Could you elaborate on your reasoning?", "correct": true },
            { "text": "That makes no sense at all.", "correct": false },
            { "text": "Let me correct you on that.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'He believed his own judgment to be ____ (FALLIBLE), which ultimately led to his downfall.'",
        "answer": ["infallible"]
    },
    {
        "type": "closed",
        "question": "The government body was created to ______ offensive content, while the free press is expected to ______ corruption wherever it is found.",
        "answers": [
            { "text": "censure / sensor", "correct": false },
            { "text": "censor / censure", "correct": true },
            { "text": "censor / sensor", "correct": false },
            { "text": "censure / censure", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to play devil's advocate'?",
        "answers": [
            { "text": "To genuinely support a very unpopular opinion.", "correct": false },
            { "text": "To argue against an idea for the sake of debate, to test its strength.", "correct": true },
            { "text": "To be pessimistic and negative about everything.", "correct": false },
            { "text": "To make a deal that is not in your best interest.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a perfect passive participle. Original sentence: 'After he had been warned multiple times, he continued to ignore the safety procedures.'",
        "answer": ["Having been warned multiple times, he continued to ignore the safety procedures."]
    },
    {
        "type": "closed",
        "question": "The politician presented the new tax as a ______ that would solve all the country's economic problems.",
        "answers": [
            { "text": "panacea", "correct": true },
            { "text": "paradox", "correct": false },
            { "text": "paragon", "correct": false },
            { "text": "paradigm", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "______ you to reconsider your decision, we would be willing to offer improved terms.",
        "answers": [
            { "text": "If", "correct": false },
            { "text": "Should", "correct": false },
            { "text": "Were", "correct": true },
            { "text": "Providing", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'Nobody told me about the change of plan.'",
        "answer": ["I wasn't told about the change of plan."]
    },
    {
        "type": "closed",
        "question": "The team needs to ______ its efforts if it wants to meet the deadline.",
        "answers": [
            { "text": "redouble", "correct": true },
            { "text": "reduce", "correct": false },
            { "text": "remake", "correct": false },
            { "text": "reconsider", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The city's transport system, ______ adequate, is now struggling to cope with the growing population.",
        "answers": [
            { "text": "while", "correct": false },
            { "text": "once", "correct": true },
            { "text": "as", "correct": false },
            { "text": "since", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The company has a legal obligation to be transparent ____ its shareholders.'",
        "answer": ["with"]
    },
    {
        "type": "closed",
        "question": "The diplomat was known for his ability to ______ tense situations and bring opposing sides to an agreement.",
        "answers": [
            { "text": "defuse", "correct": true },
            { "text": "diffuse", "correct": false },
            { "text": "defy", "correct": false },
            { "text": "define", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His speech was so ______ that it left the audience confused and unsure of his actual position.",
        "answers": [
            { "text": "succinct", "correct": false },
            { "text": "lucid", "correct": false },
            { "text": "nebulous", "correct": true },
            { "text": "cogent", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The defendant's ____ (EVADE) answers made the judge suspicious.'", "answer": ["evasive"] },
    {
        "type": "closed",
        "question": "The artist tried to ______ the traditional rules of painting in favour of a more modern style.",
        "answers": [
            { "text": "eschew", "correct": true },
            { "text": "ensue", "correct": false },
            { "text": "endow", "correct": false },
            { "text": "embrace", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The new evidence completely _______ the prosecution's case against him.",
        "answers": [
            { "text": "corroborated", "correct": false },
            { "text": "bolstered", "correct": false },
            { "text": "substantiated", "correct": false },
            { "text": "demolished", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'You must complete the safety training before you can operate this machine.'",
        "answer": ["The safety training must be completed before this machine can be operated."]
    },
    {
        "type": "closed",
        "question": "His ______ behaviour towards the boss, always agreeing and fetching coffee, was quite embarrassing to watch.",
        "answers": [
            { "text": "obsequious", "correct": true },
            { "text": "obstinate", "correct": false },
            { "text": "oblivious", "correct": false },
            { "text": "objective", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The final scene of the play, ______, was the most powerful part.",
        "answers": [
            { "text": "it could be argued", "correct": false },
            { "text": "as argued", "correct": false },
            { "text": "arguably", "correct": true },
            { "text": "arguing", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'get'. Original sentence: 'I need to persuade someone to fix the leaky tap.'",
        "answer": ["I need to get the leaky tap fixed."]
    },
    { "type": "closed", "question": "The two countries have been in a state of ______ peace for years, with neither side willing to fully commit to a treaty.", "answers": [{ "text": "precarious", "correct": true }, { "text": "permanent", "correct": false }, { "text": "pervasive", "correct": false }, { "text": "peaceful", "correct": false }] }
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