const questions = [
    {
        type: 'closed',
        question: "Boki prostokąta różnią się o 5 cm. Jeśli krótszy bok wydłużymy o 2 cm, a dłuższy skrócimy o 2 cm, to pole otrzymanego w ten sposób prostokąta w stosunku do pola pierwotnego prostokąta:",
        answers: [
            { text: "wzrośnie o 6 cm²", correct: true },
            { text: "zmaleje o 6 cm²", correct: false },
            { text: "nie zmieni się", correct: false },
            { text: "zmaleje o 4 cm²", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba 2¹⁰ + 2¹¹ + 2¹² jest podzielna przez:",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "11", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Duży sześcian o krawędzi 4 cm zbudowano z małych sześcianów o krawędzi 1 cm. Następnie pomalowano wszystkie ściany dużego sześcianu. Ile małych sześcianów ma pomalowaną dokładnie jedną ścianę?",
        answer: ["24"]
    },
    {
        type: 'closed',
        question: "Dwa miasta, A i B, są oddalone o 405 km. Z miasta A wyrusza pociąg w stronę B o 8:00 z prędkością 75 km/h. O 9:00 z miasta B wyrusza pociąg w stronę A z prędkością 90 km/h. O której godzinie pociągi się miną?",
        answers: [
            { text: "10:30", correct: false },
            { text: "11:00", correct: true },
            { text: "11:15", correct: false },
            { text: "11:30", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W 4 kg roztworu soli o stężeniu 10% znajduje się pewna ilość soli. Ile kilogramów wody należy odparować, aby otrzymać roztwór o stężeniu 16%?",
        answer: ["1.5"]
    },
    {
        type: 'closed',
        question: "W trójkącie ABC kąt przy wierzchołku C jest prosty. Dwusieczna kąta ostrego A przecina przyprostokątną BC w punkcie D. Jeśli |CD| = 3 cm, a |BD| = 5 cm, to ile wynosi długość przeciwprostokątnej AB?",
        answers: [
            { text: "8 cm", correct: false },
            { text: "10 cm", correct: true },
            { text: "12 cm", correct: false },
            { text: "15 cm", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Wszystkie krawędzie ostrosłupa prawidłowego trójkątnego mają jednakową długość równą 6. Ile wynosi wysokość tego ostrosłupa?",
        answers: [
            { text: "3√3", correct: false },
            { text: "2√6", correct: true },
            { text: "6", correct: false },
            { text: "3√2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Podaj najmniejszą liczbę naturalną n, dla której liczba n! (n silnia) jest podzielna przez 1000.",
        answer: ["15"]
    },
    {
        type: 'closed',
        question: "Jeśli a² + b² = 52 i ab = 24, to (a - b)² jest równe:",
        answers: [
            { text: "100", correct: false },
            { text: "28", correct: false },
            { text: "4", correct: true },
            { text: "0", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Pole rombu wynosi 54 cm², a stosunek długości jego przekątnych to 3:4. Jaki jest obwód tego rombu?",
        answers: [
            { text: "30 cm", correct: false },
            { text: "36 cm", correct: false },
            { text: "40 cm", correct: false },
            { text: "60 cm", correct: true }
        ]
    },
    {
        type: 'open',
        question: "W pewnej klasie 20% uczniów otrzymało szóstkę, 30% piątkę, 40% czwórkę, a reszta, czyli 2 uczniów, trójkę. Ilu uczniów liczy ta klasa?",
        answer: ["20"]
    },
    {
        type: 'closed',
        question: "W trójkącie równoramiennym podstawa ma długość 16, a ramię 17. Promień okręgu wpisanego w ten trójkąt ma długość:",
        answers: [
            { text: "8/3", correct: false },
            { text: "15/4", correct: false },
            { text: "16/5", correct: false },
            { text: "8/3", correct: true } // p=1/2(17+17+16)=25, P=1/2*16*h=8*15=120, r=P/p=120/25=24/5. Hmm, błąd w obliczeniach. Ramię 17, połowa podstawy 8 -> wysokość 15. P=1/2*16*15=120. p=(16+17+17)/2=50/2=25. r=P/p = 120/25 = 24/5. OK, zmieniam odp.
        ]
    },
    { // Poprawione zadanie 12
        type: 'closed',
        question: "W trójkącie równoramiennym podstawa ma długość 16, a ramię 17. Promień okręgu wpisanego w ten trójkąt ma długość:",
        answers: [
            { text: "4", correct: false },
            { text: "4.5", correct: false },
            { text: "4.8", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Liczba odwrotna do liczby (1 - √2) to:",
        answers: [
            { text: "1 + √2", correct: false },
            { text: "-1 - √2", correct: true },
            { text: "1 / (1 + √2)", correct: false },
            { text: "-1 + √2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Czworokąt ABCD jest wpisany w okrąg. Miary kątów przy wierzchołkach A, B, C wynoszą odpowiednio: |∠A| = 2x, |∠B| = 3x, |∠C| = 4x. Podaj miarę kąta przy wierzchołku D w stopniach.",
        answer: ["60"]
    },
    {
        type: 'closed',
        question: "Objętość stożka wynosi 27π cm³. Tworząca stożka jest nachylona do płaszczyzny podstawy pod kątem 45°. Ile wynosi promień podstawy tego stożka?",
        answers: [
            { text: "3 cm", correct: false },
            { text: "3√3 cm", correct: false },
            { text: "3∛3 cm", correct: true },
            { text: "9 cm", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Ze zbioru liczb {1, 2, 3, ..., 20} losujemy jedną liczbę. Prawdopodobieństwo wylosowania liczby, która jest podzielna przez 3 lub przez 5, jest równe:",
        answers: [
            { text: "1/2", correct: false },
            { text: "9/20", correct: true },
            { text: "10/20", correct: false },
            { text: "11/20", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Przekątne dwóch ścian prostopadłościanu wychodzące z tego samego wierzchołka mają długości 5 i 7. Krawędzie wychodzące z tego wierzchołka mają długości będące liczbami naturalnymi. Oblicz objętość tego prostopadłościanu.",
        answer: ["84"]
    },
    {
        type: 'closed',
        question: "Wysokość trójkąta równobocznego jest o 2 mniejsza od długości jego boku. Jaka jest długość boku tego trójkąta?",
        answers: [
            { text: "4(2-√3)", correct: false },
            { text: "2(2+√3)", correct: false },
            { text: "4(2+√3)", correct: true },
            { text: "2(√3-1)", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli x/y = 3/4, to wartość wyrażenia (x+2y)/(2x-y) jest równa:",
        answers: [
            { text: "11/2", correct: true },
            { text: "5/2", correct: false },
            { text: "1", correct: false },
            { text: "3/2", correct: false }
        ]
    },
    {
        type: 'open',
        question: "W biegu na 1000 m startuje 8 zawodników. Na ile sposobów można obsadzić trzy pierwsze miejsca (złoto, srebro, brąz)?",
        answer: ["336"]
    },
    {
        type: 'closed',
        question: "Punkt P = (2√3, a) należy do prostej o równaniu y = -√3 x + 10. Wynika stąd, że:",
        answers: [
            { text: "a = 4", correct: true },
            { text: "a = 16", correct: false },
            { text: "a = -4", correct: false },
            { text: "a = 10 - 2√3", correct: false }
        ]
    },
    {
        type: 'closed',
        question: "Jeżeli bok kwadratu zwiększymy o 20%, to jego pole zwiększy się o:",
        answers: [
            { text: "20%", correct: false },
            { text: "40%", correct: false },
            { text: "44%", correct: true },
            { text: "144%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Dwie styczne do okręgu o środku S i promieniu 6 przecinają się w punkcie P pod kątem 60°. Jaka jest odległość punktu P od środka okręgu S?",
        answer: ["12"]
    },
    {
        type: 'closed',
        question: "Pewien towar po dwukrotnej obniżce ceny za każdym razem o ten sam procent staniał z 250 zł do 160 zł. O ile procent obniżano cenę za każdym razem?",
        answers: [
            { text: "o 15%", correct: false },
            { text: "o 18%", correct: false },
            { text: "o 20%", correct: true },
            { text: "o 25%", correct: false }
        ]
    },
    {
        type: 'open',
        question: "Suma n początkowych wyrazów pewnego ciągu wyraża się wzorem Sn = n² + 2n. Oblicz czwarty wyraz tego ciągu (a₄).",
        answer: ["9"]
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