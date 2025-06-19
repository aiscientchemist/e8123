const questions =
    [
        {
            "type": "closed",
            "question": "W 'Zemście' Podstolina, planując swoje małżeństwa, kieruje się przede wszystkim:",
            "answers": [
                { "text": "Głębokim uczuciem i romantycznymi porywami serca.", "correct": false },
                { "text": "Chłodnym pragmatyzmem i dążeniem do zabezpieczenia swojej pozycji materialnej, traktując małżeństwo jak transakcję.", "correct": true },
                { "text": "Chęcią pogodzenia zwaśnionych rodów Cześnika i Rejenta.", "correct": false },
                { "text": "Lękiem przed samotnością na starość.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Jaka jest symboliczna funkcja milczącej, wyidealizowanej miłości Marcina Borowicza do Anny Stogowskiej ('Biruty') w 'Syzyfowych pracach'?",
            "answer": ["Ta miłość jest dla Borowicza siłą napędową jego wewnętrznej przemiany i dojrzewania narodowego. 'Biruta' staje się dla niego uosobieniem polskości, czystości i ideału, dla którego warto walczyć z rusyfikacją i pracować nad sobą. Jest to motywacja duchowa, a nie tylko romantyczna."]
        },
        {
            "type": "closed",
            "question": "W którym z poniższych zdań wyraz 'koło' jest inną częścią mowy niż w pozostałych?",
            "answers": [
                { "text": "Samochód stracił koło na wyboistej drodze.", "correct": false },
                { "text": "Dzieci bawiły się wesoło, biegając w koło.", "correct": true },
                { "text": "Zapasowe koło leżało w bagażniku.", "correct": false },
                { "text": "Młynarz uruchomił wielkie koło młyńskie.", "correct": false }
            ]
        },
        {
            "type": "closed",
            "question": "Postać Guślarza z 'Dziadów cz. II' i postać Aslana z 'Opowieści z Narnii', mimo oczywistych różnic, pełnią w swoich światach analogiczną funkcję. Jest to funkcja:",
            "answers": [
                { "text": "Władcy absolutnego, który ustala prawa.", "correct": false },
                { "text": "Nauczyciela, który przekazuje wiedzę historyczną.", "correct": false },
                { "text": "Przewodnika i pośrednika między różnymi porządkami rzeczywistości (światem żywych i umarłych / światem ludzi i Narnią).", "correct": true },
                { "text": "Bohatera, który samotnie walczy ze złem.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Słynny 'koncert Wojskiego' na rogu w 'Panu Tadeuszu' jest nie tylko opisem gry. Zinterpretuj tę scenę jako formę muzycznej narracji.",
            "answer": ["Koncert Wojskiego jest opowieścią dźwiękową, epopeją polowania zamkniętą w muzyce. Wojski za pomocą dźwięków rogu 'opowiada' całą historię polowania: od pobudki, przez nagonkę, szczekanie psów, aż po odgłosy osaczanego i walczącego zwierzęcia. To przykład mistrzostwa, w którym sztuka (muzyka) naśladuje i przetwarza rzeczywistość (polowanie)."]
        },
        {
            "type": "closed",
            "question": "Postać Gerwazego z 'Pana Tadeusza' jest moralnie niejednoznaczna, ponieważ:",
            "answers": [
                { "text": "Jest wiernym sługą Horeszków, ale jednocześnie spiskuje przeciwko Soplicom.", "correct": false },
                { "text": "Jego patriotyzm i chęć walki z Moskalami są nierozerwalnie splecione z prywatną, ślepą żądzą zemsty, co sprawia, że jego szlachetne pobudki są skażone prymitywną wendetą.", "correct": true },
                { "text": "Walczy o wolność Polski, ale posługuje się przestarzałą bronią, czyli Scyzorykiem.", "correct": false },
                { "text": "Jest szanowany przez szlachtę, ale pogardzany przez Sędziego.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Zinterpretuj symboliczną wymowę spotkania Małego Księcia z Pijakiem. Co reprezentuje błędne koło, w którym tkwi Pijak?",
            "answer": ["Błędne koło (pije, by zapomnieć o wstydzie, a wstydzi się, że pije) symbolizuje ludzką bezsilność, absurdy, nałogi i sytuacje bez wyjścia, w które ludzie sami się wpędzają. Jest to metafora utraty logiki i sensu, pułapki myślowej, z której nie ma ucieczki bez interwencji z zewnątrz lub fundamentalnej zmiany myślenia."]
        },
        {
            "type": "closed",
            "question": "W 'Balladynie', kontrast między złotym dzbanem malin a krwawą plamą na czole bohaterki symbolizuje:",
            "answers": [
                { "text": "Walkę między bogactwem a biedą.", "correct": false },
                { "text": "Nierozerwalny związek między pozornym sukcesem (zdobyciem dzbana i męża) a popełnioną zbrodnią, której nie da się ukryć ani zmyć.", "correct": true },
                { "text": "Przemianę niewinnej dziewczyny w okrutną władczynię.", "correct": false },
                { "text": "Konflikt między naturą (maliny) a cywilizacją (złoty dzban).", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W 'Zemście' Rejent Milczek posługuje się językiem pełnym zdrobnień ('mocium panie', 'serdeńko'). Jaka jest funkcja tych zdrobnień w kontekście jego prawdziwego charakteru?",
            "answer": ["Zdrobnienia te pełnią funkcję maski. Tworzą fałszywy obraz Rejenta jako osoby łagodnej, pokornej i ugodowej. Ten styl mówienia stoi w jaskrawym kontraście do jego prawdziwego charakteru – człowieka chciwego, mściwego i bezwzględnego. Kontrast ten jest źródłem komizmu i demaskuje jego hipokryzję."]
        },
        {
            "type": "closed",
            "question": "Który z poniższych związków frazeologicznych ma swoje źródło w mitologii greckiej i oznacza nierozwiązywalny, skomplikowany problem?",
            "answers": [
                { "text": "Pięta achillesowa", "correct": false },
                { "text": "Męki Tantala", "correct": false },
                { "text": "Węzeł gordyjski", "correct": true },
                { "text": "Stajnia Augiasza", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, dlaczego tytuł powieści Sienkiewicza 'Latarnik' jest jednocześnie dosłowny i symboliczny w odniesieniu do życia Skawińskiego PRZED otrzymaniem książek.",
            "answer": ["Dosłownie, tytuł odnosi się do zawodu bohatera. Symbolicznie, bycie latarnikiem odzwierciedlało jego życie: uporządkowane, monotonne, bezpieczne, ale odizolowane od świata i pozbawione głębszych emocji. Jak latarnia, która rzuca światło na zewnątrz, ale sama jest pusta w środku, tak Skawiński pełnił funkcję, ale jego wewnętrzne życie było uśpione."]
        },
        {
            "type": "closed",
            "question": "W zdaniu: 'Bohaterowie, chociaż wyczerpani, parli naprzód, aby zdążyć przed zmrokiem', spójnik 'aby' wprowadza zdanie podrzędne:",
            "answers": [
                { "text": "okolicznikowe przyczyny", "correct": false },
                { "text": "okolicznikowe warunku", "correct": false },
                { "text": "okolicznikowe celu", "correct": true },
                { "text": "okolicznikowe sposobu", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W przypowieści o pannach roztropnych i nieroztropnych, oliwa w lampach jest symbolem. Zinterpretuj, co może symbolizować ta oliwa w kontekście życia duchowego człowieka.",
            "answer": ["Oliwa symbolizuje wewnętrzne przygotowanie, czujność duchową, dobre uczynki, wiarę i mądrość. Nie można jej pożyczyć ani zdobyć w ostatniej chwili. Jest to metafora pracy nad sobą, którą każdy musi wykonać indywidualnie, by być gotowym na ważne, ostateczne wydarzenia ('przyjście pana młodego')."]
        },
        {
            "type": "closed",
            "question": "Porównując postawę życiową Petroniusza z 'Quo vadis' i Kochanowskiego jako podmiotu lirycznego z fraszki 'O żywocie ludzkim', można dostrzec podobieństwo polegające na:",
            "answers": [
                { "text": "Głębokiej wierze w siłę sprawczą bogów/Boga.", "correct": false },
                { "text": "Dostrzeganiu marności i nietrwałości ludzkich starań oraz przyjmowaniu postawy zdystansowanego obserwatora, który patrzy na świat z ironią lub rezygnacją.", "correct": true },
                { "text": "Aktywnym dążeniu do zmiany porządku świata.", "correct": false },
                { "text": "Pochwale prostego życia w zgodzie z naturą.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Utwórz formę liczby mnogiej mianownika od rzeczownika 'ksiądz' i użyj jej w poprawnym gramatycznie zdaniu.",
            "answer": ["Forma: księża. Zdanie: Na uroczystość przybyli zaproszeni księża."]
        },
        {
            "type": "closed",
            "question": "Humor w 'Zemście' Aleksandra Fredry opiera się w dużej mierze na komizmie sytuacji. Które z poniższych zdarzeń jest najlepszym przykładem tego rodzaju komizmu?",
            "answers": [
                { "text": "Papkin opowiadający o swoich rzekomych bohaterskich czynach.", "correct": false },
                { "text": "Scena, w której Cześnik, chcąc dokuczyć Rejentowi, zmusza Wacława do ślubu z Klarą, nie wiedząc, że młodzi są w sobie zakochani i realizuje ich najskrytsze marzenia.", "correct": true },
                { "text": "Rejent powtarzający 'mocium panie'.", "correct": false },
                { "text": "Dyndalski nieudolnie piszący list w imieniu Klary.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W 'Śmierci Pułkownika' Adama Mickiewicza, tożsamość zmarłego wodza zostaje ujawniona dopiero na końcu. Jaki cel artystyczny osiąga poeta poprzez ten zabieg?",
            "answer": ["Celem jest zbudowanie aury tajemnicy i podkreślenie uniwersalnego wymiaru bohaterstwa. Do końca czytelnik myśli, że to umiera wielki wódz-mężczyzna. Ujawnienie, że to Emilia Plater, potęguje wrażenie i pokazuje, że odwaga i miłość do ojczyzny nie mają płci, a kobieta może być bohaterem narodowym na równi z mężczyznami."]
        },
        {
            "type": "closed",
            "question": "Wypowiedź Dyrektora Cyrku z opowiadania 'Artysta': '– A ryczeć pan potrafi? – pytam, bo wypadnie, że go zaangażuję, a on, zamiast ryczeć, będzie, powiedzmy, piać.' – jest przykładem języka cechującego się:",
            "answers": [
                { "text": "Wyszukanym stylem artystycznym.", "correct": false },
                { "text": "Urzędową precyzją i formalizmem.", "correct": false },
                { "text": "Potocznym, dosadnym pragmatyzmem, sprowadzającym sztukę do konkretnej, użytecznej umiejętności.", "correct": true },
                { "text": "Poetycką metaforyką.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W zdaniu: 'Chłopiec, usiadłszy na pniu, pokazał Mary nasiona', zastąp imiesłów przysłówkowy uprzedni 'usiadłszy' zdaniem podrzędnym, nie zmieniając sensu wypowiedzenia.",
            "answer": ["Chłopiec, gdy usiadł na pniu, pokazał Mary nasiona."]
        },
        {
            "type": "closed",
            "question": "Wskaż, w którym szeregu wszystkie trzy postacie łączy motyw zdrady (popełnionej lub doznanej).",
            "answers": [
                { "text": "Scrooge, Rejent, Nemeczek", "correct": false },
                { "text": "Balladyna, Strzelec ze 'Świtezianki', Feri Acz", "correct": true },
                { "text": "Jacek Soplica, Ordon, Mały Książę", "correct": false },
                { "text": "Telimena, Gerwazy, Alina", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, na czym polega różnica znaczeniowa między czasownikami 'uczyć się' a 'nauczyć się'.",
            "answer": ["'Uczyć się' to czasownik niedokonany, który oznacza proces, czynność trwającą w czasie, bez gwarancji osiągnięcia celu. 'Nauczyć się' to czasownik dokonany, który oznacza rezultat, skuteczne zakończenie procesu uczenia się, osiągnięcie celu."]
        },
        {
            "type": "closed",
            "question": "Zarówno 'Mazurek Dąbrowskiego', jak i 'Reduta Ordona' opisują walkę o niepodległość. Kluczowa różnica w nastroju i przesłaniu obu utworów polega na tym, że:",
            "answers": [
                { "text": "'Mazurek...' jest pełen optymizmu i wiary w zwycięstwo, a 'Reduta...' przedstawia tragiczną, ale heroiczną klęskę.", "correct": true },
                { "text": "'Mazurek...' opisuje walkę piechoty, a 'Reduta...' artylerii.", "correct": false },
                { "text": "'Mazurek...' jest pieśnią, a 'Reduta...' jest poematem.", "correct": false },
                { "text": "'Mazurek...' powstał we Włoszech, a 'Reduta...' w Polsce.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W mitologii Ikar ginie z powodu nieposłuszeństwa i pychy. W 'Pamiętniku Zofii Bobrówny' Juliusza Słowackiego, podmiot liryczny radzi dziewczynce, by 'nie deptała maleńkich gwiazd'. Jaki wspólny motyw łączy te dwa utwory?",
            "answer": ["Wspólnym motywem jest przestroga przed przekraczaniem pewnych granic – Ikar przekracza granicę wyznaczoną przez ojca i naturę, a Zosia jest przestrzegana przed utratą niewinności i deptaniem ideałów. Oba utwory, choć w różny sposób, mówią o konieczności zachowania pokory i szacunku wobec wyższego porządku."]
        },
        {
            "type": "closed",
            "question": "Które z poniższych zdań jest zdaniem złożonym współrzędnie wynikowym?",
            "answers": [
                { "text": "Zaczął padać deszcz i wszyscy schowali się pod dachem.", "correct": false },
                { "text": "Zaczął padać deszcz, więc wszyscy schowali się pod dachem.", "correct": true },
                { "text": "Zaczął padać deszcz, ale nikt nie przejął się tym zbytnio.", "correct": false },
                { "text": "Albo zacznie padać deszcz, albo pójdziemy na spacer.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Jaką funkcję w 'Panu Tadeuszu' pełni postać Jankiela i jego koncert na cymbałach?",
            "answer": ["Jankiel, Żyd-patriota, symbolizuje wielokulturowość i jedność dawnej Rzeczypospolitej. Jego koncert jest muzyczną syntezą najnowszej historii Polski (od Konstytucji 3 Maja do Legionów), budzi uczucia patriotyczne i daje nadzieję na odzyskanie niepodległości. Jest artystą-wieszczem, który jednoczy słuchaczy."]
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