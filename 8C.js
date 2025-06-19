const questions = [
    {
        type: 'closed',
        question: "Iloczyn dwóch kolejnych liczb parzystych dodatnich wynosi 224. Ile wynosi suma tych liczb?",
        answers: [
            { text: "26", correct: false },
            { text: "28", correct: false },
            { text: "30", correct: true },
            { text: "32", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Przyprostokątne trójkąta prostokątnego mają długości 7 cm i 24 cm. Oblicz promień okręgu wpisanego w ten trójkąt.",
        answer: ["3"]
    },
    {
        type: 'closed',
        question: "Liczba x jest o 25% większa od liczby 160. Liczba y jest o 20% mniejsza od liczby x. W takim razie:",
        answers: [
            { text: "y jest o 5% większe od 160", correct: false },
            { text: "y jest równe 160", correct: true },
            { text: "y jest mniejsze od 160", correct: false },
            { text: "y jest o 5% mniejsze od 160", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Z drutu o długości 96 cm zbudowano szkielet sześcianu. Jaka jest objętość tego sześcianu w cm³?",
        answer: ["512"]
    },
    {
        type: 'closed',
        question: "Punkt P' = (-3, -7) jest obrazem punktu P w symetrii względem osi OX. Jakie są współrzędne punktu P?",
        answers: [
            { text: "(3, 7)", correct: false },
            { text: "(3, -7)", correct: false },
            { text: "(-3, 7)", correct: true },
            { text: "(-7, -3)", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jaka jest ostatnia cyfra liczby 4³³ + 5⁴⁴ + 6⁵⁵?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym jedna z przyprostokątnych jest 3 razy krótsza od przeciwprostokątnej. Jaki jest sinus najmniejszego kąta w tym trójkącie? Odpowiedź podaj w postaci ułamka a/b.",
        answer: ["1/3"]
    },
    {
        type: 'closed',
        question: "Pole powierzchni całkowitej walca wynosi 150π. Promień podstawy i wysokość walca są równe. Ile wynosi objętość tego walca?",
        answers: [
            { text: "125π", correct: true },
            { text: "150π", correct: false },
            { text: "250π", correct: false },
            { text: "75π", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wyrażenie (x - 2y)² - (x - 2y)(x + 2y) po uproszczeniu ma postać ay(by - x). Podaj iloczyn a*b.",
        answer: ["-8"]
    },
    {
        type: 'closed',
        question: "Wszystkich liczb czterocyfrowych o różnych cyfrach, utworzonych z cyfr 0, 1, 2, 3 jest:",
        answers: [
            { text: "24", correct: false },
            { text: "18", correct: true },
            { text: "16", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W szufladzie jest 6 par czarnych i 4 pary brązowych skarpetek (wszystkie luzem). Ile co najmniej skarpetek trzeba wyjąć po ciemku, aby mieć pewność, że wyjęliśmy parę w tym samym kolorze?",
        answer: ["3"]
    },
    {
        type: 'closed',
        question: "W trapezie równoramiennym ramię ma długość 10, a wysokość 8. Krótsza podstawa ma długość 6. Pole tego trapezu wynosi:",
        answers: [
            { text: "72", correct: false },
            { text: "84", correct: false },
            { text: "96", correct: true },
            { text: "108", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba a jest o 40% mniejsza od liczby b. O ile procent liczba b jest większa od liczby a?",
        answers: [
            { text: "o 40%", correct: false },
            { text: "o 60%", correct: false },
            { text: "o 66 i 2/3%", correct: true },
            { text: "o 140%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W graniastosłupie prawidłowym trójkątnym krawędź podstawy ma długość 6. Przekątna ściany bocznej ma długość 10. Oblicz objętość tego graniastosłupa (wynik zapisz w postaci a√b).",
        answer: ["72√3"]
    },
    {
        type: 'closed',
        question: "Suma dwóch liczb jest równa 2√10, a ich iloczyn jest równy 6. Ile wynosi suma kwadratów tych liczb?",
        answers: [
            { text: "40", correct: false },
            { text: "34", correct: false },
            { text: "28", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkąt równoboczny o boku 6 wpisano okrąg. W ten okrąg wpisano kwadrat. Jaka jest długość boku tego kwadratu?",
        answers: [
            { text: "√6", correct: true },
            { text: "3", correct: false },
            { text: "√3", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Zmieszano 3 kg roztworu soli o stężeniu 20% z 5 kg roztworu soli o stężeniu 12%. Jakie jest stężenie procentowe otrzymanej mieszaniny?",
        answer: ["15"]
    },
    {
        type: 'closed',
        question: "Długość przekątnej sześcianu wynosi 5√3. Pole powierzchni całkowitej tego sześcianu jest równe:",
        answers: [
            { text: "75", correct: false },
            { text: "125", correct: false },
            { text: "150", correct: true },
            { text: "25√3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba log₅(100) - log₅(4) jest równa:",
        answers: [
            { text: "log₅(96)", correct: false },
            { text: "25", correct: false },
            { text: "5", correct: false },
            { text: "2", correct: true }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie ABC, punkty D i E leżą odpowiednio na bokach AC i BC tak, że odcinek DE jest równoległy do boku AB. Wiadomo, że |CD|:|DA| = 2:1 oraz |DE|=8. Oblicz długość boku AB.",
        answer: ["12"]
    },
    {
        type: 'closed',
        question: "Liczba a = 1/(√5 - 2). Liczba b = 1/(√5 + 2). Ile wynosi wartość wyrażenia (a+b)²?",
        answers: [
            { text: "20", correct: true },
            { text: "4", correct: false },
            { text: "1", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W dwunastokącie foremnym miara kąta wewnętrznego jest o x stopni większa od miary kąta wewnętrznego w dziewięciokącie foremnym. Ile wynosi x?",
        answers: [
            { text: "5", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Trzej pracownicy wykonują pewną pracę w 4 godziny. W ile godzin wykonałoby tę samą pracę dwóch pracowników, przy założeniu, że każdy pracuje z taką samą wydajnością?",
        answer: ["6"]
    },
    {
        type: 'closed',
        question: "Wybieramy losowo jedną liczbę ze zbioru {1, 2, 3, ..., 30}. Prawdopodobieństwo, że wybrana liczba nie jest podzielna ani przez 2, ani przez 3, wynosi:",
        answers: [
            { text: "1/2", correct: false },
            { text: "1/3", correct: false },
            { text: "10/30", correct: false },
            { text: "1/3", correct: true } // (1,5,7,11,13,17,19,23,25,29) -> 10/30 = 1/3
        ]
    },
    { // Zmieniam treść zad. 24, bo się powtórzyła odp.
        type: 'closed',
        question: "Wybieramy losowo jedną liczbę ze zbioru {1, 2, 3, ..., 30}. Prawdopodobieństwo, że wybrana liczba nie jest podzielna ani przez 2, ani przez 3, wynosi:",
        answers: [
            { text: "1/3", correct: true },
            { text: "8/30", correct: false },
            { text: "7/30", correct: false },
            { text: "1/4", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pociąg jechał z miasta A do B ze średnią prędkością 80 km/h, a wracał z B do A ze średnią prędkością 120 km/h. Podróż w obie strony zajęła 5 godzin. Jaka jest odległość między miastami A i B?",
        answer: ["240"]
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