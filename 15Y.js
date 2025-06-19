const questions = [
    {
        "type": "closed",
        "question": "On no account ______ this door be left unlocked overnight.",
        "answers": [
            { "text": "can", "correct": false },
            { "text": "must", "correct": false },
            { "text": "should", "correct": true },
            { "text": "will", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Despite the lively debate, he remained ______ throughout, offering only a few terse comments.",
        "answers": [
            { "text": "loquacious", "correct": false },
            { "text": "taciturn", "correct": true },
            { "text": "convivial", "correct": false },
            { "text": "verbose", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They are going to have to make a difficult decision soon.'",
        "answer": ["A difficult decision is going to have to be made soon."]
    },
    {
        "type": "closed",
        "question": "I had prepared a brilliant closing argument, but my colleague spoke before me and made all the same points, completely ______.",
        "answers": [
            { "text": "rocking the boat", "correct": false },
            { "text": "stealing my thunder", "correct": true },
            { "text": "jumping the gun", "correct": false },
            { "text": "hitting the nail on the head", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You receive some unconstructive criticism like 'This is just bad.' What is the most professional response?",
        "answers": [
            { "text": "Well, you couldn't do any better.", "correct": false },
            { "text": "Could you be more specific? I'm keen to understand which parts aren't working so I can improve them.", "correct": true },
            { "text": "That's just your opinion.", "correct": false },
            { "text": "I give up then.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'After the scandal, his reputation was ____ (REDEEM).'",
        "answer": ["irredeemable"]
    },
    {
        "type": "closed",
        "question": "He loves to ______ his new sports car, and he will often ______ speed limits to show it off.",
        "answers": [
            { "text": "flout / flaunt", "correct": false },
            { "text": "flaunt / flout", "correct": true },
            { "text": "flaunt / float", "correct": false },
            { "text": "flout / float", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It is imperative that every member ______ to the code of conduct.",
        "answers": [
            { "text": "adheres", "correct": false },
            { "text": "adhere", "correct": true },
            { "text": "is adhering", "correct": false },
            { "text": "to adhere", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: 'You should apply for the scholarship,' my teacher advised.",
        "answer": ["My teacher advised me to apply for the scholarship."]
    },
    {
        "type": "closed",
        "question": "His ______ smile let everyone know he was being sarcastic, even though his words were polite.",
        "answers": [
            { "text": "sincere", "correct": false },
            { "text": "sardonic", "correct": true },
            { "text": "seraphic", "correct": false },
            { "text": "subtle", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The government's attempts to solve the crisis have been ______, achieving little to no real effect.",
        "answers": [
            { "text": "efficacious", "correct": false },
            { "text": "ineffectual", "correct": true },
            { "text": "infectious", "correct": false },
            { "text": "effective", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'Come what may,...'. Original sentence: 'I will support you, whatever happens.'",
        "answer": ["Come what may, I will support you."]
    },
    {
        "type": "closed",
        "question": "The peace talks reached an ______; neither side was willing to compromise further.",
        "answers": [
            { "text": "impact", "correct": false },
            { "text": "impasse", "correct": true },
            { "text": "impetus", "correct": false },
            { "text": "impression", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'a Pyrrhic victory'?",
        "answers": [
            { "text": "An easy and overwhelming win.", "correct": false },
            { "text": "A victory that comes at such a great cost that it's barely better than losing.", "correct": true },
            { "text": "A victory achieved through cheating.", "correct": false },
            { "text": "A victory that was expected by everyone.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The senator was implicated ____ the corruption scandal.'",
        "answer": ["in"]
    },
    {
        "type": "closed",
        "question": "He agreed to the plan, but his support was ______; he clearly had reservations.",
        "answers": [
            { "text": "wholehearted", "correct": false },
            { "text": "lukewarm", "correct": true },
            { "text": "ardent", "correct": false },
            { "text": "fervent", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The company decided to ______ its planned expansion in light of the economic downturn.",
        "answers": [
            { "text": "shelve", "correct": true },
            { "text": "shelf", "correct": false },
            { "text": "store", "correct": false },
            { "text": "stock", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The system has a few ____ (PERFECT) but it's generally very reliable.'", "answer": ["imperfections"] },
    {
        "type": "closed",
        "question": "His speech was a ______ of clichés and empty promises.",
        "answers": [
            { "text": "litany", "correct": true },
            { "text": "lithograph", "correct": false },
            { "text": "literal", "correct": false },
            { "text": "liturgy", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Be it sun or rain, the postman ______ his rounds every day.",
        "answers": [
            { "text": "completes", "correct": true },
            { "text": "complete", "correct": false },
            { "text": "is completing", "correct": false },
            { "text": "would complete", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'I don't like my colleagues making personal calls in the office.'",
        "answer": ["I don't like personal calls being made in the office."]
    },
    {
        "type": "closed",
        "question": "The lawyer's ______ argument persuaded the jury of his client's innocence.",
        "answers": [
            { "text": "cogent", "correct": true },
            { "text": "congenital", "correct": false },
            { "text": "cognitive", "correct": false },
            { "text": "congruent", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The government only ______ to the new environmental laws after immense public pressure.",
        "answers": [
            { "text": "pays lip service", "correct": true },
            { "text": "gives a free hand", "correct": false },
            { "text": "holds the floor", "correct": false },
            { "text": "goes the extra mile", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'get'. Original sentence: 'I finally convinced my brother to lend me his car.'",
        "answer": ["I finally got my brother to lend me his car."]
    },
    { "type": "closed", "question": "The old castle stood on a ______ overlooking the entire valley.", "answers": [{ "text": "prominence", "correct": false }, { "text": "promontory", "correct": true }, { "text": "premonition", "correct": false }, { "text": "predecessor", "correct": false }] }
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