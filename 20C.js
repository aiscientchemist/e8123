const questions = [
    {
        type: 'closed',
        question: "Suma cyfr pewnej liczby dwucyfrowej 'n' wynosi 9. Jeśli od 'n' odejmiemy 45, otrzymamy liczbę o przestawionych cyfrach. Jaka jest wartość 'n'?",
        answers: [
            { text: "63", correct: false },
            { text: "72", correct: true },
            { text: "81", correct: false },
            { text: "90", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym wysokość opuszczona na przeciwprostokątną dzieli ją na odcinki o długości 8 cm i 18 cm. Oblicz obwód tego trójkąta.",
        answer: ["60"]
    },
    {
        type: 'closed',
        question: "Liczba a = 2⁵⁵, b = 3³³, c = 13¹¹. Która z poniższych nierówności jest prawdziwa?",
        answers: [
            { text: "c < b < a", correct: true },
            { text: "b < c < a", correct: false },
            { text: "a < b < c", correct: false },
            { text: "c < a < b", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pole powierzchni całkowitej stożka wynosi 200π, a pole powierzchni bocznej 136π. Oblicz objętość tego stożka.",
        answer: ["320π"]
    },
    {
        type: 'closed',
        question: "W sześcianie o krawędzi 'a' połączono środki dwóch sąsiednich ścian. Odległość między tymi środkami wynosi:",
        answers: [
            { text: "a/2", correct: false },
            { text: "a√2 / 2", correct: true },
            { text: "a√3 / 2", correct: false },
            { text: "a", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia log√3(log₂8) jest równa:",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },

    {
        type: 'open',
        question: "Wartość wyrażenia (1/2)⁻² + (1/3)⁻³ + (1/4)⁻¹ jest równa:",
        answer: ["35"]
    },
    {
        type: 'closed',
        question: "W okrąg o promieniu R=5 wpisano trapez równoramienny, którego podstawy mają długości 6 i 8. Pole tego trapezu wynosi:",
        answers: [
            { text: "49", correct: true },
            { text: "42", correct: false },
            { text: "35", correct: false },
            { text: "28", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Samochód przejechał 1/4 trasy z prędkością 80 km/h, a pozostałą część z prędkością 60 km/h. Jaka była średnia prędkość samochodu na całej trasie?",
        answer: ["64"]
    },
    {
        type: 'closed',
        question: "Jeśli x - 1/x = 3, to x² + 1/x² jest równe:",
        answers: [
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Dwie proste y = (m²-3)x + 1 i y = -2x - 5 są równoległe. Jedną z możliwych wartości 'm' jest:",
        answers: [
            { text: "1", correct: true },
            { text: "-3", correct: false },
            { text: "√5", correct: false },
            { text: "2", correct: false }
        ]

    },
    {
        type: 'open',
        question: "W turnieju szachowym każdy z 8 zawodników rozegrał z każdym innym dokładnie jedną partię. Ile partii rozegrano w całym turnieju?",
        answer: ["28"]
    },
    {
        type: 'closed',
        question: "Liczba 15! / (13! * 3!) jest równa:",
        answers: [
            { text: "35", correct: true },
            { text: "45", correct: false },
            { text: "105", correct: false },
            { text: "210", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (√2)¹ + (√2)² + (√2)³ + (√2)⁴ jest równa:",
        answers: [
            { text: "6 + 2√2", correct: false },
            { text: "6 + 3√2", correct: true },
            { text: "8 + 4√2", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o obwodzie 36, jedna z przyprostokątnych ma długość 9. Oblicz pole tego trójkąta.",
        answer: ["54"]
    },
    {
        type: 'closed',
        question: "W trapezie ABCD o podstawach AB i CD, punkty K i L są środkami ramion AD i BC. Odcinek KL ma długość 12, a wysokość trapezu wynosi 5. Pole tego trapezu wynosi:",
        answers: [
            { text: "30", correct: false },
            { text: "60", correct: true },
            { text: "90", correct: false },
            { text: "120", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Ojciec jest 4 razy starszy od syna. Za 20 lat będzie od niego 2 razy starszy. Ile lat ma obecnie ojciec?",
        answers: [
            { text: "32", correct: false },
            { text: "36", correct: false },
            { text: "40", correct: true },
            { text: "44", correct: false }
        ]

    },
    {
        type: 'open',
        question: "Jaka jest reszta z dzielenia liczby 2²⁰²⁴ przez 5?",
        answer: ["1"]
    },
    {
        type: 'closed',
        question: "Punkty A=(1,1), B=(5,1), C=(7,4), D=(3,4) są wierzchołkami:",
        answers: [
            { text: "prostokąta", correct: false },
            { text: "rombu", correct: false },
            { text: "równoległoboku, który nie jest rombem ani prostokątem", correct: true },
            { text: "trapezu, który nie jest równoległobokiem", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia ∛(7+5√2) * ∛(7-5√2) jest równa:",
        answers: [
            { text: "-1", correct: true },
            { text: "1", correct: false },
            { text: "7", correct: false },
            { text: "√99", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Statek płynący z prądem rzeki pokonuje 48 km w 3 godziny. Wracając pod prąd, tę samą trasę pokonuje w 4 godziny. Jaka jest prędkość statku w wodzie stojącej (w km/h)?",
        answer: ["14"]
    },
    {
        type: 'closed',
        question: "W pudełku jest 6 kul czerwonych, 4 zielone i 2 niebieskie. Losujemy jedną kulę. Jakie jest prawdopodobieństwo, że nie będzie ona ani czerwona, ani niebieska?",
        answers: [
            { text: "1/3", correct: true },
            { text: "1/2", correct: false },
            { text: "2/3", correct: false },
            { text: "1/4", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wszystkie krawędzie graniastosłupa prawidłowego sześciokątnego mają długość 4 cm. Oblicz pole jego powierzchni bocznej.",
        answer: ["96"]
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