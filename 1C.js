// --- Definicja pytań (z nowym polem "type") ---
const questions = [
    {
        type: 'closed',
        question: "Suma cyfr pewnej liczby dwucyfrowej wynosi 12. Jeśli przestawimy cyfry tej liczby, otrzymamy liczbę o 18 mniejszą. Jaka to liczba?",
        answers: [
            { text: "84", correct: false },
            { text: "93", correct: false },
            { text: "75", correct: true },
            { text: "66", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Cenę produktu obniżono o 20%, a następnie nową cenę podwyższono o 25%. Jak zmieniła się cena produktu w stosunku do ceny początkowej?",
        answers: [
            { text: "Wzrosła o 5%", correct: false },
            { text: "Zmalała o 5%", correct: false },
            { text: "Nie zmieniła się", correct: true },
            { text: "Wzrosła o 2,5%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest najmniejsza dodatnia liczba całkowita, która przy dzieleniu przez 3, 4 i 5 daje zawsze resztę 2?",
        answer: ["62"]
    },
    {
        type: 'closed',
        question: "W rombie o boku 13 cm jedna z przekątnych ma długość 24 cm. Jakie jest pole tego rombu?",
        answers: [
            { text: "156 cm²", correct: false },
            { text: "312 cm²", correct: false },
            { text: "120 cm²", correct: true },
            { text: "60 cm²", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (√48 - √27) / √3 jest równa:",
        answers: [
            { text: "√7", correct: false },
            { text: "1", correct: true },
            { text: "7", correct: false },
            { text: "√3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym jedna z przyprostokątnych jest o 7 cm krótsza od drugiej i o 8 cm krótsza od przeciwprostokątnej. Jaki jest obwód tego trójkąta?",
        answers: [
            { text: "24 cm", correct: false },
            { text: "30 cm", correct: true },
            { text: "40 cm", correct: false },
            { text: "15 cm", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Objętość sześcianu wynosi 216 cm³. Podaj długość przekątnej tego sześcianu (wynik zapisz w postaci a√b).",
        answer: ["6√3"]
    },
    {
        type: 'closed',
        question: "Rzucamy dwiema standardowymi sześciennymi kostkami do gry. Jakie jest prawdopodobieństwo, że iloczyn wyrzuconych oczek będzie liczbą pierwszą?",
        answers: [
            { text: "1/6", correct: true },
            { text: "1/12", correct: false },
            { text: "5/36", correct: false },
            { text: "7/36", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W kwadrat o boku 10 cm wpisano koło. Stosunek pola kwadratu do pola koła wynosi:",
        answers: [
            { text: "4 : π", correct: true },
            { text: "2 : π", correct: false },
            { text: "π : 4", correct: false },
            { text: "1 : 1", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba 4¹⁰ + 4¹⁰ + 4¹⁰ + 4¹⁰ jest równa:",
        answers: [
            { text: "4⁴⁰", correct: false },
            { text: "16¹⁰", correct: false },
            { text: "4¹¹", correct: true },
            { text: "16⁴⁰", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Średnia arytmetyczna pięciu liczb wynosi 12. Gdy usunięto jedną z nich, średnia pozostałych czterech wyniosła 10. Jaką liczbę usunięto?",
        answer: ["20"]
    },
    {
        type: 'closed',
        question: "W trójkącie równoramiennym ABC (|AC|=|BC|) kąt przy podstawie ma miarę 70°. Z wierzchołka C poprowadzono wysokość CD. Jaką miarę ma kąt BCD?",
        answers: [
            { text: "70°", correct: false },
            { text: "40°", correct: false },
            { text: "35°", correct: false },
            { text: "20°", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Dwa pociągi o długościach 150 m i 250 m jadą w przeciwnych kierunkach po równoległych torach. Pierwszy z prędkością 60 km/h, a drugi z prędkością 84 km/h. Ile sekund minie od momentu spotkania się ich czoł do momentu minięcia się ich końców?",
        answers: [
            { text: "15 s", correct: false },
            { text: "12 s", correct: false },
            { text: "10 s", correct: true },
            { text: "8 s", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest liczb całkowitych x spełniających nierówność 2(x - 1) ≤ 5x + 13?",
        // Rozwiązanie: 2x-2 <= 5x+13 -> -15 <= 3x -> -5 <= x. Nieskończenie wiele. Pytanie musi być inne.
        // Poprawka: Ile jest liczb całkowitych x spełniających JEDNOCZEŚNIE nierówności: x > -4 i 2x < 7?
        // x > -4 i x < 3.5. Liczby całkowite to: -3, -2, -1, 0, 1, 2, 3. Jest ich 7.
        question: "Ile jest liczb całkowitych x spełniających jednocześnie warunki: x > -3.5 i 2x ≤ 6?",
        answer: ["7"]
    },
    {
        type: 'closed',
        question: "Promień podstawy stożka ma 5 cm, a jego tworząca ma 13 cm. Jaka jest objętość tego stożka?",
        answers: [
            { text: "65π cm³", correct: false },
            { text: "325π cm³", correct: false },
            { text: "100π cm³", correct: true },
            { text: "120π cm³", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym o przyprostokątnych 6 i 8, promień okręgu opisanego na tym trójkącie jest równy:",
        answers: [
            { text: "10", correct: false },
            { text: "5", correct: true },
            { text: "4", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wyrażenie (2x - 3y)² - (2x + 3y)² po uproszczeniu ma postać kxy. Podaj wartość liczbową k.",
        answer: ["-24"]
    },
    {
        type: 'closed',
        question: "Mapa została wykonana w skali 1:50 000. Odległość między dwoma miastami na tej mapie wynosi 8 cm. Ile wynosi rzeczywista odległość między tymi miastami?",
        answers: [
            { text: "40 km", correct: false },
            { text: "4 km", correct: true },
            { text: "400 m", correct: false },
            { text: "0.4 km", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trapezie równoramiennym podstawy mają długość 10 cm i 22 cm, a pole wynosi 128 cm². Ile wynosi ramię tego trapezu?",
        answers: [
            { text: "8 cm", correct: false },
            { text: "12 cm", correct: false },
            { text: "10 cm", correct: true },
            { text: "6 cm", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Która z poniższych liczb jest największa?",
        answers: [
            { text: "2⁶⁰", correct: false },
            { text: "3⁴⁵", correct: true },
            { text: "4³⁰", correct: false },
            { text: "5¹⁵", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W akwarium w kształcie prostopadłościanu o wymiarach podstawy 50 cm x 40 cm, poziom wody podniósł się o 2 cm po wrzuceniu do niego kamienia. Jaka jest objętość kamienia w cm³?",
        answer: ["4000"]
    },
    {
        type: 'closed',
        question: "Dwa trójkąty podobne T1 i T2 mają pola równe odpowiednio 18 cm² i 32 cm². Stosunek obwodu trójkąta T1 do obwodu trójkąta T2 jest równy:",
        answers: [
            { text: "9:16", correct: false },
            { text: "√18:√32", correct: false },
            { text: "3:4", correct: true },
            { text: "2:3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli a = 3 - √5 i b = 3 + √5, to wartość wyrażenia a/b + b/a wynosi:",
        answers: [
            { text: "6", correct: false },
            { text: "9", correct: false },
            { text: "7", correct: true },
            { text: "14", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pudełku jest 15 kul: 5 czerwonych, 3 zielone i 7 niebieskich. Losujemy jedną kulę. Jakie jest prawdopodobieństwo, że wylosowana kula NIE będzie czerwona? (Odpowiedź podaj w postaci ułamka nieskracalnego a/b)",
        answer: ["2/3"]
    },
    {
        type: 'closed',
        question: "Punkt S = (3, -2) jest środkiem odcinka AB. Wiedząc, że A = (-1, 4), jakie są współrzędne punktu B?",
        answers: [
            { text: "(7, -8)", correct: true },
            { text: "(2, 2)", correct: false },
            { text: "(1, 1)", correct: false },
            { text: "(7, 8)", correct: false }
        ]
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