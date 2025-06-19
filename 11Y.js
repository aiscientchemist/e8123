const questions = [
    {
        "type": "closed",
        "question": "Not only ______ his keys, but he also discovered his wallet was missing.",
        "answers": [
            { "text": "he had lost", "correct": false },
            { "text": "he did lose", "correct": false },
            { "text": "had he lost", "correct": true },
            { "text": "he lost", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The small tax cut was seen as a mere ______ for a much deeper economic problem.",
        "answers": [
            { "text": "palliative", "correct": true },
            { "text": "panacea", "correct": false },
            { "text": "placebo", "correct": false },
            { "text": "punishment", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They might have overlooked this crucial detail.'",
        "answer": ["This crucial detail might have been overlooked."]
    },
    {
        "type": "closed",
        "question": "After receiving conflicting instructions from two managers, the team was completely ______.",
        "answers": [
            { "text": "at a loss", "correct": false },
            { "text": "at sixes and sevens", "correct": true },
            { "text": "on cloud nine", "correct": false },
            { "text": "in the same boat", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Your friend is very excited about a 'get-rich-quick' scheme they saw online. How would you advise caution?",
        "answers": [
            { "text": "You should invest all your money in it!", "correct": false },
            { "text": "That sounds too good to be true. It's probably best to be skeptical and do more research.", "correct": true },
            { "text": "Why didn't I think of that?", "correct": false },
            { "text": "That's definitely a legitimate opportunity.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His talent is ____ (DOUBT) the greatest the world has ever seen.'",
        "answer": ["undoubtedly"]
    },
    {
        "type": "closed",
        "question": "He was not ______ to hard work, but he worried about the ______ effects of stress on his health.",
        "answers": [
            { "text": "adverse / averse", "correct": false },
            { "text": "averse / adverse", "correct": true },
            { "text": "averse / diverse", "correct": false },
            { "text": "adverse / diverse", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "______ darkness falling, the hikers decided to set up camp for the night.",
        "answers": [
            { "text": "As", "correct": false },
            { "text": "With", "correct": true },
            { "text": "Due to", "correct": false },
            { "text": "For", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: 'Don't forget to submit your assignments by Friday,' the teacher reminded us.",
        "answer": ["The teacher reminded us to submit our assignments by Friday."]
    },
    {
        "type": "closed",
        "question": "His ______ nature made him a wonderful host; he could talk to anyone about anything for hours.",
        "answers": [
            { "text": "taciturn", "correct": false },
            { "text": "gregarious", "correct": true },
            { "text": "introverted", "correct": false },
            { "text": "reserved", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "______ he to change his mind, we would have a serious problem.",
        "answers": [
            { "text": "If", "correct": false },
            { "text": "Should", "correct": false },
            { "text": "Were", "correct": true },
            { "text": "Did", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'The committee is to review the proposal next week.'",
        "answer": ["The proposal is to be reviewed by the committee next week."]
    },
    {
        "type": "closed",
        "question": "His constant interruptions only served to ______ the already tense negotiations.",
        "answers": [
            { "text": "alleviate", "correct": false },
            { "text": "exacerbate", "correct": true },
            { "text": "mitigate", "correct": false },
            { "text": "ameliorate", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He's known for exaggerating, so I'd ______ his story with a pinch of salt.",
        "answers": [
            { "text": "believe", "correct": false },
            { "text": "take", "correct": true },
            { "text": "swallow", "correct": false },
            { "text": "hear", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The company is liable ____ any damage caused by its products.'",
        "answer": ["for"]
    },
    {
        "type": "closed",
        "question": "The evidence was compelling; ______, the jury found him guilty.",
        "answers": [
            { "text": "hence", "correct": true },
            { "text": "nonetheless", "correct": false },
            { "text": "otherwise", "correct": false },
            { "text": "whereas", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "How to create a sustainable energy source for the entire planet is a true ______ for scientists.",
        "answers": [
            { "text": "conundrum", "correct": true },
            { "text": "conclusion", "correct": false },
            { "text": "consensus", "correct": false },
            { "text": "conflict", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The famous author valued his privacy and ____ (ANONYMOUS) above all else.'", "answer": ["anonymity"] },
    {
        "type": "closed",
        "question": "What is the function of 'would' in this sentence? 'If you would just be quiet for a moment, I could explain!'",
        "answers": [
            { "text": "To talk about a hypothetical future.", "correct": false },
            { "text": "To express irritation or impatience.", "correct": true },
            { "text": "To talk about a past habit.", "correct": false },
            { "text": "To make a polite request.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I need some time to ______ over your proposal before I can give you an answer.",
        "answers": [
            { "text": "mull", "correct": true },
            { "text": "look", "correct": false },
            { "text": "get", "correct": false },
            { "text": "take", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They made him sign the contract against his will.'",
        "answer": ["He was made to sign the contract against his will."]
    },
    {
        "type": "closed",
        "question": "The investigation required a series of ______ steps, and each one had to be performed with the utmost care to remain ______.",
        "answers": [
            { "text": "discreet / discrete", "correct": false },
            { "text": "discrete / discrete", "correct": false },
            { "text": "discrete / discreet", "correct": true },
            { "text": "discreet / discreet", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It's a long and difficult project, but we are making ______ progress.",
        "answers": [
            { "text": "steady", "correct": true },
            { "text": "stable", "correct": false },
            { "text": "still", "correct": false },
            { "text": "stale", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb: 'I'm going to pay a professional to translate this document.'",
        "answer": ["I'm going to have this document translated.", "I'm going to get this document translated."]
    },
    {
        "type": "closed",
        "question": "______, he could not convince the committee to approve his plan.",
        "answers": [
            { "text": "Try as he might", "correct": true },
            { "text": "As he might try", "correct": false },
            { "text": "He might try as", "correct": false },
            { "text": "Might he try as", "correct": false }
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