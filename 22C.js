const questions = [
    {
        type: 'closed',
        question: "Suma kwadratów trzech kolejnych dodatnich liczb nieparzystych wynosi 251. Jaka jest największa z tych liczb?",
        answers: [
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trapezie równoramiennym podstawy mają długość 12 i 28. Przekątne tego trapezu są prostopadłe. Oblicz pole tego trapezu.",
        answer: ["400"]
    },
    {
        type: 'closed',
        question: "Ile jest równa wartość wyrażenia 8⁻³ : (1/4)⁴?",
        answers: [
            { text: "1/2", correct: true },
            { text: "2", correct: false },
            { text: "1/8", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o obwodzie 80, promień okręgu opisanego na tym trójkącie wynosi 17. Oblicz pole tego trójkąta.",
        answer: ["240"]
    },
    {
        type: 'closed',
        question: "W ostrosłupie prawidłowym czworokątnym krawędź boczna o długości 12 tworzy z wysokością ostrosłupa kąt 30°. Objętość tego ostrosłupa jest równa:",
        answers: [
            { text: "72√3", correct: false },
            { text: "144√3", correct: true },
            { text: "216", correct: false },
            { text: "432", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jaka jest cyfra jedności liczby 2¹⁰⁰ + 3¹⁰⁰ + 4¹⁰⁰?",
        answers: [
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "7", correct: false },
            { text: "3", correct: true } // 6+1+6 = 13
        ]
    },
    { // Poprawka zad. 6
        type: 'closed',
        question: "Jaka jest cyfra jedności liczby 2¹⁰⁰ + 3¹⁰¹ + 4¹⁰²?",
        answers: [
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest liczb trzycyfrowych, w których cyfra setek jest większa od cyfry dziesiątek, a cyfra dziesiątek jest większa od cyfry jedności?",
        answer: ["120"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia log₃(tg 60°)* log√2(cos 45°) jest równa:",
        answers: [
            { text: "1/2", correct: false },
            { text: "-1/2", correct: true },
            { text: "1", correct: false },
            { text: "-1", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie ABC, kąt przy wierzchołku A ma 45°, a przy wierzchołku B ma 30°. Bok BC ma długość 8√2. Oblicz długość boku AC.",
        answer: ["8"]
    },
    {
        type: 'closed',
        question: "Pociąg o długości 250 m jedzie z prędkością 60 km/h. Ile sekund potrzebuje, aby przejechać przez most o długości 750 m?",
        answers: [
            { text: "45", correct: false },
            { text: "60", correct: true },
            { text: "75", correct: false },
            { text: "90", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pudełku jest 20 kul: białe, czerwone i zielone. Kul białych jest 2 razy więcej niż czerwonych, a czerwonych 3 razy mniej niż zielonych. Jakie jest prawdopodobieństwo wylosowania kuli, która nie jest zielona? (Odpowiedź podaj w postaci ułamka nieskracalnego)",
        answer: ["2/5"]
    },
    {
        type: 'closed',
        question: "Prosta o równaniu ax + 2y - 6 = 0 jest równoległa do prostej 3x - y + 5 = 0. Współczynnik 'a' jest równy:",
        answers: [
            { text: "3", correct: false },
            { text: "-3", correct: false },
            { text: "6", correct: false },
            { text: "-6", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Na działce w kształcie koła o promieniu 10 m, 20% powierzchni zajmują kwiaty, a resztę trawnik. Pole trawnika wynosi:",
        answers: [
            { text: "20π m²", correct: false },
            { text: "80π m²", correct: true },
            { text: "100π m²", correct: false },
            { text: "20 m²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma dwóch liczb wynosi 14, a suma ich sześcianów 1232. Podaj wartość iloczynu tych liczb.",
        answer: ["33"]
    },
    {
        type: 'closed',
        question: "W trójkąt równoboczny wpisano koło, a w to koło wpisano trójkąt równoboczny. Jaki jest stosunek pola większego trójkąta do pola mniejszego trójkąta?",
        answers: [
            { text: "2:1", correct: false },
            { text: "3:1", correct: false },
            { text: "4:1", correct: true },
            { text: "√3:1", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba √(9 - 4√5) jest równa:",
        answers: [
            { text: "3 - 2√5", correct: false },
            { text: "2 - √5", correct: false },
            { text: "√5 - 2", correct: true },
            { text: "√5 - 3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W układzie współrzędnych dane są punkty A=(-2,-3) i B=(4,5). Wyznacz współrzędne punktu C, który dzieli odcinek AB w stosunku 1:3 (licząc od punktu A).",
        answer: ["-0.5, -1"]
    },
    {
        type: 'closed',
        question: "Ile jest dodatnich liczb całkowitych 'n', dla których wyrażenie (n+30)/n jest liczbą całkowitą?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W rosnącym ciągu arytmetycznym drugi wyraz jest równy 5, a piąty 14. Suma dziesięciu pierwszych wyrazów tego ciągu wynosi:",
        answers: [
            { text: "145", correct: false },
            { text: "155", correct: true },
            { text: "160", correct: false },
            { text: "175", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trapezie prostokątnym o kącie ostrym 45°, krótsza podstawa i wysokość mają tę samą długość, równą 8. Oblicz obwód tego trapezu (wynik zapisz w postaci a + b√c).",
        answer: ["32+8√2"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia 1/(2*3) + 1/(3*4) + 1/(4*5) + ... + 1/(99*100) jest równa:",
        answers: [
            { text: "0.49", correct: true },
            { text: "0.5", correct: false },
            { text: "0.98", correct: false },
            { text: "0.99", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Dwa sześciany mają objętości równe odpowiednio 24 cm³ i 81 cm³. Jaki jest stosunek długości krawędzi mniejszego sześcianu do krawędzi większego?",
        answers: [
            { text: "2:3", correct: true },
            { text: "4:9", correct: false },
            { text: "8:27", correct: false },
            { text: "√2:√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Rowerzysta jedzie z A do B. Połowę czasu podróży jedzie z prędkością 10 km/h, a drugą połowę czasu z prędkością 20 km/h. Jaka jest jego średnia prędkość na całej trasie?",
        answer: ["15"]
    },
    {
        type: 'closed',
        question: "Na ile sposobów można rozmieścić 4 różne kule w 3 różnych szufladach, tak aby żadna szuflada nie była pusta?",
        answers: [
            { text: "24", correct: false },
            { text: "36", correct: true },
            { text: "64", correct: false },
            { text: "81", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Liczba n! kończy się dokładnie 6 zerami. Jaka jest najmniejsza możliwa wartość n?",
        answer: ["25"]
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