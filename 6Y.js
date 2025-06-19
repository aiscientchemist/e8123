const questions = [
    {
        "type": "closed",
        "question": "Little ______ that he was being watched by the detective.",
        "answers": [
            { "text": "he knew", "correct": false },
            { "text": "he did know", "correct": false },
            { "text": "did he know", "correct": true },
            { "text": "knew he", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The manager insisted that the report ______ on his desk by 5 p.m.",
        "answers": [
            { "text": "was", "correct": false },
            { "text": "be", "correct": true },
            { "text": "would be", "correct": false },
            { "text": "is", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the given word. Word: 'FOR'. Sentence: 'If it hadn't been for the goalkeeper, our team would have lost.'",
        "answer": ["But for the goalkeeper, our team would have lost."]
    },
    {
        "type": "closed",
        "question": "I'm not sure what to do; I'm ______ about accepting their offer.",
        "answers": [
            { "text": "in two minds", "correct": true },
            { "text": "of the same mind", "correct": false },
            { "text": "out of my mind", "correct": false },
            { "text": "with a clear mind", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A friend wants to lend money to someone they barely know. How would you give a gentle warning?",
        "answers": [
            { "text": "That's a stupid idea, you'll lose your money.", "correct": false },
            { "text": "I'd think twice about that if I were you. You don't know him very well.", "correct": true },
            { "text": "Go ahead, what's the worst that could happen?", "correct": false },
            { "text": "You must not do that.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The lack of ____ (CLEAR) in the instructions made the task impossible.'",
        "answer": ["clarity"]
    },
    {
        "type": "closed",
        "question": "The new law will have a significant ______ on small businesses.",
        "answers": [
            { "text": "affect", "correct": false },
            { "text": "affection", "correct": false },
            { "text": "effective", "correct": false },
            { "text": "effect", "correct": true }
        ]
    },
    {
        "type": "closed",
        "question": "Read the sentence: 'The politician's speech was full of platitudes and vague promises.' What does this imply about the speech?",
        "answers": [
            { "text": "It was very inspiring and detailed.", "correct": false },
            { "text": "It was controversial and created a lot of debate.", "correct": false },
            { "text": "It lacked substance and specific ideas.", "correct": true },
            { "text": "It was short and to the point.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb: 'I need to arrange for a mechanic to service my car.'",
        "answer": ["I need to have my car serviced.", "I need to get my car serviced."]
    },
    {
        "type": "closed",
        "question": "He has a tendency to ______ when he's nervous, often clicking his pen repeatedly.",
        "answers": [
            { "text": "fidget", "correct": true },
            { "text": "stroll", "correct": false },
            { "text": "contemplate", "correct": false },
            { "text": "relax", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's essential that she ______ all the documents before the meeting.",
        "answers": [
            { "text": "reviews", "correct": false },
            { "text": "review", "correct": true },
            { "text": "is reviewing", "correct": false },
            { "text": "reviewed", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with ONE word: 'The more complex the problem, the _____ creative the solution needs to be.'",
        "answer": ["more"]
    },
    {
        "type": "closed",
        "question": "The historical documents were so ______ that they couldn't be displayed in public.",
        "answers": [
            { "text": "fragile", "correct": true },
            { "text": "flexible", "correct": false },
            { "text": "sturdy", "correct": false },
            { "text": "durable", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I'm trying to ______ sugar in my diet to improve my health.",
        "answers": [
            { "text": "cut down on", "correct": true },
            { "text": "catch up with", "correct": false },
            { "text": "look up to", "correct": false },
            { "text": "get away with", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'At no time...'. Original sentence: 'You are not allowed to enter this room at any time.'",
        "answer": ["At no time are you allowed to enter this room."]
    },
    {
        "type": "closed",
        "question": "His explanation for being late was not very ______; I don't think he was telling the truth.",
        "answers": [
            { "text": "plausible", "correct": true },
            { "text": "portable", "correct": false },
            { "text": "legible", "correct": false },
            { "text": "visible", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A good judge must be completely _______ and not take sides.",
        "answers": [
            { "text": "uninterested", "correct": false },
            { "text": "disinterested", "correct": true },
            { "text": "interesting", "correct": false },
            { "text": "bored", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The company needs to ensure the ____ (EFFICIENT) of its production process.'",
        "answer": ["efficiency"]
    },
    {
        "type": "closed",
        "question": "I was about to leave when, _______, my boss called me for an urgent meeting.",
        "answers": [
            { "text": "out of hand", "correct": false },
            { "text": "out of the blue", "correct": true },
            { "text": "in the red", "correct": false },
            { "text": "on the ball", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "______ he is very talented, he lacks the self-discipline to succeed.",
        "answers": [
            { "text": "Despite", "correct": false },
            { "text": "Whereas", "correct": false },
            { "text": "Whilst", "correct": true },
            { "text": "Therefore", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice: 'They believe that the suspect has fled the country.'",
        "answer": ["The suspect is believed to have fled the country."]
    },
    {
        "type": "closed",
        "question": "This coffee is far too bitter for my ______.",
        "answers": [
            { "text": "taste", "correct": true },
            { "text": "sense", "correct": false },
            { "text": "flavour", "correct": false },
            { "text": "opinion", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A 'historic' event is one that is...",
        "answers": [
            { "text": "related to the past.", "correct": false },
            { "text": "important in history.", "correct": true },
            { "text": "very old.", "correct": false },
            { "text": "told as a story.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the reported question: He asked me, 'What have you been doing?'",
        "answer": ["He asked me what I had been doing."]
    },
    {
        "type": "closed",
        "question": "The team's poor performance was _______ due to a lack of training.",
        "answers": [
            { "text": "largely", "correct": true },
            { "text": "lastly", "correct": false },
            { "text": "lately", "correct": false },
            { "text": "loudly", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "We had to postpone the meeting at the last minute, which was very ______.",
        "answers": [
            { "text": "inconvenient", "correct": true },
            { "text": "uncomfortable", "correct": false },
            { "text": "impolite", "correct": false },
            { "text": "unsuitable", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the second sentence so it has a similar meaning, using 'so'. First sentence: 'She was such a good speaker that everyone was captivated.'",
        "answer": ["She spoke so well that everyone was captivated."]
    },
    {
        "type": "closed",
        "question": "What is the function of this sentence? 'You might want to double-check those figures before submitting the report.'",
        "answers": [
            { "text": "A strong command.", "correct": false },
            { "text": "A polite suggestion or piece of advice.", "correct": true },
            { "text": "A criticism of past work.", "correct": false },
            { "text": "A request for permission.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He ______ his grandfather; they have the same eyes and the same sense of humour.",
        "answers": [
            { "text": "looks up to", "correct": false },
            { "text": "takes after", "correct": true },
            { "text": "gets on with", "correct": false },
            { "text": "comes across", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The article was full of ____ (ACCURATE) and had to be retracted.'",
        "answer": ["inaccuracies"]
    },
    {
        "type": "closed",
        "question": "The new phone is amazing, but it costs ______. I can't afford it.",
        "answers": [
            { "text": "a pretty penny", "correct": true },
            { "text": "a piece of cake", "correct": false },
            { "text": "a drop in the ocean", "correct": false },
            { "text": "a dime a dozen", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Which sentence implies that the action was a bad idea or a mistake?",
        "answers": [
            { "text": "I remember posting the letter.", "correct": false },
            { "text": "I forgot to post the letter.", "correct": false },
            { "text": "I regret posting the letter.", "correct": true },
            { "text": "I tried to post the letter.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the second sentence so that it has a similar meaning, using 'as'. First sentence: 'He is a great pianist and he is also a talented composer.'",
        "answer": ["As well as being a great pianist, he is a talented composer."]
    },
    {
        "type": "closed",
        "question": "Seldom ______ such a lack of respect for the rules.",
        "answers": [
            { "text": "we have witnessed", "correct": false },
            { "text": "have we witnessed", "correct": true },
            { "text": "we witnessed", "correct": false },
            { "text": "did we have witnessed", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "This is a matter of ______ importance; we must address it immediately.",
        "answers": [
            { "text": "upmost", "correct": false },
            { "text": "outmost", "correct": false },
            { "text": "utmost", "correct": true },
            { "text": "atmost", "correct": false }
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