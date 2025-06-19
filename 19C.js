const questions = [
    {
        type: 'closed',
        question: "Różnica sześcianów dwóch kolejnych liczb naturalnych wynosi 91. Ile wynosi suma tych liczb?",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "13", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie równoramiennym o obwodzie 36, wysokość opuszczona na podstawę ma długość 12. Oblicz pole tego trójkąta.",
        answer: ["60"]
    },
    {
        type: 'closed',
        question: "Liczba a = 3³³ , b = 5²² , c = 7¹¹. Która z poniższych nierówności jest prawdziwa?",
        answers: [
            { text: "c < b < a", correct: true },
            { text: "b < c < a", correct: false },
            { text: "a < b < c", correct: false },
            { text: "c < a < b", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma dwóch liczb jest równa 2√6, a ich różnica to 2√2. Oblicz iloczyn tych liczb.",
        answer: ["4"]
    },
    {
        type: 'closed',
        question: "Prosta k jest prostopadła do prostej l: y = -x/2 + 4 i jest styczna w punkcie (0, 5) do okręgu. Jaki jest środek tego okręgu?",
        answers: [
            { text: "(-2, 4)", correct: false },
            { text: "(2, 1)", correct: false },
            { text: "(-2, 1)", correct: false },
            { text: "(-1, 3)", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Do 3 kg solanki o stężeniu 10% dolano 2 kg solanki o stężeniu 25%. Jakie jest stężenie procentowe otrzymanej mieszaniny?",
        answers: [
            { text: "15%", correct: false },
            { text: "16%", correct: true },
            { text: "17.5%", correct: false },
            { text: "20%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W ostrosłupie prawidłowym sześciokątnym krawędź podstawy ma długość 4, a wysokość ostrosłupa 6. Oblicz długość krawędzi bocznej.",
        answer: ["2√13"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (1 - 2 + 3 - 4 + ... + 99 - 100) jest równa:",
        answers: [
            { text: "50", correct: false },
            { text: "-50", correct: true },
            { text: "100", correct: false },
            { text: "-100", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Na tarczy zegara o godzinie 8:20, jaki jest mniejszy kąt między wskazówkami? (Podaj wynik w stopniach)",
        answer: ["130"]
    },
    {
        type: 'closed',
        question: "Ile jest liczb czterocyfrowych, w których cyfra tysięcy jest nieparzysta, a pozostałe cyfry są parzyste i różne od siebie?",
        answers: [
            { text: "120", correct: false },
            { text: "180", correct: false },
            { text: "240", correct: true },
            { text: "300", correct: false }
        ]

    },
    {
        type: 'open',
        question: "Suma n początkowych wyrazów ciągu geometrycznego wyraża się wzorem Sn = 3(2ⁿ - 1). Oblicz czwarty wyraz tego ciągu.",
        answer: ["24"]
    },
    {
        type: 'closed',
        question: "Liczba log₂√2(16) jest równa:",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "8", correct: true },
            { text: "16", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Dwa trójkąty równoboczne o boku 6 są tak nałożone na siebie, że tworzą gwiazdę sześcioramienną (heksagram). Pole tej gwiazdy jest równe:",
        answers: [
            { text: "9√3", correct: false },
            { text: "12√3", correct: true },
            { text: "15√3", correct: false },
            { text: "18√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Rzucamy dwiema kostkami do gry. Jakie jest prawdopodobieństwo, że suma oczek będzie większa od ich iloczynu? (Podaj wynik w postaci ułamka nieskracalnego)",
        answer: ["11/36"]
    },
    {
        type: 'closed',
        question: "Jeżeli a/b = 2/3 i b/c = 4/5, to a/c jest równe:",
        answers: [
            { text: "2/5", correct: false },
            { text: "8/15", correct: true },
            { text: "6/15", correct: false },
            { text: "10/12", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Odległość punktu P=(4, -2) od prostej 3x - 4y - 5 = 0 jest równa:",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkąt o bokach 13, 14, 15 wpisano koło. Oblicz promień tego koła.",
        answer: ["4"]
    },
    {
        type: 'closed',
        question: "Po obniżce ceny o 30% sweter kosztuje 84 zł. Ile kosztowałby ten sweter, gdyby jego cenę obniżono o 15%?",
        answers: [
            { text: "120 zł", correct: false },
            { text: "102 zł", correct: true },
            { text: "96 zł", correct: false },
            { text: "105 zł", correct: false }
        ]
    },

    { // Poprawka zad. 19
        type: 'closed',
        question: "W trapezie równoramiennym przekątna jest dwusieczną kąta ostrego. Krótsza podstawa jest równa ramieniu i ma długość 10. Dłuższa podstawa ma długość:",
        answers: [
            { text: "12.5", correct: false },
            { text: "15", correct: true },
            { text: "17.5", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia ∛(10²⁰²⁴ + 10²⁰²⁴ + ... + 10²⁰²⁴) (dziesięć składników) jest potęgą liczby 10. Jaki jest wykładnik tej potęgi?",
        answer: ["675"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia √(11 - 6√2) jest równa:",
        answers: [
            { text: "√11 - √6√2", correct: false },
            { text: "3 - √2", correct: true },
            { text: "√2 - 3", correct: false },
            { text: "1 - √10", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Pociąg o długości 100 m mija stojącego obserwatora w ciągu 5 sekund. Z jaką prędkością (w km/h) jedzie ten pociąg?",
        answers: [
            { text: "20 km/h", correct: false },
            { text: "36 km/h", correct: false },
            { text: "72 km/h", correct: true },
            { text: "90 km/h", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest różnych trójkątów prostokątnych o bokach całkowitych, których jeden z boków ma długość 12?",
        answer: ["8"]
    },
    {
        type: 'closed',
        question: "Wszystkie ściany graniastosłupa prostego są kwadratami. Stosunek pola powierzchni całkowitej do pola podstawy wynosi:",
        answers: [
            { text: "4:1", correct: false },
            { text: "5:1", correct: false },
            { text: "6:1", correct: true },
            { text: "Zależy od długości boku", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W biegu na 100m startuje 6 zawodników. Na ile sposobów mogą oni ukończyć bieg (zakładając, że nie ma miejsc ex aequo)?",
        answer: ["720"]
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