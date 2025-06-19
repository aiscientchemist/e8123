const questions = [
    {
        type: 'closed',
        question: "Suma kwadratów trzech kolejnych liczb naturalnych wynosi 110. Jaka jest środkowa z tych liczb?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W romb o boku 10 i wysokości 8 wpisano koło. Jakie jest pole tego koła? (Odpowiedź zapisz w formie aπ)",
        answer: ["16π"]
    },
    {
        type: 'closed',
        question: "Która z poniższych liczb NIE jest kwadratem liczby całkowitej?",
        answers: [
            { text: "4¹¹", correct: false },
            { text: "9²⁵", correct: false },
            { text: "8⁹", correct: true },
            { text: "25³⁶", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Trzy identyczne pompy, pracując razem, napełniają basen w 5 godzin. Ile godzin zajęłoby napełnienie tego samego basenu pięciu takim pompom?",
        answer: ["3"]
    },
    {
        type: 'closed',
        question: "Kwadratową kartkę papieru złożono na pół, tworząc prostokąt. Obwód tego prostokąta wynosi 18 cm. Jakie było pole kwadratowej kartki przed złożeniem?",
        answers: [
            { text: "24 cm²", correct: false },
            { text: "36 cm²", correct: true },
            { text: "49 cm²", correct: false },
            { text: "81 cm²", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Długości boków trójkąta wyrażają się liczbami całkowitymi. Dwa boki mają długość 8 i 3. Ile wynosi obwód tego trójkąta, jeśli jest on równoramienny?",
        answers: [
            { text: "14", correct: false },
            { text: "19", correct: true },
            { text: "14 lub 19", correct: false },
            { text: "Nie można tego ustalić", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o przyprostokątnych a i b oraz przeciwprostokątnej c prawdziwa jest zależność log(c+b) + log(c-b) = 2log(a). Jaki jest stosunek c/a?",
        answer: ["√2"]
    },
    {
        type: 'closed',
        question: "Cena akcji wzrosła o 60%, a następnie spadła o 50%. W wyniku tych zmian cena akcji:",
        answers: [
            { text: "wzrosła o 10%", correct: false },
            { text: "spadła o 10%", correct: false },
            { text: "wzrosła o 20%", correct: false },
            { text: "spadła o 20%", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia (√2)¹² * (√8)⁻³ zapisano w postaci potęgi 2ᵏ. Podaj wartość k.",
        answer: ["1.5"]
    },
    {
        type: 'closed',
        question: "Wszystkie krawędzie ostrosłupa prawidłowego czworokątnego mają długość 'a'. Pole powierzchni całkowitej tego ostrosłupa wynosi:",
        answers: [
            { text: "a²(1 + √3)", correct: true },
            { text: "2a²", correct: false },
            { text: "a²√3", correct: false },
            { text: "5a²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma dwóch liczb to 20, a suma ich kwadratów jest najmniejsza z możliwych. Podaj te liczby.",
        answer: ["10 i 10", "10, 10"]
    },
    {
        type: 'closed',
        question: "W trójkącie ABC, którego pole wynosi 48, poprowadzono środkowe AD, BE, CF, które przecięły się w punkcie S. Pole trójkąta ABS jest równe:",
        answers: [
            { text: "8", correct: false },
            { text: "12", correct: false },
            { text: "16", correct: true },
            { text: "24", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jaka jest cyfra jedności liczby 2023¹⁰⁰?",
        answers: [
            { text: "1", correct: true },
            { text: "3", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ze zbioru {1, 2, ..., 10} losujemy dwie różne liczby. Jakie jest prawdopodobieństwo, że ich iloczyn jest liczbą nieparzystą? (Odpowiedź podaj w postaci ułamka nieskracalnego a/b)",
        answer: ["2/9"]
    },
    {
        type: 'closed',
        question: "Jeśli log₂(x) + log₂(x-2) = 3, to x jest równe:",
        answers: [
            { text: "3", correct: false },
            { text: "-2", correct: false },
            { text: "4", correct: true },
            { text: "Nie ma takiego x", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trapezie równoramiennym podstawy mają długość 5 i 11, a pole wynosi 32. Długość ramienia tego trapezu wynosi:",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "√41", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Prostokąt o bokach 12 i 16 ma takie samo pole jak pewien romb. Jedna z przekątnych rombu ma długość 24. Oblicz obwód tego rombu.",
        answer: ["80"]
    },
    {
        type: 'closed',
        question: "Punkty A=(-1, 2), B=(7, 2), C=(3, 8) są wierzchołkami trójkąta. Jest to trójkąt:",
        answers: [
            { text: "ostrokątny", correct: false },
            { text: "prostokątny", correct: false },
            { text: "rozwartokątny", correct: false },
            { text: "równoramienny", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli a⁴ - b⁴ = 7 i a² + b² = 7, to a jest równe:",
        answers: [
            { text: "1", correct: false },
            { text: "√2", correct: false },
            { text: "2", correct: true },
            { text: "√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pojemnik jest w 1/4 pełny. Gdy dolejemy 3 litry wody, będzie w 2/5 pełny. Jaka jest pojemność pojemnika w litrach?",
        answer: ["20"]
    },
    {
        type: 'closed',
        question: "W okrąg o promieniu 5 wpisano trójkąt prostokątny. Suma długości przyprostokątnych tego trójkąta wynosi 14. Pole tego trójkąta jest równe:",
        answers: [
            { text: "12", correct: false },
            { text: "24", correct: true },
            { text: "35", correct: false },
            { text: "48", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W pewnej firmie mężczyźni stanowią 60% załogi. 20% mężczyzn i 30% kobiet ma wykształcenie wyższe. Jaki procent całej załogi ma wykształcenie wyższe?",
        answers: [
            { text: "24%", correct: true },
            { text: "25%", correct: false },
            { text: "26%", correct: false },
            { text: "50%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Rowerzysta przejechał trasę 30 km w pewnym czasie. Gdyby jego średnia prędkość była o 5 km/h większa, przejechałby tę trasę w czasie o 30 minut krótszym. Jaka była jego początkowa prędkość w km/h?",
        answer: ["15"]
    },
    {
        type: 'closed',
        question: "Prosta przechodząca przez I i III ćwiartkę układu współrzędnych, nachylona do osi OX pod kątem 45°, to prosta o równaniu:",
        answers: [
            { text: "y = x", correct: true },
            { text: "y = -x", correct: false },
            { text: "y = x + 1", correct: false },
            { text: "y = 1", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Sześcian o krawędzi 5 cm jest zbudowany z małych, pomalowanych na biało sześcianików o krawędzi 1 cm. Zewnętrzne ściany dużego sześcianu pomalowano na czerwono. Ile małych sześcianików pozostało w całości białych?",
        answer: ["27"]
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