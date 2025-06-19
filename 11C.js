const questions = [
    {
        type: 'closed',
        question: "W pewnej liczbie trzycyfrowej cyfra dziesiątek jest równa sumie cyfry setek i jedności. Po przestawieniu cyfry setek i jedności otrzymamy liczbę o 396 mniejszą. Jaka jest cyfra dziesiątek tej liczby?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Pole trapezu prostokątnego wynosi 54 cm². Jego wysokość jest o 3 cm krótsza od jednej podstawy i o 6 cm krótsza od drugiej podstawy. Oblicz wysokość tego trapezu.",
        answer: ["6"]
    },
    {
        type: 'closed',
        question: "Ile jest równa wartość wyrażenia 4¹⁰ * 8²⁰ : 2⁵⁰?",
        answers: [
            { text: "2¹⁰", correct: false },
            { text: "2³⁰", correct: true },
            { text: "2⁻²⁰", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W trójkącie prostokątnym o przyprostokątnych 9 i 12, oblicz długość środkowej poprowadzonej do przeciwprostokątnej.",
        answer: ["7.5"]
    },
    {
        type: 'closed',
        question: "W pudełku jest 15 kul ponumerowanych od 1 do 15. Losujemy jedną kulę. Prawdopodobieństwo wylosowania kuli z numerem, który jest liczbą pierwszą, wynosi:",
        answers: [
            { text: "1/3", correct: false },
            { text: "6/15", correct: true },
            { text: "7/15", correct: false },
            { text: "1/2", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Pan Jan wpłacił do banku 4000 zł na lokatę z roczną kapitalizacją odsetek. Po dwóch latach stan jego konta wynosił 4410 zł. Jakie było oprocentowanie tej lokaty w skali roku?",
        answers: [
            { text: "4%", correct: false },
            { text: "4.5%", correct: false },
            { text: "5%", correct: true },
            { text: "5.5%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Liczba √(27 - 10√2) jest równa a - b√c, gdzie a, b, c są liczbami naturalnymi. Podaj wartość iloczynu a*b*c.",
        answer: ["50"]
    },
    {
        type: 'closed',
        question: "Kwadrat i koło mają równe pola. Stosunek obwodu kwadratu do obwodu koła wynosi:",
        answers: [
            { text: "2 : √π", correct: true },
            { text: "√π : 2", correct: false },
            { text: "4 : π", correct: false },
            { text: "π : 4", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Zegar spóźnia się 4 minuty na dobę. O której godzinie należy go nastawić w poniedziałek w południe, aby w piątek w południe wskazał dokładny czas?",
        answer: ["11:44"]
    },
    {
        type: 'closed',
        question: "Liczba x przy dzieleniu przez 7 daje resztę 3. Jaką resztę przy dzieleniu przez 7 daje liczba 3x+5?",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W ostrosłupie prawidłowym czworokątnym krawędź boczna o długości 10 jest nachylona do płaszczyzny podstawy pod kątem 60°. Oblicz objętość tego ostrosłupa (wynik zapisz w postaci a√b).",
        answer: ["250√3/3"]
    },
    {
        type: 'closed',
        question: "Punkty A(-3, -1) i B(5, 5) są końcami średnicy okręgu. Jaki jest promień tego okręgu?",
        answers: [
            { text: "10", correct: false },
            { text: "√50", correct: false },
            { text: "5", correct: true },
            { text: "√10", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli a + b = 5 i a² + b² = 13, to wartość wyrażenia a³ + b³ jest równa:",
        answers: [
            { text: "35", correct: true },
            { text: "65", correct: false },
            { text: "25", correct: false },
            { text: "95", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W pięciokącie foremnym ABCDE przekątne AC i BD przecinają się w punkcie P. Jaka jest miara kąta APB?",
        answer: ["108"]
    },
    {
        type: 'closed',
        question: "Rowerzysta przejechał 1/3 trasy z prędkością 10 km/h, a pozostałe 2/3 trasy z prędkością 20 km/h. Jaka była jego średnia prędkość na całej trasie?",
        answers: [
            { text: "15 km/h", correct: false },
            { text: "16 km/h", correct: false },
            { text: "12 km/h", correct: false },
            { text: "15 km/h", correct: true } // Vśr = 2s/(s/10 + s/20) ... = s/(s/10 + s/20)... Vśr = s/(t1+t2)... T=S/V... t1=(1/3S)/10=S/30, t2=(2/3S)/20=S/30. Całkowity czas T=S/15. Vśr=S/T = 15.
        ]
    },
    { // Poprawka zad. 15
        type: 'closed',
        question: "Rowerzysta przejechał 1/3 trasy z prędkością 10 km/h, a pozostałą część z prędkością 20 km/h. Jaka była jego średnia prędkość na całej trasie?",
        answers: [
            { text: "15 km/h", correct: true },
            { text: "16 km/h", correct: false },
            { text: "12 km/h", correct: false },
            { text: "16 i 2/3 km/h", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Z cyfr 1, 2, 3, 4 tworzymy liczby dwucyfrowe o różnych cyfrach. Jakie jest prawdopodobieństwo, że wylosowana liczba będzie mniejsza od 32?",
        answers: [
            { text: "1/2", correct: false },
            { text: "7/12", correct: false },
            { text: "2/3", correct: false },
            { text: "1/2", correct: true } // (12, 13, 14, 21, 23, 24) -> 6/12 = 1/2
        ]
    },
    {
        type: 'open',
        question: "W trójkąt równoramienny o podstawie 12 i ramionach 10 wpisano kwadrat tak, że jeden jego bok leży na podstawie trójkąta. Oblicz długość boku tego kwadratu.",
        answer: ["4.8"]
    },
    {
        type: 'closed',
        question: "Wartość wyrażenia log√₂(8) jest równa:",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "W trójkąt prostokątny o przyprostokątnych 6 i 8 wpisano półkole tak, że jego średnica leży na przeciwprostokątnej. Jaki jest promień tego półkola?",
        answers: [
            { text: "2.4", correct: false },
            { text: "3", correct: false },
            { text: "24/7", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Ile jest liczb naturalnych n mniejszych od 50, dla których liczba n²-1 jest podzielna przez 5?",
        answer: ["19"]
    },
    {
        type: 'closed',
        question: "Suma n początkowych liczb naturalnych dodatnich wynosi 210. Ile wynosi n?",
        answers: [
            { text: "19", correct: false },
            { text: "20", correct: true },
            { text: "21", correct: false },
            { text: "22", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli 3ˣ = 2, to wartość wyrażenia 9ˣ⁻¹ jest równa:",
        answers: [
            { text: "1", correct: false },
            { text: "4/3", correct: false },
            { text: "4/9", correct: true },
            { text: "2/3", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Wysokość trapezu równoramiennego opuszczona z wierzchołka kąta rozwartego dzieli dłuższą podstawę na odcinki o długości 5 cm i 12 cm. Obwód trapezu wynosi 42 cm. Oblicz pole tego trapezu.",
        answer: ["99"]
    },
    {
        type: 'closed',
        question: "Prosta k o równaniu y=ax+b jest prostopadła do osi OY i przechodzi przez punkt P=(-3, 5). Wówczas:",
        answers: [
            { text: "a=0, b=-3", correct: false },
            { text: "a=-3, b=5", correct: false },
            { text: "a=0, b=5", correct: true },
            { text: "a=5, b=0", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Metalową kulę o promieniu 6 cm przetopiono na stożek, którego tworząca jest 2 razy dłuższa od promienia podstawy. Jaki jest promień podstawy tego stożka?",
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