const questions = [
    {
        "type": "closed",
        "question": "So great ______ that the entire schedule had to be rearranged.",
        "answers": [
            { "text": "the disruption was", "correct": false },
            { "text": "did the disruption be", "correct": false },
            { "text": "was the disruption", "correct": true },
            { "text": "has the disruption been", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ account of his adventures was entertaining, but nobody believed a word of it.",
        "answers": [
            { "text": "factual", "correct": false },
            { "text": "mendacious", "correct": true },
            { "text": "verifiable", "correct": false },
            { "text": "sincere", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'You need to water these plants twice a week.'",
        "answer": ["These plants need to be watered twice a week.", "These plants need watering twice a week."]
    },
    {
        "type": "closed",
        "question": "When the company announced sudden redundancies, the employees were completely ______.",
        "answers": [
            { "text": "left in the dark", "correct": false },
            { "text": "left in the lurch", "correct": true },
            { "text": "left to their own devices", "correct": false },
            { "text": "left on the shelf", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A friend is over-apologizing for a very minor mistake. How do you graciously reassure them?",
        "answers": [
            { "text": "Finally, you admit it.", "correct": false },
            { "text": "Please, don't worry about it in the slightest. It's honestly not a big deal at all.", "correct": true },
            { "text": "Okay, I forgive you.", "correct": false },
            { "text": "You should be more careful next time.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The old fortress was considered ____ (PREGNABLE) due to its high walls and strategic location.'",
        "answer": ["impregnable"]
    },
    {
        "type": "closed",
        "question": "The ______ arrival of the ______ scientist was announced at the conference.",
        "answers": [
            { "text": "immanent / eminent", "correct": false },
            { "text": "imminent / eminent", "correct": true },
            { "text": "eminent / imminent", "correct": false },
            { "text": "immanent / imminent", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The rules demand that every participant ______ an equal opportunity to speak.",
        "answers": [
            { "text": "is given", "correct": false },
            { "text": "be given", "correct": true },
            { "text": "has given", "correct": false },
            { "text": "to be given", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: ''You really must try this cake!' she insisted.'",
        "answer": ["She insisted that I (must) try that cake."]
    },
    {
        "type": "closed",
        "question": "His ______ writing style, using far more words than necessary, made his reports difficult to read.",
        "answers": [
            { "text": "concise", "correct": false },
            { "text": "verbose", "correct": true },
            { "text": "succinct", "correct": false },
            { "text": "terse", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The company needs to ______ its image if it wants to attract younger customers.",
        "answers": [
            { "text": "rehash", "correct": false },
            { "text": "revamp", "correct": true },
            { "text": "revoke", "correct": false },
            { "text": "rebuke", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They saw the thief climb over the wall.'",
        "answer": ["The thief was seen to climb over the wall.", "The thief was seen climbing over the wall."]
    },
    {
        "type": "closed",
        "question": "The film was praised for its originality and its refusal to rely on tired ______.",
        "answers": [
            { "text": "trophies", "correct": false },
            { "text": "tropes", "correct": true },
            { "text": "troupes", "correct": false },
            { "text": "trolls", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to cut the Gordian knot'?",
        "answers": [
            { "text": "To give up on a difficult problem.", "correct": false },
            { "text": "To solve a complex problem in a decisive and radical way.", "correct": true },
            { "text": "To make a problem even more complicated.", "correct": false },
            { "text": "To tie something very securely.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'His dedication to his craft is worthy ____ the highest praise.'",
        "answer": ["of"]
    },
    {
        "type": "closed",
        "question": "The government's response to the crisis was widely seen as ______ and insufficient.",
        "answers": [
            { "text": "half-hearted", "correct": true },
            { "text": "wholehearted", "correct": false },
            { "text": "light-hearted", "correct": false },
            { "text": "heavy-hearted", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The two eye-witness accounts of the event were so different that they were impossible to ______.",
        "answers": [
            { "text": "recognize", "correct": false },
            { "text": "reconcile", "correct": true },
            { "text": "recommend", "correct": false },
            { "text": "recollect", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'His ____ (THINK) comments during the serious discussion were not appreciated.'", "answer": ["thoughtless"] },
    {
        "type": "closed",
        "question": "His long, rambling speech was full of ______ that had little to do with the main topic.",
        "answers": [
            { "text": "aggressions", "correct": false },
            { "text": "digressions", "correct": true },
            { "text": "progressions", "correct": false },
            { "text": "regressions", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The ______ of the group all followed the charismatic leader without question.",
        "answers": [
            { "text": "disciples", "correct": true },
            { "text": "disciplines", "correct": false },
            { "text": "dissidents", "correct": false },
            { "text": "distractions", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'You are to leave the premises immediately.'",
        "answer": ["The premises are to be left immediately."]
    },
    {
        "type": "closed",
        "question": "His leadership style was more ______ than collaborative, often ignoring the opinions of his team.",
        "answers": [
            { "text": "autocratic", "correct": true },
            { "text": "aristocratic", "correct": false },
            { "text": "automatic", "correct": false },
            { "text": "artistic", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's difficult to ______ a living as an artist, but she is determined to try.",
        "answers": [
            { "text": "do", "correct": false },
            { "text": "eke out", "correct": true },
            { "text": "make up", "correct": false },
            { "text": "get by", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb. Original sentence: 'I'll ask a tailor to alter this suit for me.'",
        "answer": ["I'll have this suit altered.", "I'll get this suit altered."]
    },
    { "type": "closed", "question": "The discovery of the ancient tomb was a ______ find for the archaeologists, who had been searching for years.", "answers": [{ "text": "serendipitous", "correct": true }, { "text": "superfluous", "correct": false }, { "text": "surreptitious", "correct": false }, { "text": "suspicious", "correct": false }] }
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