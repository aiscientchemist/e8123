const questions = [
    {
        "type": "closed",
        "question": "Która para postaci z 'Zemsty' najlepiej ilustruje konflikt między porywczą, sarmacką naturą a chłodnym, obłudnym wyrachowaniem?",
        "answers": [
            { "text": "Klara i Wacław", "correct": false },
            { "text": "Cześnik i Rejent", "correct": true },
            { "text": "Papkin i Dyndalski", "correct": false },
            { "text": "Podstolina i Klara", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' wąż proponuje, że odeśle Małego Księcia 'tam, skąd przybył'. Co jest eufemistycznym, symbolicznym znaczeniem tej propozycji?",
        "answer": ["Jest to eufemizm (złagodzone określenie) na śmierć. 'Odesłanie tam, skąd przybył' oznacza symboliczny powrót do świata duchowego, do gwiazd, skąd Mały Książę pochodzi. Śmierć jest tu przedstawiona nie jako koniec, ale jako podróż powrotna do domu, co łagodzi jej tragiczny wymiar."]
    },
    {
        "type": "closed",
        "question": "Wskaż grupę wyrazów, w której wszystkie są przymiotnikami w stopniu najwyższym.",
        "answers": [
            { "text": "lepszy, najgorszy, bardziej ciekawy", "correct": false },
            { "text": "najmilszy, najtrudniejszy, najlepszy", "correct": true },
            { "text": "wysoki, wyższy, najwyższy", "correct": false },
            { "text": "najładniej, najszybciej, najdłużej", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co jest wspólną cechą podróży Odyseusza (bohatera mitologii) i tułaczki Skawińskiego z 'Latarnika'?",
        "answers": [
            { "text": "Obie są karą nałożoną przez bogów za pychę.", "correct": false },
            { "text": "Są to wieloletnie wędrówki, podczas których bohaterowie tęsknią za powrotem do utraconej ojczyzny (Itaki / Polski), która staje się dla nich symbolem domu i spokoju.", "correct": true },
            { "text": "Obie kończą się tryumfalnym powrotem i odzyskaniem dawnej pozycji.", "correct": false },
            { "text": "Obie są motywowane chęcią zdobycia sławy i bogactw.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Gerwazy opowiada historię zamku Horeszków. Jaki jest cel tej opowieści i jak ona wpływa na Hrabiego?",
        "answer": ["Celem opowieści Gerwazego jest podtrzymanie pamięci o krzywdzie Horeszków i rozbudzenie w Hrabim, ostatnim z rodu, chęci zemsty. Opowieść ta działa na romantyczną wyobraźnię Hrabiego, przekształcając dla niego zamek z malowniczej ruiny w miejsce osobistej tragedii, co motywuje go do zorganizowania zajazdu."]
    },
    {
        "type": "closed",
        "question": "Postać Pustelnika w 'Balladynie' symbolizuje:",
        "answers": [
            { "text": "Siły natury, które sprzeciwiają się Goplanie.", "correct": false },
            { "text": "Utracony, sprawiedliwy porządek moralny i prawowitą władzę, która została obalona przez tyranię.", "correct": true },
            { "text": "Mądrość ludową i wiedzę na temat ziołolecznictwa.", "correct": false },
            { "text": "Romantyczną samotność i ucieczkę od świata.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Klary z 'Zemsty' jest często uważana za głos rozsądku w świecie rządzonym przez emocje.",
        "answer": ["Jest głosem rozsądku, ponieważ jako jedyna podejmuje racjonalne i przemyślane decyzje. Nie daje się ponieść ani porywom serca (jak Wacław), ani cholerycznym nastrojom (jak Cześnik). Jej warunki postawione Papkinowi czy plan działania wobec Wacława świadczą o inteligencji, pragmatyzmie i umiejętności panowania nad sytuacją."]
    },
    {
        "type": "closed",
        "question": "W 'Kamieniach na szaniec', które z poniższych stwierdzeń najlepiej charakteryzuje postać Alka (Aleksego Dawidowskiego)?",
        "answers": [
            { "text": "Refleksyjny intelektualista, zamknięty w sobie i skłonny do analizy.", "correct": false },
            { "text": "Urodzony ryzykant, pełen brawury i humoru, często działający spontanicznie, specjalista od akcji 'na pierwszej linii'.", "correct": true },
            { "text": "Typ przywódcy-organizatora, skupiony na strategii i dowodzeniu.", "correct": false },
            { "text": "Postać wrażliwa i artystycznie uzdolniona.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'pracy u podstaw' w kontekście pozytywistycznych nowel (np. 'Katarynka').",
        "answer": ["'Praca u podstaw' symbolizuje ideę edukacji i podnoszenia poziomu życia najniższych, najbardziej zaniedbanych warstw społecznych (ludu, biedoty miejskiej). Jest to metafora budowania siły narodu od fundamentów. Bohaterowie tych nowel (jak pan Tomasz) wierzą, że realna poprawa losu ojczyzny zaczyna się od małych, organicznych działań na rzecz najsłabszych."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd leksykalny (użycie słowa w niewłaściwym znaczeniu).",
        "answers": [
            { "text": "Musimy zaadoptować się do nowych warunków.", "correct": true },
            { "text": "Aktor zaadaptował powieść na potrzeby scenariusza.", "correct": false },
            { "text": "Chciałbym zaadoptować psa ze schroniska.", "correct": false },
            { "text": "Ta firma dobrze adaptuje się do zmian na rynku.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm losu bohatera ballady 'Powrót taty'.",
        "answer": ["Jego tragizm polega na paradoksalnej sytuacji, w której jako zbójca, człowiek żyjący z krzywdy innych, zostaje skonfrontowany z niewinną wiarą i miłością własnych dzieci. Modlitwa dzieci za jego powrót staje się dla niego moralnym wstrząsem, który zmusza go do konfrontacji z własnym upadkiem. To tragizm nawrócenia pod wpływem nieświadomego działania jego ofiar."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w najpełniejszy sposób uosabia romantyczny typ bohatera wallenrodycznego.",
        "answers": [
            { "text": "Jacek Soplica (jako ksiądz Robak)", "correct": true },
            { "text": "Marcin Borowicz", "correct": false },
            { "text": "Gerwazy Rębajło", "correct": false },
            { "text": "Marek Winicjusz", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Tadeusz, wchodząc do 'centrum' Soplicowa, widzi zegar kurantowy grający 'Mazurka Dąbrowskiego'. Jaka jest symboliczna funkcja tego przedmiotu?",
        "answer": ["Zegar ten jest symbolem patriotyzmu i nadziei na odzyskanie niepodległości, które są sercem domu w Soplicowie. Granie 'Mazurka Dąbrowskiego', hymnu legionów, sygnalizuje, że w tym miejscu żyje się ideą walki o wolność. Jest to pierwszy znak wprowadzający w polityczny i narodowy wymiar epopei."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', ignorancja i nędza są przedstawione jako dzieci Ducha Teraźniejszych Świąt. Dlaczego właśnie tego ducha?",
        "answers": [
            { "text": "Ponieważ jest to problem, który należy rozwiązać w przeszłości.", "correct": false },
            { "text": "Ponieważ jest to problem, który jest realny i obecny 'tu i teraz', a jego skutki będą katastrofalne w przyszłości, jeśli nie zostaną rozwiązane.", "correct": true },
            { "text": "Ponieważ duch ten jest najpotężniejszy i może udźwignąć ciężar tych problemów.", "correct": false },
            { "text": "Ponieważ duch ten symbolizuje radość, a dzieci te są jej przeciwieństwem.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie zależnej na mowę niezależną: 'Nauczyciel ostrzegł, żebyśmy nie rozmawiali podczas egzaminu.'",
        "answer": ["Nauczyciel ostrzegł: 'Nie rozmawiajcie podczas egzaminu!'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej realizuje model utopii – wizji idealnego, arkadyjskiego świata?",
        "answers": [
            { "text": "'Syzyfowe prace' (wątek życia w Gawronkach)", "correct": false },
            { "text": "'Pan Tadeusz' (wątek życia w Soplicowie)", "correct": true },
            { "text": "'Zemsta' (wątek zamku)", "correct": false },
            { "text": "'Chłopcy z Placu Broni' (wątek Placu)", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'nici Ariadny' w micie o Tezeuszu.",
        "answer": ["'Nić Ariadny' symbolizuje spryt, inteligencję i pomocną dłoń, która pozwala wyjść z beznadziejnej sytuacji (labiryntu). Jest to metafora logicznego myślenia, planu lub wskazówki, która prowadzi przez chaos i zawiłości problemu. W szerszym sensie, symbolizuje każdą formę ratunku, która pozwala odnaleźć właściwą drogę."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje podmiot zbiorowy.",
        "answers": [
            { "text": "Wszyscy uczniowie poszli na boisko.", "correct": false },
            { "text": "Państwo Nowakowie kupili nowy dom.", "correct": true },
            { "text": "W lesie rosło wiele drzew.", "correct": false },
            { "text": "Trzech chłopców grało w piłkę.", "correct": false }
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