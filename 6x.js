const questions = [
    {
        "type": "closed",
        "question": "Jaka jest kluczowa, poza komiczną, funkcja Papkina w rozwoju akcji 'Zemsty'?",
        "answers": [
            { "text": "Jest on moralnym autorytetem, który ocenia postępowanie Cześnika i Rejenta.", "correct": false },
            { "text": "Jest on nieświadomym katalizatorem akcji; jako poseł i posłaniec między zwaśnionymi stronami, swoimi działaniami (i nieudolnością) popycha intrygę do przodu.", "correct": true },
            { "text": "Jest on głównym antagonistą Wacława, rywalizując z nim o względy Klary.", "correct": false },
            { "text": "Jest on symbolem upadku obyczajów szlachty polskiej.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj postać Geografa z 'Małego Księcia'. Co symbolizuje jego postawa i dlaczego odrzuca on badanie 'rzeczy efemerycznych' jak kwiaty?",
        "answer": ["Geograf symbolizuje naukę oderwaną od życia i doświadczenia; wiedzę teoretyczną, sterylną i zamkniętą w książkach. Odrzuca badanie kwiatów, bo są 'efemeryczne' (ulotne), co pokazuje jego lęk przed życiem, przemijaniem i uczuciami. Ceni tylko to, co niezmienne i 'poważne', tracąc z oczu prawdziwe piękno i wartość istnienia."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań wyraz 'wokół' pełni funkcję inną niż w pozostałych (jest przysłówkiem, a nie przyimkiem)?",
        "answers": [
            { "text": "Dzieci biegały wokół domu.", "correct": false },
            { "text": "Zbudowano ogrodzenie wokół placu.", "correct": false },
            { "text": "Wszyscy stali cicho i patrzyli wokół.", "correct": true },
            { "text": "Zgromadzili się wokół ogniska.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Czym fundamentalnie różni się rola Pustelnika w 'Balladynie' od roli Gandalfa w 'Hobbicie'?",
        "answers": [
            { "text": "Oboje są potężnymi czarodziejami, ale Pustelnik jest zły, a Gandalf dobry.", "correct": false },
            { "text": "Pustelnik jest pasywnym strażnikiem upadającego porządku moralnego, który potrafi zdiagnozować zło, ale jest wobec niego bezsilny. Gandalf jest aktywnym inicjatorem i uczestnikiem wydarzeń, który realnie kształtuje losy świata.", "correct": true },
            { "text": "Pustelnik pomaga Balladynie, a Gandalf przeszkadza Bilbowi.", "correct": false },
            { "text": "Pustelnik żyje w lesie, a Gandalf podróżuje po świecie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W opisie grzybobrania w 'Panu Tadeuszu' Mickiewicz używa bardzo szczegółowych, niemal botanicznych nazw grzybów. Jaki cel artystyczny ma ten zabieg?",
        "answer": ["Celem jest sakralizacja i apoteoza litewskiej przyrody. Użycie szczegółowych nazw świadczy o głębokiej, intymnej znajomości i miłości do tego świata. Podnosi to opis grzybobrania z prozaicznej czynności do rangi rytuału, a przyrodę czyni pełnoprawnym, bogatym bohaterem epopei, dowodząc jej wyjątkowości."]
    },
    {
        "type": "closed",
        "question": "Na czym, według powieści Żeromskiego, polegał najgłębszy, najtrudniejszy do zwalczenia aspekt rusyfikacji?",
        "answers": [
            { "text": "Na brutalności fizycznej nauczycieli i żandarmów.", "correct": false },
            { "text": "Na przymusie nauki języka rosyjskiego i historii Rosji.", "correct": false },
            { "text": "Na próbie zmiany mentalności, zaszczepieniu w młodych Polakach poczucia niższości kulturowej i zerwaniu ich emocjonalnej więzi z polską historią i literaturą.", "correct": true },
            { "text": "Na korumpowaniu uczniów poprzez system stypendiów i nagród.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Labirynt Minotaura jest nie tylko budowlą. Zinterpretuj jego uniwersalne, symboliczne znaczenie w kontekście ludzkich problemów i wewnętrznych zmagań.",
        "answer": ["Labirynt symbolizuje skomplikowany, nierozwiązywalny problem, sytuację bez wyjścia lub złożoność ludzkiej psychiki. Wejście do labiryntu to metafora podróży w głąb siebie, by skonfrontować się z własnymi lękami, słabościami lub 'wewnętrznym potworem' (np. nałogiem, traumą)."]
    },
    {
        "type": "closed",
        "question": "Najważniejsza różnica między podejściem do 'pracy dla ojczyzny' w 'Kamieniach na szaniec' a podejściem w pozytywistycznych nowelach (np. 'Katarynka' Prusa) polega na:",
        "answers": [
            { "text": "Skupieniu się na walce zbrojnej w 'Kamieniach...' versus pracy organicznej i pracy u podstaw w pozytywizmie.", "correct": true },
            { "text": "Działaniu w grupie w 'Kamieniach...' versus działaniu indywidualnym w nowelach.", "correct": false },
            { "text": "Bohaterstwie mężczyzn w 'Kamieniach...' versus pracy kobiet w nowelach.", "correct": false },
            { "text": "Optymizmie 'Kamieni...' versus pesymizmie nowel.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę Scyzoryka – słynnego miecza Gerwazego z 'Pana Tadeusza'. Co on symbolizuje?",
        "answer": ["Scyzoryk symbolizuje schyłek epoki sarmackiej. Jego potężna nazwa kontrastuje z prozaicznym, codziennym narzędziem, co ma wymiar ironiczny. Jest to broń osobista, służąca do prywatnej zemsty, a nie do walki za sprawę narodową. Reprezentuje świat, który musi odejść – świat warcholstwa i prywaty, który ustępuje miejsca zorganizowanej walce o niepodległość."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', postać siostrzeńca Scrooge'a, Freda, pełni funkcję:",
        "answers": [
            { "text": "Głównego antagonisty, który chce przejąć majątek wuja.", "correct": false },
            { "text": "Kontrapunktu dla Scrooge'a; uosabia ciepło, radość życia, bezinteresowność i wartości rodzinne, stanowiąc żywy dowód na to, że szczęście nie zależy od pieniędzy.", "correct": true },
            { "text": "Postaci komicznej, która rozładowuje napięcie.", "correct": false },
            { "text": "Przewodnika, który pomaga Scrooge'owi w jego przemianie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego zdanie 'Otworzyłem szeroko otwarte okno' zawiera błąd logiczno-językowy i jak się on nazywa.",
        "answer": ["Błąd ten to pleonazm (potocznie 'masło maślane'). Polega na powtórzeniu tej samej treści za pomocą różnych słów. Skoro okno jest 'otwarte', określenie 'szeroko' jest dopuszczalne, ale 'otworzyć otwarte' jest nielogiczne. Poprawnie byłoby np. 'Otworzyłem okno na oścież' lub 'Podszedłem do szeroko otwartego okna'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zdań jest zdaniem złożonym współrzędnie rozłącznym?",
        "answers": [
            { "text": "Poczytam książkę i posłucham muzyki.", "correct": false },
            { "text": "Poczytam książkę albo posłucham muzyki.", "correct": true },
            { "text": "Poczytam książkę, ale najpierw posłucham muzyki.", "correct": false },
            { "text": "Poczytam książkę, więc nie będę słuchał muzyki.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Porównaj sposób, w jaki Rejent Milczek i Jacek Soplica (jako ksiądz Robak) ukrywają swoją prawdziwą tożsamość lub intencje. Wskaż kluczową różnicę.",
        "answer": ["Kluczowa różnica leży w motywacji. Rejent używa maski pobożności i łagodności ('mocium panie') w celach egoistycznych, by ukryć swoją chciwość i skuteczniej ranić przeciwnika. Jacek Soplica przywdziewa habit w ramach pokuty, by ukryć swoją tożsamość w celu służenia ojczyźnie. Maska Rejenta służy złu, maska Soplicy – dobru i zadośćuczynieniu."]
    },
    {
        "type": "closed",
        "question": "Rola Róży w życiu Małego Księcia jest paradoksalna, ponieważ:",
        "answers": [
            { "text": "Jest piękna, ale ma kolce, które mogą ranić.", "correct": false },
            { "text": "Jest przyczyną jego cierpienia i opuszczenia planety, a jednocześnie staje się dla niego najważniejszą wartością, uczy go odpowiedzialności i motywuje do powrotu.", "correct": true },
            { "text": "Jest jedyną różą na jego planecie, ale we wszechświecie istnieją tysiące podobnych.", "correct": false },
            { "text": "Wymaga opieki, ale twierdzi, że potrafi sama o siebie zadbać.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zapisz poprawnie zdanie, eliminując błąd składniowy: 'Jadąc na rowerze, spadła mi czapka.'",
        "answer": ["Gdy jechałem/jechałam na rowerze, spadła mi czapka."]
    },
    {
        "type": "closed",
        "question": "W 'Balladynie', relacja tytułowej bohaterki z jej matką, Wdową, jest kluczowa dla jej upadku. Dlaczego?",
        "answers": [
            { "text": "Ponieważ matka od początku faworyzowała Alinę.", "correct": false },
            { "text": "Ponieważ wyparcie się matki i skazanie jej na tortury jest ostatecznym aktem zerwania z ludzkim porządkiem i naturą, co ściąga na Balladynę ostateczną karę.", "correct": true },
            { "text": "Ponieważ matka znała jej tajemnicę i mogła ją wydać.", "correct": false },
            { "text": "Ponieważ matka namawiała ją do ślubu z Kirkorem.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm postaci Skawińskiego z 'Latarnika'.",
        "answer": ["Jego tragizm polega na konflikcie dwóch uniwersalnych ludzkich pragnień: potrzeby bezpieczeństwa i spokoju oraz potrzeby przynależności do ojczyzny. Gdy wreszcie osiąga spokój, przypomnienie o ojczyźnie niszczy go, zmuszając do powrotu do tułaczki. Nie jest w stanie pogodzić tych dwóch wartości; jedna zawsze wyklucza drugą."]
    },
    {
        "type": "closed",
        "question": "Wskaż grupę wyrazów, w której wszystkie są imiesłowami.",
        "answers": [
            { "text": "czytając, pisanie, narysowany", "correct": false },
            { "text": "myślący, napisawszy, zrobiono", "correct": true },
            { "text": "biegnąc, biegacz, przebiegnięty", "correct": false },
            { "text": "zamknięty, otwierając, klucz", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Zemście' pojawia się motyw 'porwania' Klary przez Cześnika. Na czym polega komizm i ironia tego 'porwania'?",
        "answer": ["Komizm polega na tym, że jest to 'porwanie' za zgodą i ku radości porwanej – Klara od dawna kocha Wacława, którego Cześnik jej przeznaczył. Ironia polega na tym, że Cześnik, myśląc, że dokonuje aktu zemsty na Rejencie, w rzeczywistości realizuje marzenia młodej pary i doprowadza do szczęśliwego zakończenia, działając wbrew własnym intencjom."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł literackich najpełniej realizuje ideę 'utworu pisanego ku pokrzepieniu serc'?",
        "answers": [
            { "text": "'Syzyfowe prace'", "correct": false },
            { "text": "'Dziady cz. II'", "correct": false },
            { "text": "'Pan Tadeusz'", "correct": true },
            { "text": "'Zemsta'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego 'Rota' Marii Konopnickiej, mimo że nie jest hymnem państwowym, ma dla Polaków tak wielkie znaczenie historyczne i emocjonalne.",
        "answer": ["'Rota' ma tak wielkie znaczenie, ponieważ powstała jako bezpośredni protest przeciwko brutalnej germanizacji w zaborze pruskim (strajk dzieci we Wrześni). Jej tekst jest uroczystą przysięgą wierności językowi, wierze i ziemi. Stała się nieoficjalnym hymnem oporu, symbolem niezłomności i jedności narodu w walce o zachowanie tożsamości."]
    },
    {
        "type": "closed",
        "question": "Finałowy sąd w 'Balladynie', podczas którego bohaterka sama wydaje na siebie wyrok, jest przykładem:",
        "answers": [
            { "text": "Sprawiedliwości ludowej.", "correct": false },
            { "text": "Ironii tragicznej, w której sprawca zbrodni staje się narzędziem własnej kary.", "correct": true },
            { "text": "Boskiej interwencji w losy bohaterów.", "correct": false },
            { "text": "Zemsty duchów jej ofiar.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie z mowy zależnej na mowę niezależną: 'Ojciec zapytał, czy odrobiłem już lekcje.'",
        "answer": ["Ojciec zapytał: 'Czy odrobiłeś już lekcje?'."]
    },
    {
        "type": "closed",
        "question": "W 'Chłopcach z Placu Broni', Plac nie jest zwykłym miejscem zabaw, lecz 'małą ojczyzną'. Które z poniższych zjawisk NIE potwierdza tej interpretacji?",
        "answers": [
            { "text": "Istnienie 'armii' ze stopniami wojskowymi i regulaminem.", "correct": false },
            { "text": "Uważanie terenu Placu za święte terytorium, którego należy bronić.", "correct": false },
            { "text": "Wybieranie miejsca do gry w palanta i budowanie szałasów.", "correct": true },
            { "text": "Traktowanie Feriego Acza i jego grupy jako wrogiej armii, a zdrady jako zdrady stanu.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie V', śmierć Urszulki jest porównana do przypadkowego podcięcia oliwki przez nieuważnego ogrodnika. Kto lub co kryje się pod symboliczną postacią tego 'ogrodnika'?",
        "answer": ["'Ogrodnik' symbolizuje ślepy, okrutny los, przypadek lub nawet samego Boga (w ujęciu zbuntowanego poety), który działa w sposób niezrozumiały i bezwzględny. Jest to siła, która niszczy kruche życie bez wyraźnego powodu, co podkreśla absurd i niesprawiedliwość śmierci dziecka."]
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