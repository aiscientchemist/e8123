const questions = [
    {
        type: 'closed',
        question: "Iloczyn dwóch kolejnych dodatnich liczb nieparzystych wynosi 143. Ile wynosi suma kwadratów tych liczb?",
        answers: [
            { text: "290", correct: true },
            { text: "250", correct: false },
            { text: "221", correct: false },
            { text: "194", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie ABC wysokość CD opuszczona na bok AB dzieli go na odcinki AD=9 i DB=5. Bok BC ma długość 13. Oblicz długość boku AC.",
        answer: ["15"]
    },
    {
        type: 'closed',
        question: "Liczba 6³⁰ jest równa:",
        answers: [
            { text: "18¹⁰", correct: false },
            { text: "12¹⁵ * 3¹⁵", correct: false },
            { text: "2¹⁰ * 3¹⁰", correct: false },
            { text: "2¹⁵ * 18¹⁵", correct: true }
        ]
    },
    {
        type: 'open',
        question: "W trapezie równoramiennym przekątna ma długość 17, a wysokość 8. Pole trapezu wynosi 120. Oblicz obwód tego trapezu.",
        answer: ["50"]
    },
    {
        type: 'closed',
        question: "W ostrosłupie prawidłowym trójkątnym krawędź boczna ma długość 8, a krawędź podstawy 12. Ile wynosi sinus kąta nachylenia krawędzi bocznej do płaszczyzny podstawy?",
        answers: [
            { text: "1/2", correct: true },
            { text: "√3/2", correct: false },
            { text: "√2/2", correct: false },
            { text: "3/4", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba 'a' stanowi 120% liczby 'b'. Liczba 'c' stanowi 75% liczby 'a'. Jaki jest stosunek liczby 'c' do 'b'?",
        answers: [
            { text: "4:5", correct: false },
            { text: "5:4", correct: false },
            { text: "9:10", correct: true },
            { text: "10:9", correct: false }
        ]
    },

    {
        type: 'open',
        question: "W trójkącie równoramiennym ABC, gdzie |AC|=|BC|, kąt między wysokościami poprowadzonymi z wierzchołków A i B wynosi 80°. Oblicz miarę kąta przy wierzchołku C.",
        answer: ["80"]
    },
    {
        type: 'closed',
        question: "Z cyfr 0, 1, 2, 5, 8 tworzymy liczby trzycyfrowe o różnych cyfrach. Ile jest wśród nich liczb podzielnych przez 5?",
        answers: [
            { text: "18", correct: true },
            { text: "21", correct: false },
            { text: "24", correct: false },
            { text: "30", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pojemnik napełniony w 1/3 waży 8 kg, a napełniony w 2/3 waży 13 kg. Ile waży pusty pojemnik?",
        answer: ["3"]
    },
    {
        type: 'closed',
        question: "Liczba log₂₅(log₅√5) jest równa:",
        answers: [
            { text: "-1/2", correct: false },
            { text: "-1/4", correct: true },
            { text: "1/4", correct: false },
            { text: "1/2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Dwa okręgi o promieniach 2 i 8 są styczne zewnętrznie. Odległość środka mniejszego okręgu od wspólnej stycznej (nieprzechodzącej przez punkt styczności okręgów) jest równa:",
        answers: [
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "√8", correct: false },
            { text: "2√2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Średnia arytmetyczna pięciu kolejnych liczb parzystych wynosi 22. Jaka jest największa z tych liczb?",
        answer: ["26"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (1+√3)³ jest równa:",
        answers: [
            { text: "4+4√3", correct: false },
            { text: "10", correct: false },
            { text: "10+6√3", correct: true },
            { text: "28", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Prosta przechodząca przez punkt P=(4,-3) i prostopadła do prostej 2x-3y+6=0 ma wzór:",
        answers: [
            { text: "y = -3/2 x + 3", correct: true },
            { text: "y = 2/3 x - 17/3", correct: false },
            { text: "y = -3/2 x - 9", correct: false },
            { text: "y = 3/2 x - 9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Cena akcji spadła o 20%, a następnie o 25%. O ile procent musi wzrosnąć obecna cena, aby wrócić do poziomu początkowego?",
        answer: ["66.67", "66 i 2/3"]
    },
    {
        type: 'closed',
        question: "Długości boków prostokąta powiększono o 20%. Obwód prostokąta wzrósł o:",
        answers: [
            { text: "20%", correct: true },
            { text: "40%", correct: false },
            { text: "44%", correct: false },
            { text: "Zależy od wymiarów prostokąta", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Na ile sposobów można ustawić w kolejce 3 dziewczynki i 2 chłopców tak, aby osoby tej samej płci nie stały obok siebie?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "24", correct: false },
            { text: "36", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W kwadrat o boku 12 wpisano koło. W to koło wpisano kolejny kwadrat. Oblicz różnicę pól tych dwóch kwadratów.",
        answer: ["72"]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym stosunek przyprostokątnych wynosi 1:√3. Jaki jest stosunek promienia okręgu wpisanego do promienia okręgu opisanego na tym trójkącie?",
        answers: [
            { text: "1:2", correct: false },
            { text: "(√3-1):2", correct: true },
            { text: "1:√3", correct: false },
            { text: "(√3+1):4", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Reszta z dzielenia liczby 123456789 przez 9 wynosi:",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Przekątna graniastosłupa prawidłowego czworokątnego tworzy z jego podstawą kąt 60°. Krawędź podstawy ma długość 4. Oblicz objętość graniastosłupa (wynik podaj w postaci a√b).",
        answer: ["64√6"]
    },
    {
        type: 'closed',
        question: "Do windy w 10-piętrowym budynku wsiadły 3 osoby. Na ile sposobów mogą one opuścić windę, jeśli każda z nich wysiada na innym piętrze?",
        answers: [
            { text: "1000", correct: false },
            { text: "720", correct: true },
            { text: "120", correct: false },
            { text: "30", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Liczba a to najmniejsza liczba pierwsza większa od 50. Liczba b to największa liczba pierwsza mniejsza od 50. Oblicz a-b.",
        answer: ["6"]
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