const questions = [
    {
        "type": "closed",
        "question": "W 'Zemście' A. Fredry, spór o mur graniczny jest w istocie pretekstem. Co jest prawdziwym, głębszym źródłem konfliktu między Cześnikiem a Rejentem?",
        "answers": [
            { "text": "Walka o wpływy polityczne w regionie.", "correct": false },
            { "text": "Konflikt dwóch skrajnie różnych temperamentów i urażona duma, które uniemożliwiają jakiekolwiek porozumienie.", "correct": true },
            { "text": "Zaszłości historyczne i dawny spór o majątek, którego mur jest tylko częścią.", "correct": false },
            { "text": "Niezgoda na planowany ślub Wacława i Klary.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm postaci Świtezianki z ballady Adama Mickiewicza. Weź pod uwagę nie tylko los strzelca, ale także jej własną sytuację.",
        "answer": ["Jej tragizm polega na tym, że jest strażniczką moralnego prawa, które musi egzekwować nawet kosztem własnego szczęścia i miłości. Skazując strzelca, skazuje samą siebie na wieczną samotność. Jest jednocześnie sędzią i ofiarą."]
    },
    {
        "type": "closed",
        "question": "Porównując postawę bohaterów 'Kamieni na szaniec' i Marcina Borowicza z 'Syzyfowych prac' w kontekście walki z zaborcą, kluczowa różnica polega na:",
        "answers": [
            { "text": "Skuteczności ich działań – bohaterowie 'Kamieni...' odnosili większe sukcesy.", "correct": false },
            { "text": "W wieku bohaterów – Borowicz był znacznie młodszy od Alka, Rudego i Zośki.", "correct": false },
            { "text": "Formie walki – 'Kamienie...' opisują walkę zbrojną i dywersję, a 'Syzyfowe prace' – opór intelektualny i kulturowy w warunkach szkolnych.", "correct": true },
            { "text": "Wsparciu ze strony dorosłych – Borowicz był osamotniony, a harcerze mieli wsparcie w swoich rodzinach.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "W 'Panu Tadeuszu' Adam Mickiewicz idealizuje obraz Soplicowa. Jaki jest główny cel artystyczny tej idealizacji?",
        "answers": [
            { "text": "Stworzenie realistycznego dokumentu życia szlachty na Litwie.", "correct": false },
            { "text": "Ukazanie wyższości kultury polskiej nad kulturą zaborców.", "correct": false },
            { "text": "Stworzenie mitycznej 'arkadii', ostoi polskości i porządku moralnego, aby 'pokrzepić serca' emigrantów i przypomnieć o utraconej ojczyźnie.", "correct": true },
            { "text": "Skrytykowanie zacofania i wad szlachty poprzez ich wyolbrzymienie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W lekturze 'Chłopcy z Placu Broni' Ferenca Molnára, Plac Broni jest dla chłopców czymś więcej niż tylko miejscem zabaw. Zinterpretuj, co symbolizuje dla nich ten kawałek ziemi.",
        "answer": ["Plac Broni symbolizuje dla nich ojczyznę, państwo w miniaturze. Ma swoje granice, 'rząd' (związek), prawo i 'armię'. Walka o niego to walka o wartości takie jak honor, wierność i poświęcenie, a jego utrata jest dla nich tragedią narodową."]
    },
    {
        "type": "closed",
        "question": "Gerwazy z 'Pana Tadeusza' i Syzyf z mitologii greckiej to postacie napędzane przez jedną, dominującą siłę. Mimo oczywistych różnic, łączy ich:",
        "answers": [
            { "text": "Bunt przeciwko boskim wyrokom.", "correct": false },
            { "text": "Niezłomny, trwający latami upór w dążeniu do jednego, określonego celu (zemsta / wtoczenie głazu), który definiuje całe ich istnienie.", "correct": true },
            { "text": "Działanie na rzecz dobra wspólnoty.", "correct": false },
            { "text": "Poczucie bezsensu i rezygnacja ze swoich działań.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "W 'Balladynie' Juliusza Słowackiego natura nie jest tylko tłem wydarzeń, ale aktywnym uczestnikiem dramatu. Jej rola polega przede wszystkim na:",
        "answers": [
            { "text": "Tworzeniu nastroju grozy i tajemniczości.", "correct": false },
            { "text": "Byciu świadkiem zbrodni i strażnikiem moralnego porządku, który ostatecznie wymierza sprawiedliwość (np. piorun).", "correct": true },
            { "text": "Dostarczaniu bohaterom schronienia i pożywienia.", "correct": false },
            { "text": "Symbolizowaniu uczuć bohaterów, np. burza jako odzwierciedlenie gniewu Balladyny.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego rozmowa z Pilotem była dla Małego Księcia najważniejszym i jedynym udanym spotkaniem z 'dorosłym'. Czym Pilot różnił się od mieszkańców planetoid?",
        "answer": ["Pilot, w przeciwieństwie do innych dorosłych, nie zatracił w sobie dziecka. Potrafił dostrzec słonia w kapeluszu i zrozumieć rysunek baranka. Miał wyobraźnię i zdolność do nawiązania prawdziwej, opartej na przyjaźni i zrozumieniu relacji, a nie tylko skupiał się na 'poważnych sprawach' jak władza czy cyfry."]
    },
    {
        "type": "closed",
        "question": "W zdaniu z tekstu 'Tajemniczy ogród': '...wtedy wiewiórka drapnęła na gałęzie, bażant skrył się w krzakach, a króliki uciekły w podskokach...', użycie czasowników 'drapnęła', 'skrył się', 'uciekły' zamiast np. 'weszła', 'schował się', 'pobiegły' ma na celu:",
        "answers": [
            { "text": "Uproszczenie języka, aby był bardziej zrozumiały dla młodych czytelników.", "correct": false },
            { "text": "Oddanie dynamiki i gwałtowności ruchu, charakterystycznego dla spłoszonych zwierząt.", "correct": true },
            { "text": "Podkreślenie lenistwa i powolności tych stworzeń.", "correct": false },
            { "text": "Wprowadzenie elementów języka potocznego do narracji.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj tytuł utworu Sławomira Mrożka 'Artysta'. Kto w tym opowiadaniu jest prawdziwym 'artystą' i dlaczego?",
        "answer": ["Tytuł jest ironiczny. Prawdziwym artystą nie jest Kogut, który ma tylko ambicje, ale Lis. Lis potrafi doskonale odegrać swoją rolę (łowcy), jest autentyczny w swojej naturze i osiąga swój cel. Jego 'sztuka' jest skuteczna i prawdziwa."]
    },
    {
        "type": "closed",
        "question": "Jaka fundamentalna różnica dzieli świat wartości reprezentowany przez chrześcijan i świat Rzymu pod rządami Nerona w 'Quo vadis' Henryka Sienkiewicza?",
        "answers": [
            { "text": "Chrześcijanie cenili życie w ubóstwie, a Rzymianie bogactwo i luksus.", "correct": false },
            { "text": "Rzym opierał się na sile fizycznej, władzy i hedonizmie, a świat chrześcijan na sile duchowej, miłości (agape), pokorze i nadziei na życie wieczne.", "correct": true },
            { "text": "Rzymianie byli politeistami, a chrześcijanie monoteistami.", "correct": false },
            { "text": "Chrześcijanie byli pacyfistami, a Rzymianie prowadzili liczne wojny.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "W zdaniu: 'Chłopiec, pomimo że był onieśmielony, zdołał pokazać dziewczynce nasiona.' podrzędne zdanie okolicznikowe przyzwolenia można zastąpić wyrażeniem przyimkowym bez zmiany sensu. Którym?",
        "answers": [
            { "text": "Z powodu onieśmielenia...", "correct": false },
            { "text": "W celu pokazania...", "correct": false },
            { "text": "Mimo onieśmielenia...", "correct": true },
            { "text": "Dzięki onieśmieleniu...", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie VII' Jan Kochanowski zestawia 'lichą odzież' i 'uploteczki' córki z jej 'matką zasłoną'. Co poeta osiąga poprzez to zestawienie prostych, codziennych przedmiotów z pojęciem abstrakcyjnym?",
        "answer": ["Poeta materializuje swoją rozpacz. Zestawienie konkretnych, namacalnych pamiątek po dziecku (ubranka) z abstrakcyjnym bólem i pustką (zasłona matki) potęguje wrażenie straty. Sprawia, że ból staje się niemal fizycznie odczuwalny i unaocznia ogrom tragedii."]
    },
    {
        "type": "closed",
        "question": "Wybierz parę bohaterów z różnych lektur, których postawy wobec życia i przeciwności losu są najbardziej do siebie ZBLIŻONE.",
        "answers": [
            { "text": "Ebenezer Scrooge (przed przemianą) i Rejent Milczek.", "correct": false },
            { "text": "Mały Książę i Bilbo Baggins.", "correct": false },
            { "text": "Zośka ('Kamienie na szaniec') i Ordon ('Reduta Ordona').", "correct": true },
            { "text": "Balladyna i Telimena.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W przypowieści o miłosiernym Samarytaninie, kapłan i lewita mijają rannego. Dlaczego Jezus w swojej opowieści wybrał właśnie przedstawicieli tych grup? Co chciał przez to podkreślić?",
        "answer": ["Jezus wybrał kapłana i lewitę, czyli osoby duchowne, od których oczekiwano prawości i miłosierdzia. Ich obojętność pokazuje, że formalna przynależność religijna i znajomość prawa nie gwarantują człowieczeństwa. Podkreśla, że prawdziwa wiara objawia się w czynach, a nie w statusie społecznym."]
    },
    {
        "type": "closed",
        "question": "Analizując język fraszki 'Na lipę' Jana Kochanowskiego, można stwierdzić, że dominującym środkiem stylistycznym, budującym cały obraz poetycki, jest:",
        "answers": [
            { "text": "Apostrofa do gościa.", "correct": false },
            { "text": "Porównanie homeryckie.", "correct": false },
            { "text": "Personifikacja (uosobienie) – lipa przemawia ludzkim głosem, zapraszając do odpoczynku.", "correct": true },
            { "text": "Hiperbola, wyolbrzymiająca zalety drzewa.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie złożone w wypowiedzenie z imiesłowowym równoważnikiem zdania: 'Gdy Mary zobaczyła Dicka, który grał na fujarce, zatrzymała się w zdumieniu.'",
        "answer": ["Zobaczywszy Dicka grającego na fujarce, Mary zatrzymała się w zdumieniu."]
    },
    {
        "type": "closed",
        "question": "Które z podanych zdań najtrafniej oddaje uniwersalne przesłanie 'Opowieści wigilijnej' Karola Dickensa?",
        "answers": [
            { "text": "Warto jest gromadzić majątek, aby móc dzielić się nim z ubogimi w przyszłości.", "correct": false },
            { "text": "Każdy człowiek, bez względu na swoje przeszłe błędy, ma szansę na wewnętrzną przemianę i odkupienie, jeśli otworzy serce na innych.", "correct": true },
            { "text": "Duchy zmarłych mogą ingerować w życie ludzi, aby naprawić dawne krzywdy.", "correct": false },
            { "text": "Rodzina i tradycja świąt są najważniejszymi wartościami w życiu człowieka.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych wyrazów przedrostek 'prze-' ma inne znaczenie niż w pozostałych (oznacza zmianę, transformację)?",
        "answers": [
            { "text": "Przekształcić", "correct": false },
            { "text": "Przemienić", "correct": false },
            { "text": "Przeskoczyć", "correct": true },
            { "text": "Przerobić", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Hobbicie' J.R.R. Tolkiena, Bilbo Baggins wyrusza w podróż jako stateczny, lubiący wygodę hobbit, a wraca jako zupełnie inna osoba. Wymień jedną cechę, którą nabył w trakcie wyprawy, i podaj sytuację, w której ją ujawnił.",
        "answer": ["Nabył odwagę i spryt. Ujawnił je na przykład podczas konfrontacji z pająkami w Mrocznej Puszczy, gdzie samotnie walczył, by ocalić krasnoludów, lub podczas gry w zagadki z Gollumem, gdzie wykazał się zimną krwią i inteligencją."]
    },
    {
        "type": "closed",
        "question": "Wypowiedzenie: 'Ptaki niełatwo zaprzyjaźniają się, a taki rudzik to potrafi wystrychnąć na dudka gorzej niż człowiek' to zdanie:",
        "answers": [
            { "text": "Złożone podrzędnie z podrzędnym dopełnieniowym.", "correct": false },
            { "text": "Złożone współrzędnie łączne.", "correct": false },
            { "text": "Złożone współrzędnie przeciwstawne.", "correct": true },
            { "text": "Pojedyncze rozwinięte z wtrąceniem.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż wspólny motyw łączący mit o Dedalu i Ikarze oraz przypowieść o talentach. Wyjaśnij krótko, na czym polega to podobieństwo.",
        "answer": ["Wspólnym motywem jest przestroga przed pychą i niewłaściwym wykorzystaniem daru/talentu. Ikar upada, bo w uniesieniu pychą ignoruje rady ojca i przekracza granice. Sługa z przypowieści zostaje ukarany, bo ze strachu nie wykorzystuje danego mu talentu. Oba utwory uczą odpowiedzialności i umiaru."]
    },
    {
        "type": "closed",
        "question": "Czym różni się patriotyzm ukazywany w 'Reducie Ordona' od patriotyzmu przedstawionego w 'Mazurku Dąbrowskiego'?",
        "answers": [
            { "text": "'Reduta...' skupia się na heroicznej klęsce i ofierze, a 'Mazurek...' na nadziei, woli walki i wizji odzyskania niepodległości.", "correct": true },
            { "text": "'Reduta...' opisuje walkę na lądzie, a 'Mazurek...' na morzu.", "correct": false },
            { "text": "'Reduta...' jest utworem romantycznym, a 'Mazurek...' oświeceniowym.", "correct": false },
            { "text": "'Reduta...' gloryfikuje dowódcę, a 'Mazurek...' anonimowego żołnierza.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wpisz skrót, który poprawnie zastąpi wyrażenie 'między innymi' w formalnym tekście.",
        "answer": ["m.in."]
    },
    {
        "type": "closed",
        "question": "Ostatnia scena 'Dziadów części II', w której pojawia się milczące Widmo podążające za Pasterką, ma kluczowe znaczenie dla całego cyklu. Jej funkcja to przede wszystkim:",
        "answers": [
            { "text": "Zakończenie obrzędu dziadów i odesłanie wszystkich duchów.", "correct": false },
            { "text": "Wprowadzenie motywu nieszczęśliwej miłości i zapowiedź problematyki IV części 'Dziadów'.", "correct": true },
            { "text": "Ukazanie, że nie wszystkie duchy można przywołać za pomocą zaklęć Guślarza.", "correct": false },
            { "text": "Zasugerowanie, że Pasterka popełniła najcięższy grzech.", "correct": false }
        ]
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