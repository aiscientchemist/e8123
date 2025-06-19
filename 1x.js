const questions = [
    {
        "type": "closed",
        "question": "W przytoczonym fragmencie 'Tajemniczego ogrodu', relacja Dicka ze zwierzętami opiera się przede wszystkim na:",
        "answers": [
            { "text": "Wydawaniu im poleceń, które posłusznie wykonują.", "correct": false },
            { "text": "Sile jego autorytetu jako człowieka dominującego nad naturą.", "correct": false },
            { "text": "Empatii, cierpliwości i zrozumieniu ich natury, co buduje zaufanie.", "correct": true },
            { "text": "Użyciu magicznej fujarki, która zmusza je do określonych zachowań.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Postawa Mary w początkowej fazie rozmowy z Dickiem ('odpowiadała trochę sztywno i czuła się lekko onieśmielona') wynika najprawdopodobniej z:",
        "answers": [
            { "text": "Jej wrodzonej niechęci do mieszkańców wsi.", "correct": false },
            { "text": "Braku wcześniejszych doświadczeń w swobodnych, partnerskich relacjach z rówieśnikami.", "correct": true },
            { "text": "Poczucia wyższości społecznej wobec syna służącej.", "correct": false },
            { "text": "Obawy, że Dick odkryje jej sekret dotyczący ogrodu.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W kontekście fragmentu 'Tajemniczego ogrodu', wyjaśnij, co oznacza stwierdzenie Dicka, że rudzik 'potrafi wystrychnąć na dudka gorzej niż człowiek'. Co to mówi o naturze?",
        "answer": ["Oznacza to, że zdobycie zaufania dzikiego stworzenia jest trudne i wymaga autentyczności, a natura jest szczera i nie da się jej oszukać powierzchownymi gestami.", "Zdobycie zaufania przyrody jest trudniejsze niż oszukanie człowieka; wymaga prawdziwej więzi."]
    },
    {
        "type": "closed",
        "question": "Główną tezą tekstu Sebastiana Taboła 'Istota czytania' jest stwierdzenie, że:",
        "answers": [
            { "text": "Czytanie literatury pięknej jest najważniejszą formą rozwoju intelektualnego.", "correct": false },
            { "text": "Czytanie to uniwersalny proces interpretacji różnorodnych znaków, nieograniczający się tylko do pisma.", "correct": true },
            { "text": "Współcześnie ludzie czytają znacznie mniej niż w przeszłości z powodu rozwoju technologii.", "correct": false },
            { "text": "Każdy człowiek powinien opanować technikę szybkiego czytania, aby sprostać wymaganiom świata.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Autor tekstu 'Istota czytania' pisze o 'czytaniu między wierszami'. Podaj własny, oryginalny przykład sytuacji (inny niż rozmowa), w której można zastosować tę umiejętność.",
        "answer": ["Analizując reklamę, która obiecuje 'niesamowite efekty', ale drobnym drukiem podaje wiele wyłączeń.", "Oglądając przemówienie polityka, który mówi o 'potrzebie reform', ale unika podania konkretów, co sugeruje, że nie ma planu."]
    },
    {
        "type": "closed",
        "question": "Wspólnym mianownikiem losów Jacka Soplicy ('Pan Tadeusz') i Ebenezera Scrooge'a ('Opowieść wigilijna') jest:",
        "answers": [
            { "text": "Walka o niepodległość ojczyzny.", "correct": false },
            { "text": "Doświadczenie nieszczęśliwej miłości w młodości.", "correct": false },
            { "text": "Motyw winy, pokuty i głębokiej wewnętrznej przemiany pod wpływem przełomowych wydarzeń.", "correct": true },
            { "text": "Dążenie do zdobycia ogromnego majątku za wszelką cenę.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Która z postaci literackich z listy lektur obowiązkowych najpełniej realizuje wzorzec bohatera tragicznego, którego do katastrofy prowadzi jego własna wada charakteru (hamartia)?",
        "answers": [
            { "text": "Alina z 'Balladyny', ponieważ jest ofiarą zbrodni.", "correct": false },
            { "text": "Jacek Soplica z 'Pana Tadeusza', ponieważ jego pycha prowadzi do zbrodni.", "correct": false },
            { "text": "Balladyna z 'Balladyny', ponieważ jej niepohamowana żądza władzy prowadzi ją od jednej zbrodni do kolejnej i ostatecznie do zguby.", "correct": true },
            { "text": "Marcin Borowicz z 'Syzyfowych prac', ponieważ walczy z rusyfikacją.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega ironia tragiczna w finale 'Zemsty' Aleksandra Fredry. Weź pod uwagę plany bohaterów i ostateczny rezultat ich działań.",
        "answer": ["Ironia polega na tym, że nienawidzący się Cześnik i Rejent, knując przeciwko sobie, doprowadzają do ślubu swoich dzieci, co ostatecznie godzi zwaśnione rody. Osiągają cel przeciwny do zamierzonego, który okazuje się dla wszystkich szczęśliwym rozwiązaniem."]
    },
    {
        "type": "closed",
        "question": "Postawa patriotyczna w 'Reducie Ordona' Mickiewicza i 'Kamieniach na szaniec' Kamińskiego, mimo różnic epokowych, opiera się na wspólnym fundamencie, którym jest:",
        "answers": [
            { "text": "Przekonanie o konieczności walki dyplomatycznej.", "correct": false },
            { "text": "Apoteoza poświęcenia jednostki i gotowość oddania życia za ojczyznę jako najwyższy akt heroizmu.", "correct": true },
            { "text": "Krytyka bezsensownej śmierci i pochwała pracy organicznej.", "correct": false },
            { "text": "Wiara w nieuchronną pomoc ze strony sojuszników z Zachodu.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Interpretując 'Małego Księcia', wyjaśnij, co symbolizują baobaby i dlaczego tak ważne jest, by 'wyrywać je zaraz po odrośnięciu'. Odnieś tę symbolikę do życia człowieka.",
        "answer": ["Baobaby symbolizują zło, złe myśli, wady, nałogi lub problemy, które na początku są małe i łatwe do usunięcia. Jeśli się je zignoruje, rozrosną się, zdominują całe życie ('planetę') i doprowadzą do katastrofy. To metafora konieczności pracy nad sobą i rozwiązywania problemów, póki są małe."]
    },
    {
        "type": "closed",
        "question": "W zdaniu z tekstu 'Istota czytania': 'Inaczej czyta się teksty naukowe, najeżone specjalistycznymi terminami, a inaczej – literaturę piękną', wyraz 'najeżone' pełni funkcję metaforyczną. Co ona komunikuje o języku tekstów naukowych?",
        "answers": [
            { "text": "Że jest on nieprzyjemny i kłujący w odbiorze dla laika.", "correct": false },
            { "text": "Że zawiera bardzo dużą liczbę trudnych, specjalistycznych słów, które tworzą barierę poznawczą.", "correct": true },
            { "text": "Że jest chaotyczny i nieuporządkowany jak sierść jeża.", "correct": false },
            { "text": "Że jest przestarzały i archaiczny.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wpisz tytuł lektury obowiązkowej, w której motyw 'non omnis moriar' (nie wszystek umrę) Horacego znajduje swoje najpełniejsze odzwierciedlenie w postawie poety-bohatera lirycznego. Uzasadnij krótko swój wybór.",
        "answer": ["Pieśni Jana Kochanowskiego (np. 'Niezwykłym i nie leda piórem obdarzony...'). Poeta wyraża w nich przekonanie, że jego twórczość zapewni mu nieśmiertelność i sławę po śmierci."]
    },
    {
        "type": "closed",
        "question": "Który z poniższych cytatów z 'Dziadów cz. II' zawiera uniwersalną prawdę moralną dotyczącą wagi ludzkiego cierpienia i empatii?",
        "answers": [
            { "text": "'Ciemno wszędzie, głucho wszędzie, / Co to będzie, co to będzie?'", "correct": false },
            { "text": "'Kto nie dotknął ziemi ni razu, / Ten nigdy nie może być w niebie.'", "correct": false },
            { "text": "'Bo kto nie był ni razu człowiekiem, / Temu człowiek nic nie pomoże.'", "correct": true },
            { "text": "'Spieszmy się kochać ludzi, tak szybko odchodzą.'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Porównaj postać Telimeny z 'Pana Tadeusza' i tytułowej bohaterki satyry 'Żona modna' I. Krasickiego. Wskaż jedną wspólną, charakterystyczną dla obu postaci cechę i zilustruj ją przykładem z utworu.",
        "answer": ["Wspólną cechą jest fascynacja obcą (francuską) modą i kulturą, połączona z pogardą dla rodzimych obyczajów. Telimena organizuje 'ucztę na modę francuską' i dyskutuje o sztuce, a Żona Modna przemeblowuje dwór męża w stylu francuskim, gardząc staropolskim porządkiem."]
    },
    {
        "type": "closed",
        "question": "Recytacja 'Reduty Ordona' przez Bernarda Zygiera na lekcji języka polskiego w 'Syzyfowych pracach' jest momentem przełomowym, ponieważ:",
        "answers": [
            { "text": "Jest to akt otwartego buntu wobec nauczyciela rusyfikatora, który budzi uśpioną świadomość narodową w Marcinie Borowiczu.", "correct": true },
            { "text": "Pokazuje doskonałą pamięć Zygiera i jego talent recytatorski.", "correct": false },
            { "text": "Jest to próba zaimponowania Annie Stogowskiej, 'Birucie'.", "correct": false },
            { "text": "Prowadzi do natychmiastowego usunięcia Zygiera i Borowicza ze szkoły.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "W zdaniu: 'Chłopiec, który potrafił naśladować głosy ptaków, zaimponował Mary, chociaż początkowo czuła się przy nim onieśmielona', występuje następująca kolejność zdań składowych:",
        "answers": [
            { "text": "Nadrzędne - podrzędne przydawkowe - nadrzędne - podrzędne okolicznikowe przyzwolenia", "correct": true },
            { "text": "Nadrzędne - podrzędne podmiotowe - nadrzędne - podrzędne dopełnieniowe", "correct": false },
            { "text": "Podrzędne orzecznikowe - nadrzędne - podrzędne okolicznikowe celu", "correct": false },
            { "text": "Dwa zdania nadrzędne połączone spójnikiem 'chociaż'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie 'Dick schylił się, żeby podnieść narzędzia' na zdanie z imiesłowowym równoważnikiem zdania, zachowując jego sens.",
        "answer": ["Schyliwszy się, Dick podniósł narzędzia."]
    },
    {
        "type": "closed",
        "question": "Pojęcie 'syzyfowa praca', użyte w tytule powieści Żeromskiego, odnosi się w najgłębszym sensie do:",
        "answers": [
            { "text": "Ciężkiej i bezowocnej pracy Marcina Borowicza nad własnym charakterem.", "correct": false },
            { "text": "Beznadziejnych wysiłków nauczycieli, by nauczyć polskie dzieci języka rosyjskiego.", "correct": false },
            { "text": "Dwoistego znaczenia: z jednej strony bezowocnych wysiłków rusyfikatorów, a z drugiej - heroicznej, choć pozornie beznadziejnej walki polskiej młodzieży o zachowanie tożsamości.", "correct": true },
            { "text": "Trudów związanych z codziennym dojeżdżaniem do szkoły w Klerykowie.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych związków frazeologicznych słowo 'pięta' ma znaczenie symboliczne, odwołujące się do mitologii?",
        "answers": [
            { "text": "Nadeptywać komuś na pięty.", "correct": false },
            { "text": "Pięta achillesowa.", "correct": true },
            { "text": "Pójść w piętkę.", "correct": false },
            { "text": "Pokazać komuś pięty.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie VIII' Jan Kochanowski pisze: 'Pełno nas, a jakoby nikogo nie było'. Wyjaśnij, na czym polega paradoks wyrażony w tym fragmencie i co on mówi o stanie emocjonalnym podmiotu lirycznego.",
        "answer": ["Paradoks polega na sprzeczności między fizyczną obecnością wielu osób w domu a odczuciem pustki po stracie jednej, konkretnej osoby (Urszulki). Mówi to o głębokim smutku, żalu i poczuciu osamotnienia ojca, dla którego zmarła córka była centrum życia domowego, a jej brak sprawia, że dom wydaje się pusty."]
    },
    {
        "type": "closed",
        "question": "Analizując 'Latarnika' Sienkiewicza, można dojść do wniosku, że lektura 'Pana Tadeusza' dla Skawińskiego była przede wszystkim:",
        "answers": [
            { "text": "Intelektualną rozrywką po latach prostej pracy fizycznej.", "correct": false },
            { "text": "Przypomnieniem o obowiązkach wobec dalekiej ojczyzny.", "correct": false },
            { "text": "Katalizatorem, który wywołał potężną, stłumioną tęsknotę i przywrócił mu poczucie tożsamości narodowej, niszcząc jego spokój.", "correct": true },
            { "text": "Powodem do dumy, że polska literatura jest znana na świecie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd składniowy w poniższym zdaniu i zapisz je poprawnie: 'Idąc do szkoły, zaczął padać deszcz.'",
        "answer": ["Błąd polega na tym, że podmiot logiczny imiesłowu ('idąc') jest inny niż podmiot zdania głównego ('deszcz'). Poprawnie: 'Gdy szedłem/szłam do szkoły, zaczął padać deszcz.'"]
    },
    {
        "type": "closed",
        "question": "Konflikt między Cześnikiem a Rejentem w 'Zemście' ma charakter sporu 'o miedzę'. Jakie uniwersalne cechy polskiego charakteru narodowego (lub szerzej: ludzkiej natury) są w tym konflikcie ośmieszone przez Fredrę?",
        "answers": [
            { "text": "Gościnność i życzliwość.", "correct": false },
            { "text": "Odwaga i waleczność na polu bitwy.", "correct": false },
            { "text": "Porywczość, upór, pieniactwo i przywiązanie do własnej racji za wszelką cenę.", "correct": true },
            { "text": "Pracowitość i gospodarność.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego narrator w 'Opowieści wigilijnej' nazywa Marleya 'martwym jak ćwiek w drzwiach' ('dead as a doornail'). Jaki cel artystyczny osiąga autor przez to dosadne, nietypowe porównanie na samym początku utworu?",
        "answer": ["Celem jest hiperboliczne, definitywne i niepozostawiające wątpliwości podkreślenie faktu śmierci Marleya. To uwiarygadnia późniejsze pojawienie się jego ducha jako zjawiska nadprzyrodzonego i wstrząsającego, a nie np. halucynacji Scrooge'a. Buduje to fundament dla świata fantastycznego utworu."]
    },
    {
        "type": "closed",
        "question": "Jeśli założymy, że 'Artysta' Sławomira Mrożka jest parabolą, to postawa Koguta, który za wszelką cenę chce 'być lwem', jest satyrą na:",
        "answers": [
            { "text": "Wysokie ambicje i dążenie do samorozwoju.", "correct": false },
            { "text": "Przerost ambicji nad możliwościami, udawanie kogoś, kim się nie jest i pogoń za sławą bez pokrycia w talencie.", "correct": true },
            { "text": "Niesprawiedliwy system oceny artystów przez dyrektorów cyrków.", "correct": false },
            { "text": "Trudne warunki życia zwierząt w cyrkach.", "correct": false }
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