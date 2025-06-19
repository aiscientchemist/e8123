const questions = [
    {
        "type": "closed",
        "question": "W 'Zemście', język Cześnika jest pełen krótkich, rozkazujących zwrotów i dosadnych określeń ('mocium panie', 'hej, Gerwazy! daj gwintówkę!'). Co ten styl mówienia komunikuje o jego charakterze?",
        "answers": [
            { "text": "Jego głęboką refleksyjność i skłonność do filozofowania.", "correct": false },
            { "text": "Jego impulsywność, porywczość i nawyk do wydawania poleceń; jest to język człowieka czynu, a nie namysłu.", "correct": true },
            { "text": "Jego niskie pochodzenie społeczne i brak wykształcenia.", "correct": false },
            { "text": "Jego próbę naśladowania stylu Rejenta w sposób prześmiewczy.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W micie o Syzyfie, absurd jego kary polega na powtarzalności i bezcelowości wysiłku. Wskaż postać z 'Małego Księcia', której codzienna praca ma cechy syzyfowe, i wyjaśnij, na czym polega podobieństwo.",
        "answer": ["Postacią tą jest Latarnik. Podobieństwo polega na absurdalnej, mechanicznej powtarzalności jego pracy (zapalanie i gaszenie latarni co minutę) podyktowanej bezmyślnym rozkazem. Jego wysiłek, podobnie jak praca Syzyfa, jest bezcelowy w kontekście zmieniających się warunków (skrócenie doby na planecie)."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych wyrazów 'ż' jest niewymienne?",
        "answers": [
            { "text": "Książka", "correct": false },
            { "text": "Mężczyzna", "correct": false },
            { "text": "Ważny", "correct": false },
            { "text": "Młodzież", "correct": true }
        ]
    },
    {
        "type": "closed",
        "question": "Zarówno Jacek Soplica ('Pan Tadeusz'), jak i Ebenezer Scrooge ('Opowieść wigilijna') przechodzą głęboką przemianę. Kluczowa różnica w ich 'nowym' życiu polega na tym, że:",
        "answers": [
            { "text": "Soplica działa w ukryciu, w pokorze i pod przybranym nazwiskiem, a Scrooge działa otwarcie, ciesząc się nowo odnalezioną radością życia.", "correct": true },
            { "text": "Soplica staje się patriotą, a Scrooge filantropem.", "correct": false },
            { "text": "Przemiana Soplicy jest trwała, a Scrooge'a tymczasowa.", "correct": false },
            { "text": "Soplica umiera wkrótce po przemianie, a Scrooge żyje długo i szczęśliwie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Opisz, na czym polega funkcja komiczna postaci Dyndalskiego w 'Zemście', odwołując się do sceny pisania listu.",
        "answer": ["Komizm Dyndalskiego polega na jego ograniczeniu umysłowym i dosłownym traktowaniu poleceń Cześnika. W scenie pisania listu, jego niezdolność do odróżnienia treści dyktanda od pobocznych komentarzy Cześnika ('bardzo proszę... mocium panie') tworzy absurdalny tekst. Jest on postacią 'nieświadomego błazna', którego prostoduszność demaskuje choleryczny charakter jego pana."]
    },
    {
        "type": "closed",
        "question": "Koncert Jankiela na cymbałach w 'Panu Tadeuszu' jest przykładem utworu w utworze (tzw. wstawki nowelistycznej). Jaka jest jego główna funkcja artystyczna?",
        "answers": [
            { "text": "Zapewnienie rozrywki gościom na zaręczynach Tadeusza i Zosi.", "correct": false },
            { "text": "Skondensowanie i przypomnienie kluczowych wydarzeń historycznych (od Konstytucji 3 Maja do wojen napoleońskich) w symbolicznej, muzycznej formie, budząc w słuchaczach patriotyczne uczucia.", "correct": true },
            { "text": "Charakterystyka postaci Jankiela jako utalentowanego muzyka.", "correct": false },
            { "text": "Spowolnienie akcji utworu przed ostatecznym rozwiązaniem.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W przypowieści o siewcy, ziarno pada na różne rodzaje gleby. Zinterpretuj symbolikę 'ziarna' i 'gleby' w kontekście przekazu ewangelicznego.",
        "answer": ["'Ziarno' symbolizuje Słowo Boże, naukę ewangeliczną. 'Gleba' symbolizuje ludzkie serca i umysły, czyli różne postawy ludzi wobec tej nauki. Skała to serce twarde i zamknięte, droga to serce rozproszone, a ciernie to serce przytłoczone troskami materialnymi. Żyzna gleba to serce otwarte, gotowe przyjąć naukę i wydać owoce (dobre uczynki)."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym mianownikiem postawy 'żony modnej' z satyry Krasickiego i postawy Telimeny z 'Pana Tadeusza'?",
        "answers": [
            { "text": "Głęboka miłość do swoich mężów/partnerów.", "correct": false },
            { "text": "Krytyczny stosunek do kultury sarmackiej i fascynacja obcą (głównie francuską) modą, obyczajowością i językiem jako wyznacznikiem wyższego statusu społecznego.", "correct": true },
            { "text": "Szczere zaangażowanie w walkę o niepodległość Polski.", "correct": false },
            { "text": "Skromność i unikanie publicznych wystąpień.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Quo vadis' ogień trawiący Rzym ma podwójne znaczenie. Wyjaśnij, co symbolizuje on dla Nerona, a co dla chrześcijan.",
        "answer": ["Dla Nerona ogień jest źródłem artystycznej inspiracji i narzędziem do realizacji jego megalomańskich planów architektonicznych; to symbol destrukcyjnej, egoistycznej 'sztuki'. Dla chrześcijan jest on symbolem apokaliptycznej próby, cierpienia i męczeństwa, ale także oczyszczenia i zapowiedzi upadku pogańskiego Rzymu oraz nadejścia nowego porządku."]
    },
    {
        "type": "closed",
        "question": "W zdaniu: 'Idąc lasem, myślałem o nadchodzących wakacjach', imiesłów 'idąc' wskazuje na czynność, która:",
        "answers": [
            { "text": "Zakończyła się przed czynnością 'myślałem'.", "correct": false },
            { "text": "Odbywała się jednocześnie z czynnością 'myślałem'.", "correct": true },
            { "text": "Miała się odbyć po czynności 'myślałem'.", "correct": false },
            { "text": "Była przyczyną czynności 'myślałem'.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Pustelnika w 'Balladynie' jest kluczowa dla zrozumienia moralnego przesłania dramatu, mimo że ginie on stosunkowo wcześnie.",
        "answer": ["Pustelnik jest kluczowy, ponieważ jest on strażnikiem i głosem moralnego ładu i legitymizmu (prawowitej władzy). To on wyjawia istnienie korony Popielów i demaskuje zło natury ludzkiej. Jego śmierć symbolizuje, że w świecie opanowanym przez zbrodnię, dawny, sprawiedliwy porządek jest bezsilny i musi zostać zniszczony, zanim sprawiedliwość będzie mogła zatriumfować w innej, nadprzyrodzonej formie (piorun)."]
    },
    {
        "type": "closed",
        "question": "W której z poniższych par słów zachodzi taka sama relacja znaczeniowa jak w parze 'lekarz – leczyć'?",
        "answers": [
            { "text": "nauczyciel – nauczyć się", "correct": false },
            { "text": "kucharz – gotować", "correct": true },
            { "text": "uczeń – uczyć", "correct": false },
            { "text": "kierowca – kierownica", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolicznie fakt, że 'Tajemniczy ogród' był zamknięty na klucz przez dziesięć lat. Co symbolizuje ten zamknięty ogród?",
        "answer": ["Zamknięty ogród symbolizuje ból, traumę i żałobę po stracie, które doprowadziły do emocjonalnego zamknięcia się wuja Mary, Archibalda Cravena. Jest to metafora jego serca – miejsca niegdyś pełnego życia i miłości, które po śmierci żony zostało celowo odizolowane od świata, by nie przypominało o cierpieniu. Otwarcie ogrodu jest równoznaczne z otwarciem się na nowe życie i uzdrowienie emocjonalne."]
    },
    {
        "type": "closed",
        "question": "Postawa Alka, Rudego i Zośki z 'Kamieni na szaniec' jest najpełniejszą realizacją ideału zawartego w haśle:",
        "answers": [
            { "text": "'Bóg, Honor, Ojczyzna'.", "correct": false },
            { "text": "'Nauka, Praca, Ojczyzna'.", "correct": false },
            { "text": "'Braterstwo, Służba, Walka'.", "correct": true },
            { "text": "'Wiara, Nadzieja, Miłość'.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Utwórz zdanie, w którym wyraz 'tylko' wystąpi w roli spójnika, a nie partykuły.",
        "answer": ["Chciałbym pójść do kina, tylko nie mam pieniędzy."]
    },
    {
        "type": "closed",
        "question": "W 'Hobbicie' J.R.R. Tolkiena, kluczową rolę w pokonaniu smoka Smauga odgrywa nie siła, lecz:",
        "answers": [
            { "text": "Magia Gandalfa.", "correct": false },
            { "text": "Odwaga krasnoludów.", "correct": false },
            { "text": "Spryt Bilba, który odkrył słaby punkt smoka, oraz informacja przekazana przez drozda, co symbolizuje triumf inteligencji i współpracy nad brutalną siłą.", "correct": true },
            { "text": "Chciwość smoka, która doprowadziła go do zguby.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego recytacja 'Reduty Ordona' przez Zygiera w 'Syzyfowych pracach' była aktem większej odwagi niż otwarta bójka z rusyfikatorami.",
        "answer": ["Był to akt odwagi intelektualnej i duchowej, a nie fizycznej. Zygier ryzykował nie tylko relegowaniem ze szkoły, ale złamaniem całego systemu rusyfikacji od wewnątrz, używając do tego polskiej literatury – najpotężniejszej broni w walce o tożsamość. Był to atak na fundamenty ideologiczne zaborcy, znacznie bardziej dotkliwy niż fizyczna konfrontacja."]
    },
    {
        "type": "closed",
        "question": "Postacią, która w najpełniejszy sposób uosabia sarmacki ideał szlachcica-żołnierza, jest:",
        "answers": [
            { "text": "Sędzia Soplica", "correct": false },
            { "text": "Rejent Milczek", "correct": false },
            { "text": "Gerwazy Rębajło", "correct": true },
            { "text": "Hrabia Horeszko", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W zdaniu: 'Chociaż był niski, doskonale grał w koszykówkę' przekształć zdanie podrzędne na równoważne wyrażenie przyimkowe.",
        "answer": ["Mimo niskiego wzrostu, doskonale grał w koszykówkę."]
    },
    {
        "type": "closed",
        "question": "W 'Dziadach cz. II' duchy przybywają na obrzęd w określonej kolejności – od najlżejszych grzechów do najcięższych. Ta struktura ma na celu:",
        "answers": [
            { "text": "Zapewnienie dramaturgii i stopniowe budowanie napięcia.", "correct": false },
            { "text": "Przedstawienie ludowej gradacji win i kar, tworząc spójny system moralny oparty na zasadzie, że pełne człowieczeństwo wymaga doświadczenia całego spektrum ludzkich emocji i obowiązków.", "correct": true },
            { "text": "Pokazanie, że Guślarz ma kontrolę nad przywoływanymi duchami.", "correct": false },
            { "text": "Umożliwienie wszystkim uczestnikom obrzędu złożenia odpowiedniej ofiary.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Co łączy śmierć Ordona w 'Reducie Ordona' ze śmiercią Nemeczka w 'Chłopcach z Placu Broni', mimo skrajnie różnych okoliczności?",
        "answer": ["Łączy je motyw dobrowolnego poświęcenia dla obrony symbolicznej 'ojczyzny' (reduty / Placu Broni). Obie śmierci są aktami najwyższego heroizmu, w których obrona terytorium i honoru staje się ważniejsza niż własne życie. Są to śmierci o charakterze ofiarnym."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym użyto niepoprawnej formy czasownika.",
        "answers": [
            { "text": "Oni rozumieją, na czym polega problem.", "correct": false },
            { "text": "Wczoraj oglądnąłem bardzo ciekawy film.", "correct": true },
            { "text": "Muszę wziąć ze sobą parasol.", "correct": false },
            { "text": "Dzieci lubią bawić się na podwórku.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Tadeusz, widząc po raz pierwszy Zosię, porównuje ją do obrazu. Jaka jest funkcja tego porównania i co mówi o samym Tadeuszu?",
        "answer": ["Porównanie Zosi do obrazu idealizuje ją, czyni z niej istotę niemal nierealną, dzieło sztuki. Funkcją tego zabiegu jest ukazanie romantycznego usposobienia Tadeusza, który postrzega świat i miłość przez pryzmat estetyki i literackich konwencji. Pokazuje jego młodzieńczą wrażliwość i skłonność do idealizacji."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zachowań jest najlepszym przykładem 'syzyfowej pracy' w codziennym życiu szkolnym, opisanym w powieści Żeromskiego?",
        "answers": [
            { "text": "Nauka języka rosyjskiego przez polskich uczniów.", "correct": false },
            { "text": "Wysiłki nauczycieli rusyfikatorów, by wykorzenić polskość z umysłów uczniów, które mimo pozornych sukcesów, ostatecznie kończą się porażką w konfrontacji z polską kulturą.", "correct": true },
            { "text": "Przygotowania do egzaminów końcowych.", "correct": false },
            { "text": "Spotkania 'na górce u Gontali' w celu czytania polskiej literatury.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj tytuł fraszki Kochanowskiego 'Na dom w Czarnolesie'. Co jest prawdziwym przedmiotem prośby podmiotu lirycznego do Boga?",
        "answer": ["Przedmiotem prośby nie są dobra materialne ('pałace marmurowe'), lecz wartości duchowe i moralne: czyste sumienie, zdrowie, ludzka życzliwość i spokojna starość. Dom jest tu symbolem harmonijnego, cnotliwego życia w zgodzie z naturą i Bogiem, opartego na renesansowych ideałach. Prosi o błogosławieństwo dla tego stylu życia."]
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