const questions = [
    {
        "type": "closed",
        "question": "Jaka jest kluczowa różnica w motywacji do przemiany między Jackiem Soplicą ('Pan Tadeusz') a Ebenezerem Scrooge'em ('Opowieść wigilijna')?",
        "answers": [
            { "text": "Soplica działa z pobudek patriotycznych, a Scrooge z chęci zyskania szacunku rodziny.", "correct": false },
            { "text": "Przemiana Soplicy jest wynikiem długoletniej pokuty i chęci zadośćuczynienia za konkretną winę, podczas gdy przemiana Scrooge'a jest gwałtowna i motywowana strachem przed samotną śmiercią i duchową pustką.", "correct": true },
            { "text": "Obaj bohaterowie zmieniają się pod wpływem nadprzyrodzonych interwencji.", "correct": false },
            { "text": "Soplica dąży do odzyskania majątku, a Scrooge do jego rozdania.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Syzyfowych pracach' dochodzi do bójki Marcina Borowicza z uczniem mówiącym po rosyjsku 'na górze u Gontali'. Zinterpretuj tę scenę jako symbol.",
        "answer": ["Bójka ta jest symbolicznym, fizycznym wybuchem stłumionego konfliktu kulturowego i narodowego. Przenosi walkę o polskość, toczoną dotąd w sferze intelektualnej i emocjonalnej (na lekcjach, w teatrze), na płaszczyznę brutalnej, bezpośredniej konfrontacji, pokazując głębię i siłę oporu."]
    },
    {
        "type": "closed",
        "question": "W zdaniu z 'Pana Tadeusza': 'Wojski, chlubnie skończywszy łowy, już na konia siadał', imiesłów 'skończywszy' wskazuje na czynność:",
        "answers": [
            { "text": "jednoczesną z czynnością 'siadał'.", "correct": false },
            { "text": "późniejszą niż czynność 'siadał'.", "correct": false },
            { "text": "wcześniejszą niż czynność 'siadał'.", "correct": true },
            { "text": "której warunkiem było 'siadanie'.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co łączy naukę Lisa o 'oswajaniu' z 'Małego Księcia' ze sposobem, w jaki Dick z 'Tajemniczego ogrodu' nawiązuje relacje ze zwierzętami?",
        "answers": [
            { "text": "Użycie magicznych przedmiotów (fujarka, różdżka) do zdobycia zaufania.", "correct": false },
            { "text": "Przekonanie, że prawdziwa, unikalna więź opiera się na cierpliwości, poświęconym czasie i wzajemnym zrozumieniu, a nie na dominacji czy sile.", "correct": true },
            { "text": "Dążenie do wykorzystania zwierząt dla własnych korzyści.", "correct": false },
            { "text": "Zdolność do dosłownego rozumienia mowy zwierząt.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Zemście' Papkin na łożu śmierci spisuje testament. Jaka jest główna funkcja komiczna i charakterologiczna tej sceny?",
        "answer": ["Główną funkcją jest ostateczne zdemaskowanie Papkina. Jego 'majątek' (gitara angielska, kolekcja motyli) okazuje się bezwartościowy, a gest spisania testamentu jest ostatnią, patetyczną próbą odegrania roli wielkiego pana. Scena obnaża jego biedę, mitomanię i rozdźwięk między aspiracjami a rzeczywistością."]
    },
    {
        "type": "closed",
        "question": "Spośród bohaterów lektur obowiązkowych, postawę 'błędnego rycerza' – idealisty postrzegającego świat przez pryzmat literatury i marzeń – najpełniej uosabia:",
        "answers": [
            { "text": "Tadeusz Soplica", "correct": false },
            { "text": "Cześnik Raptusiewicz", "correct": false },
            { "text": "Hrabia Horeszko", "correct": true },
            { "text": "Wacław Milczek", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Tytuł 'Kamienie na szaniec' jest cytatem z wiersza Juliusza Słowackiego. Wyjaśnij, co autor książki, Aleksander Kamiński, chciał zasugerować poprzez wybór takiego tytułu dla opowieści o Alku, Rudym i Zośce.",
        "answer": ["Kamiński chciał w ten sposób umieścić swoich bohaterów w długim panteonie polskich bojowników o wolność. Sugeruje, że ich ofiara jest kolejnym 'kamieniem' rzuconym na 'szaniec' – budowlę niepodległej Polski, kontynuacją romantycznej tradycji walki i poświęcenia dla ojczyzny."]
    },
    {
        "type": "closed",
        "question": "'Balladyna' jest dramatem romantycznym, ponieważ, w przeciwieństwie do tragedii klasycznej:",
        "answers": [
            { "text": "Jest napisana wierszem i podzielona na akty i sceny.", "correct": false },
            { "text": "Opowiada o nieszczęśliwej miłości i żądzy władzy.", "correct": false },
            { "text": "Łączy w sobie elementy świata realnego i fantastycznego (Goplana), miesza tragizm z komizmem i odrzuca zasadę jedności miejsca, czasu i akcji.", "correct": true },
            { "text": "Kończy się śmiercią głównej bohaterki.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W finale 'Latarnika' Skawiński traci posadę, ale odzyskuje tożsamość. Jaką uniwersalną prawdę o naturze 'domu' i tożsamości dla emigranta sugeruje to zakończenie?",
        "answer": ["Sugeruje, że 'dom' dla emigranta to nie tylko fizyczne miejsce, ale przede wszystkim przestrzeń duchowa, którą tworzy język, kultura i literatura. Skawiński, tracąc bezpieczną przystań, odzyskuje 'przenośną ojczyznę' w postaci książki, która jest jego prawdziwym domem."]
    },
    {
        "type": "closed",
        "question": "Pojawiający się w 'Panu Tadeuszu' kometa ('gwiazda z warkoczem') jest znakiem na niebie, który w tradycji literackiej i ludowej symbolizuje:",
        "answers": [
            { "text": "Nadchodzący urodzaj i pomyślność.", "correct": false },
            { "text": "Nadchodzące wielkie, przełomowe i często burzliwe wydarzenia, takie jak wojna czy zmiana władzy.", "correct": true },
            { "text": "Prywatne nieszczęście jednego z bohaterów.", "correct": false },
            { "text": "Koniec świata i sąd ostateczny.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Odwołując się do tekstu 'Istota czytania', wyjaśnij, w jaki sposób finał 'Balladyny' (uderzenie pioruna) jest aktem 'czytania' znaków przez bohaterów i odbiorców dramatu.",
        "answer": ["Zjawisko naturalne (piorun) zostaje odczytane jako znak o znaczeniu symbolicznym. Bohaterowie i odbiorcy interpretują go nie jako przypadek, lecz jako wyrok boski, tekst sprawiedliwości zapisany na niebie. 'Czytają' w tym wydarzeniu potwierdzenie moralnego porządku świata."]
    },
    {
        "type": "closed",
        "question": "W wyrazie 'niedowidzieć' przedrostek 'nie-' pełni funkcję:",
        "answers": [
            { "text": "tworzenia prostego zaprzeczenia (jak w 'nie lubić').", "correct": false },
            { "text": "wskazania na brak lub niedostatek pewnej cechy lub zdolności (widzieć słabo, niedostatecznie).", "correct": true },
            { "text": "wzmocnienia znaczenia wyrazu podstawowego.", "correct": false },
            { "text": "oznaczenia czynności wykonanej błędnie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaką rolę w rozwoju moralnym bohaterów 'Chłopców z Placu Broni' odgrywał 'Związek Kitowców' i jego surowe prawo (np. wpisanie nazwiska Nemeczka do czarnej księgi)?",
        "answer": ["Był to dla nich poligon uczenia się zasad sprawiedliwości, lojalności i odpowiedzialności. Surowe prawo, choć czasem stosowane zbyt pochopnie (jak wobec Nemeczka), uczyło ich konsekwencji. Uznanie błędu przez Bokę pokazało, że sprawiedliwość wymaga też empatii i umiejętności przyznania się do pomyłki."]
    },
    {
        "type": "closed",
        "question": "Co jest podstawową różnicą między satyrą 'Żona modna' a komedią 'Zemsta'?",
        "answers": [
            { "text": "'Żona modna' krytykuje wady, a 'Zemsta' je pochwala.", "correct": false },
            { "text": "Satyra jest gatunkiem epickim (wierszowana opowieść) mającym na celu ośmieszenie i napiętnowanie wad, podczas gdy komedia jest utworem dramatycznym z dynamiczną akcją, której celem jest przede wszystkim bawić, a ośmieszenie wad jest środkiem do tego celu.", "correct": true },
            { "text": "'Żona modna' jest utworem krótkim, a 'Zemsta' długim.", "correct": false },
            { "text": "W 'Zemście' występuje więcej bohaterów niż w 'Żonie modnej'.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij paradoks zawarty w imieniu i nazwisku Cześnika Raptusiewicza.",
        "answer": ["Paradoks polega na sprzeczności między nazwiskiem a tytułem. 'Raptusiewicz' pochodzi od słowa 'raptus', oznaczającego człowieka gwałtownego, porywczego. 'Cześnik' to dawny, zaszczytny urząd dworski, kojarzący się z godnością i opanowaniem. Ta sprzeczność definiuje komizm postaci: człowieka na wysokim stanowisku, który zachowuje się impulsywnie."]
    },
    {
        "type": "closed",
        "question": "Poetycka refleksja w 'Trenach' Kochanowskiego ewoluuje. Porównując 'Tren VIII' ('Pełno nas, a jakoby nikogo nie było') z 'Trenem I' ('Wszytki płacze, wszytki łzy Heraklitowe'), można zauważyć zmianę perspektywy z:",
        "answers": [
            { "text": "osobistej na uniwersalną.", "correct": false },
            { "text": "filozoficznej i ogólnoludzkiej refleksji nad śmiercią na skrajnie osobiste, intymne i konkretne odczucie pustki po stracie dziecka.", "correct": true },
            { "text": "buntu przeciwko Bogu na pełną akceptację jego woli.", "correct": false },
            { "text": "gniewu na rezygnację.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Podaj poprawną formę wołacza (V.) dla imienia i nazwiska bohatera 'Syzyfowych prac': Bernard Zygier.",
        "answer": ["Bernardzie Zygierze!"]
    },
    {
        "type": "closed",
        "question": "Relacja między Winicjuszem a Ligią w 'Quo vadis' jest mikrokosmosem głównego konfliktu powieści, ponieważ:",
        "answers": [
            { "text": "Odzwierciedla konflikt między bogatymi a biednymi w Rzymie.", "correct": false },
            { "text": "Ukazuje przemianę bohatera od pogańskiej, zaborczej miłości (eros) do chrześcijańskiej miłości opartej na szacunku i poświęceniu (agape), co symbolizuje starcie dwóch systemów wartości.", "correct": true },
            { "text": "Jest przyczyną prześladowań chrześcijan przez Nerona.", "correct": false },
            { "text": "Pokazuje, jak miłość może przezwyciężyć różnice kulturowe między Rzymianinem a barbarzynką.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Latarnik jest jedynym dorosłym, którego praca nie służy jemu samemu. Co symbolizuje jego postawa i dlaczego budzi ona szacunek Małego Księcia?",
        "answer": ["Jego postawa symbolizuje wierność rozkazowi, poczucie obowiązku i bezinteresowność, nawet jeśli sama czynność wydaje się absurdalna. Budzi szacunek, ponieważ w przeciwieństwie do innych dorosłych, nie jest skupiony na sobie, posiadaniu czy władzy. Jest symbolem odpowiedzialności, wartości cenionej przez Małego Księcia."]
    },
    {
        "type": "closed",
        "question": "W obu utworach: 'Żona modna' Krasickiego i 'Artysta' Mrożka, autorzy ośmieszają tę samą ludzką wadę, którą jest:",
        "answers": [
            { "text": "Skąpstwo i chciwość.", "correct": false },
            { "text": "Próżność, snobizm i bezkrytyczne naśladowanie obcych wzorców w celu podniesienia własnego prestiżu.", "correct": true },
            { "text": "Tchórzostwo i lenistwo.", "correct": false },
            { "text": "Zazdrość i mściwość.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj sformułowanie, że Dick z 'Tajemniczego ogrodu' 'rozumie mowę ptaków'. Czy należy je traktować dosłownie?",
        "answer": ["Nie należy go traktować dosłownie. Jest to metafora oznaczająca jego głęboką empatię, intuicję i więź z naturą. 'Rozumienie mowy ptaków' to umiejętność interpretacji ich zachowań, naśladowania głosów i nawiązywania z nimi relacji opartej na zaufaniu, a nie na znajomości języka."]
    },
    {
        "type": "closed",
        "question": "Guślarz w 'Dziadach cz. II' pełni w społeczności wiejskiej funkcję:",
        "answers": [
            { "text": "Władcy absolutnego, który decyduje o losie żywych i umarłych.", "correct": false },
            { "text": "Lekarza leczącego choroby za pomocą ziół i zaklęć.", "correct": false },
            { "text": "Pośrednika (medium) między światem żywych a światem duchów, przewodnika obrzędu i strażnika moralnego porządku.", "correct": true },
            { "text": "Wędrownego opowiadacza, który zabawia ludność historiami o duchach.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie niezależnej na zdanie w mowie zależnej, zachowując jego sens: Nauczycielka poleciła uczniom: 'Otwórzcie jutro wasze podręczniki na stronie dwudziestej'.",
        "answer": ["Nauczycielka poleciła uczniom, aby następnego dnia otworzyli swoje podręczniki na stronie dwudziestej."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym wyraz 'zamek' ma inne znaczenie niż w pozostałych.",
        "answers": [
            { "text": "Hrabia marzył o tym, by zamieszkać w starym zamku Horeszków.", "correct": false },
            { "text": "Klucz nie pasował do tego zamka.", "correct": true },
            { "text": "Zwiedziliśmy wczoraj piękny, gotycki zamek.", "correct": false },
            { "text": "Ruiny zamku górowały nad okolicą.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego miłość Balladyny do Kirkora można określić jako miłość interesowną, a miłość Aliny do niego jako miłość bezinteresowną.",
        "answer": ["Miłość Balladyny jest interesowna, ponieważ traktuje Kirkora jako środek do osiągnięcia celu: bogactwa, władzy i awansu społecznego. Miłość Aliny jest bezinteresowna, ponieważ kocha Kirkora dla niego samego, jest gotowa do poświęceń (chciała oddać siostrze maliny) i cieszy się jego szczęściem."]
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