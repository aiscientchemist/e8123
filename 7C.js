const questions = [
    {
        type: 'closed',
        question: "Przekątna prostokąta ma długość 13 cm, a jego obwód wynosi 34 cm. Jakie jest pole tego prostokąta?",
        answers: [
            { text: "42 cm²", correct: false },
            { text: "52 cm²", correct: false },
            { text: "60 cm²", correct: true },
            { text: "78 cm²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pole powierzchni bocznej stożka jest dwa razy większe od pola jego podstawy. Wyznacz miarę kąta (w stopniach), jaki tworzy tworząca stożka z jego wysokością.",
        answer: ["30"]
    },
    {
        type: 'closed',
        question: "Jaka jest reszta z dzielenia liczby 2¹⁰⁰ przez 3?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "Nie można tego określić", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Średnia arytmetyczna ocen dziesięciu chłopców w klasie wynosi 3.6, a średnia ocen piętnastu dziewcząt w tej samej klasie wynosi 4.1. Jaka jest średnia ocen całej, 25-osobowej klasy?",
        answers: [
            { text: "3.85", correct: false },
            { text: "3.9", correct: true },
            { text: "3.95", correct: false },
            { text: "4.0", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym wysokość opuszczona na przeciwprostokątną ma długość 4, a rzut jednej z przyprostokątnych na przeciwprostokątną ma długość 2. Oblicz długość przeciwprostokątnej.",
        answer: ["10"]
    },
    {
        type: 'closed',
        question: "Ile jest liczb trzycyfrowych, w których cyfra setek jest równa sumie cyfry dziesiątek i cyfry jedności?",
        answers: [
            { text: "45", correct: false },
            { text: "50", correct: false },
            { text: "54", correct: false },
            { text: "55", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Stożek przecięto płaszczyzną równoległą do podstawy, przechodzącą przez środek jego wysokości. Jaki jest stosunek objętości powstałego mniejszego stożka do objętości całego stożka?",
        answers: [
            { text: "1:2", correct: false },
            { text: "1:4", correct: false },
            { text: "1:8", correct: true },
            { text: "1:16", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest najmniejsza dodatnia liczba całkowita, która ma dokładnie 12 dzielników naturalnych?",
        answer: ["60"]
    },
    {
        type: 'closed',
        question: "W trójkącie równoramiennym ABC ramię jest o 3 cm dłuższe od podstawy. Obwód trójkąta wynosi 36 cm. Wysokość opuszczona na podstawę ma długość:",
        answers: [
            { text: "12 cm", correct: false },
            { text: "10 cm", correct: false },
            { text: "9 cm", correct: false },
            { text: "√119 cm", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Prosta przechodząca przez punkty A=(1, 5) i B=(-2, -1) przecina oś OY w punkcie P. Jakie są współrzędne punktu P?",
        answers: [
            { text: "(0, 2)", correct: false },
            { text: "(0, 3)", correct: true },
            { text: "(0, 4)", correct: false },
            { text: "(3, 0)", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Cenę produktu obniżono najpierw o 10%, a następnie o 20%. Ostateczna cena to 144 zł. Jaka była cena początkowa tego produktu?",
        answer: ["200"]
    },
    {
        type: 'closed',
        question: "Jeżeli a = log₂12 i b = log₂3, to wartość wyrażenia a - b jest równa:",
        answers: [
            { text: "log₂9", correct: false },
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "log₂4", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Dwa okręgi o promieniach 3 cm i 9 cm są styczne zewnętrznie. Jaka jest długość wspólnej stycznej do tych okręgów (odcinka łączącego punkty styczności)?",
        answers: [
            { text: "12 cm", correct: false },
            { text: "6√3 cm", correct: true },
            { text: "9 cm", correct: false },
            { text: "6√2 cm", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Rzucamy trzy razy symetryczną monetą. Jakie jest prawdopodobieństwo, że orzeł wypadnie dokładnie dwa razy? Odpowiedź podaj w postaci ułamka nieskracalnego a/b.",
        answer: ["3/8"]
    },
    {
        type: 'closed',
        question: "Liczba a = (√3 - 2)² + 4√3. Wobec tego:",
        answers: [
            { text: "a = 7", correct: true },
            { text: "a = 1", correct: false },
            { text: "a = 7 + 8√3", correct: false },
            { text: "a = 1 + 8√3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wszystkie ściany boczne ostrosłupa prawidłowego sześciokątnego są trójkątami równobocznymi. Jaką miarę ma kąt między sąsiednimi krawędziami bocznymi tego ostrosłupa?",
        answers: [
            { text: "120°", correct: false },
            { text: "90°", correct: false },
            { text: "60°", correct: true },
            { text: "45°", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pudełku jest 5 kul białych i 3 czarne. Losujemy jedną kulę, odkładamy ją na bok, a następnie losujemy drugą. Jakie jest prawdopodobieństwo, że obie wylosowane kule będą tego samego koloru?",
        answer: ["13/28"]
    },
    {
        type: 'closed',
        question: "Punkty A=(-2, 1), B=(4, -1), C=(2, 5) są wierzchołkami trójkąta. Pole tego trójkąta jest równe:",
        answers: [
            { text: "12", correct: false },
            { text: "16", correct: false },
            { text: "20", correct: true },
            { text: "24", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Układ równań 2x + y = 4 i 3x - 2y = 13 ma rozwiązanie (x, y). Wartość wyrażenia x - y jest równa:",
        answers: [
            { text: "5", correct: true },
            { text: "1", correct: false },
            { text: "-1", correct: false },
            { text: "-5", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ania jest dwa razy starsza od Basi. Trzy lata temu była od niej trzy razy starsza. Ile lat ma obecnie Ania?",
        answer: ["12"]
    },
    {
        type: 'closed',
        question: "W trapezie ABCD o podstawach AB i CD, przekątne przecinają się w punkcie S. Pola trójkątów ABS i CDS wynoszą odpowiednio 25 cm² i 9 cm². Pole całego trapezu jest równe:",
        answers: [
            { text: "34 cm²", correct: false },
            { text: "49 cm²", correct: false },
            { text: "64 cm²", correct: true },
            { text: "100 cm²", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wyrażenie 9ˣ - 4 można zapisać jako:",
        answers: [
            { text: "(3ˣ - 2)²", correct: false },
            { text: "(3ˣ - 2)(3ˣ + 2)", correct: true },
            { text: "(3ˣ - 4)(3ˣ + 1)", correct: false },
            { text: "(9ˣ⁻²)(9ˣ⁺²)", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Obwód rombu wynosi 40, a jedna z jego przekątnych ma długość 12. Oblicz długość drugiej przekątnej.",
        answer: ["16"]
    },
    {
        type: 'closed',
        question: "Cenę nart, które kosztowały 1200 zł, podniesiono o 20%, a po sezonie obniżono nową cenę o 30%. Ostateczna cena nart wynosiła:",
        answers: [
            { text: "1080 zł", correct: false },
            { text: "1008 zł", correct: true },
            { text: "960 zł", correct: false },
            { text: "1100 zł", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma cyfr liczby dwucyfrowej jest równa 11. Jeśli do tej liczby dodamy 27, to otrzymamy liczbę o przestawionych cyfrach. Jaka to liczba?",
        answer: ["47"]
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