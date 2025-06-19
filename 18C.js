const questions = [
    {
        type: 'closed',
        question: "Różnica kwadratów dwóch kolejnych dodatnich liczb parzystych wynosi 100. Ile wynosi iloczyn tych liczb?",
        answers: [
            { text: "624", correct: true },
            { text: "528", correct: false },
            { text: "440", correct: false },
            { text: "360", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pole rombu wynosi 120. Jedna z przekątnych jest o 14 dłuższa od drugiej. Oblicz obwód tego rombu.",
        answer: ["52"]
    },
    {
        type: 'closed',
        question: "Liczba 2²⁰ * 5¹⁵ jest równa:",
        answers: [
            { text: "10³⁵", correct: false },
            { text: "32 * 10¹⁵", correct: true },
            { text: "10 * 10²⁰", correct: false },
            { text: "7¹⁵ * 10¹⁵", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o obwodzie 70, promień okręgu wpisanego wynosi 5. Oblicz długość przeciwprostokątnej.",
        answer: ["30"]
    },
    {
        type: 'closed',
        question: "W ostrosłupie prawidłowym czworokątnym wysokość ściany bocznej ma długość 13, a wysokość ostrosłupa 12. Pole powierzchni całkowitej tej bryły wynosi:",
        answers: [
            { text: "260", correct: false },
            { text: "340", correct: false },
            { text: "360", correct: true },
            { text: "520", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (log₂3) * (log₃4) * (log₄5) * ... * (log₁₅16) jest równa:",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Ile jest liczb trzycyfrowych podzielnych przez 4, w których wszystkie cyfry są nieparzyste?",
        answer: ["20"]
    },
    {
        type: 'closed',
        question: "Cenę towaru podniesiono o 20%, a następnie o 25%. O ile procent łącznie podniesiono cenę towaru?",
        answers: [
            { text: "o 45%", correct: false },
            { text: "o 50%", correct: true },
            { text: "o 55%", correct: false },
            { text: "o 60%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkąt równoramienny o podstawie 24 i ramionach 13 wpisano koło. Oblicz promień tego koła.",
        answer: ["10/3", "3.33", "3 i 1/3"]
    },
    {
        type: 'closed',
        question: "Z cyfr 1, 2, 3, 4, 5 losujemy kolejno bez zwracania dwie cyfry i tworzymy liczbę dwucyfrową. Jakie jest prawdopodobieństwo, że otrzymana liczba jest podzielna przez 3?",
        answers: [
            { text: "1/5", correct: false },
            { text: "1/4", correct: false },
            { text: "2/5", correct: true },
            { text: "1/2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pewnej firmie średnia pensja wynosi 4000 zł. Średnia pensja mężczyzn to 4400 zł, a kobiet 3800 zł. Jaki procent pracowników stanowią kobiety?",
        answer: ["66.67", "66 i 2/3"]
    },
    {
        type: 'closed',
        question: "Dwa wierzchołki kwadratu leżą na osi OX, a dwa pozostałe na paraboli o równaniu y = 16 - x². Pole tego kwadratu wynosi:",
        answers: [
            { text: "16", correct: false },
            { text: "32", correct: true },
            { text: "36", correct: false },
            { text: "48", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Na spotkaniu 10 osób, każda wita się z każdą. Ile nastąpi powitań, jeśli 3 osoby się spóźniły i nie przywitały się ze sobą nawzajem?",
        answers: [
            { text: "45", correct: false },
            { text: "42", correct: true },
            { text: "39", correct: false },
            { text: "36", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma n początkowych wyrazów ciągu arytmetycznego wyraża się wzorem Sn = 2n² + 3n. Podaj wartość piątego wyrazu tego ciągu.",
        answer: ["21"]
    },
    {
        type: 'closed',
        question: "Prosta przechodząca przez punkty A=(√2, 3) i B=(2√2, 5) ma równanie:",
        answers: [
            { text: "y = 2x + 1", correct: false },
            { text: "y = √2 x + 1", correct: true },
            { text: "y = x + 3-√2", correct: false },
            { text: "y = 2√2 x - 5", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Ostatnią cyfrą liczby 1! + 2! + 3! + ... + 2024! jest:",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "3", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o przyprostokątnych 6 i 8, na przeciwprostokątnej obrano punkt P. Jaka jest najmniejsza możliwa suma kwadratów odległości punktu P od przyprostokątnych?",
        answer: ["14.4"]
    },
    {
        type: 'closed',
        question: "Ile jest liczb naturalnych dwucyfrowych, które nie są podzielne ani przez 5, ani przez 7?",
        answers: [
            { text: "90 - 18 - 13 + 2 = 61", correct: true }, // (90 - (18+13-2))
            { text: "61", correct: true },
            { text: "59", correct: false },
            { text: "68", correct: false },
            { text: "72", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkącie równoramiennym podstawa jest 2 razy krótsza od ramienia. Stosunek wysokości opuszczonej na podstawę do długości podstawy wynosi:",
        answers: [
            { text: "√15:2", correct: true },
            { text: "√15:1", correct: false },
            { text: "√3:1", correct: false },
            { text: "√3:2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pudełku jest 12 kul, w tym 'b' białych. Losujemy dwie kule bez zwracania. Prawdopodobieństwo wylosowania dwóch kul białych wynosi 5/33. Ile jest kul białych?",
        answer: ["5"]
    },
    {
        type: 'closed',
        question: "Dwa okręgi o promieniach 6 cm są tak położone, że każdy przechodzi przez środek drugiego. Pole części wspólnej tych okręgów wynosi:",
        answers: [
            { text: "12π - 9√3", correct: false },
            { text: "24π - 18√3", correct: false },
            { text: "24π - 36√3", correct: true },
            { text: "18π - 12√3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia 2/(√3-1) - 2/(√3+1) jest równa:",
        answers: [
            { text: "2", correct: true },
            { text: "2√3", correct: false },
            { text: "4", correct: false },
            { text: "0", correct: false }
        ]

    },
    {
        type: 'open',
        question: "Samochód przejechał połowę trasy z prędkością 40 km/h, a drugą połowę z prędkością 60 km/h. Jaka była średnia prędkość samochodu na całej trasie w km/h?",
        answer: ["48"]
    },
    {
        type: 'closed',
        question: "Ile jest przekątnych w dziesięciokącie wypukłym?",
        answers: [
            { text: "27", correct: false },
            { text: "35", correct: true },
            { text: "45", correct: false },
            { text: "90", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia (1 - 1/2) * (1 - 1/3) * (1 - 1/4) * ... * (1 - 1/100) jest równa:",
        answer: ["0.01", "1/100"]
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