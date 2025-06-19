const questions = [
    {
        "type": "closed",
        "question": "W 'Zemście' język Rejenta, pełen zdrobnień i pozornej pokory ('mocium panie', 'serdeńko'), stoi w jaskrawym kontraście do jego czynów. Ten zabieg artystyczny to:",
        "answers": [
            { "text": "Hiperbola, czyli wyolbrzymienie.", "correct": false },
            { "text": "Ironia charakterologiczna, demaskująca hipokryzję postaci.", "correct": true },
            { "text": "Eufemizm, czyli łagodzenie wyrażeń.", "correct": false },
            { "text": "Peryfraza, czyli omówienie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Pilot na początku opowieści mówi, że dorośli zmusili go do porzucenia kariery malarza. Co symbolizuje ten 'zawód malarza'?",
        "answer": ["'Zawód malarza' symbolizuje dziecięcą wyobraźnię, kreatywność i zdolność do postrzegania świata w sposób nieszablonowy i metaforyczny (jak słoń w wężu boa). Porzucenie go na rzecz 'poważnych' zajęć (geografia, arytmetyka) to metafora procesu dorastania, w którym często traci się wrażliwość i fantazję na rzecz pragmatyzmu."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań imiesłów przysłówkowy współczesny został użyty niepoprawnie?",
        "answers": [
            { "text": "Słuchając wykładu, robił notatki.", "correct": false },
            { "text": "Jedząc obiad, oglądał telewizję.", "correct": false },
            { "text": "Idąc do domu, spotkał go kolega.", "correct": true },
            { "text": "Czytając książkę, pił herbatę.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co jest wspólną cechą losu Jacka Soplicy i Edypa, bohatera mitologii greckiej?",
        "answers": [
            { "text": "Obaj nieświadomie popełniają straszną zbrodnię, która rzutuje na całe ich późniejsze życie i zmusza do pokuty lub cierpienia.", "correct": true },
            { "text": "Obaj są królami, którzy tracą władzę.", "correct": false },
            { "text": "Obaj toczą walkę z przeznaczeniem, próbując je oszukać.", "correct": false },
            { "text": "Obaj umierają w samotności, opuszczeni przez wszystkich.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Asesor i Rejent toczą spór o swoje psy myśliwskie. Jaka jest funkcja tego sporu w strukturze utworu?",
        "answer": ["Spór ten jest miniaturowym, komicznym odbiciem głównego konfliktu o zamek. Pokazuje on, że w świecie sarmackim każda dziedzina życia, nawet polowanie, jest pretekstem do rywalizacji, obrony honoru i kłótni. Jest to element budujący obraz obyczajowości szlacheckiej i dodający utworowi humoru."]
    },
    {
        "type": "closed",
        "question": "Postać Ligii w 'Quo vadis' reprezentuje:",
        "answers": [
            { "text": "Dzikość i prostotę ludów barbarzyńskich.", "correct": false },
            { "text": "Siłę i czystość moralną nowej wiary (chrześcijaństwa), która jest w stanie przetrwać prześladowania i przemienić serca pogan.", "correct": true },
            { "text": "Kruchą i bezbronną ofiarę rzymskiej tyranii.", "correct": false },
            { "text": "Buntowniczą naturę kobiety, która nie chce podporządkować się woli mężczyzn.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Papkina jest zarówno postacią dynamiczną (zmieniającą się), jak i statyczną (niezmienną).",
        "answer": ["Jest dynamiczna, bo w toku akcji przeżywa różne stany – od brawury, przez zaloty, po strach przed śmiercią i rozczarowanie. Jest jednak statyczna w swojej istocie – do końca pozostaje tchórzliwym mitomanem i samochwałą. Jego okoliczności się zmieniają, ale jego fundamentalny charakter pozostaje taki sam."]
    },
    {
        "type": "closed",
        "question": "W 'Kamieniach na szaniec', która z akcji dywersyjnych miała największe znaczenie psychologiczne i propagandowe dla mieszkańców okupowanej Warszawy?",
        "answers": [
            { "text": "Wysadzenie pociągu z amunicją.", "correct": false },
            { "text": "Usunięcie niemieckiej płyty z pomnika Mikołaja Kopernika.", "correct": true },
            { "text": "Likwidacja znienawidzonych oficerów Gestapo.", "correct": false },
            { "text": "Rozrzucanie ulotek antyniemieckich.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'pracy organicznej' jako idei pozytywistycznej.",
        "answer": ["'Praca organiczna' to metafora postrzegania społeczeństwa jako żywego organizmu. Zgodnie z tą ideą, naród może być silny i zdrowy tylko wtedy, gdy wszystkie jego części (warstwy społeczne, gałęzie gospodarki) harmonijnie ze sobą współpracują i rozwijają się. Był to program wzmacniania narodu poprzez rozwój ekonomiczny, edukacyjny i technologiczny, a nie poprzez walkę zbrojną."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd polegający na niewłaściwym użyciu strony biernej.",
        "answers": [
            { "text": "Problem został wnikliwie przeanalizowany przez ekspertów.", "correct": false },
            { "text": "Zostałem zapytany o drogę przez turystę.", "correct": false },
            { "text": "Wypadek został spowodowany przez kierowcę.", "correct": true },
            { "text": "List został napisany i wysłany wczoraj.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm losu postaci z ballady 'Pani Twardowska'.",
        "answer": ["Jej tragizm jest tragikomedią pychy. Twardowski, pewny swego sprytu, myśli, że przechytrzył diabła, podpisując cyrograf. Jednak jego ludzka natura (strach przed żoną, miłość do niej) okazuje się silniejsza niż jego magiczne moce i zobowiązania. Zostaje pokonany nie przez siły piekielne, ale przez prozę życia i własne uczucia, co jest dla niego upokarzającą klęską."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w najpełniejszy sposób uosabia romantyczny typ bohatera-pielgrzyma.",
        "answers": [
            { "text": "Skawiński z 'Latarnika'", "correct": true },
            { "text": "Marcin Borowicz z 'Syzyfowych prac'", "correct": false },
            { "text": "Bilbo Baggins z 'Hobbita'", "correct": false },
            { "text": "Rejent Milczek z 'Zemsty'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' często pojawia się motyw 'ostatni'. Jaka jest funkcja tego motywu?",
        "answer": ["Motyw ten (ostatni zajazd, ostatni co tak poloneza wodził) podkreśla, że utwór opisuje świat odchodzący w przeszłość. Jest to nostalgiczne pożegnanie z epoką sarmacką, jej obyczajami, ludźmi i tradycjami. Nadaje to epopei elegijny, melancholijny ton i wzmacnia jej funkcję jako 'arki przymierza między dawnymi i nowymi laty'."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', głównym powodem, dla którego Scrooge tak bardzo nienawidzi świąt Bożego Narodzenia, jest to, że:",
        "answers": [
            { "text": "Są one dla niego czasem straty finansowej, bo musi dać pracownikowi dzień wolny.", "correct": false },
            { "text": "Święta przypominają mu o jego samotności, utraconej miłości i błędach młodości, od których ucieka w pracę i gromadzenie pieniędzy.", "correct": true },
            { "text": "Uważa je za pogański zwyczaj, który nie ma nic wspólnego z prawdziwą religią.", "correct": false },
            { "text": "Denerwuje go hałas i radosna atmosfera, która przeszkadza mu w pracy.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie zależnej na mowę niezależną: 'Zapewnił mnie, że na pewno dotrzyma słowa.'",
        "answer": ["Zapewnił mnie: 'Na pewno dotrzymam słowa!'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej realizuje model satyry obyczajowej, krytykującej konkretne wady społeczne?",
        "answers": [
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Żona modna'", "correct": true },
            { "text": "'Artysta'", "correct": false },
            { "text": "'Pan Tadeusz'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'kainowego znamienia' (czerwonej plamy na czole), które nosi Balladyna.",
        "answer": ["Jest to nawiązanie do biblijnej historii Kaina, pierwszego zabójcy. 'Kainowe znamię' to widoczny, niezmywalny znak popełnionej zbrodni i wyrzutów sumienia. Symbolizuje on, że zbrodni nie da się ukryć, a wina jest trwale wpisana w tożsamość sprawcy, stając się jego przekleństwem i piętnem, które widzą inni."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje podmiot logiczny.",
        "answers": [
            { "text": "W lesie przybywało grzybów po deszczu.", "correct": true },
            { "text": "Na stole leżała otwarta książka.", "correct": false },
            { "text": "Tysiące ludzi protestowało na ulicach.", "correct": false },
            { "text": "Wszyscy byli zmęczeni po długiej podróży.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest symboliczna funkcja postaci Jankiela w 'Panu Tadeuszu'?",
        "answer": ["Jankiel, Żyd-patriota, symbolizuje ideę Rzeczypospolitej jako państwa wielu narodów i kultur, zjednoczonych miłością do wspólnej ojczyzny. Jest on strażnikiem pamięci narodowej, a jego postawa pokazuje, że polskość to nie kwestia krwi, ale wyboru i ducha. Jest uosobieniem nadziei na zgodę i jedność."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w swoim postępowaniu kieruje się przede wszystkim chęcią przypodobania się innym i zdobycia ich aprobaty.",
        "answers": [
            { "text": "Rejent Milczek", "correct": false },
            { "text": "Papkin", "correct": true },
            { "text": "Gerwazy Rębajło", "correct": false },
            { "text": "Sędzia Soplica", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega komizm słowny w 'Zemście'. Podaj jeden przykład.",
        "answer": ["Komizm słowny polega na tworzeniu zabawnych efektów poprzez specyficzne użycie języka – grę słów, zabawne powiedzonka, kontrast między stylem a treścią. Przykładem jest stałe powiedzonko Rejenta: 'Niech się dzieje wola nieba, / Z nią się zawsze zgadzać trzeba', które staje się śmieszne, gdy jest używane do usprawiedliwiania jego własnych, niecnych intryg."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym elementem losu postaci z przypowieści o talentach i postaci Koguta z 'Artysty'?",
        "answers": [
            { "text": "Obie opowieści mówią o konieczności pomnażania majątku.", "correct": false },
            { "text": "W obu przypadkach bohaterowie zostają poddani próbie, która ma zweryfikować, czy potrafią właściwie wykorzystać posiadane zdolności (talenty/bycie kogutem). Niezdanie tej próby prowadzi do porażki.", "correct": true },
            { "text": "Obie historie kończą się szczęśliwie dla głównych bohaterów.", "correct": false },
            { "text": "W obu utworach kluczową rolę odgrywa motyw podróży.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd frazeologiczny w zdaniu: 'W tej firmie panuje duża dyscyplina' i zapisz je poprawnie.",
        "answer": ["Błąd: pleonazm, tzw. masło maślane. 'Dyscyplina' sama w sobie oznacza wysoki stopień porządku. Poprawnie: 'W tej firmie panuje dyscyplina' lub 'W tej firmie panuje żelazna dyscyplina'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł w najpełniejszy sposób ukazuje problematykę władzy i jej demoralizującego wpływu na człowieka?",
        "answers": [
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Balladyna'", "correct": true },
            { "text": "'Pan Tadeusz'", "correct": false },
            { "text": "'Mały Książę'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie V' Kochanowski porównuje śmierć Urszulki do ścięcia oliwki. Dlaczego wybrał właśnie oliwkę, a nie inne drzewo?",
        "answer": ["Oliwka w kulturze śródziemnomorskiej i chrześcijańskiej jest symbolem pokoju, życia, płodności i boskiego błogosławieństwa. Wybór tego drzewa potęguje tragizm – zniszczone zostaje nie tylko młode życie, ale także symbol nadziei i świętości. Podkreśla to bezsens i okrucieństwo śmierci, która uderza w to, co najcenniejsze."]
    }
]

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