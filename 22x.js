const questions = [
    {
        "type": "closed",
        "question": "W 'Zemście', która postać jest największym manipulatorem, ukrywającym swoje prawdziwe intencje pod maską fałszywej pobożności?",
        "answers": [
            { "text": "Cześnik Raptusiewicz", "correct": false },
            { "text": "Rejent Milczek", "correct": true },
            { "text": "Papkin", "correct": false },
            { "text": "Podstolina", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu', co symbolizuje fakt, że wszystkie planety odwiedzane przez bohatera są zamieszkane tylko przez jedną osobę?",
        "answer": ["Symbolizuje to samotność i egocentryzm świata dorosłych. Każdy z nich jest zamknięty we własnym, małym świecie absurdalnych zajęć i nie potrafi nawiązać autentycznej relacji. To metafora izolacji i braku komunikacji w społeczeństwie, w którym każdy skupiony jest wyłącznie na sobie."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań występuje błąd w użyciu imiesłowu przymiotnikowego?",
        "answers": [
            { "text": "To jest książka napisana przez słynnego autora.", "correct": false },
            { "text": "Pies, biegnący przez park, głośno szczekał.", "correct": false },
            { "text": "Widziałem film reżyserujący przez mojego ulubionego twórcę.", "correct": true },
            { "text": "List, wysłany wczoraj, jeszcze nie dotarł.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co łączy postawę moralną Rejenta Milczka z 'Zemsty' z postawą Chilona Chilonidesa z 'Quo vadis' (przed jego przemianą)?",
        "answers": [
            { "text": "Obaj są bardzo odważni i nie boją się konfrontacji.", "correct": false },
            { "text": "Obaj instrumentalnie wykorzystują swoją inteligencję i znajomość ludzkiej psychiki do osiągania własnych, niegodziwych celów, ukrywając się za maską (pobożności / filozofii).", "correct": true },
            { "text": "Obaj są wiernymi sługami swoich panów.", "correct": false },
            { "text": "Obaj dążą do zdobycia wielkiego majątku.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' opisane są dwa rodzaje polowań: na niedźwiedzia i na zająca. Jaka jest symboliczna różnica między nimi?",
        "answer": ["Polowanie na niedźwiedzia jest przedstawione jako wielki, niemal epicki rytuał, próba sił i odwagi, w której uczestniczy cała szlachta – to symbol dawnej, bohaterskiej Polski. Polowanie na zająca, z kłótnią Asesora i Rejenta, jest jego komicznym, zdegradowanym echem, pokazującym upadek obyczajów i skupienie na drobnych, prywatnych animozjach."]
    },
    {
        "type": "closed",
        "question": "Postać Goplany w 'Balladynie' jest uosobieniem:",
        "answers": [
            { "text": "Sprawiedliwości, która karze ludzkie zbrodnie.", "correct": false },
            { "text": "Kapryśnej, amoralnej siły natury, której ingerencja w świat ludzi, motywowana osobistymi uczuciami (miłością, zazdrością), prowadzi do chaosu i tragedii.", "correct": true },
            { "text": "Dobrej wróżki, która pomaga głównym bohaterom.", "correct": false },
            { "text": "Diabła w kobiecej postaci, który świadomie dąży do zniszczenia ludzkości.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Wacława w 'Zemście' jest postacią bardziej skomplikowaną moralnie niż Klara.",
        "answer": ["Jest bardziej skomplikowany, ponieważ w dążeniu do celu (zdobycia Klary) jest gotów posługiwać się podstępem i kłamstwem (udaje jeńca, zataja swoją tożsamość, zwodzi Podstolinę). Jego działania, choć motywowane miłością, balansują na granicy moralnej dwuznaczności, podczas gdy Klara pozostaje postacią jednoznacznie szczerą i prawą."]
    },
    {
        "type": "closed",
        "question": "W 'Kamieniach na szaniec', która z postaci symbolizuje niezwykły hart ducha i wytrzymałość psychiczną i fizyczną w obliczu tortur?",
        "answers": [
            { "text": "Rudy (Jan Bytnar)", "correct": true },
            { "text": "Alek (Alek Dawidowski)", "correct": false },
            { "text": "Zośka (Tadeusz Zawadzki)", "correct": false },
            { "text": "Anoda (Jan Rodowicz)", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'puszki Pandory' z mitologii greckiej.",
        "answer": ["'Puszka Pandory' symbolizuje źródło nieszczęść, problemów i zła, które, raz uwolnione, rozprzestrzeniają się po świecie. Jest to metafora nieodwracalnych konsekwencji ciekawości, nieposłuszeństwa lub nieprzemyślanych działań. Nadzieja, która pozostała na dnie, symbolizuje, że nawet w najgorszej sytuacji człowiekowi pozostaje otucha."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd polegający na niewłaściwym użyciu konstrukcji składniowej.",
        "answers": [
            { "text": "Był tak zmęczony, że zasnął na stojąco.", "correct": false },
            { "text": "Po powrocie do domu, od razu zabrał się do pracy.", "correct": false },
            { "text": "Wziąłem i zrobiłem to wczoraj.", "correct": true },
            { "text": "Zarówno on, jak i ona byli zaskoczeni.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm losu postaci tytułowej z bajki Adama Mickiewicza 'Pani Twardowska'.",
        "answer": ["Jej tragizm jest tragikomedią pychy. Twardowski, pewny swego sprytu, myśli, że przechytrzył diabła, podpisując cyrograf. Jednak jego ludzka natura (strach przed żoną, miłość do niej) okazuje się silniejsza niż jego magiczne moce i zobowiązania. Zostaje pokonany nie przez siły piekielne, ale przez prozę życia i własne uczucia, co jest dla niego upokarzającą klęską."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w najpełniejszy sposób uosabia romantyczny typ bohatera, który przechodzi przemianę od zbrodniarza do świętego męża stanu.",
        "answers": [
            { "text": "Jacek Soplica", "correct": true },
            { "text": "Marek Winicjusz", "correct": false },
            { "text": "Ebenezer Scrooge", "correct": false },
            { "text": "Chilon Chilonides", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' często pojawia się motyw nieba i chmur. Jaka jest funkcja tych opisów?",
        "answer": ["Opisy te pełnią funkcję estetyczną, ale i symboliczną. Zmieniające się niebo odzwierciedla nastroje bohaterów i zapowiada nadchodzące wydarzenia (np. burza przed bitwą). Jest to także element sakralizacji litewskiego krajobrazu – niebo jest tu równie ważne i piękne jak ziemia, co buduje arkadyjski, harmonijny obraz świata."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', postać Jacoba Marleya, dawnego wspólnika Scrooge'a, symbolizuje:",
        "answers": [
            { "text": "Utraconego przyjaciela, za którym Scrooge tęskni.", "correct": false },
            { "text": "Ostrzeżenie i zapowiedź losu, który czeka Scrooge'a, jeśli się nie zmieni; jest on lustrzanym odbiciem jego duszy.", "correct": true },
            { "text": "Przeszłość, od której Scrooge nie może się uwolnić.", "correct": false },
            { "text": "Konkurenta w interesach, którego Scrooge pokonał.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie zależnej na mowę niezależną: 'Zapytał, czy może pożyczyć moją książkę.'",
        "answer": ["Zapytał: 'Czy mogę pożyczyć twoją książkę?'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej realizuje model powieści tendencyjnej, w której losy bohaterów służą zilustrowaniu określonej tezy społecznej?",
        "answers": [
            { "text": "'Pan Tadeusz'", "correct": false },
            { "text": "'Katarynka'", "correct": true },
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Chłopcy z Placu Broni'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symboliczną funkcję postaci Kirkora w 'Balladynie'.",
        "answer": ["Kirkor symbolizuje idealistycznego, ale i naiwnego władcę, który pragnie przywrócić w kraju sprawiedliwość i praworządność (szuka korony Popielów). Jest on uosobieniem rycerskiego ideału, ale jego ufność i brak przenikliwości w ocenie charakteru Balladyny prowadzą go do zguby. Reprezentuje on dobro, które jest bezsilne w konfrontacji z demonicznym złem."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd frazeologiczny.",
        "answers": [
            { "text": "Wziął nogi za pas i uciekł.", "correct": false },
            { "text": "Siedział cicho jak mysz pod miotłą.", "correct": false },
            { "text": "W każdym bądź razie musimy to zrobić.", "correct": true },
            { "text": "To była dla niego syzyfowa praca.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest symboliczna funkcja postaci Telimeny w kontekście polskiego społeczeństwa epoki porozbiorowej?",
        "answer": ["Telimena symbolizuje tę część polskiego społeczeństwa, która uległa fascynacji kulturą obcą (rosyjską, francuską), traktując ją jako wyznacznik nowoczesności i lepszego świata. Reprezentuje kosmopolityzm i odwrócenie się od rodzimej tradycji, co było jednym z dylematów tożsamościowych Polaków w tamtym okresie."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w swoim postępowaniu kieruje się przede wszystkim wiernością i lojalnością wobec przywódcy/pana.",
        "answers": [
            { "text": "Papkin", "correct": false },
            { "text": "Gerwazy", "correct": true },
            { "text": "Wacław", "correct": false },
            { "text": "Hrabia", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega komizm sytuacyjny w 'Zemście'. Podaj jeden przykład.",
        "answer": ["Komizm sytuacyjny polega na tworzeniu zabawnych, nieoczekiwanych i absurdalnych zbiegów okoliczności i wydarzeń. Przykładem jest scena, w której Wacław, syn Rejenta, dobrowolnie oddaje się w 'niewolę' Cześnikowi, swojemu wrogowi, aby być bliżej ukochanej Klary, co Cześnik interpretuje jako akt tchórzostwa i kapitulacji."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym elementem losu Ikara i Balladyny?",
        "answers": [
            { "text": "Dążenie do władzy, które prowadzi do upadku.", "correct": false },
            { "text": "Upadek (dosłowny i moralny) spowodowany przekroczeniem pewnych granic – Ikar przekracza granice wyznaczone przez naturę i ojca, a Balladyna granice moralne i ludzkie.", "correct": true },
            { "text": "Miłość, która staje się przyczyną ich zguby.", "correct": false },
            { "text": "Kara wymierzona przez bogów za nieposłuszeństwo.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd frazeologiczny w zdaniu: 'On zawsze ubiera adidasy do garnituru' i wyjaśnij, na czym on polega.",
        "answer": ["Błąd polega na generalizacji nazwy własnej ('adidasy' od marki Adidas) i używaniu jej jako nazwy gatunkowej (buty sportowe). Chociaż jest to powszechne w języku potocznym, w normie wzorcowej jest to błąd. Poprawnie: 'On zawsze ubiera buty sportowe do garnituru'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł w najpełniejszy sposób ukazuje konflikt pokoleń na tle wielkich przemian historycznych?",
        "answers": [
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Pan Tadeusz'", "correct": true },
            { "text": "'Latarnik'", "correct": false },
            { "text": "'Chłopcy z Placu Broni'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie XIX, czyli Śnie', matka mówi do Kochanowskiego: '[...] ludzkie przygody / Ludzkie noś'. Co oznaczają te słowa?",
        "answer": ["Oznaczają one wezwanie do przyjęcia stoickiej postawy wobec życia. 'Ludzkie przygody' to ludzki los, pełen cierpienia i radości. 'Ludzkie noś' to nakaz, by znosić ten los z godnością, umiarem i odwagą, akceptując, że cierpienie jest nieodłączną częścią bycia człowiekiem. To filozofia akceptacji ludzkiej doli."]
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