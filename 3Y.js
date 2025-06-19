const questions = [
    {
        "type": "closed",
        "question": "He stopped ______ a coffee because he was feeling sleepy while driving.",
        "answers": [
            { "text": "to have", "correct": true },
            { "text": "having", "correct": false },
            { "text": "to having", "correct": false },
            { "text": "have", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Read the text: 'Jane meticulously organized her notes, color-coded her files, and created a detailed schedule for her project.' What can you infer about Jane?",
        "answers": [
            { "text": "She is often late with her work.", "correct": false },
            { "text": "She is very systematic and thorough.", "correct": true },
            { "text": "She dislikes working on projects.", "correct": false },
            { "text": "She is a creative but chaotic person.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence to add emphasis, starting with 'It was...'. Original sentence: 'Maria won the first prize yesterday.'",
        "answer": ["It was Maria who won the first prize yesterday."]
    },
    {
        "type": "closed",
        "question": "What does the phrasal verb 'put up with' mean?",
        "answers": [
            { "text": "to build something", "correct": false },
            { "text": "to suggest an idea", "correct": false },
            { "text": "to tolerate or endure something unpleasant", "correct": true },
            { "text": "to provide accommodation for someone", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Your friend suggests a plan you disagree with. How can you politely express your disagreement?",
        "answers": [
            { "text": "That's a terrible idea.", "correct": false },
            { "text": "I see your point, but have you considered the potential problems?", "correct": true },
            { "text": "I would never do that.", "correct": false },
            { "text": "You're wrong about this.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The main ____ (ADVANTAGE) of this plan is its high cost.'",
        "answer": ["disadvantage"]
    },
    {
        "type": "closed",
        "question": "By this time tomorrow, we ________ our exams and will be celebrating.",
        "answers": [
            { "text": "will finish", "correct": false },
            { "text": "are finishing", "correct": false },
            { "text": "will have finished", "correct": true },
            { "text": "are going to finish", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Read the dialogue. A: 'Are you coming to the cinema with us tonight?' B: 'I'd love to, but I'm snowed under with homework.' What does B mean?",
        "answers": [
            { "text": "He can't come because he has a very large amount of homework.", "correct": true },
            { "text": "He can't come because of bad weather.", "correct": false },
            { "text": "He will do his homework at the cinema.", "correct": false },
            { "text": "He wants to go, but only if they watch a film about winter.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the second sentence so it has the same meaning, using the word 'whose'. First sentence: 'I saw a man. His car had broken down.'",
        "answer": ["I saw a man whose car had broken down."]
    },
    {
        "type": "closed",
        "question": "Which of these words is the 'odd one out' based on connotation?",
        "answers": [
            { "text": "Confident", "correct": false },
            { "text": "Arrogant", "correct": true },
            { "text": "Self-assured", "correct": false },
            { "text": "Poised", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Losing my job turned out to be _________; it pushed me to start my own successful business.",
        "answers": [
            { "text": "a storm in a teacup", "correct": false },
            { "text": "a blessing in disguise", "correct": true },
            { "text": "a piece of cake", "correct": false },
            { "text": "a drop in the ocean", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the passive voice: 'They are currently repairing the main road.'",
        "answer": ["The main road is currently being repaired."]
    },
    {
        "type": "closed",
        "question": "He has very ______ hope of winning the lottery, but he buys a ticket every week.",
        "answers": [
            { "text": "little", "correct": true },
            { "text": "a little", "correct": false },
            { "text": "few", "correct": false },
            { "text": "a few", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Never ________ such an incredible performance before.",
        "answers": [
            { "text": "I have seen", "correct": false },
            { "text": "I saw", "correct": false },
            { "text": "have I seen", "correct": true },
            { "text": "did I see", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'You need to ______ (STRONG) your arguments with more evidence.'",
        "answer": ["strengthen"]
    },
    {
        "type": "closed",
        "question": "If you _______ to see Mr. Davis, could you give him this message?",
        "answers": [
            { "text": "will happen", "correct": false },
            { "text": "happen", "correct": true },
            { "text": "are happening", "correct": false },
            { "text": "would happen", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The evidence against him was overwhelming. _______, he was found guilty.",
        "answers": [
            { "text": "However", "correct": false },
            { "text": "Despite this", "correct": false },
            { "text": "Consequently", "correct": true },
            { "text": "On the other hand", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using 'in spite of'. First sentence: 'Although he felt ill, he went to school.'",
        "answer": ["In spite of feeling ill, he went to school.", "In spite of his illness, he went to school."]
    },
    {
        "type": "closed",
        "question": "This TV series is very popular now. ______ that it will be renewed for another season.",
        "answers": [
            { "text": "I'm looking forward to", "correct": false },
            { "text": "I expect", "correct": true },
            { "text": "I'm afraid", "correct": false },
            { "text": "I doubt", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's a formal event, so you are _______ to wear a suit and tie.",
        "answers": [
            { "text": "supposed", "correct": true },
            { "text": "suggested", "correct": false },
            { "text": "allowed", "correct": false },
            { "text": "believed", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The new manager is not very popular ____ the employees.'",
        "answer": ["with"]
    },
    {
        "type": "closed",
        "question": "Which sentence is a polite way of giving advice?",
        "answers": [
            { "text": "You must see a doctor immediately.", "correct": false },
            { "text": "You are wrong not to go.", "correct": false },
            { "text": "Why don't you try talking to him first?", "correct": true },
            { "text": "You'll fail if you don't do that.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The book was so ________ that I couldn't put it down.",
        "answers": [
            { "text": "gripped", "correct": false },
            { "text": "gripping", "correct": true },
            { "text": "grip", "correct": false },
            { "text": "grips", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with ONE word: 'The more you practice, the ______ you will become.'",
        "answer": ["better"]
    },
    {
        "type": "closed",
        "question": "She couldn't attend the meeting, so she sent a colleague in her ______.",
        "answers": [
            { "text": "place", "correct": true },
            { "text": "role", "correct": false },
            { "text": "part", "correct": false },
            { "text": "absence", "correct": false }
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