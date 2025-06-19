const questions = [
    {
        "type": "closed",
        "question": "Not until I read the final chapter ______ understand the author's true message.",
        "answers": [
            { "text": "I did", "correct": false },
            { "text": "did I", "correct": true },
            { "text": "I have", "correct": false },
            { "text": "I could", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "When asked for her opinion on the controversial plan, she just gave a noncommittal shrug. What can be inferred from her reaction?",
        "answers": [
            { "text": "She strongly supports the plan.", "correct": false },
            { "text": "She is angry about the plan.", "correct": false },
            { "text": "She is refusing to express a clear opinion or decision.", "correct": true },
            { "text": "She doesn't understand the question.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence to add emphasis, starting with 'What...'. Original sentence: 'I need a new laptop for my studies.'",
        "answer": ["What I need for my studies is a new laptop."]
    },
    {
        "type": "closed",
        "question": "I need to ______ my French before I go to Paris next month.",
        "answers": [
            { "text": "brush up on", "correct": true },
            { "text": "come up with", "correct": false },
            { "text": "do away with", "correct": false },
            { "text": "get away with", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Your friend confidently states a fact that you know is incorrect. How do you correct them politely?",
        "answers": [
            { "text": "You're completely wrong about that.", "correct": false },
            { "text": "That's not true at all.", "correct": false },
            { "text": "Are you sure? I thought it was actually...", "correct": true },
            { "text": "Listen, that's a stupid thing to say.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His ____ (PERCEIVE) of the situation was completely different from mine.'",
        "answer": ["perception"]
    },
    {
        "type": "closed",
        "question": "It's almost midnight. It's high time you ______ to bed.",
        "answers": [
            { "text": "go", "correct": false },
            { "text": "should go", "correct": false },
            { "text": "went", "correct": true },
            { "text": "are going", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to bite the bullet'?",
        "answers": [
            { "text": "To eat something very quickly.", "correct": false },
            { "text": "To get injured in an accident.", "correct": false },
            { "text": "To finally make a decision to do something difficult or unpleasant.", "correct": true },
            { "text": "To stop talking and listen.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the suggestion using reported speech: She said, 'Let's order a pizza.'",
        "answer": ["She suggested ordering a pizza.", "She suggested that they should order a pizza."]
    },
    {
        "type": "closed",
        "question": "A person should always act according to their moral ______.",
        "answers": [
            { "text": "principals", "correct": false },
            { "text": "principles", "correct": true },
            { "text": "principal", "correct": false },
            { "text": "principle", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "By the time he retires, he ______ for this company for over forty years.",
        "answers": [
            { "text": "will be working", "correct": false },
            { "text": "will work", "correct": false },
            { "text": "is going to work", "correct": false },
            { "text": "will have been working", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice, starting with 'The politician...'. Original sentence: 'Journalists allege that the politician accepted a bribe.'",
        "answer": ["The politician is alleged to have accepted a bribe."]
    },
    {
        "type": "closed",
        "question": "The ______ majority of people agree that climate change is a serious issue.",
        "answers": [
            { "text": "large", "correct": false },
            { "text": "vast", "correct": true },
            { "text": "huge number", "correct": false },
            { "text": "wide", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His plan seems good on paper, but I ______ about its chances of success in the real world.",
        "answers": [
            { "text": "am very certain", "correct": false },
            { "text": "have my doubts", "correct": true },
            { "text": "am sure", "correct": false },
            { "text": "have no question", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'I am deeply indebted ____ you for all your support.'",
        "answer": ["to"]
    },
    {
        "type": "closed",
        "question": "He's a brilliant programmer. ________, his communication skills are quite poor.",
        "answers": [
            { "text": "Therefore", "correct": false },
            { "text": "In addition", "correct": false },
            { "text": "Having said that", "correct": true },
            { "text": "As a result", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I regret not studying harder for the exam. This means:",
        "answers": [
            { "text": "I wish I had studied harder for the exam.", "correct": true },
            { "text": "I wish I studied harder for the exam.", "correct": false },
            { "text": "I wish I would study harder for the exam.", "correct": false },
            { "text": "I wish I could study harder for the exam.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using 'so... as to...'. Original sentence: 'He spoke so quietly that nobody could hear him.'",
        "answer": ["He spoke so quietly as to be inaudible.", "He spoke so quietly as to not be heard."]
    },
    {
        "type": "closed",
        "question": "The instructions for the device were very _______, which led to a lot of confusion.",
        "answers": [
            { "text": "apparent", "correct": false },
            { "text": "ambiguous", "correct": true },
            { "text": "transparent", "correct": false },
            { "text": "explicit", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Our plans to go camping ______ because of the terrible weather forecast.",
        "answers": [
            { "text": "put off", "correct": false },
            { "text": "fell through", "correct": true },
            { "text": "called off", "correct": false },
            { "text": "broke down", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The politician's decision remains highly ____ (CONTROVERSY) to this day.'",
        "answer": ["controversial"]
    },
    {
        "type": "closed",
        "question": "I will lend you my notes ________ you give them back before the test.",
        "answers": [
            { "text": "as long", "correct": false },
            { "text": "in case", "correct": false },
            { "text": "on condition that", "correct": true },
            { "text": "unless", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Which of these words describes something absolutely necessary and essential?",
        "answers": [
            { "text": "convenient", "correct": false },
            { "text": "indispensable", "correct": true },
            { "text": "optional", "correct": false },
            { "text": "adequate", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using 'get'. Original sentence: 'I need to tell someone to fix my bicycle.'",
        "answer": ["I need to get my bicycle fixed."]
    },
    {
        "type": "closed",
        "question": "The school introduced a new timetable ______ students have more flexibility.",
        "answers": [
            { "text": "which", "correct": false },
            { "text": "that", "correct": false },
            { "text": "whereby", "correct": true },
            { "text": "whose", "correct": false }
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