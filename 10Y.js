const questions = [
    {
        "type": "closed",
        "question": "Such ______ that he refused to speak to anyone for the rest of the day.",
        "answers": [
            { "text": "was his disappointment", "correct": true },
            { "text": "his disappointment was", "correct": false },
            { "text": "disappointed he was", "correct": false },
            { "text": "he was disappointed", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The rules clearly ______ smoking in this area, so the doctor will ______ that you stop immediately.",
        "answers": [
            { "text": "prescribe / proscribe", "correct": false },
            { "text": "proscribe / prescribe", "correct": true },
            { "text": "prohibit / advice", "correct": false },
            { "text": "permit / suggest", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They should have taken his warnings more seriously.'",
        "answer": ["His warnings should have been taken more seriously."]
    },
    {
        "type": "closed",
        "question": "The two political parties were at ______ over the new budget.",
        "answers": [
            { "text": "daggers drawn", "correct": false },
            { "text": "loggerheads", "correct": true },
            { "text": "cross purposes", "correct": false },
            { "text": "swords points", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You overhear a friend making plans based on an unconfirmed rumor. How can you advise caution?",
        "answers": [
            { "text": "That's a great idea, go for it!", "correct": false },
            { "text": "Let's not get ahead of ourselves; we should wait for official confirmation first.", "correct": true },
            { "text": "You're being naive.", "correct": false },
            { "text": "That will definitely happen, I'm sure of it.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The damage to the ancient manuscript was, unfortunately, ____ (REPAIR).'",
        "answer": ["irreparable"]
    },
    {
        "type": "closed",
        "question": "The fame of pop stars is often ______; they are famous one year and forgotten the next.",
        "answers": [
            { "text": "eternal", "correct": false },
            { "text": "ephemeral", "correct": true },
            { "text": "enduring", "correct": false },
            { "text": "perpetual", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "If he weren't so stubborn (in general), he ______ the help yesterday.",
        "answers": [
            { "text": "would accept", "correct": false },
            { "text": "would have accepted", "correct": true },
            { "text": "accepted", "correct": false },
            { "text": "had accepted", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a passive participle clause. Original sentence: 'Because he was abandoned by his friends, he felt completely alone.'",
        "answer": ["Abandoned by his friends, he felt completely alone."]
    },
    {
        "type": "closed",
        "question": "His performance was so poor that he was ______ to the reserve team.",
        "answers": [
            { "text": "relegated", "correct": true },
            { "text": "promoted", "correct": false },
            { "text": "assigned", "correct": false },
            { "text": "delegated", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "She checked the document carefully, lest she ______ any mistakes.",
        "answers": [
            { "text": "would make", "correct": false },
            { "text": "made", "correct": false },
            { "text": "make", "correct": true },
            { "text": "has made", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'In no way...'. Original sentence: 'He did not intend to cause any offence.'",
        "answer": ["In no way did he intend to cause any offence."]
    },
    {
        "type": "closed",
        "question": "His absence from the meeting was _______, given how important the topic was.",
        "answers": [
            { "text": "conspicuous", "correct": true },
            { "text": "contiguous", "correct": false },
            { "text": "conscious", "correct": false },
            { "text": "consecutive", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Arguing about such a minor issue is just ______; it doesn't solve the main problem.",
        "answers": [
            { "text": "a blessing in disguise", "correct": false },
            { "text": "a storm in a teacup", "correct": true },
            { "text": "a shot in the dark", "correct": false },
            { "text": "a piece of cake", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The landscape was completely devoid ____ any sign of life.'",
        "answer": ["of"]
    },
    {
        "type": "closed",
        "question": "We need to finish the research by Friday. ______, we must all work extra hours this week.",
        "answers": [
            { "text": "Therefore", "correct": false },
            { "text": "To that end", "correct": true },
            { "text": "Nevertheless", "correct": false },
            { "text": "In addition", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The scientist conducted experiments to ______ his theory, but the results were inconclusive.",
        "answers": [
            { "text": "disprove", "correct": false },
            { "text": "approve", "correct": false },
            { "text": "prove", "correct": true },
            { "text": "improve", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The ____ (PRESUME) of innocence is a fundamental principle of law.'", "answer": ["presumption"] },
    {
        "type": "closed",
        "question": "The manager's ______ criticism of the team's performance lowered morale.",
        "answers": [
            { "text": "veiled", "correct": false },
            { "text": "unveiled", "correct": false },
            { "text": "unvarnished", "correct": true },
            { "text": "varnished", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He tried to ______ an air of confidence, but his trembling hands betrayed his nervousness.",
        "answers": [
            { "text": "effect", "correct": true },
            { "text": "affect", "correct": false },
            { "text": "reflect", "correct": false },
            { "text": "infect", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice: 'They are looking into the matter urgently.'",
        "answer": ["The matter is being looked into urgently."]
    },
    {
        "type": "closed",
        "question": "His speech was full of empty ______ and promises he couldn't keep.",
        "answers": [
            { "text": "rhetoric", "correct": true },
            { "text": "relics", "correct": false },
            { "text": "rebuttals", "correct": false },
            { "text": "responses", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He found it difficult to ______ the new software, but he persevered.",
        "answers": [
            { "text": "get to grips with", "correct": true },
            { "text": "come to terms with", "correct": false },
            { "text": "fall back on", "correct": false },
            { "text": "do away with", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'have'. Original sentence: 'I'll ask the developers to design a new website for us.'",
        "answer": ["I'll have a new website designed for us."]
    },
    {
        "type": "closed",
        "question": "The treaty aims to ______ friendly relations between the two countries.",
        "answers": [
            { "text": "foster", "correct": true },
            { "text": "fester", "correct": false },
            { "text": "falter", "correct": false },
            { "text": "founder", "correct": false }
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