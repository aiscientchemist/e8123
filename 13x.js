const questions = [
    {
        "type": "closed",
        "question": "Jaka jest fundamentalna różnica w postrzeganiu prawa między Rejentem Milczkiem a Sędzią Soplicą?",
        "answers": [
            { "text": "Rejent traktuje prawo instrumentalnie, jako narzędzie do realizacji własnych, egoistycznych celów, podczas gdy Sędzia postrzega prawo jako fundament porządku społecznego i tradycji, który należy szanować.", "correct": true },
            { "text": "Rejent jest notariuszem, a Sędzia sędzią, więc mają różne kompetencje.", "correct": false },
            { "text": "Rejent doskonale zna prawo, a Sędzia często je łamie.", "correct": false },
            { "text": "Rejent jest zwolennikiem prawa pisanego, a Sędzia prawa zwyczajowego.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Król twierdzi, że jego władza jest 'rozsądna', ponieważ rozkazuje tylko to, co jest możliwe do wykonania (np. słońcu, by zaszło wieczorem). Co symbolizuje ta postawa?",
        "answer": ["Symbolizuje ona iluzję władzy i bezsilność człowieka wobec praw natury. Król, nie mogąc realnie wpływać na rzeczywistość, dostosowuje swoje rozkazy do istniejącego stanu rzeczy, by zachować pozory kontroli. To metafora pustej, formalnej władzy, która polega na przypisywaniu sobie zasług za to, co i tak by się wydarzyło."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań imiesłowowy równoważnik zdania został użyty niepoprawnie?",
        "answers": [
            { "text": "Wróciwszy do domu, od razu położył się spać.", "correct": false },
            { "text": "Czytając książkę, zasnąłem w fotelu.", "correct": false },
            { "text": "Otworzywszy okno, do pokoju wpadł chłodny wiatr.", "correct": true },
            { "text": "Słuchając muzyki, odpoczywał po ciężkim dniu.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co łączy sposób walki Konrada Wallenroda (bohatera innego utworu Mickiewicza) ze sposobem walki Lisa z opowiadania 'Artysta' Sławomira Mrożka?",
        "answers": [
            { "text": "Obaj walczą w obronie słabszych i pokrzywdzonych.", "correct": false },
            { "text": "Ich metoda walki opiera się na podstępie, sprycie i wykorzystaniu naturalnych predyspozycji (wallenrodyzm / lisia chytrość), a nie na otwartej konfrontacji siłowej.", "correct": true },
            { "text": "Obaj ponoszą klęskę moralną w wyniku swoich działań.", "correct": false },
            { "text": "Obaj są motywowani chęcią zdobycia sławy i uznania.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Tadeusz, słysząc rozmowę Telimeny z Hrabią, myśli o samobójstwie. Co ta gwałtowna, romantyczna reakcja mówi o jego charakterze?",
        "answer": ["Mówi to o jego młodzieńczej niedojrzałości, idealizmie i wrażliwości. Jest on typowym bohaterem romantycznym, który przeżywa miłość w sposób absolutny, a zdradę traktuje jako katastrofę egzystencjalną. Jego reakcja jest porywcza i niewspółmierna do sytuacji, co pokazuje, że kieruje się emocjami, a nie chłodną kalkulacją."]
    },
    {
        "type": "closed",
        "question": "Główną przyczyną konfliktu między Grekami a Trojanami w mitologii była:",
        "answers": [
            { "text": "Walka o kontrolę nad szlakami handlowymi.", "correct": false },
            { "text": "Porwanie Heleny, żony króla Sparty Menelaosa, przez trojańskiego księcia Parysa, co było obrazą honoru.", "correct": true },
            { "text": "Spór o terytoria bogate w złoża naturalne.", "correct": false },
            { "text": "Interwencja bogów, którzy chcieli skłócić ze sobą ludzi.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Cześnika Raptusiewicza jest jednocześnie śmieszna i budząca sympatię.",
        "answer": ["Jest śmieszny z powodu swojej porywczości, prostolinijności i kontrastu między jego groźnymi słowami a często nieporadnymi działaniami. Sympatię budzi jego szczerość (w przeciwieństwie do Rejenta), przywiązanie do tradycyjnych wartości sarmackich (nawet jeśli komicznie je realizuje) i w gruncie rzeczy dobroduszna natura, ukryta pod maską choleryka."]
    },
    {
        "type": "closed",
        "question": "W 'Kamieniach na szaniec', które z poniższych działań najlepiej ilustruje pojęcie 'małego sabotażu'?",
        "answers": [
            { "text": "Wysadzenie mostu kolejowego pod Czarnocinem.", "correct": false },
            { "text": "Akcja pod Arsenałem w celu odbicia Rudego.", "correct": false },
            { "text": "Malowanie na murach znaku Polski Walczącej i wybijanie szyb w sklepach niemieckich fotografów.", "correct": true },
            { "text": "Uczestnictwo w tajnych kompletach i nauka na podziemnym uniwersytecie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'brzozowego krzyżyka', który Zosia daje Tadeuszowi na pożegnanie.",
        "answer": ["Brzozowy krzyżyk symbolizuje czystość, prostotę i głęboką, cichą wiarę. Jest to dar skromny, ale pełen znaczenia – łączy w sobie motyw religijny (krzyż) z elementem polskiej natury (brzoza). Symbolizuje on błogosławieństwo i nadzieję na bezpieczny powrót, a także więź łączącą bohaterów z ojczystą ziemią."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym orzeczenie jest wyrażone w formie bezosobowej.",
        "answers": [
            { "text": "Trzeba wreszcie posprzątać ten pokój.", "correct": true },
            { "text": "On musi wreszcie posprzątać ten pokój.", "correct": false },
            { "text": "Wszyscy posprzątali już swoje pokoje.", "correct": false },
            { "text": "Posprzątaj wreszcie ten pokój!", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Klary w 'Zemście' jest niezbędna dla komediowego rozwiązania akcji.",
        "answer": ["Jest niezbędna, ponieważ jej miłość do Wacława stanowi ukrytą siłę napędową, która ostatecznie tryumfuje nad intrygami opiekunów. Jej zgoda na ślub z Wacławem, zorganizowany przez Cześnika w akcie zemsty, zamienia tę zemstę w farsę i prowadzi do happy endu. Bez jej uczucia, plan Cześnika byłby tylko kolejnym aktem wrogości."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zdań zawiera błąd w użyciu formy grzecznościowej?",
        "answers": [
            { "text": "Czy mógłby pan podać mi sól?", "correct": false },
            { "text": "Pani Anno, proszę usiąść.", "correct": false },
            { "text": "Panie dyrektorze, czy mogę wejść?", "correct": false },
            { "text": "Proszę pani, co pani sobie życzy?", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Sędzia jest strażnikiem 'grzeczności'. Czym jest ta 'grzeczność' w jego rozumieniu?",
        "answer": ["'Grzeczność' w rozumieniu Sędziego to nie tylko dobre maniery, ale cały system obyczajowy i moralny, który reguluje życie społeczne. Obejmuje ona szacunek dla starszych, kobiet, gości, a nawet natury. Jest to kodeks, który zapewnia harmonię, porządek i zachowanie narodowej tożsamości. Jest to sztuka życia we wspólnocie."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', Duch Teraźniejszych Świąt pokazuje Scrooge'owi sceny świąteczne u biednych ludzi (górników, latarników). Jaki jest cel tych wizji?",
        "answers": [
            { "text": "Pokazanie Scrooge'owi, jak wielu ludzi na świecie potrzebuje jego pomocy finansowej.", "correct": false },
            { "text": "Uświadomienie mu, że radość, wspólnota i duch świąt istnieją niezależnie od bogactwa i docierają nawet w najdalsze i najbiedniejsze zakątki, co kontrastuje z jego samotnością w luksusie.", "correct": true },
            { "text": "Wzbudzenie w nim poczucia winy, że nie dzieli się swoim majątkiem.", "correct": false },
            { "text": "Zasugerowanie, że powinien zainwestować w kopalnie i latarnie morskie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie zależnej na mowę niezależną: 'Krzyknął, żebym natychmiast stamtąd wyszedł.'",
        "answer": ["Krzyknął: 'Natychmiast stąd wyjdź!'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej porusza problematykę winy, pokuty i ostatecznego przebaczenia?",
        "answers": [
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Pan Tadeusz' (wątek Jacka Soplicy)", "correct": true },
            { "text": "'Artysta'", "correct": false },
            { "text": "'Chłopcy z Placu Broni'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Syzyfowych pracach' pojawia się postać 'starej panny' wynajmującej stancję. Jaka jest jej rola w opisie środowiska i życia uczniów?",
        "answer": ["Jej rola polega na realistycznym przedstawieniu trudnych warunków bytowych, w jakich żyli uczniowie spoza miasta. Jest postacią surową, oszczędną, reprezentującą twardą rzeczywistość materialną, która kontrastuje z duchowymi i intelektualnymi zmaganiami bohaterów. Pokazuje prozę życia stojącą za wielkimi ideami."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje podmiot domyślny.",
        "answers": [
            { "text": "Na ulicy było bardzo głośno.", "correct": false },
            { "text": "Wczoraj przez cały dzień padał deszcz.", "correct": false },
            { "text": "Poszliśmy do kina na nowy film.", "correct": true },
            { "text": "Ktoś zapomniał zamknąć drzwi.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest symboliczna funkcja morza w noweli 'Latarnik'?",
        "answer": ["Morze symbolizuje los, nieprzewidywalność i ogrom świata, w którym Skawiński jest zagubiony. Jest to siła potężna i obojętna na ludzkie cierpienie. Jednocześnie, praca na latarni morskiej jest próbą okiełznania tego chaosu i wprowadzenia w niego porządku (światło latarni), co odzwierciedla próbę uporządkowania własnego życia przez bohatera."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w swoim postępowaniu kieruje się dewizą 'cel uświęca środki'.",
        "answers": [
            { "text": "Boka z 'Chłopców z Placu Broni'", "correct": false },
            { "text": "Balladyna z 'Balladyny'", "correct": true },
            { "text": "Sędzia Soplica z 'Pana Tadeusza'", "correct": false },
            { "text": "Mały Książę z 'Małego Księcia'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego humor w 'Zemście' nazywany jest komizmem charakterów.",
        "answer": ["Jest nazywany komizmem charakterów, ponieważ główne źródło śmiechu leży w skontrastowaniu i zderzeniu ze sobą skrajnie różnych, przerysowanych osobowości: porywczego choleryka (Cześnik) i flegmatycznego, obłudnego hipokryty (Rejent). Ich wady charakteru, wyolbrzymione do granic absurdu, prowadzą do zabawnych sytuacji i dialogów."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym elementem losu Ikara z mitologii i bohatera ballady 'Świtezianka' (Strzelca)?",
        "answers": [
            { "text": "Pragnienie zdobycia bogactwa i władzy.", "correct": false },
            { "text": "Śmierć w wyniku przekroczenia zakazu / złamania przysięgi, podyktowana pychą lub ciekawością.", "correct": true },
            { "text": "Bunt przeciwko bogom.", "correct": false },
            { "text": "Walka w obronie swojej ojczyzny.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd frazeologiczny w zdaniu: 'Wykonał tę pracę na ostatnią chwilę' i zapisz je poprawnie.",
        "answer": ["Błąd: pleonazm, pomieszanie zwrotów 'wykonać na ostatnią chwilę' i 'zostawić na ostatnią chwilę'. Poprawnie: 'Wykonał tę pracę w ostatniej chwili' LUB 'Zostawił tę pracę na ostatnią chwilę'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł w najpełniejszy sposób ukazuje starcie dwóch cywilizacji: pogańskiego, materialistycznego Rzymu i nowego, duchowego świata chrześcijan?",
        "answers": [
            { "text": "'Pan Tadeusz'", "correct": false },
            { "text": "'Quo vadis'", "correct": true },
            { "text": "'Dziady cz. II'", "correct": false },
            { "text": "Mity greckie", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie V' Kochanowski używa zdrobnienia 'gałązka oliwna'. Jaki nastrój i jakie znaczenie buduje ten środek stylistyczny?",
        "answer": ["Zdrobnienie to buduje nastrój czułości, intymności i podkreśla kruchość oraz delikatność opisywanej istoty (Urszulki). Kontrastuje ono z brutalnością aktu zniszczenia, potęgując poczucie straty i niesprawiedliwości. Sprawia, że tragedia staje się bardziej osobista i wzruszająca."]
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