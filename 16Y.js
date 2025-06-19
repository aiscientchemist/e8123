const questions = [
    {
        "type": "closed",
        "question": "Seldom has a newcomer ______ such an immediate and profound impact on the industry.",
        "answers": [
            { "text": "done", "correct": false },
            { "text": "created", "correct": false },
            { "text": "made", "correct": true },
            { "text": "had", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "While the scenery was breathtaking, the plot of the film was utterly ______ and lacked any originality.",
        "answers": [
            { "text": "prosaic", "correct": true },
            { "text": "poetic", "correct": false },
            { "text": "profound", "correct": false },
            { "text": "pedantic", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They ought to have warned us about the potential risks.'",
        "answer": ["We ought to have been warned about the potential risks."]
    },
    {
        "type": "closed",
        "question": "By the time the staff were consulted, the decision was already a ______; it was too late to change anything.",
        "answers": [
            { "text": "cause célèbre", "correct": false },
            { "text": "fait accompli", "correct": true },
            { "text": "bête noire", "correct": false },
            { "text": "tour de force", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You have made a significant error at work. What is the most professional way to own up to it?",
        "answers": [
            { "text": "It wasn't entirely my fault, the instructions were unclear.", "correct": false },
            { "text": "I apologize, that was my oversight. I've already identified the cause and am taking steps to rectify it immediately.", "correct": true },
            { "text": "It's not a big deal, we can fix it later.", "correct": false },
            { "text": "Who can I blame for this?", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His actions were considered ____ (NOBLE) and unworthy of a true leader.'",
        "answer": ["ignoble"]
    },
    {
        "type": "closed",
        "question": "The witness didn't name the suspect, but did ______ to seeing a tattoo; meanwhile, the suspect managed to ______ the police for weeks.",
        "answers": [
            { "text": "elude / allude", "correct": false },
            { "text": "allude / elude", "correct": true },
            { "text": "allude / delude", "correct": false },
            { "text": "elude / delude", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It is of the utmost importance that the security team ______ fully briefed on the new procedures.",
        "answers": [
            { "text": "is", "correct": false },
            { "text": "be", "correct": true },
            { "text": "are", "correct": false },
            { "text": "to be", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: ''Why don't I drive you to the airport?' she said.'",
        "answer": ["She offered to drive me to the airport."]
    },
    {
        "type": "closed",
        "question": "It was ______ of him to forgive his rival, an act that won him widespread respect.",
        "answers": [
            { "text": "meticulous", "correct": false },
            { "text": "magnanimous", "correct": true },
            { "text": "malicious", "correct": false },
            { "text": "mercenary", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The company's long-term success ______ on its ability to innovate and adapt.",
        "answers": [
            { "text": "hinges", "correct": true },
            { "text": "hangs", "correct": false },
            { "text": "holds", "correct": false },
            { "text": "hovers", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'Be it...'. Original sentence: 'I am ready to help, whether it's a simple task or a complex project.'",
        "answer": ["Be it a simple task or a complex project, I am ready to help."]
    },
    {
        "type": "closed",
        "question": "The politician's attempt to ______ the complex issue only confused the public further.",
        "answers": [
            { "text": "elucidate", "correct": false },
            { "text": "obfuscate", "correct": true },
            { "text": "articulate", "correct": false },
            { "text": "explicate", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to burn one's bridges'?",
        "answers": [
            { "text": "To start something new and exciting.", "correct": false },
            { "text": "To act in a way that destroys any possibility of returning to a previous situation.", "correct": true },
            { "text": "To take a huge risk for a great reward.", "correct": false },
            { "text": "To end a relationship on good terms.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The team's success is contingent ____ securing the necessary funding.'",
        "answer": ["on"]
    },
    {
        "type": "closed",
        "question": "The general's ______ confidence on the eve of battle worried his more experienced officers.",
        "answers": [
            { "text": "genuine", "correct": false },
            { "text": "jejune", "correct": true },
            { "text": "justified", "correct": false },
            { "text": "jovial", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ behaviour at formal events was a source of constant embarrassment for his family.",
        "answers": [
            { "text": "urbane", "correct": false },
            { "text": "boorish", "correct": true },
            { "text": "composed", "correct": false },
            { "text": "sophisticated", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'Her ____ (FATIGUE) energy and optimism were an inspiration to the whole team.'", "answer": ["indefatigable"] },
    {
        "type": "closed",
        "question": "Far from being a sign of progress, the new policy was seen as a ______ step.",
        "answers": [
            { "text": "retrograde", "correct": true },
            { "text": "forward", "correct": false },
            { "text": "proactive", "correct": false },
            { "text": "progressive", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The agreement was reached, ______ after months of difficult negotiations.",
        "answers": [
            { "text": "albeit", "correct": true },
            { "text": "because", "correct": false },
            { "text": "therefore", "correct": false },
            { "text": "furthermore", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'I don't remember them ever giving me the instructions.'",
        "answer": ["I don't remember ever being given the instructions."]
    },
    {
        "type": "closed",
        "question": "The ______ of the group were all talented, but the lead singer was a true virtuoso.",
        "answers": [
            { "text": "rank and file", "correct": true },
            { "text": "top brass", "correct": false },
            { "text": "high-flyers", "correct": false },
            { "text": "movers and shakers", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The company needs a new leader to ______ it through these turbulent economic times.",
        "answers": [
            { "text": "stray", "correct": false },
            { "text": "steer", "correct": true },
            { "text": "stroll", "correct": false },
            { "text": "strain", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb. Original sentence: 'I need to tell my assistant to schedule the meeting.'",
        "answer": ["I need to get my assistant to schedule the meeting."]
    },
    { "type": "closed", "question": "The first clear sunny day after a week of rain was a(n) ______ sign for the start of their holiday.", "answers": [{ "text": "ominous", "correct": false }, { "text": "auspicious", "correct": true }, { "text": "arbitrary", "correct": false }, { "text": "ambiguous", "correct": false }] }
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