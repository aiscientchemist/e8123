const questions = [
    {
        type: 'closed',
        question: "Suma dwóch liczb naturalnych wynosi 8, a suma ich odwrotności to 8/15. Ile wynosi iloczyn tych liczb?",
        answers: [
            { text: "8", correct: false },
            { text: "15", correct: true },
            { text: "16", correct: false },
            { text: "64", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest miara kąta wewnętrznego w ośmiokącie foremnym? Podaj wynik w stopniach.",
        answer: ["135"]
    },
    {
        type: 'closed',
        question: "Która z poniższych liczb jest największa?",
        answers: [
            { text: "(1/2)⁻²⁰", correct: false },
            { text: "(1/3)⁻¹⁵", correct: true },
            { text: "(1/4)⁻¹⁰", correct: false },
            { text: "Wszystkie są równe", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest liczb dwucyfrowych, które przy dzieleniu przez 7 dają resztę 3?",
        answer: ["13"]
    },
    {
        type: 'closed',
        question: "Bryła powstała przez nałożenie półkuli o promieniu 3 cm na walec o tym samym promieniu podstawy i wysokości 5 cm. Jakie jest pole powierzchni całkowitej tej bryły?",
        answers: [
            { text: "57π cm²", correct: true },
            { text: "45π cm²", correct: false },
            { text: "63π cm²", correct: false },
            { text: "36π cm²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Liczba √(13 + 4√3) jest równa a + b√c, gdzie a, b, c są liczbami naturalnymi, a c jest liczbą pierwszą. Podaj sumę a+b+c.",
        answer: ["6"]
    },
    {
        type: 'closed',
        question: "W kwadrat o boku 4 losowo wybrano punkt. Jakie jest prawdopodobieństwo, że punkt ten leży w odległości nie większej niż 2 od środka kwadratu?",
        answers: [
            { text: "π/2", correct: false },
            { text: "π/4", correct: true },
            { text: "π/8", correct: false },
            { text: "1/2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkącie ABC boki mają długość 8, 10, 12. Trójkąt A'B'C' jest podobny do trójkąta ABC, a jego najdłuższy bok ma długość 30. Ile wynosi obwód trójkąta A'B'C'?",
        answers: [
            { text: "60", correct: false },
            { text: "72", correct: false },
            { text: "75", correct: true },
            { text: "90", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Podaj liczbę dzielników naturalnych liczby 360.",
        answer: ["24"]
    },
    {
        type: 'closed',
        question: "W okrąg wpisano trójkąt równoramienny ABC (|AC|=|BC|), w którym kąt między ramionami |∠ACB| = 30°. Ile wynosi miara kąta środkowego opartego na podstawie AB?",
        answers: [
            { text: "30°", correct: false },
            { text: "60°", correct: true },
            { text: "75°", correct: false },
            { text: "150°", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Cenę towaru podniesiono o 25%, a następnie obniżono o kwotę równą 1/4 nowej ceny. Końcowa cena towaru wynosi 200 zł. Jaka była cena początkowa?",
        answer: ["200"]
    },
    {
        type: 'closed',
        question: "Dwie proste o równaniach y = (m-2)x + 3 oraz y = -3x + 1 są prostopadłe. Wynika stąd, że:",
        answers: [
            { text: "m = -1", correct: false },
            { text: "m = 5", correct: false },
            { text: "m = 7/3", correct: true },
            { text: "m = 2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Sześcian i ostrosłup prawidłowy czworokątny mają identyczne podstawy. Jaki musi być stosunek wysokości ostrosłupa do wysokości (krawędzi) sześcianu, aby objętości obu brył były równe?",
        answers: [
            { text: "1:1", correct: false },
            { text: "2:1", correct: false },
            { text: "3:1", correct: true },
            { text: "1:3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pudełku jest 6 kul czerwonych i 4 niebieskie. Ania i Bartek losują kolejno po jednej kuli bez zwracania (Ania pierwsza). Jakie jest prawdopodobieństwo, że Bartek wylosuje kulę niebieską? Podaj wynik jako ułamek nieskracalny.",
        answer: ["2/5"]
    },
    {
        type: 'closed',
        question: "Liczba (2√5 - √10)² / √2 jest równa:",
        answers: [
            { text: "30√2 - 20", correct: false },
            { text: "15√2 - 20", correct: true },
            { text: "15 - 10√2", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trapezie równoramiennym przekątna o długości 10 cm jest prostopadła do ramienia o długości 6 cm. Pole tego trapezu wynosi:",
        answers: [
            { text: "30 cm²", correct: false },
            { text: "36 cm²", correct: false },
            { text: "48 cm²", correct: true },
            { text: "60 cm²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Bartek czyta książkę w tempie 15 stron na godzinę. Gdyby czytał o 5 stron na godzinę szybciej, skończyłby książkę 2 godziny wcześniej. Ile stron ma książka?",
        answer: ["120"]
    },
    {
        type: 'closed',
        question: "Punkty A=(-3, 2) i C=(5, 4) są przeciwległymi wierzchołkami kwadratu ABCD. Pole tego kwadratu jest równe:",
        answers: [
            { text: "68", correct: false },
            { text: "34", correct: true },
            { text: "16", correct: false },
            { text: "32", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia log₃(54) - log₃(2) jest równa:",
        answers: [
            { text: "log₃(52)", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "27", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Średnia arytmetyczna zestawu sześciu liczb: 3, 5, 8, x, 12, 14 jest równa 9. Jaka jest mediana tego zestawu liczb?",
        answer: ["8.5"]
    },
    {
        type: 'closed',
        question: "Przekątna graniastosłupa prawidłowego sześciokątnego (najdłuższa) ma długość 10. Krawędź podstawy ma długość 3. Jaka jest wysokość tego graniastosłupa?",
        answers: [
            { text: "√91", correct: false },
            { text: "√64", correct: false },
            { text: "8", correct: true },
            { text: "√109", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli 3/(x-2) = 5/(x+2), to x jest równe:",
        answers: [
            { text: "4", correct: false },
            { text: "1/2", correct: false },
            { text: "8", correct: true },
            { text: "-8", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W romb o kącie ostrym 30° wpisano koło o polu 9π. Oblicz pole tego rombu.",
        answer: ["72"]
    },
    {
        type: 'closed',
        question: "Pociąg o długości 200 m, jadący z prędkością 90 km/h, wjeżdża do tunelu o długości 1 km. Ile czasu upłynie od momentu wjechania czoła pociągu do tunelu do momentu wyjechania z niego końca ostatniego wagonu?",
        answers: [
            { text: "40 s", correct: false },
            { text: "44 s", correct: false },
            { text: "48 s", correct: true },
            { text: "52 s", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W systemie dwójkowym liczba 19 to 10011. Jak w systemie dwójkowym zapiszemy liczbę 38?",
        answer: ["100110"]
    }
];;

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