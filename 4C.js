const questions = [
    {
        type: 'closed',
        question: "Suma dwóch liczb wynosi 15, a różnica ich kwadratów jest równa 45. Mniejsza z tych liczb to:",
        answers: [
            { text: "3", correct: false },
            { text: "9", correct: false },
            { text: "6", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Krótsza przekątna sześciokąta foremnego ma długość 12 cm. Oblicz pole tego sześciokąta (wynik zapisz w postaci a√b).",
        answer: ["72√3"]
    },
    {
        type: 'closed',
        question: "Która z poniższych liczb jest największa?",
        answers: [
            { text: "9²⁰", correct: false },
            { text: "27¹⁴", correct: true },
            { text: "81¹⁰", correct: false },
            { text: "3³⁹", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Łódka płynie z prądem rzeki z prędkością 12 km/h, a pod prąd z prędkością 6 km/h. Jaką odległość (w obie strony) pokonała łódka, jeśli cała podróż trwała 9 godzin?",
        answers: [
            { text: "36 km", correct: false },
            { text: "54 km", correct: false },
            { text: "72 km", correct: true },
            { text: "81 km", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest suma miar kątów wewnętrznych w siedmiokącie wypukłym? Podaj wynik w stopniach.",
        answer: ["900"]
    },
    {
        type: 'closed',
        question: "W prostokącie jeden bok skrócono o 10%, a drugi wydłużono o 10%. Jak zmieniło się pole tego prostokąta?",
        answers: [
            { text: "Nie zmieniło się", correct: false },
            { text: "Wzrosło o 1%", correct: false },
            { text: "Zmalało o 1%", correct: true },
            { text: "Zmalało o 10%", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Długość krawędzi sześcianu zwiększono o 10%. O ile procent wzrosła objętość tego sześcianu?",
        answers: [
            { text: "o 10%", correct: false },
            { text: "o 30%", correct: false },
            { text: "o 21%", correct: false },
            { text: "o 33,1%", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Liczba √(7 - 4√3) jest równa a - √b, gdzie a i b są liczbami naturalnymi. Podaj wartość a+b.",
        // √(4 - 4√3 + 3) = √((2-√3)²) = 2-√3. a=2, b=3. a+b=5.
        answer: ["5"]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym ABC środkowa poprowadzona z wierzchołka kąta prostego C ma długość 8 cm. Pole tego trójkąta wynosi 32 cm². Jaki jest jego obwód?",
        answers: [
            { text: "16 + 8√2 cm", correct: true },
            { text: "32 cm", correct: false },
            { text: "24 cm", correct: false },
            { text: "16 + 4√2 cm", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Ze zbioru liczb dwucyfrowych losujemy jedną. Jakie jest prawdopodobieństwo, że suma jej cyfr jest równa 5?",
        answers: [
            { text: "1/18", correct: true },
            { text: "5/99", correct: false },
            { text: "4/89", correct: false },
            { text: "1/15", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Kasia jest o 4 lata starsza od Basi. Za 6 lat będą miały razem 44 lata. Ile lat ma obecnie Kasia?",
        answer: ["18"]
    },
    {
        type: 'closed',
        question: "W walec o promieniu podstawy 6 cm i wysokości 10 cm wpisano stożek o tej samej podstawie i wysokości. Ile wynosi stosunek objętości walca do objętości części walca pozostałej po wycięciu stożka?",
        answers: [
            { text: "3:1", correct: false },
            { text: "3:2", correct: true },
            { text: "2:1", correct: false },
            { text: "1:2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba 0,1(23) jest równa ułamkowi:",
        answers: [
            { text: "123/1000", correct: false },
            { text: "122/990", correct: true },
            { text: "123/999", correct: false },
            { text: "122/900", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pudełku jest 10 kul, w tym 4 białe. Losujemy kolejno bez zwracania dwie kule. Jakie jest prawdopodobieństwo, że obie wylosowane kule będą białe? Odpowiedź podaj w postaci ułamka nieskracalnego a/b.",
        answer: ["2/15"]
    },
    {
        type: 'closed',
        question: "Punkty A=(-2, -3), B=(4, 1), C=(-1, 3) są wierzchołkami trójkąta. Prosta zawierająca wysokość opuszczoną z wierzchołka C na bok AB ma równanie:",
        answers: [
            { text: "y = -2/3 x + 7/3", correct: false },
            { text: "y = 2/3 x + 11/3", correct: false },
            { text: "y = -3/2 x + 3/2", correct: true },
            { text: "y = 3/2 x + 9/2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli 2ᵃ = 5 i 5ᵇ = 8, to ile wynosi iloczyn a*b?",
        answers: [
            { text: "40", correct: false },
            { text: "log₂8", correct: false },
            { text: "3", correct: true },
            { text: "Nie da się obliczyć", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest liczb czterocyfrowych o niepowtarzających się cyfrach, które są podzielne przez 5?",
        answer: ["952"]
    },
    {
        type: 'closed',
        question: "W trapezie prostokątnym o wysokości 12, krótsza podstawa i ramię nieprostopadłe do podstaw mają tę samą długość. Dłuższa podstawa ma 18. Pole tego trapezu wynosi:",
        answers: [
            { text: "156", correct: true },
            { text: "168", correct: false },
            { text: "180", correct: false },
            { text: "216", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Reszta z dzielenia liczby (2023² - 2021²) przez 10 jest równa:",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: true }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym stosunek długości przyprostokątnych wynosi 3:4. Obwód tego trójkąta jest równy 60. Oblicz długość przeciwprostokątnej.",
        answer: ["25"]
    },
    {
        type: 'closed',
        question: "W okrąg o promieniu R=10 wpisano kwadrat. W ten kwadrat wpisano okrąg o promieniu r. Ile wynosi stosunek R/r?",
        answers: [
            { text: "2", correct: false },
            { text: "√2", correct: true },
            { text: "√3", correct: false },
            { text: "4/π", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Do 2 kg wody wlano 0,5 litra soku o gęstości 1,2 kg/l. Jakie jest stężenie procentowe (masowe) soku w otrzymanym napoju?",
        answers: [
            { text: "20%", correct: false },
            { text: "23%", correct: true },
            { text: "25%", correct: false },
            { text: "30%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia (1/2 + 1/3) / (1/4 - 1/5) jest równa... (podaj wynik w postaci liczby lub ułamka dziesiętnego)",
        // (5/6) / (1/20) = 5/6 * 20 = 100/6 = 50/3 = 16.666...
        question: "Wartość wyrażenia (1/2 + 1/3) / (1/3 - 1/4) jest równa...?",
        // (5/6) / (1/12) = 5/6 * 12 = 10
        answer: ["10"]
    },
    {
        type: 'closed',
        question: "Ostatnią cyfrą liczby 3¹⁰² + 2⁵¹ jest:",
        answers: [
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "7", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Ojciec ma obecnie 3 razy tyle lat, ile ma jego syn. Za 12 lat ojciec będzie miał 2 razy tyle lat, ile będzie miał wtedy syn. Ile lat ma obecnie ojciec?",
        answer: ["36"]
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