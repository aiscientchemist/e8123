const questions = [
    {
        "type": "closed",
        "question": "So difficult ______ that most students couldn't finish it in time.",
        "answers": [
            { "text": "the exam was", "correct": false },
            { "text": "was the exam", "correct": true },
            { "text": "it was the exam", "correct": false },
            { "text": "has the exam been", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The detective tried to ______ a confession from the suspect about his ______ activities.",
        "answers": [
            { "text": "illicit / elicit", "correct": false },
            { "text": "elicit / illicit", "correct": true },
            { "text": "elicit / explicit", "correct": false },
            { "text": "illicit / implicit", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'Someone must have left the window open during the storm.'",
        "answer": ["The window must have been left open during the storm."]
    },
    {
        "type": "closed",
        "question": "After losing her job, she felt she was at a ______; she didn't know which career path to choose next.",
        "answers": [
            { "text": "dead end", "correct": false },
            { "text": "crossroads", "correct": true },
            { "text": "roundabout", "correct": false },
            { "text": "junction", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You disagree with your teacher's point in a class discussion. What is the most respectful way to express your view?",
        "answers": [
            { "text": "You're wrong about that.", "correct": false },
            { "text": "I see it differently, actually. I believe that...", "correct": true },
            { "text": "That's not what the book says.", "correct": false },
            { "text": "No, that can't be right.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His complete ____ (REGARD) for the rules is what got him into trouble.'",
        "answer": ["disregard"]
    },
    {
        "type": "closed",
        "question": "The board recommends that the new policy ______ implemented immediately.",
        "answers": [
            { "text": "is", "correct": false },
            { "text": "to be", "correct": false },
            { "text": "be", "correct": true },
            { "text": "being", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The new AI software is now _______; it can be found on almost every computer and smartphone.",
        "answers": [
            { "text": "ubiquitous", "correct": true },
            { "text": "unique", "correct": false },
            { "text": "optional", "correct": false },
            { "text": "obscure", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a perfect participle. Original sentence: 'After he had checked the data twice, he submitted the report.'",
        "answer": ["Having checked the data twice, he submitted the report."]
    },
    {
        "type": "closed",
        "question": "The risks ______ in this venture are too great for us to proceed without caution.",
        "answers": [
            { "text": "inherent", "correct": true },
            { "text": "inherited", "correct": false },
            { "text": "inserted", "correct": false },
            { "text": "inhabited", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "If you are to ______ in this field, you must be prepared to work long hours.",
        "answers": [
            { "text": "succeed", "correct": true },
            { "text": "be succeeding", "correct": false },
            { "text": "have succeeded", "correct": false },
            { "text": "will succeed", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'Rarely...'. Original sentence: 'I have rarely seen such a talented performer.'",
        "answer": ["Rarely have I seen such a talented performer."]
    },
    {
        "type": "closed",
        "question": "I would rather you ______ that story to anyone else; it was supposed to be a secret.",
        "answers": [
            { "text": "don't tell", "correct": false },
            { "text": "didn't tell", "correct": false },
            { "text": "hadn't told", "correct": true },
            { "text": "wouldn't tell", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to go against the grain'?",
        "answers": [
            { "text": "To do something in the opposite way to what is usual or expected.", "correct": true },
            { "text": "To work with natural materials like wood.", "correct": false },
            { "text": "To follow a popular trend.", "correct": false },
            { "text": "To be very picky about food.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'His skills are not commensurate ____ the salary he is demanding.'",
        "answer": ["with"]
    },
    {
        "type": "closed",
        "question": "It took him a long time to ______ the fact that he had lost.",
        "answers": [
            { "text": "come to terms with", "correct": true },
            { "text": "get round to", "correct": false },
            { "text": "fall back on", "correct": false },
            { "text": "do away with", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The author's latest novel is a ______ departure from her usual style.",
        "answers": [
            { "text": "considerable", "correct": false },
            { "text": "considering", "correct": false },
            { "text": "considerate", "correct": false },
            { "text": "marked", "correct": true }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The mayor's ____ (JUSTIFY) for the new tax was met with public anger.'", "answer": ["justification"] },
    {
        "type": "closed",
        "question": "She spoke quietly for fear of ______ the baby.",
        "answers": [
            { "text": "waking", "correct": true },
            { "text": "to wake", "correct": false },
            { "text": "not to wake", "correct": false },
            { "text": "wake", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The witness was unable to provide a ______ description of the suspect.",
        "answers": [
            { "text": "definitive", "correct": true },
            { "text": "defined", "correct": false },
            { "text": "definite", "correct": false },
            { "text": "defining", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the passive. Original sentence: 'We all know that he is a reliable person.'",
        "answer": ["He is known to be a reliable person."]
    },
    {
        "type": "closed",
        "question": "A(n) ______ of the new policy is that it may increase unemployment.",
        "answers": [
            { "text": "downside", "correct": true },
            { "text": "outcome", "correct": false },
            { "text": "outline", "correct": false },
            { "text": "overview", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The company decided to ______ its operations to Asia to reduce costs.",
        "answers": [
            { "text": "outsource", "correct": true },
            { "text": "outweigh", "correct": false },
            { "text": "outsmart", "correct": false },
            { "text": "outlast", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb. Original sentence: 'I need to ask a technician to install the new software.'",
        "answer": ["I need to have the new software installed.", "I need to get the new software installed."]
    },
    {
        "type": "closed",
        "question": "He arrived at the station, ______ he discovered the train had just left.",
        "answers": [
            { "text": "wherewith", "correct": false },
            { "text": "whereupon", "correct": true },
            { "text": "whereby", "correct": false },
            { "text": "whereas", "correct": false }
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