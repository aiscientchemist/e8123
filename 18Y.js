const questions = [
    {
        "type": "closed",
        "question": "At no point ______ aware that his every move was being monitored.",
        "answers": [
            { "text": "he was", "correct": false },
            { "text": "he became", "correct": false },
            { "text": "was he", "correct": true },
            { "text": "did he", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The ______ of his speech was lost amidst a flurry of unnecessary jargon and technical terms.",
        "answers": [
            { "text": "gist", "correct": true },
            { "text": "ghost", "correct": false },
            { "text": "jest", "correct": false },
            { "text": "gusto", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'I don't appreciate you questioning my decisions in public.'",
        "answer": ["I don't appreciate my decisions being questioned in public."]
    },
    {
        "type": "closed",
        "question": "The manager's ______ praise for the new employee seemed insincere and was seen as an attempt to motivate him through flattery.",
        "answers": [
            { "text": "effusive", "correct": true },
            { "text": "effective", "correct": false },
            { "text": "evasive", "correct": false },
            { "text": "elusive", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You strongly disagree with a decision made by a group you are part of. What's a diplomatic way to voice your dissent?",
        "answers": [
            { "text": "This is the wrong decision and I won't be a part of it.", "correct": false },
            { "text": "I understand the reasoning behind this decision, but I have some serious reservations and would like to propose an alternative perspective.", "correct": true },
            { "text": "You're all making a huge mistake.", "correct": false },
            { "text": "Fine, do whatever you want.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The politician was accused of ____ (FEAR) to incite unrest.'",
        "answer": ["fearmongering"]
    },
    {
        "type": "closed",
        "question": "His ______ arguments, though complex, were so well-structured that they convinced everyone.",
        "answers": [
            { "text": "torturous", "correct": false },
            { "text": "tortuous", "correct": true },
            { "text": "torpid", "correct": false },
            { "text": "turbid", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to send someone to Coventry'?",
        "answers": [
            { "text": "To give someone a great honor.", "correct": false },
            { "text": "To deliberately ostracize someone by not speaking to them.", "correct": true },
            { "text": "To send someone on a pointless errand.", "correct": false },
            { "text": "To promote someone to a position of less power.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a perfect passive participle. Original sentence: 'After the documents had been stolen, the company had to change all its security codes.'",
        "answer": ["Having had the documents stolen, the company had to change all its security codes."]
    },
    {
        "type": "closed",
        "question": "The general's speech was a ______ call to arms, inspiring the troops before the great battle.",
        "answers": [
            { "text": "clarion", "correct": true },
            { "text": "clear", "correct": false },
            { "text": "calm", "correct": false },
            { "text": "clandestine", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The car is old and unreliable, but it's better than nothing. As the old saying goes, '______'.",
        "answers": [
            { "text": "A bird in the hand is worth two in the bush", "correct": false },
            { "text": "Any port in a storm", "correct": true },
            { "text": "A stitch in time saves nine", "correct": false },
            { "text": "All that glitters is not gold", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They need to be told the truth.'",
        "answer": ["The truth needs to be told to them."]
    },
    {
        "type": "closed",
        "question": "She tried to ______ a feeling of calm, but her nervous twitch gave her away.",
        "answers": [
            { "text": "project", "correct": true },
            { "text": "reject", "correct": false },
            { "text": "inject", "correct": false },
            { "text": "subject", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His attempts to apologize were clumsy and ______, making the situation even worse.",
        "answers": [
            { "text": "inane", "correct": true },
            { "text": "insane", "correct": false },
            { "text": "ingenious", "correct": false },
            { "text": "ingrained", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The company is not immune ____ the effects of the global recession.'",
        "answer": ["to"]
    },
    {
        "type": "closed",
        "question": "The new evidence helped to ______ the witness's original testimony.",
        "answers": [
            { "text": "corroborate", "correct": true },
            { "text": "collaborate", "correct": false },
            { "text": "corrode", "correct": false },
            { "text": "cooperate", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ lifestyle, filled with parties and extravagant spending, eventually led to his bankruptcy.",
        "answers": [
            { "text": "hedonistic", "correct": true },
            { "text": "hermetic", "correct": false },
            { "text": "holistic", "correct": false },
            { "text": "historic", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The general's orders were ____ (EQUIVOCAL) and left no room for interpretation.'", "answer": ["unequivocal"] },
    {
        "type": "closed",
        "question": "The old law has become a ______, irrelevant in modern society but never officially repealed.",
        "answers": [
            { "text": "dead letter", "correct": true },
            { "text": "red herring", "correct": false },
            { "text": "white elephant", "correct": false },
            { "text": "lame duck", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He was a difficult person to work with, known for his ______ and unpredictable moods.",
        "answers": [
            { "text": "mercurial", "correct": true },
            { "text": "methodical", "correct": false },
            { "text": "mirthful", "correct": false },
            { "text": "maternal", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: 'You must complete this form,' the official insisted.",
        "answer": ["The official insisted that I (had to) complete that form."]
    },
    {
        "type": "closed",
        "question": "It's a common ______ that all sharks are dangerous to humans; in fact, most species are harmless.",
        "answers": [
            { "text": "fallacy", "correct": true },
            { "text": "fantasy", "correct": false },
            { "text": "faculty", "correct": false },
            { "text": "facility", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The company decided to ______ its old, inefficient machinery with state-of-the-art equipment.",
        "answers": [
            { "text": "supersede", "correct": true },
            { "text": "supervise", "correct": false },
            { "text": "suppress", "correct": false },
            { "text": "surpass", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb. Original sentence: 'I'll have to persuade my landlord to repair the roof.'",
        "answer": ["I'll have to get my landlord to repair the roof."]
    },
    { "type": "closed", "question": "The politician's speech was a ______ against the media, accusing them of bias and unfair reporting.", "answers": [{ "text": "diatribe", "correct": true }, { "text": "dialogue", "correct": false }, { "text": "dichotomy", "correct": false }, { "text": "digression", "correct": false }] }
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