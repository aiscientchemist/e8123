const questions = [
    {
        type: 'closed',
        question: "Suma odwrotności dwóch dodatnich liczb naturalnych wynosi 5/36, a ich iloczyn to 36. Ile wynosi suma tych liczb?",
        answers: [
            { text: "5", correct: true },
            { text: "13", correct: false },
            { text: "15", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W kulę o promieniu 10 wpisano walec, którego wysokość jest równa promieniowi kuli. Jaki jest stosunek objętości walca do objętości kuli? (Odpowiedź podaj w postaci ułamka nieskracalnego a/b).",
        answer: ["9/16"]
    },
    {
        type: 'closed',
        question: "Pięciocyfrowa liczba 45X3Y jest podzielna przez 36. Jedną z możliwych wartości sumy X+Y jest:",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Maszyna A wykonuje pracę w 10 godzin, a maszyna B w 15 godzin. Obie maszyny pracowały razem przez 2 godziny, po czym maszyna A się zepsuła. Ile godzin potrzebuje maszyna B, aby samodzielnie dokończyć pracę?",
        answer: ["10"]
    },
    {
        type: 'closed',
        question: "W trójkącie ABC poprowadzono prostą równoległą do boku AB, przecinającą boki AC i BC odpowiednio w punktach D i E. Stosunek |CD|:|DA| = 3:2. Stosunek pola trapezu ABED do pola trójkąta CDE wynosi:",
        answers: [
            { text: "4:9", correct: false },
            { text: "2:3", correct: false },
            { text: "16:9", correct: true },
            { text: "5:3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (a+b+c)² jest równa 0. Jeśli a²+b²+c²=12, to ile wynosi ab+bc+ca?",
        answers: [
            { text: "-12", correct: false },
            { text: "-6", correct: true },
            { text: "6", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest różnych sposobów zapłaty kwoty 17 zł przy użyciu wyłącznie monet 2 zł i 5 zł?",
        answer: ["2"]
    },
    {
        type: 'closed',
        question: "Prosta przechodząca przez początek układu współrzędnych i środek okręgu (x-2)² + (y-4)² = 9 ma równanie:",
        answers: [
            { text: "y = 1/2 x", correct: false },
            { text: "y = 2x", correct: true },
            { text: "y = -2x", correct: false },
            { text: "y = -1/2 x", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest najmniejsza liczba naturalna, która ma dokładnie 8 dzielników?",
        answer: ["24"]
    },
    {
        type: 'closed',
        question: "Ze zbioru wszystkich liczb trzycyfrowych losujemy jedną. Jakie jest prawdopodobieństwo, że jest to palindrom (czyli liczba, która czytana od tyłu jest taka sama)?",
        answers: [
            { text: "1/10", correct: true },
            { text: "1/9", correct: false },
            { text: "1/100", correct: false },
            { text: "9/100", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym wysokość opuszczona na przeciwprostokątną dzieli ją w stosunku 1:4. Obwód trójkąta wynosi 60. Oblicz pole tego trójkąta.",
        answer: ["150"]
    },
    {
        type: 'closed',
        question: "Jaka jest cyfra setek w wyniku dodawania 1 + 11 + 111 + 1111 + ... + (liczba z 50 jedynkami)?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wysokość ostrosłupa prawidłowego trójkątnego tworzy z krawędzią boczną kąt 30°. Krawędź podstawy ma długość 6. Jaka jest objętość tego ostrosłupa?",
        answers: [
            { text: "18√3", correct: false },
            { text: "18", correct: true },
            { text: "27", correct: false },
            { text: "9√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pewnej klasie każdy uczeń uczy się języka niemieckiego lub angielskiego. 18 uczniów uczy się niemieckiego, 22 angielskiego, a 12 uczy się obu tych języków. Ilu uczniów liczy ta klasa?",
        answer: ["28"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia log₅(√5 * ∛5 / ⁵√5) jest równa:",
        answers: [
            { text: "19/30", correct: true },
            { text: "11/30", correct: false },
            { text: "2/3", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Cena towaru wynosiła 1000 zł. Najpierw podniesiono ją o 10%, a następnie o 20%. O ile procent należy teraz obniżyć cenę, aby wróciła do 1000 zł?",
        answers: [
            { text: "o 30%", correct: false },
            { text: "o 32%", correct: false },
            { text: "o ok. 24,2%", correct: true },
            { text: "o 25%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie równoramiennym podstawa ma długość 10, a kąt przy podstawie ma miarę 30°. Oblicz promień okręgu opisanego na tym trójkącie.",
        answer: ["10"]
    },
    {
        type: 'closed',
        question: "Samochód przejechał z miasta A do B ze średnią prędkością 50 km/h. W drodze powrotnej jego prędkość wzrosła o 20%. Średnia prędkość na całej trasie wynosiła:",
        answers: [
            { text: "54.5 km/h", correct: false },
            { text: "54 i 6/11 km/h", correct: true },
            { text: "55 km/h", correct: false },
            { text: "56 km/h", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trapezie ramiona mają długości 8 i 15, a wysokość wynosi 12. Krótsza podstawa ma długość 10. Pole tego trapezu może wynosić:",
        answers: [
            { text: "174", correct: false },
            { text: "156 lub 174", correct: false },
            { text: "126 lub 174", correct: true },
            { text: "126", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Punkty A=(2, -1), B=(6, 2) i C=(2, 5) są wierzchołkami rombu ABCD. Oblicz pole tego rombu.",
        answer: ["24"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia 9⁹ + 9⁹ + 9⁹ jest równa:",
        answers: [
            { text: "27⁹", correct: false },
            { text: "9²⁷", correct: false },
            { text: "3¹⁹", correct: true },
            { text: "9¹⁰", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Trójkąt równoboczny ABC ma bok długości 6. Obrócono go o 60° wokół wierzchołka A. Jakie jest pole części wspólnej trójkąta ABC i jego obrazu w tym obrocie?",
        answers: [
            { text: "3√3", correct: false },
            { text: "4.5√3", correct: false },
            { text: "6√3", correct: true },
            { text: "9√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Statek przepłynął 60 km z prądem rzeki w 3 godziny, a wrócił pod prąd w 5 godzin. Jaka jest prędkość własna statku w km/h?",
        answer: ["16"]
    },
    {
        type: 'closed',
        question: "Ile jest par liczb całkowitych (x, y), które spełniają równanie x*y = 24?",
        answers: [
            { text: "4", correct: false },
            { text: "8", correct: false },
            { text: "16", correct: true },
            { text: "nieskończenie wiele", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pole powierzchni bocznej walca jest równe 60π, a jego objętość to 90π. Oblicz promień podstawy tego walca.",
        answer: ["3"]
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