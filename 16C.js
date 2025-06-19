const questions = [
    {
        type: 'closed',
        question: "Ile wynosi wartość wyrażenia (1 - 1/4)(1 - 1/9)(1 - 1/16)...(1 - 1/100)?",
        answers: [
            { text: "0.1", correct: false },
            { text: "0.55", correct: true },
            { text: "0.9", correct: false },
            { text: "0.99", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest jedyna trzycyfrowa liczba, która jest równa sumie silni swoich cyfr?",
        answer: ["145"]
    },
    {
        type: 'closed',
        question: "W trapezie wysokość jest równa średniej arytmetycznej długości podstaw. Pole tego trapezu wynosi 100 cm². Oblicz długość tej wysokości.",
        answers: [
            { text: "8 cm", correct: false },
            { text: "10 cm", correct: true },
            { text: "12 cm", correct: false },
            { text: "Nie da się tego obliczyć", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Prosta o równaniu 2x + 5y = 20 tworzy z osiami układu współrzędnych trójkąt. Oblicz pole tego trójkąta.",
        answer: ["20"]
    },
    {
        type: 'closed',
        question: "W ostrosłupie prawidłowym trójkątnym pole podstawy jest równe 9√3. Pole powierzchni bocznej jest 3 razy większe od pola podstawy. Ile wynosi wysokość tego ostrosłupa?",
        answers: [
            { text: "3√10", correct: false },
            { text: "9", correct: false },
            { text: "3√11", correct: false },
            { text: "3√6", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Świeże grzyby zawierają 90% wody, a suszone 15%. Ile kilogramów świeżych grzybów należy zebrać, aby otrzymać 1 kg suszonych?",
        answers: [
            { text: "1.5 kg", correct: false },
            { text: "8.5 kg", correct: true },
            { text: "9 kg", correct: false },
            { text: "10 kg", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wyznacz najmniejszą liczbę całkowitą n, dla której prawdziwa jest nierówność n > 4√5.",
        answer: ["9"]
    },
    {
        type: 'closed',
        question: "Suma dwóch liczb wynosi 12. Ich suma sześcianów wynosi 792. Ile wynosi iloczyn tych liczb?",
        answers: [
            { text: "20", correct: false },
            { text: "27", correct: false },
            { text: "32", correct: false },
            { text: "35", correct: true }
        ]
    },
    {
        type: 'open',
        question: "W kwadrat o boku 10 wpisano cztery identyczne, wzajemnie styczne koła, z których każde jest styczne do dwóch boków kwadratu. Jaki jest promień jednego z tych kół?",
        answer: ["2.5"]
    },
    {
        type: 'closed',
        question: "Rzucamy dwiema sześciennymi kostkami. Jakie jest prawdopodobieństwo, że suma wyrzuconych oczek jest liczbą pierwszą?",
        answers: [
            { text: "1/3", correct: false },
            { text: "7/18", correct: false },
            { text: "5/12", correct: true },
            { text: "1/2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie ABC kąt przy wierzchołku B ma 60°, a kąt przy wierzchołku C ma 45°. Wysokość AD ma długość 6. Oblicz obwód tego trójkąta. Wynik podaj w postaci a√b + c√d + e.",
        answer: ["6√2+4√3+6"]
    },
    {
        type: 'closed',
        question: "Liczba 5¹⁰⁰ - 5⁹⁸ jest podzielna przez:",
        answers: [
            { text: "10", correct: false },
            { text: "13", correct: false },
            { text: "17", correct: false },
            { text: "24", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "Na spotkaniu każdy uścisnął dłoń każdemu innemu dokładnie raz. Uścisków dłoni było 66. Ile osób było na spotkaniu?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pewnej firmie 40% pracowników to mężczyźni. 75% mężczyzn i 50% kobiet zarabia powyżej średniej krajowej. Jaki procent wszystkich pracowników tej firmy zarabia powyżej średniej krajowej?",
        answer: ["60"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia √(√10 - 3) * √(√10 + 3) jest równa:",
        answers: [
            { text: "1", correct: true },
            { text: "√19", correct: false },
            { text: "7", correct: false },
            { text: "√7", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Prosta o równaniu y = -2x + b przechodzi przez III i IV ćwiartkę układu współrzędnych oraz przez punkt A=(3, -8). Wynika stąd, że:",
        answers: [
            { text: "b = -2", correct: true },
            { text: "b = -14", correct: false },
            { text: "b = 2", correct: false },
            { text: "b jest dowolną liczbą ujemną", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie równoramiennym podstawa ma długość 18, a wysokość opuszczona na tę podstawę ma długość 12. Oblicz długość wysokości opuszczonej na ramię tego trójkąta.",
        answer: ["14.4"]
    },
    {
        type: 'closed',
        question: "W trapezie równoramiennym przekątne są prostopadłe, a wysokość trapezu ma długość 8 cm. Pole tego trapezu wynosi:",
        answers: [
            { text: "32 cm²", correct: false },
            { text: "64 cm²", correct: true },
            { text: "128 cm²", correct: false },
            { text: "Nie da się tego obliczyć", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli x² - 3x + 1 = 0, to wartość wyrażenia x² + 1/x² wynosi:",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Na tarczy zegara jest 12 cyfr. Wybieramy losowo 3 różne cyfry. Na ile sposobów można je wybrać tak, aby tworzyły trójkąt równoboczny?",
        answer: ["4"]
    },
    {
        type: 'closed',
        question: "Długości boków trójkąta są trzema kolejnymi liczbami naturalnymi. Średnim co do wielkości kątem w tym trójkącie jest:",
        answers: [
            { text: "Kąt ostry", correct: true },
            { text: "Kąt prosty", correct: false },
            { text: "Kąt rozwarty", correct: false },
            { text: "Zależy od wybranych liczb", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Ile jest liczb trzycyfrowych, w których iloczyn cyfr jest równy 24?",
        answers: [
            { text: "12", correct: false },
            { text: "15", correct: false },
            { text: "18", correct: false },
            { text: "21", correct: true }
        ]
    },
    {
        type: 'open',
        question: "W pewnym graniastosłupie liczba krawędzi jest o 10 większa od liczby wierzchołków. Jaka figura jest podstawą tego graniastosłupa?",
        answer: ["pięciokąt", "pięciokąt foremny"]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym o obwodzie 24, przeciwprostokątna ma długość 10. Pole tego trójkąta wynosi:",
        answers: [
            { text: "24", correct: true },
            { text: "30", correct: false },
            { text: "48", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jaka jest cyfra jedności liczby, która jest wartością wyrażenia 2021²⁰²¹ + 2022²⁰²² + 2023²⁰²³?",
        answer: ["4"]
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