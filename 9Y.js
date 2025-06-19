const questions = [
    {
        "type": "closed",
        "question": "Only by working together ______ overcome this challenge.",
        "answers": [
            { "text": "we can", "correct": false },
            { "text": "can we", "correct": true },
            { "text": "we will", "correct": false },
            { "text": "we are able to", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Read the description: 'He gave a perfunctory nod in my direction and walked on without breaking his stride.' What does 'perfunctory' imply about the nod?",
        "answers": [
            { "text": "It was warm and friendly.", "correct": false },
            { "text": "It was done with a lack of interest or enthusiasm, as a matter of routine.", "correct": true },
            { "text": "It was a gesture of deep respect.", "correct": false },
            { "text": "It was slow and deliberate.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They are to announce the results tomorrow morning.'",
        "answer": ["The results are to be announced tomorrow morning."]
    },
    {
        "type": "closed",
        "question": "His guilty ______ wouldn't let him sleep; he was fully ______ of the mistake he had made.",
        "answers": [
            { "text": "conscious / conscience", "correct": false },
            { "text": "conscience / conscious", "correct": true },
            { "text": "conscious / cautious", "correct": false },
            { "text": "conscience / cautious", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You have received two excellent job offers and can't decide. Which idiom describes your situation?",
        "answers": [
            { "text": "You are on cloud nine.", "correct": false },
            { "text": "You are on the fence.", "correct": true },
            { "text": "You are in hot water.", "correct": false },
            { "text": "You are on the same page.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The change in the planet's temperature was almost ____ (PERCEIVE) from year to year.'",
        "answer": ["imperceptible"]
    },
    {
        "type": "closed",
        "question": "My French is a bit ______; I haven't used it since I left school.",
        "answers": [
            { "text": "rusty", "correct": true },
            { "text": "shiny", "correct": false },
            { "text": "filthy", "correct": false },
            { "text": "dusty", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The evidence connecting the suspect to the crime is rather ______; it's not strong enough for a conviction.",
        "answers": [
            { "text": "tremendous", "correct": false },
            { "text": "tenuous", "correct": true },
            { "text": "terrific", "correct": false },
            { "text": "tangible", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a perfect participle clause. Original sentence: 'After she had failed her driving test three times, she decided to give up.'",
        "answer": ["Having failed her driving test three times, she decided to give up."]
    },
    {
        "type": "closed",
        "question": "The company had to ______ some of its long-term projects due to a lack of funding.",
        "answers": [
            { "text": "shelve", "correct": true },
            { "text": "store", "correct": false },
            { "text": "pocket", "correct": false },
            { "text": "hide", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I would sooner you ______ me the truth than pretend everything is fine.",
        "answers": [
            { "text": "tell", "correct": false },
            { "text": "told", "correct": true },
            { "text": "have told", "correct": false },
            { "text": "are telling", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'Nowhere...'. Original sentence: 'You will not find a better price anywhere.'",
        "answer": ["Nowhere will you find a better price."]
    },
    {
        "type": "closed",
        "question": "The ______ of the new system will require significant training for all employees.",
        "answers": [
            { "text": "implication", "correct": false },
            { "text": "implementation", "correct": true },
            { "text": "implication", "correct": false },
            { "text": "innovation", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to throw in the towel'?",
        "answers": [
            { "text": "To get ready for a shower.", "correct": false },
            { "text": "To give up or admit defeat.", "correct": true },
            { "text": "To clean up a mess.", "correct": false },
            { "text": "To start a fight.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'She is not averse ____ a bit of hard work when necessary.'",
        "answer": ["to"]
    },
    {
        "type": "closed",
        "question": "It's difficult for the two sides to ______ a consensus on this issue.",
        "answers": [
            { "text": "make", "correct": false },
            { "text": "do", "correct": false },
            { "text": "reach", "correct": true },
            { "text": "achieve to", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His performance in the final was extraordinary; he was in a ______.",
        "answers": [
            { "text": "class of his own", "correct": true },
            { "text": "school of thought", "correct": false },
            { "text": "group of his friends", "correct": false },
            { "text": "team of one", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The old manuscript was ____ (LEGIBLE) in several places due to water damage.'", "answer": ["illegible"] },
    {
        "type": "closed",
        "question": "She spoke in a ______ whisper so as not to be overheard.",
        "answers": [
            { "text": "hushed", "correct": true },
            { "text": "sounded", "correct": false },
            { "text": "noisy", "correct": false },
            { "text": "loudly", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The team's failure to ______ the title was a great disappointment to the fans.",
        "answers": [
            { "text": "clinch", "correct": true },
            { "text": "grab", "correct": false },
            { "text": "hold", "correct": false },
            { "text": "catch", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice: 'They say he has a photographic memory.'",
        "answer": ["He is said to have a photographic memory."]
    },
    {
        "type": "closed",
        "question": "A comprehensive report is one that is...",
        "answers": [
            { "text": "easy to understand.", "correct": false },
            { "text": "including all or nearly all elements or aspects of something.", "correct": true },
            { "text": "very long and complicated.", "correct": false },
            { "text": "written by an expert.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "We need to ______ a few problems before we can launch the product.",
        "answers": [
            { "text": "iron out", "correct": true },
            { "text": "wash up", "correct": false },
            { "text": "clear away", "correct": false },
            { "text": "sort in", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb: 'By the time I get there, a caterer will have prepared the food.'",
        "answer": ["By the time I get there, I will have had the food prepared."]
    },
    {
        "type": "closed",
        "question": "The new evidence completely _______ the defendant's alibi.",
        "answers": [
            { "text": "undermined", "correct": true },
            { "text": "underwent", "correct": false },
            { "text": "underlined", "correct": false },
            { "text": "understood", "correct": false }
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