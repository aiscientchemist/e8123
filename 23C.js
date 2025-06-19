const questions = [
    {
        type: 'closed',
        question: "Suma dwóch liczb wynosi 8, a ich iloczyn 12. Ile wynosi suma sześcianów tych liczb?",
        answers: [
            { text: "512", correct: false },
            { text: "224", correct: true },
            { text: "176", correct: false },
            { text: "40", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Z walca o promieniu podstawy 3 i wysokości 4 wycięto stożek o tej samej podstawie i wysokości. Oblicz pole powierzchni całkowitej powstałej w ten sposób bryły (wynik zapisz w postaci aπ).",
        answer: ["48π"]
    },
    {
        type: 'closed',
        question: "Liczba a = 2⁶⁰, b = 3⁴⁰, c = 5²⁰. Prawdą jest, że:",
        answers: [
            { text: "a < b < c", correct: false },
            { text: "c < a < b", correct: true },
            { text: "b < c < a", correct: false },
            { text: "a < c < b", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Dwie osoby wyruszyły jednocześnie naprzeciw siebie z miast A i B. Po spotkaniu, pierwsza osoba dotarła do miasta B w ciągu 9 godzin, a druga do miasta A w ciągu 4 godzin. Jaki jest stosunek prędkości pierwszej osoby do prędkości drugiej? (Podaj w postaci ułamka a/b)",
        answer: ["2/3"]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym o przyprostokątnych 6 i 8, odległość wierzchołka kąta prostego od przeciwprostokątnej wynosi:",
        answers: [
            { text: "4", correct: false },
            { text: "4.8", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia 2²⁰²⁴ - 2²⁰²² jest podzielna przez:",
        answers: [
            { text: "5", correct: false },
            { text: "3", correct: true },
            { text: "7", correct: false },
            { text: "11", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkąt równoramienny o podstawie 10 i ramionach 13 wpisano prostokąt tak, że jeden jego bok leży na podstawie trójkąta. Wysokość prostokąta wynosi 4. Oblicz pole tego prostokąta.",
        answer: ["20"]
    },
    {
        type: 'closed',
        question: "Jaka jest cyfra jedności liczby, która jest wartością wyrażenia 13³¹ + 17¹⁷ + 21²¹?",
        answers: [
            { text: "1", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Długość boku kwadratu zwiększono o 2 cm, co spowodowało wzrost jego pola o 24 cm². Jaka była pierwotna długość boku kwadratu?",
        answer: ["5"]
    },
    {
        type: 'closed',
        question: "Na ile sposobów można wybrać trzyosobową delegację z grupy 5 chłopców i 4 dziewcząt tak, aby w delegacji znalazł się co najmniej jeden chłopiec?",
        answers: [
            { text: "84", correct: false },
            { text: "80", correct: true },
            { text: "76", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Cena akcji wzrosła o 10%, a następnego dnia spadła o 10%. Po tych dwóch dniach akcja kosztowała 99 zł. Jaka była cena akcji na samym początku?",
        answer: ["100"]
    },
    {
        type: 'closed',
        question: "Liczba rozwiązań równania |x-2| + |x+2| = 4 to:",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "nieskończenie wiele", correct: true }
        ]
    },
    {
        type: 'closed',
        question: "W sześciokącie foremnym o boku 6 połączono co drugi wierzchołek, tworząc trójkąt równoboczny. Pole tego trójkąta jest równe:",
        answers: [
            { text: "9√3", correct: false },
            { text: "18√3", correct: false },
            { text: "27√3", correct: true },
            { text: "36√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wartość wyrażenia 2025² - 2024² jest równa:",
        answer: ["4049"]
    },
    {
        type: 'closed',
        question: "Jeśli logₓ(1/8) = -3/2, to x jest równe:",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "√8", correct: false },
            { text: "1/4", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W graniastosłupie prawidłowym trójkątnym wszystkie krawędzie mają jednakową długość. Pole powierzchni całkowitej wynosi 50√3. Długość krawędzi tego graniastosłupa wynosi:",
        answers: [
            { text: "5", correct: true },
            { text: "10", correct: false },
            { text: "5√3", correct: false },
            { text: "2√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W torebce jest 21 cukierków: 3 razy więcej malinowych niż cytrynowych i o 3 mniej truskawkowych niż malinowych. Jakie jest prawdopodobieństwo wyjęcia cukierka, który nie jest malinowy? (Podaj w postaci ułamka nieskracalnego)",
        answer: ["4/7"]
    },
    {
        type: 'closed',
        question: "Prosta prostopadła do prostej y = (1/3)x - 2 i przechodząca przez punkt P=(1, 5) ma równanie:",
        answers: [
            { text: "y = 3x + 2", correct: false },
            { text: "y = -3x + 8", correct: true },
            { text: "y = -1/3 x + 16/3", correct: false },
            { text: "y = -3x + 2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Suma pierwszego i piątego wyrazu ciągu arytmetycznego wynosi 18. Trzeci wyraz tego ciągu jest równy:",
        answers: [
            { text: "6", correct: false },
            { text: "9", correct: true },
            { text: "12", correct: false },
            { text: "Nie da się tego ustalić", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Obwód rombu wynosi 60, a jego pole 150. Oblicz wysokość tego rombu.",
        answer: ["10"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia √(14 - 6√5) jest równa:",
        answers: [
            { text: "√14 - √6√5", correct: false },
            { text: "3 - √5", correct: true },
            { text: "√5 - 3", correct: false },
            { text: "1 - √13", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym o przyprostokątnych 5 i 12, stosunek promienia okręgu wpisanego do promienia okręgu opisanego wynosi:",
        answers: [
            { text: "2:5", correct: false },
            { text: "3:13", correct: false },
            { text: "4:13", correct: true },
            { text: "5:12", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Zegar, który chodzi prawidłowo, pokazuje 3:00. Po ilu minutach wskazówka minutowa po raz pierwszy pokryje się ze wskazówką godzinową?",
        answer: ["16 i 4/11", "180/11"]
    },
    {
        type: 'closed',
        question: "Ile jest różnych sposobów na pokonanie drogi z punktu A do punktu B po kratkach 3x2, poruszając się tylko w prawo lub w dół?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma cyfr liczby dwucyfrowej 'n' wynosi 12. Po odjęciu od 'n' liczby 36, otrzymujemy liczbę o przestawionych cyfrach. Jaka jest wartość 'n'?",
        answer: ["84"]
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