const questions = [
    {
        type: 'closed',
        question: "Suma dwóch liczb wynosi 10, a różnica ich kwadratów wynosi 60. Ile wynosi iloczyn tych dwóch liczb?",
        answers: [
            { text: "16", correct: true },
            { text: "21", correct: false },
            { text: "24", correct: false },
            { text: "25", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trapezie równoramiennym o kącie ostrym 60° podstawy mają długość 10 i 20. Oblicz obwód tego trapezu.",
        answer: ["50"]
    },
    {
        type: 'closed',
        question: "Stosunek pola powierzchni całkowitej sześcianu do jego objętości wynosi 1:2. Jaka jest długość krawędzi tego sześcianu?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "12", correct: true },
            { text: "2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Zeszyt i książka kosztują razem 54 zł. Książka jest o 200% droższa od zeszytu. Cenę książki obniżono o 50%. O ile procent książka jest teraz droższa od zeszytu?",
        answers: [
            { text: "O 100%", correct: false },
            { text: "O 50%", correct: true },
            { text: "Jest w tej samej cenie", correct: false },
            { text: "O 25%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Zegar wskazuje godzinę 4:40. Jaka jest miara kąta ostrego (mniejszego) utworzonego przez wskazówki zegara? (Podaj tylko wartość liczbową w stopniach)",
        answer: ["100"]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym wysokość poprowadzona na przeciwprostokątną dzieli ją na odcinki o długości 4 cm i 9 cm. Jakie jest pole tego trójkąta?",
        answers: [
            { text: "18 cm²", correct: false },
            { text: "26 cm²", correct: false },
            { text: "36 cm²", correct: false },
            { text: "39 cm²", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Dwa koła zębate, mające 12 i 18 zębów, są ze sobą sprzężone. Po ilu pełnych obrotach mniejszego koła oba koła powrócą do pozycji wyjściowej?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "6", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia √[3](54) + √[3](-128) - √[3](2) można zapisać w postaci a√[3](b). Podaj wartość iloczynu a*b.",
        // 3∛2 - 4∛2 - ∛2 = -2∛2. a=-2, b=2. a*b = -4
        answer: ["-4"]
    },
    {
        type: 'closed',
        question: "Średnia wieku w 10-osobowej grupie wynosi 16 lat. Gdy do grupy dołączył nowy uczeń, średnia wieku wzrosła do 17 lat. Ile lat ma nowy uczeń?",
        answers: [
            { text: "17", correct: false },
            { text: "26", correct: false },
            { text: "27", correct: true },
            { text: "18", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Na okręgu o promieniu 10 cm opisano trapez równoramienny, którego pole wynosi 200 cm². Jaki jest obwód tego trapezu?",
        answers: [
            { text: "40 cm", correct: true },
            { text: "50 cm", correct: false },
            { text: "80 cm", correct: false },
            { text: "Nie da się tego obliczyć", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jeśli 3ˣ = 5, to ile wynosi 9ˣ⁺¹?",
        answer: ["225"]
    },
    {
        type: 'closed',
        question: "Wysokość ostrosłupa prawidłowego czworokątnego i krawędź jego podstawy mają taką samą długość, równą 6 cm. Jaką długość ma krawędź boczna tego ostrosłupa?",
        answers: [
            { text: "6√2 cm", correct: false },
            { text: "9 cm", correct: true },
            { text: "6√3 cm", correct: false },
            { text: "3√6 cm", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Losowo wybieramy jedną literę ze słowa MATEMATYKA. Jakie jest prawdopodobieństwo, że wybrana litera jest spółgłoską?",
        answers: [
            { text: "1/2", correct: true },
            { text: "4/10", correct: false },
            { text: "3/5", correct: false },
            { text: "4/5", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pusty basen napełniany jest przez dwa krany. Pierwszy kran napełnia go w ciągu 6 godzin, a drugi w ciągu 3 godzin. W jakim czasie (w minutach) napełni się basen, jeśli oba krany będą odkręcone jednocześnie?",
        answer: ["120"]
    },
    {
        type: 'closed',
        question: "Liczba (√10 - 3)² jest równa:",
        answers: [
            { text: "1", correct: false },
            { text: "19", correct: false },
            { text: "19 - 6√10", correct: true },
            { text: "1 - 6√10", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Przekątna graniastosłupa prawidłowego czworokątnego ma długość 15 cm, a krawędź podstawy ma długość 9 cm. Jakie jest pole powierzchni bocznej tego graniastosłupa?",
        answers: [
            { text: "324 cm²", correct: false },
            { text: "432 cm²", correct: true },
            { text: "108 cm²", correct: false },
            { text: "540 cm²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Samochód przejechał pewną trasę ze średnią prędkością 60 km/h. Drogę powrotną pokonał z prędkością 90 km/h. Jaka była średnia prędkość samochodu na całej trasie (w obie strony)? Wynik podaj w km/h.",
        answer: ["72"]
    },
    {
        type: 'closed',
        question: "Ile jest wszystkich liczb trzycyfrowych, w których każda kolejna cyfra jest o 1 większa od poprzedniej?",
        answers: [
            { text: "10", correct: false },
            { text: "9", correct: false },
            { text: "8", correct: false },
            { text: "7", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "W trójkąt równoboczny o boku 12 cm wpisano koło. Jakie jest pole tego koła?",
        answers: [
            { text: "36π cm²", correct: false },
            { text: "16π cm²", correct: false },
            { text: "12π cm²", correct: true },
            { text: "4π cm²", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Rozwiązaniem układu równań y = 2x - 3 i 3x + 2y = 22 jest para liczb (x, y). Podaj wartość x + y.",
        answer: ["9"]
    },
    {
        type: 'closed',
        question: "Metalową kulę o promieniu 3 cm przetopiono na walec o takiej samej wysokości jak promień kuli. Ile wynosi promień podstawy tego walca?",
        answers: [
            { text: "6 cm", correct: true },
            { text: "3 cm", correct: false },
            { text: "3√2 cm", correct: false },
            { text: "4 cm", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia |5 - √26| - |√26 - 4| jest równa:",
        answers: [
            { text: "1", correct: false },
            { text: "-1", correct: true },
            { text: "9 - 2√26", correct: false },
            { text: "2√26 - 9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Punkty A=(-4, -1), B=(4, -1) i C=(1, 5) są wierzchołkami trójkąta. Oblicz pole tego trójkąta.",
        answer: ["24"]
    },
    {
        type: 'closed',
        question: "Cena akcji pewnej firmy spadła o 60%. O ile procent musi teraz wzrosnąć, aby powrócić do ceny początkowej?",
        answers: [
            { text: "O 60%", correct: false },
            { text: "O 120%", correct: false },
            { text: "O 150%", correct: true },
            { text: "O 250%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Liczba a stanowi 80% liczby b, a liczba c stanowi 50% liczby a. Jakim procentem liczby b jest liczba c?",
        answer: ["40"]
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