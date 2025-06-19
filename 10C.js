const questions = [
    {
        type: 'closed',
        question: "W portfelu jest 30 monet, wyłącznie dwuzłotówki i pięciozłotówki. Łączna wartość monet wynosi 99 zł. Ile jest monet pięciozłotowych?",
        answers: [
            { text: "11", correct: false },
            { text: "13", correct: true },
            { text: "17", correct: false },
            { text: "19", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pole pierścienia kołowego wynosi 21π cm². Promień większego koła ma 5 cm. Jaka jest długość promienia mniejszego koła?",
        answer: ["2"]
    },
    {
        type: 'closed',
        question: "Czterocyfrowa liczba 13x0y jest podzielna przez 90. Ile wynosi wartość wyrażenia x - y?",
        answers: [
            { text: "5", correct: true },
            { text: "4", correct: false },
            { text: "0", correct: false },
            { text: "-4", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Podstawą graniastosłupa prostego jest romb o przekątnych 6 cm i 8 cm. Wysokość graniastosłupa wynosi 10 cm. Oblicz objętość tego graniastosłupa w cm³.",
        answer: ["240"]
    },
    {
        type: 'closed',
        question: "Trójkąt równoboczny i kwadrat mają równe obwody. Stosunek pola kwadratu do pola trójkąta jest równy:",
        answers: [
            { text: "3√3 : 4", correct: true },
            { text: "4 : 3√3", correct: false },
            { text: "3 : 4", correct: false },
            { text: "4 : 3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia |√7 - 3| + |2 - √7| jest równa:",
        answers: [
            { text: "1", correct: true },
            { text: "5", correct: false },
            { text: "2√7 - 5", correct: false },
            { text: "5 - 2√7", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o obwodzie 30 cm, promień okręgu wpisanego ma długość 2 cm. Oblicz pole tego trójkąta.",
        answer: ["30"]
    },
    {
        type: 'closed',
        question: "W pudełku są kule białe i czarne. Stosunek liczby kul białych do czarnych wynosi 2:3. Losujemy jedną kulę. Jakie jest prawdopodobieństwo, że wylosowana kula nie jest biała?",
        answers: [
            { text: "2/3", correct: false },
            { text: "1/2", correct: false },
            { text: "2/5", correct: false },
            { text: "3/5", correct: true }
        ]
    },
    {
        type: 'open',
        question: "Liczba a to 125% liczby 80. Liczba b to 80% liczby a. Podaj wartość liczby b.",
        answer: ["80"]
    },
    {
        type: 'closed',
        question: "Dwie proste y = 2x - 5 i y = -x + 4 przecinają się w punkcie (x, y). Suma x + y jest równa:",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "-2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Z miasta A do miasta B jedzie pociąg z prędkością 60 km/h. W tym samym momencie z miasta B do A wyrusza rowerzysta z prędkością 20 km/h. Odległość między miastami wynosi 120 km. Po jakim czasie (w minutach) się spotkają?",
        answer: ["90"]
    },
    {
        type: 'closed',
        question: "Jeżeli logₓ81 = 4, to x jest równe:",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wysokość stożka i promień jego podstawy są równe h. Pole przekroju osiowego tego stożka wynosi 16. Ile wynosi objętość tego stożka?",
        answers: [
            { text: "16π", correct: false },
            { text: "32π/3", correct: false },
            { text: "64π/3", correct: true },
            { text: "128π/3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest trzycyfrowych liczb parzystych o niepowtarzających się cyfrach, które można utworzyć z cyfr {1, 2, 3, 4, 5}?",
        answer: ["24"]
    },
    {
        type: 'closed',
        question: "Suma długości wszystkich krawędzi graniastosłupa prawidłowego czworokątnego wynosi 80 cm. Krawędź boczna jest 3 razy dłuższa od krawędzi podstawy. Pole powierzchni bocznej tego graniastosłupa wynosi:",
        answers: [
            { text: "150 cm²", correct: false },
            { text: "200 cm²", correct: false },
            { text: "240 cm²", correct: true },
            { text: "300 cm²", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Która z liczb jest rozwiązaniem nierówności 2(x+1) < 3x - 1 < 2x + 5?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Statek płynie 24 km z prądem rzeki w ciągu 2 godzin, a 24 km pod prąd w ciągu 3 godzin. Jaka jest prędkość prądu rzeki w km/h?",
        answer: ["2"]
    },
    {
        type: 'closed',
        question: "Stosunek objętości dwóch sześcianów wynosi 8:27. Jaki jest stosunek ich pól powierzchni całkowitych?",
        answers: [
            { text: "2:3", correct: false },
            { text: "4:9", correct: true },
            { text: "8:27", correct: false },
            { text: "√8:√27", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W okrąg wpisano trapez równoramienny, którego krótsza podstawa i ramiona mają długość 5, a kąt ostry ma 60°. Ile wynosi promień tego okręgu?",
        answers: [
            { text: "5", correct: true },
            { text: "5√3/2", correct: false },
            { text: "10", correct: false },
            { text: "5√3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W klasie jest 12 dziewcząt i 8 chłopców. Średnia wzrostu dziewcząt to 164 cm, a chłopców 174 cm. Jaka jest średnia wzrostu całej klasy?",
        answer: ["168"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia 2²⁰ + 2²⁰ + 2²⁰ + 2²⁰ jest równa:",
        answers: [
            { text: "8²⁰", correct: false },
            { text: "2⁸⁰", correct: false },
            { text: "2²²", correct: true },
            { text: "4²¹", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Prosta k jest prostopadła do prostej l o równaniu y = -2/3 x + 1 i przechodzi przez punkt (4, 1). Prosta k ma równanie:",
        answers: [
            { text: "y = 2/3 x - 5/3", correct: false },
            { text: "y = -3/2 x + 7", correct: false },
            { text: "y = 3/2 x - 5", correct: true },
            { text: "y = -2/3 x + 11/3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jeden kran napełnia basen w 6 godzin, a drugi opróżnia go w 10 godzin. Po ilu godzinach basen się napełni, jeśli oba krany będą odkręcone jednocześnie?",
        answer: ["15"]
    },
    {
        type: 'closed',
        question: "W trójkącie prostokątnym przyprostokątne mają długości 2√2 i 3√2. Długość wysokości opuszczonej na przeciwprostokątną wynosi:",
        answers: [
            { text: "√13", correct: false },
            { text: "6√13/13", correct: true },
            { text: "2.5", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Jeśli x i y są dodatnie i 4x² = 9y², to ile wynosi stosunek x/y? (podaj w postaci ułamka a/b)",
        answer: ["3/2"]
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