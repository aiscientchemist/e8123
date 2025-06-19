const questions = [
    {
        type: 'closed',
        question: "Suma dwóch liczb naturalnych wynosi 7, a suma ich odwrotności to 7/12. Ile wynosi bezwzględna wartość różnicy tych liczb?",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Kula i walec mają równe objętości. Promień podstawy walca jest równy promieniowi kuli. Oblicz stosunek wysokości walca do jego promienia (wynik podaj w postaci ułamka a/b).",
        answer: ["4/3"]
    },
    {
        type: 'closed',
        question: "Jaka jest reszta z dzielenia sumy 1! + 2! + 3! + ... + 100! przez 12?",
        answers: [
            { text: "0", correct: false },
            { text: "3", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Ania i Basia razem wykonują pracę w 12 dni, Basia i Cecylia w 15 dni, a Ania i Cecylia w 20 dni. W ile dni Ania wykonałaby tę pracę samodzielnie?",
        answer: ["30"]
    },
    {
        type: 'closed',
        question: "Pole figury opisanej w układzie współrzędnych nierównością |x| + |y| ≤ 4 jest równe:",
        answers: [
            { text: "16", correct: false },
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "64", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Cenę towaru obniżono o 20%. O ile procent należy podnieść nową cenę, aby wróciła ona do poziomu sprzed obniżki?",
        answers: [
            { text: "o 20%", correct: false },
            { text: "o 25%", correct: true },
            { text: "o 30%", correct: false },
            { text: "o 80%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie ABC o bokach 8, 10, 12, poprowadzono środkową do najdłuższego boku. Oblicz długość tej środkowej.",
        answer: ["√46"]
    },
    {
        type: 'closed',
        question: "Liczba a = log₃2. Wartość wyrażenia log₃18 jest równa:",
        answers: [
            { text: "a + 3", correct: false },
            { text: "3a", correct: false },
            { text: "a + 2", correct: true },
            { text: "2a", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trapezie ABCD (AB || CD) przekątne przecinają się w punkcie S. Pole trójkąta ABS jest 4 razy większe od pola trójkąta CDS. Dłuższa podstawa AB ma długość 12. Oblicz długość krótszej podstawy CD.",
        answer: ["6"]
    },
    {
        type: 'closed',
        question: "Liczba całkowitych rozwiązań nierówności (x-3)² ≤ 9 wynosi:",
        answers: [
            { text: "3", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "nieskończenie wiele", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest liczb pięciocyfrowych, w których iloczyn cyfr jest równy 7?",
        answer: ["5"]
    },
    {
        type: 'closed',
        question: "Wysokość graniastosłupa prawidłowego sześciokątnego jest 2 razy dłuższa od krawędzi podstawy. Objętość tej bryły wynosi 192√3. Długość krawędzi podstawy wynosi:",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "2√2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wybieramy losowo literę ze słowa 'PRAWDOPODOBIEŃSTWO'. Jakie jest prawdopodobieństwo, że wylosowana litera występuje w tym słowie dokładnie dwa razy?",
        answers: [
            { text: "4/17", correct: false },
            { text: "6/17", correct: false },
            { text: "8/17", correct: true },
            { text: "10/17", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia 2024² - 2023² jest równa:",
        answer: ["4047"]
    },
    {
        type: 'closed',
        question: "W trójkącie ABC kąt przy wierzchołku C ma miarę 120°. Na boku AB leży punkt D taki, że odcinek CD jest dwusieczną kąta ACB. Jeśli |AC|=6 i |BC|=3, to długość odcinka CD wynosi:",
        answers: [
            { text: "1.5", correct: false },
            { text: "2", correct: true },
            { text: "2.5", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli n jest dodatnią liczbą całkowitą, to liczba n³ - n jest zawsze podzielna przez:",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W stożek o promieniu podstawy 9 i wysokości 12 wpisano walec w taki sposób, że jedna podstawa walca leży na podstawie stożka. Promień podstawy walca wynosi 3. Jaka jest objętość tego walca?",
        answer: ["72π"]
    },
    {
        type: 'closed',
        question: "Na mapie w skali 1:200 000 las ma kształt prostokąta o wymiarach 2 cm na 5 cm. Jaka jest rzeczywista powierzchnia tego lasu w kilometrach kwadratowych?",
        answers: [
            { text: "10 km²", correct: false },
            { text: "20 km²", correct: false },
            { text: "40 km²", correct: true },
            { text: "100 km²", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba (2-√3) / (2+√3) jest równa:",
        answers: [
            { text: "1", correct: false },
            { text: "7 - 4√3", correct: true },
            { text: "-1", correct: false },
            { text: "7 + 4√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Odległość punktu A=(5, -1) od prostej o równaniu y = x + 2 wynosi a√2. Podaj wartość a.",
        answer: ["2"]
    },
    {
        type: 'closed',
        question: "W trójkąt prostokątny równoramienny o przeciwprostokątnej 8√2 wpisano kwadrat tak, że dwa jego wierzchołki leżą na przeciwprostokątnej. Długość boku tego kwadratu wynosi:",
        answers: [
            { text: "8/3", correct: true },
            { text: "2√2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W rosnącym ciągu arytmetycznym składającym się z 10 wyrazów, suma wyrazów o numerach nieparzystych wynosi 35, a suma wyrazów o numerach parzystych wynosi 60. Różnica tego ciągu jest równa:",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Zestaw czterech liczb ma średnią 10 i medianę 10. Suma najmniejszej i największej liczby to 22. Jaka jest największa liczba w tym zestawie?",
        answer: ["14"]
    },
    {
        type: 'closed',
        question: "W pewnej grze rzuca się dwiema kostkami. Wygrywa się, gdy iloczyn oczek jest większy od 25. Jakie jest prawdopodobieństwo wygranej?",
        answers: [
            { text: "1/12", correct: false },
            { text: "3/36", correct: false },
            { text: "1/18", correct: false },
            { text: "1/12", correct: true } // (5,6),(6,5),(6,6) -> 3/36 = 1/12
        ]
    },
    { // Poprawka zad 24, bo powtórzenie odp.
        type: 'closed',
        question: "W pewnej grze rzuca się dwiema kostkami. Wygrywa się, gdy iloczyn oczek jest większy niż 25. Jakie jest prawdopodobieństwo wygranej?",
        answers: [
            { text: "1/36", correct: false },
            { text: "1/18", correct: false },
            { text: "1/12", correct: true },
            { text: "1/9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest różnych całkowitych wartości 'm', dla których punkt P=(m, 2m-3) leży wewnątrz koła o środku S=(0,0) i promieniu 5?",
        answer: ["4"]
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