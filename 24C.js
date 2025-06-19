const questions = [
    {
        type: 'closed',
        question: "Różnica kwadratów dwóch kolejnych dodatnich liczb całkowitych wynosi 41. Ile wynosi suma tych liczb?",
        answers: [
            { text: "39", correct: false },
            { text: "41", correct: true },
            { text: "43", correct: false },
            { text: "81", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trapezie prostokątnym podstawy mają długość 4 i 7, a dłuższe ramię ma długość 5. Oblicz pole tego trapezu.",
        answer: ["22"]
    },
    {
        type: 'closed',
        question: "Liczba a = 4⁴⁴, b = 3⁵⁵, c = 2⁷⁷. Prawdą jest, że:",
        answers: [
            { text: "c < b < a", correct: false },
            { text: "a < c < b", correct: false },
            { text: "a < b < c", correct: true },
            { text: "b < a < c", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkąt równoboczny o boku 6 wpisano koło. Oblicz pole tego koła (odpowiedź zapisz w postaci aπ).",
        answer: ["3π"]
    },
    {
        type: 'closed',
        question: "Pole powierzchni bocznej stożka jest 3 razy większe od pola jego podstawy. Cosinus kąta nachylenia tworzącej do podstawy wynosi:",
        answers: [
            { text: "1/2", correct: false },
            { text: "1/3", correct: true },
            { text: "1/4", correct: false },
            { text: "√3/3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia (3³ * 27⁻²) / (9⁻³ * 81) jest równa:",
        answers: [
            { text: "1/3", correct: false },
            { text: "1", correct: false },
            { text: "3", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Samochód przejechał pewną trasę w 5 godzin. Gdyby jego prędkość była o 10 km/h większa, przejechałby tę trasę w 4 godziny. Jaka była długość tej trasy w km?",
        answer: ["200"]
    },
    {
        type: 'closed',
        question: "Liczba rozwiązań równania x² + 9 = 6x to:",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "nieskończenie wiele", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Cena towaru wzrosła z 40 zł do 50 zł. O ile procent należy obniżyć nową cenę, aby wróciła do poziomu 40 zł?",
        answer: ["20"]
    },
    {
        type: 'closed',
        question: "Z talii 52 kart losujemy jedną. Jakie jest prawdopodobieństwo, że będzie to figura (walet, dama, król) lub kier?",
        answers: [
            { text: "25/52", correct: false },
            { text: "22/52", correct: true },
            { text: "12/52", correct: false },
            { text: "13/52", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia log₄(log₁₆256) jest równa:",
        answer: ["0.5", "1/2"]
    },
    {
        type: 'closed',
        question: "Suma n początkowych wyrazów ciągu arytmetycznego wyraża się wzorem Sn = n(n+2). Czwarty wyraz tego ciągu jest równy:",
        answers: [
            { text: "7", correct: false },
            { text: "9", correct: true },
            { text: "11", correct: false },
            { text: "24", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wysokość graniastosłupa prawidłowego czworokątnego i przekątna jego podstawy mają równe długości. Kąt nachylenia przekątnej graniastosłupa do podstawy ma miarę:",
        answers: [
            { text: "30°", correct: false },
            { text: "45°", correct: true },
            { text: "60°", correct: false },
            { text: "Nie da się tego określić", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o przyprostokątnych 10 i 24, oblicz długość wysokości opuszczonej na przeciwprostokątną.",
        answer: ["120/13", "9 i 3/13"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia 5/(√6-1) - 5/(√6+1) jest równa:",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "√6", correct: false },
            { text: "2√6", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Środek okręgu o równaniu (x-3)² + (y+5)² = 16 leży na prostej:",
        answers: [
            { text: "y = x - 8", correct: true },
            { text: "y = x + 8", correct: false },
            { text: "y = -x - 2", correct: false },
            { text: "y = -x + 2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest najmniejsza liczba naturalna, która przy dzieleniu przez 15, 20 i 24 daje tę samą resztę 9?",
        answer: ["129"]
    },
    {
        type: 'closed',
        question: "W trójkącie równoramiennym podstawa ma długość 12, a ramię 10. Sinus kąta przy podstawie wynosi:",
        answers: [
            { text: "0.6", correct: false },
            { text: "0.8", correct: true },
            { text: "0.75", correct: false },
            { text: "0.5", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Na ile sposobów można wybrać kapitana i jego zastępcę z drużyny liczącej 10 osób?",
        answers: [
            { text: "20", correct: false },
            { text: "45", correct: false },
            { text: "90", correct: true },
            { text: "100", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Reszta z dzielenia liczby n przez 6 wynosi 4. Jaka jest reszta z dzielenia liczby 5n przez 6?",
        answer: ["2"]
    },
    {
        type: 'closed',
        question: "Pole koła opisanego na kwadracie jest równe 18π. Pole tego kwadratu wynosi:",
        answers: [
            { text: "18", correct: false },
            { text: "36", correct: true },
            { text: "72", correct: false },
            { text: "9π", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeśli (x+y)²=20 i (x-y)²=12, to iloczyn xy jest równy:",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pociąg o długości 150m jadący z prędkością 54 km/h mija słup. Ile sekund trwa to mijanie?",
        answer: ["10"]
    },
    {
        type: 'closed',
        question: "Ile jest liczb trzycyfrowych mniejszych od 500, w których każda cyfra jest inna i należy do zbioru {1, 2, 3, 6, 8}?",
        answers: [
            { text: "24", correct: false },
            { text: "36", correct: true },
            { text: "48", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma cyfr liczby dwucyfrowej wynosi 13. Po dodaniu do tej liczby 27, otrzymamy liczbę o przestawionych cyfrach. Jaka to liczba?",
        answer: ["58"]
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