const questions = [
    {
        type: 'closed',
        question: "Różnica kwadratów dwóch kolejnych dodatnich liczb nieparzystych wynosi 72. Ile wynosi suma tych liczb?",
        answers: [
            { text: "32", correct: false },
            { text: "34", correct: false },
            { text: "36", correct: true },
            { text: "38", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W sześcian wpisano kulę o objętości 36π cm³. Jaka jest długość przekątnej tego sześcianu? (Wynik zapisz w postaci a√b).",
        answer: ["6√3"]
    },
    {
        type: 'closed',
        question: "Cenę towaru podniesiono o p%, a następnie nową cenę obniżono o p%. W rezultacie cena końcowa stanowiła 96% ceny początkowej. Ile wynosi p?",
        answers: [
            { text: "4", correct: false },
            { text: "10", correct: false },
            { text: "20", correct: true },
            { text: "25", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Na ile zer kończy się liczba 50! (50 silnia)?",
        answer: ["12"]
    },
    {
        type: 'closed',
        question: "Punkty A(-2, 1), B(3, 3) i C(4, 5) to trzy kolejne wierzchołki równoległoboku ABCD. Jakie są współrzędne wierzchołka D?",
        answers: [
            { text: "(9, 7)", correct: false },
            { text: "(-1, 3)", correct: true },
            { text: "(1, 3)", correct: false },
            { text: "(-1, -1)", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Ślimak wspina się na 20-metrową ścianę. W ciągu dnia pokonuje 5 metrów w górę, a w nocy zsuwa się o 4 metry w dół. Po ilu dniach ślimak dotrze na szczyt ściany?",
        answers: [
            { text: "20", correct: false },
            { text: "19", correct: false },
            { text: "16", correct: true },
            { text: "15", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pole prostokąta wynosi 48 cm², a jego obwód 28 cm. Oblicz długość przekątnej tego prostokąta.",
        answer: ["10"]
    },
    {
        type: 'closed',
        question: "W torbie jest 10 kul, czerwonych i niebieskich. Prawdopodobieństwo wylosowania kuli czerwonej wynosi 2/5. Do torby dołożono 5 kul niebieskich. Jakie jest teraz prawdopodobieństwo wylosowania kuli niebieskiej?",
        answers: [
            { text: "3/5", correct: false },
            { text: "2/3", correct: false },
            { text: "11/15", correct: true },
            { text: "1/2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia (5³ · 25⁻¹ · 125²) / (5⁰ · 5⁻²) zapisano w postaci potęgi 5ᵏ. Podaj wartość k.",
        answer: ["9"]
    },
    {
        type: 'closed',
        question: "Dwie cięciwy AB i CD w okręgu przecinają się w punkcie P. Odcinki cięciwy AB mają długość |AP|=3 i |PB|=8. Jeden z odcinków cięciwy CD ma długość |CP|=4. Jaka jest długość całej cięciwy CD?",
        answers: [
            { text: "6", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pompa A napełnia basen w 8 godzin, a pompa B w 12 godzin. Obie pompy pracowały razem przez 2 godziny, po czym pompa A się zepsuła. Ile godzin potrzebuje pompa B, aby samodzielnie dokończyć napełnianie basenu?",
        answer: ["7"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (√45 + √20) / √5 jest równa:",
        answers: [
            { text: "√13", correct: false },
            { text: "5", correct: true },
            { text: "√5", correct: false },
            { text: "25", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Bok rombu ma długość 15 cm, a jedna z jego przekątnych ma 18 cm. Pole tego rombu jest równe:",
        answers: [
            { text: "108 cm²", correct: false },
            { text: "135 cm²", correct: false },
            { text: "216 cm²", correct: true },
            { text: "270 cm²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pięć lat temu Maria była 3 razy starsza od Jana. Za 5 lat będzie od niego 2 razy starsza. Ile lat ma obecnie Maria?",
        answer: ["35"]
    },
    {
        type: 'closed',
        question: "Objętość stożka wynosi 9π. Wysokość stożka jest równa promieniowi jego podstawy. Ile wynosi tworząca tego stożka?",
        answers: [
            { text: "3", correct: false },
            { text: "3√2", correct: true },
            { text: "3√3", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jaka jest najmniejsza dodatnia liczba całkowita, która przy dzieleniu przez 2, 3, 4, 5 i 6 daje zawsze resztę 1?",
        answers: [
            { text: "31", correct: false },
            { text: "41", correct: false },
            { text: "61", correct: true },
            { text: "121", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Mężczyzna o wzroście 2 m rzuca cień o długości 3 m. W tym samym czasie stojące obok drzewo rzuca cień o długości 21 m. Jaka jest wysokość drzewa w metrach?",
        answer: ["14"]
    },
    {
        type: 'closed',
        question: "Wiadomo, że x + 1/x = 4. Ile wynosi wartość wyrażenia x² + 1/x² ?",
        answers: [
            { text: "16", correct: false },
            { text: "14", correct: true },
            { text: "12", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Punkty A, B, C, D leżą w tej kolejności na okręgu. Miara łuku AB wynosi 60°, a miara łuku CD wynosi 100°. Jaka jest miara kąta ostrego, pod którym przecinają się cięciwy AC i BD?",
        answers: [
            { text: "70°", correct: false },
            { text: "80°", correct: true },
            { text: "90°", correct: false },
            { text: "160°", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Mediana pięciu liczb w zestawie to 10, średnia to 11, a jedyną modą jest 8 (występuje dwukrotnie). Jaka jest największa możliwa liczba w tym zestawie?",
        answer: ["19"]
    },
    {
        type: 'closed',
        question: "W trapez można wpisać okrąg. Długości ramion tego trapezu wynoszą 7 i 9. Ile wynosi obwód tego trapezu?",
        answers: [
            { text: "16", correct: false },
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "Nie da się tego obliczyć", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Stosunek obwodów dwóch wielokątów podobnych wynosi 3:5. Suma ich pól jest równa 272 cm². Pole mniejszego wielokąta wynosi:",
        answers: [
            { text: "34 cm²", correct: false },
            { text: "72 cm²", correct: true },
            { text: "102 cm²", correct: false },
            { text: "200 cm²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Oblicz pole trójkąta o wierzchołkach A=(0, 0), B=(6, 0) i C=(2, 4).",
        answer: ["12"]
    },
    {
        type: 'closed',
        question: "Samochód jedzie z miasta A do B z prędkością 40 km/h, a wraca tą samą drogą z prędkością 60 km/h. Jaka jest średnia prędkość samochodu na całej trasie?",
        answers: [
            { text: "50 km/h", correct: false },
            { text: "48 km/h", correct: true },
            { text: "52 km/h", correct: false },
            { text: "45 km/h", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest cyfra jedności sumy 1! + 2! + 3! + ... + 100! ?",
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