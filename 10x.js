const questions = [
    {
        "type": "closed",
        "question": "W 'Quo vadis' Petroniusz, zwany 'arbitrem elegancji', ponosi klęskę. Jego tragedia polega na tym, że:",
        "answers": [
            { "text": "Nie potrafił przekonać Nerona do swoich racji i popadł w niełaskę.", "correct": false },
            { "text": "Jego wyrafinowany, estetyczny świat oparty na pięknie i ironii okazał się bezsilny wobec brutalnej siły tyranii i nowej, potężnej siły duchowej (chrześcijaństwa).", "correct": true },
            { "text": "Zakochał się nieszczęśliwie w chrześcijance Lidii.", "correct": false },
            { "text": "Został zdradzony przez swoich przyjaciół na dworze cesarza.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' scena grzybobrania to więcej niż opis zwykłej czynności. Zinterpretuj jej symboliczne znaczenie w kontekście opisu obyczajów i hierarchii społecznej w Soplicowie.",
        "answer": ["Grzybobranie to rytuał społeczny, który odzwierciedla porządek świata szlacheckiego. Określony szyk, w jakim poruszają się postacie (młodzież przodem, starsi z tyłu), ubiór i zachowanie pokazują społeczną hierarchię. Jest to też scena harmonijnego współistnienia człowieka z naturą, element arkadyjskiego porządku."]
    },
    {
        "type": "closed",
        "question": "W zdaniu z tekstu 'Tajemniczy ogród': 'Dick mówił cicho, aby nie spłoszyć zwierząt, które siedziały tuż obok', które słowo pełni funkcję przysłówka sposobu (odpowiada na pytanie 'jak?')?",
        "answers": [
            { "text": "aby", "correct": false },
            { "text": "nie", "correct": false },
            { "text": "cicho", "correct": true },
            { "text": "tuż", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Mimo oczywistych różnic, co łączy sytuację egzystencjalną Bilba Bagginsa opuszczającego Shire ('Hobbit') i Skawińskiego otrzymującego paczkę z polskimi książkami ('Latarnik')?",
        "answers": [
            { "text": "Obaj zostają zmuszeni do walki z potężnym wrogiem.", "correct": false },
            { "text": "W obu przypadkach ich spokojne, uporządkowane i bezpieczne życie zostaje gwałtownie przerwane przez czynnik zewnętrzny, który zmusza ich do konfrontacji ze światem i własną tożsamością.", "correct": true },
            { "text": "Obaj kierują się chęcią zdobycia wielkiego skarbu.", "correct": false },
            { "text": "Obaj działają pod wpływem rozkazów potężnego czarodzieja.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W opowiadaniu 'Artysta' S. Mrożka, Dyrektor Cyrku kończy rozmowę z Kogutem słowami: 'Płać pan!'. Jaki efekt wywołuje to brutalne, komercyjne stwierdzenie w kontekście artystycznych aspiracji Koguta?",
        "answer": ["Stwierdzenie to sprowadza napuszone aspiracje Koguta do brutalnej, finansowej rzeczywistości. Odsłania prawdę, że w świecie, w którym próbował zaistnieć, liczy się efekt i autentyczność (której nie miał), a nie same chęci. Jest to gorzka pointa demaskująca pustkę jego ambicji."]
    },
    {
        "type": "closed",
        "question": "Która z lektur obowiązkowych w najpełniejszy sposób realizuje topos 'theatrum mundi' (świat jako teatr), w którym ludzie są aktorami odgrywającymi narzucone im role?",
        "answers": [
            { "text": "'Zemsta', gdzie postacie świadomie grają i knują intrygi.", "correct": false },
            { "text": "Fraszki Jana Kochanowskiego, zwłaszcza 'O żywocie ludzkim' ('Fraszki to wszytko, cokolwiek myślemy...').", "correct": true },
            { "text": "'Artysta', gdzie Kogut próbuje grać rolę lwa.", "correct": false },
            { "text": "'Balladyna', gdzie bohaterka zakłada różne maski, by zdobyć władzę.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Postać Pustelnika w 'Balladynie' pełni w dramacie funkcję symboliczną. Jest on przede wszystkim:",
        "answers": [
            { "text": "Uosobieniem mądrości ludowej i znawcą ziół.", "correct": false },
            { "text": "Strażnikiem dawnego, moralnego porządku i prawowitej władzy, który demaskuje zło, ale jest bezsilny wobec jego niszczycielskiej siły.", "correct": true },
            { "text": "Reprezentantem świata fantastycznego, podobnie jak Goplana.", "correct": false },
            { "text": "Głównym antagonistą Goplany, walczącym z nią o wpływy w lesie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Zamek Horeszków jest ruiną. Wyjaśnij, co symbolizują te ruiny dla dwóch różnych postaci: Gerwazego i Hrabiego.",
        "answer": ["Dla Gerwazego ruiny zamku symbolizują utraconą potęgę rodu Horeszków, krzywdę i konieczność zemsty; są żywym pomnikiem przeszłości. Dla Hrabiego, romantyka, ruiny są malowniczym, nastrojowym elementem krajobrazu, źródłem inspiracji artystycznej i fantastycznych opowieści."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zdań zawiera błąd w użyciu imiesłowowego równoważnika zdania?",
        "answers": [
            { "text": "Czytając książkę, bohaterowie przenieśli się w inny świat.", "correct": true },
            { "text": "Biegnąc co sił w nogach, ledwo zdążył na pociąg.", "correct": false },
            { "text": "Patrząc w gwiazdy, Mały Książę myślał o swojej róży.", "correct": false },
            { "text": "Wziąwszy łopatkę do ręki, Dick zaczął kopać w ziemi.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Porównaj stosunek do pracy i obowiązku Alka z 'Kamieni na szaniec' oraz Nemeczka z 'Chłopców z Placu Broni'. Wskaż jedno fundamentalne podobieństwo w ich postawach, mimo odmiennych realiów.",
        "answer": ["Obaj bohaterowie wykazują się niezwykłą sumiennością i gotowością do poświęcenia dla sprawy, którą uważają za słuszną. Traktują swoje obowiązki (walka sabotażowa / służba wojskowa na Placu) ze śmiertelną powagą i honorem, stawiając dobro 'ojczyzny' (Polski / Placu Broni) ponad własne bezpieczeństwo i życie."]
    },
    {
        "type": "closed",
        "question": "W 'Trenie V' Kochanowski porównuje Urszulkę do 'oliwki małej pod wysokim sadem'. Jaki jest główny cel tego rozbudowanego porównania homeryckiego?",
        "answers": [
            { "text": "Pokazanie, jak mała i niepozorna była jego córka.", "correct": false },
            { "text": "Podkreślenie okrucieństwa i bezsensowności śmierci, która niszczy młode, rozwijające się życie, tak jak ogrodnik przez nieuwagę podcina młodą roślinkę.", "correct": true },
            { "text": "Wyrażenie nadziei na to, że po śmierci córka trafi do rajskiego ogrodu.", "correct": false },
            { "text": "Krytyka nieostrożnego ogrodnika jako alegorii złego losu.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wpisz tytuł lektury, w której główny bohater przechodzi przemianę od egoistycznego indywidualisty do człowieka rozumiejącego wartość wspólnoty i przyjaźni. Krótko uzasadnij swój wybór.",
        "answer": ["'Hobbit, czyli tam i z powrotem'. Bilbo Baggins na początku ceni tylko spokój i domowe wygody, a w trakcie podróży uczy się odpowiedzialności za towarzyszy (krasnoludy) i ryzykuje dla nich życie, stając się bohaterem."]
    },
    {
        "type": "closed",
        "question": "Język, którym posługuje się Papkin w 'Zemście', charakteryzuje się kwiecistością i używaniem wyszukanych, często obcych zwrotów. Jaka jest funkcja tego stylu mówienia?",
        "answers": [
            { "text": "Świadczy o jego wysokim wykształceniu i obyciu w świecie.", "correct": false },
            { "text": "Jest to sposób na skuteczne przekonywanie rozmówców do swoich racji.", "correct": false },
            { "text": "To komiczna maska, za pomocą której Papkin próbuje ukryć swoje prawdziwe pochodzenie, tchórzostwo i biedę, kreując się na kogoś lepszego.", "correct": true },
            { "text": "Jest to parodia stylu mówienia Rejenta Milczka.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W mitologii greckiej Prometeusz i Dedal to archetypy genialnych wynalazców. Wskaż kluczową różnicę w motywacjach, które kierowały ich działaniami.",
        "answer": ["Prometeusz działał z miłości do ludzkości, bezinteresownie, wbrew woli bogów, za co poniósł straszliwą karę. Dedal działał głównie dla własnej korzyści lub na zlecenie władcy (Minosa), a jego wynalazki (labirynt, skrzydła) służyły rozwiązaniu jego osobistych problemów (uwięzienie, ucieczka)."]
    },
    {
        "type": "closed",
        "question": "Utwór 'Balladyna' Juliusza Słowackiego jest przykładem synkretyzmu rodzajowego. Oznacza to, że:",
        "answers": [
            { "text": "Występują w nim postacie z różnych warstw społecznych.", "correct": false },
            { "text": "Akcja utworu rozgrywa się w różnych miejscach.", "correct": false },
            { "text": "Łączy w sobie cechy różnych rodzajów i gatunków literackich (dramatu, liryki, epiki; tragedii, baśni, ballady).", "correct": true },
            { "text": "Posługuje się zarówno językiem poetyckim, jak i prozą.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "W zdaniu: 'Myślę, że Dick rozumie mowę ptaków, ponieważ często z nimi przebywa', zdanie podrzędne 'ponieważ często z nimi przebywa' jest zdaniem:",
        "answers": [
            { "text": "okolicznikowym celu", "correct": false },
            { "text": "okolicznikowym przyczyny", "correct": true },
            { "text": "dopełnieniowym", "correct": false },
            { "text": "okolicznikowym sposobu", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaki błąd logiczno-językowy występuje w wyrażeniu 'cofać się do tyłu'? Podaj poprawną formę.",
        "answer": ["Jest to pleonazm (tzw. masło maślane), czyli powtórzenie znaczenia. Poprawna forma to: 'cofać się'."]
    },
    {
        "type": "closed",
        "question": "Postawa Aslana z 'Opowieści z Narnii' i postać Chrystusa z przypowieści ewangelicznych mają wiele cech wspólnych. Najważniejszym z tych podobieństw jest:",
        "answers": [
            { "text": "Zdolność do czynienia cudów i panowanie nad naturą.", "correct": false },
            { "text": "Motyw niewinnej, dobrowolnej ofiary złożonej za cudze winy (śmierć za Edmunda/za grzechy ludzkości), po której następuje zmartwychwstanie i ostateczne zwycięstwo nad złem.", "correct": true },
            { "text": "Posiadanie grona wiernych uczniów i naśladowców.", "correct": false },
            { "text": "Pochodzenie z królewskiego rodu.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jak przesłanie biblijnej przypowieści o talentach odnosi się do postawy Marcina Borowicza z 'Syzyfowych prac' w okresie jego fascynacji kulturą rosyjską?",
        "answer": ["W tym okresie Marcin Borowicz postępuje jak sługa, który zakopał swój talent. Otrzymany 'talent' – polską tożsamość, kulturę i język – ukrywa i odrzuca na rzecz schlebiania zaborcy. Dopiero recytacja 'Reduty Ordona' sprawia, że 'odkopuje' swój talent i zaczyna go na nowo pielęgnować."]
    },
    {
        "type": "closed",
        "question": "W 'Świteziance' woda jeziora pełni dwojaką funkcję. Jaka to funkcja?",
        "answers": [
            { "text": "Jest źródłem życia dla przyrody i zagrożeniem dla ludzi.", "correct": false },
            { "text": "Jest miejscem schronienia dla rusałki i miejscem kaźni dla zdrajcy.", "correct": true },
            { "text": "Jest pięknym tłem wydarzeń i świadkiem przysięgi.", "correct": false },
            { "text": "Jest drogą ucieczki dla dziewczyny i pułapką dla strzelca.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W zdaniu 'Mary pojęcia nie miała, jacy są chłopcy' zaimek 'jacy' wprowadza zdanie podrzędne. Określ typ tego zdania podrzędnego.",
        "answer": ["zdanie podrzędne dopełnieniowe"]
    },
    {
        "type": "closed",
        "question": "Która z wymienionych postaci literackich jest bohaterem dynamicznym, czyli przechodzi najgłębszą i najbardziej wiarygodną psychologicznie przemianę wewnętrzną?",
        "answers": [
            { "text": "Balladyna w 'Balladynie'", "correct": false },
            { "text": "Jacek Soplica w 'Panu Tadeuszu'", "correct": true },
            { "text": "Cześnik Raptusiewicz w 'Zemście'", "correct": false },
            { "text": "Rejent Milczek w 'Zemście'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego narrator 'Pana Tadeusza' na początku Inwokacji zwraca się do Litwy, a następnie do Matki Boskiej. Jaki jest cel tego podwójnego adresata?",
        "answer": ["Zwracając się do Litwy (ojczyzny 'prywatnej', utraconej), poeta wyraża osobistą tęsknotę i ustanawia przestrzeń utworu. Zwracając się do Matki Boskiej (Częstochowskiej i Ostrobramskiej), nadaje tej tęsknocie wymiar uniwersalny, narodowy i religijny, prosząc o cud 'przywrócenia na łono ojczyzny', co odnosi się do wszystkich emigrantów."]
    },
    {
        "type": "closed",
        "question": "Wyraz 'wielokrotnie' jest pod względem budowy słowotwórczej:",
        "answers": [
            { "text": "Wyrazem podstawowym.", "correct": false },
            { "text": "Wyrazem pochodnym z przedrostkiem.", "correct": false },
            { "text": "Wyrazem pochodnym z przyrostkiem.", "correct": false },
            { "text": "Złożeniem (powstałym z połączenia dwóch tematów słowotwórczych).", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Tytuł powieści 'Syzyfowe prace' odnosi się do daremnych wysiłków rusyfikatorów. Podaj argument, który uzasadniałby interpretację, że tytuł ten odnosi się również do pracy polskich patriotów, takich jak Bernard Zygier.",
        "answer": ["Praca polskich patriotów również była 'syzyfowa', ponieważ w warunkach zaborów była to walka heroiczna, ale pozornie beznadziejna, wymagająca ciągłego wysiłku bez widocznych, natychmiastowych efektów. Każdy 'wtoczony kamień' (jak obudzenie świadomości u Borowicza) mógł być zniweczony przez represje zaborcy."]
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