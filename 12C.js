const questions = [
    {
        type: 'closed',
        question: "W trójkącie prostokątnym o obwodzie 60, stosunek długości przyprostokątnych wynosi 3:4. Ile wynosi długość promienia okręgu opisanego na tym trójkącie?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "12.5", correct: true },
            { text: "15", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Znajdź najmniejszą liczbę całkowitą, która jest jednocześnie kwadratem i sześcianem innej liczby całkowitej (większej od 1).",
        answer: ["64"]
    },
    {
        type: 'closed',
        question: "Liczba 7²⁰²⁴ - 3²⁰²⁴ ma cyfrę jedności równą:",
        answers: [
            { text: "0", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trapezie podstawy mają długość 10 i 30. Każde z ramion ma długość 26. Oblicz pole tego trapezu.",
        answer: ["480"]
    },
    {
        type: 'closed',
        question: "W graniastosłupie prawidłowym trójkątnym pole powierzchni bocznej jest równe sumie pól obu podstaw. Stosunek wysokości tego graniastosłupa do krawędzi podstawy wynosi:",
        answers: [
            { text: "√3 : 2", correct: false },
            { text: "1 : 2", correct: false },
            { text: "√3 : 6", correct: true },
            { text: "1 : √3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Handlarz kupił pewną liczbę jabłek po 2 zł za kilogram. Sprzedał 1/3 jabłek z zyskiem 50%, a połowę reszty z zyskiem 20%. Z jaką stratą (w procentach) musi sprzedać pozostałe jabłka, aby wyjść na zero (bez zysku i straty)?",
        answers: [
            { text: "10%", correct: false },
            { text: "15%", correct: false },
            { text: "25%", correct: false },
            { text: "30%", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia √[3](5√2 + 7) - √[3](5√2 - 7) jest liczbą całkowitą. Podaj tę liczbę.",
        answer: ["2"]
    },
    {
        type: 'closed',
        question: "Wysokość ostrosłupa prawidłowego czworokątnego jest równa krawędzi podstawy. Kąt nachylenia ściany bocznej do płaszczyzny podstawy wynosi α. Wtedy:",
        answers: [
            { text: "tg α = 1", correct: false },
            { text: "tg α = 2", correct: true },
            { text: "tg α = √2", correct: false },
            { text: "tg α = 1/2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Dwie sieczne poprowadzone z punktu P przecinają okrąg w punktach A, B oraz C, D (w kolejności P-A-B i P-C-D). Wiadomo, że |PA|=4, |AB|=5, |PD|=9. Oblicz długość odcinka PC.",
        answer: ["3"]
    },
    {
        type: 'closed',
        question: "Spośród wszystkich wierzchołków sześcianu losujemy dwa różne. Jakie jest prawdopodobieństwo, że połączone odcinkiem utworzą one przekątną sześcianu (a nie krawędź czy przekątną ściany)?",
        answers: [
            { text: "1/7", correct: true },
            { text: "4/7", correct: false },
            { text: "1/8", correct: false },
            { text: "2/7", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest różnych (nieprzystających) trójkątów o obwodzie 15, których boki mają długości całkowite?",
        answer: ["7"]
    },
    {
        type: 'closed',
        question: "Która z poniższych liczb jest największa?",
        answers: [
            { text: "2⁵⁵", correct: false },
            { text: "3⁴⁴", correct: true },
            { text: "4³³", correct: false },
            { text: "5²²", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkąt równoboczny o boku 12 wpisano 3 identyczne, wzajemnie styczne koła, z których każde jest styczne do dwóch boków trójkąta. Jaki jest promień jednego z tych kół?",
        answers: [
            { text: "√3", correct: false },
            { text: "2√3 - 3", correct: true },
            { text: "2", correct: false },
            { text: "3√3 - 4", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Układ równań x+y=5 i x³+y³=65 ma dwa rozwiązania (pary x, y). Podaj wartość iloczynu xy, który jest taki sam dla obu rozwiązań.",
        answer: ["6"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia 1/(√2+1) + 1/(√3+√2) + 1/(√4+√3) + ... + 1/(√100+√99) jest równa:",
        answers: [
            { text: "9", correct: true },
            { text: "10", correct: false },
            { text: "99", correct: false },
            { text: "√99", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba (10¹⁰ + 10¹²)/(10¹¹ + 10¹³) jest równa:",
        answers: [
            { text: "0.1", correct: true },
            { text: "1", correct: false },
            { text: "10", correct: false },
            { text: "0.01", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W akwarium o wymiarach podstawy 30cm x 50cm wlano 6 litrów wody. Następnie wrzucono kamień, co spowodowało podniesienie się poziomu wody o 1 cm. Jaka jest objętość kamienia w cm³?",
        answer: ["1500"]
    },

    {
        type: 'closed',
        question: "W trójkącie prostokątnym ABC o kącie prostym przy wierzchołku C, punkt D jest środkiem boku AB. Jeśli |AC|=8 i |CD|=5, to pole trójkąta ABC wynosi:",
        answers: [
            { text: "40", correct: false },
            { text: "30", correct: false },
            { text: "24", correct: true },
            { text: "20", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Basen jest napełniany przez kran A w 4 godziny, a przez kran B w 6 godzin. Kran C opróżnia pełny basen w 3 godziny. Jaki czas (w godzinach) zajmie napełnienie basenu, jeśli wszystkie trzy krany zostaną otwarte jednocześnie?",
        answer: ["12"]
    },
    {
        type: 'closed',
        question: "Liczba log₄(log₂16) jest równa:",
        answers: [
            { text: "2", correct: false },
            { text: "1", correct: true },
            { text: "0.5", correct: false },
            { text: "0.25", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Znajdź punkt na osi OY, który jest jednakowo odległy od punktów A=(-3, 1) i B=(5, 5).",
        answers: [
            { text: "(0, 4)", correct: false },
            { text: "(0, 5)", correct: true },
            { text: "(0, 6)", correct: false },
            { text: "(0, 4.5)", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Dwa pociągi jadą po równoległych torach w tę samą stronę. Pociąg A o długości 150m jedzie z prędkością 90 km/h, a pociąg B o długości 100m z prędkością 72 km/h. Ile sekund zajmie pociągowi A całkowite wyprzedzenie pociągu B?",
        answer: ["50"]
    },
    {
        type: 'closed',
        question: "Na bokach kwadratu o boku 4 zbudowano na zewnątrz cztery trójkąty równoboczne. Wierzchołki tych trójkątów, niebędące wierzchołkami kwadratu, tworzą nowy kwadrat. Pole tego nowego kwadratu wynosi:",
        answers: [
            { text: "16 + 8√3", correct: false },
            { text: "32 + 16√3", correct: true },
            { text: "32", correct: false },
            { text: "16(1+√3)", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wszystkie krawędzie graniastosłupa prostego, którego podstawą jest sześciokąt foremny, mają jednakową długość. Suma długości tych krawędzi wynosi 108. Oblicz objętość tego graniastosłupa (wynik zapisz w postaci a√b).",
        answer: ["324√3"]
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