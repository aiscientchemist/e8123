const questions = [
    {
        "type": "closed",
        "question": "Jaka jest fundamentalna różnica w podejściu do życia między Sędzią Soplicą a Hrabią Horeszką?",
        "answers": [
            { "text": "Sędzia ceni życie praktyczne, zgodne z rytmem natury i tradycji, a Hrabia ceni życie jako estetyczne doświadczenie, poszukując w nim malowniczości i romantycznych uniesień.", "correct": true },
            { "text": "Sędzia jest patriotą, a Hrabia kosmopolitą.", "correct": false },
            { "text": "Sędzia jest zwolennikiem pracy, a Hrabia preferuje bezczynność.", "correct": false },
            { "text": "Sędzia jest ubogi, a Hrabia bardzo bogaty.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' biznesmen liczy gwiazdy, twierdząc, że je 'posiada', bo 'nikt przed nim o tym nie pomyślał'. Co autor krytykuje poprzez tę postać?",
        "answer": ["Autor krytykuje absurdalną logikę kapitalizmu i chciwości, w której posiadanie sprowadza się do abstrakcyjnego aktu zawłaszczenia (zapisu na papierze), bez realnego pożytku czy odpowiedzialności. Ośmiesza ideę, że można 'posiadać' coś, co jest wspólnym, nieograniczonym dobrem, jak gwiazdy."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań wyraz 'obok' pełni funkcję inną niż w pozostałych (jest przysłówkiem, a nie przyimkiem)?",
        "answers": [
            { "text": "Mój dom stoi obok poczty.", "correct": false },
            { "text": "Przechodziłem właśnie obok, gdy to się stało.", "correct": true },
            { "text": "Postaw ten fotel obok kanapy.", "correct": false },
            { "text": "Siedziałem obok niego w kinie.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co łączy sposób śmierci Ebenezera Scrooge'a (w wizji Ducha Przyszłych Świąt) ze sposobem śmierci Widma Złego Pana z 'Dziadów cz. II'?",
        "answers": [
            { "text": "Obaj umierają w wyniku choroby zakaźnej.", "correct": false },
            { "text": "Ich śmierć jest samotna, pozbawiona żalu i współczucia ze strony innych, co jest konsekwencją ich egoistycznego życia i braku więzi międzyludzkich.", "correct": true },
            { "text": "Obaj zostają zamordowani przez swoje ofiary.", "correct": false },
            { "text": "Obaj umierają w wielkim bogactwie, którego nie mogą zabrać ze sobą.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Robak organizuje zajazd na Soplicowo pod pretekstem walki z Moskalami. Jaki jest jego prawdziwy, ukryty cel polityczny?",
        "answer": ["Jego prawdziwym celem jest sprowokowanie lokalnego powstania na Litwie, które miałoby zbiec się w czasie z wejściem wojsk Napoleona. Chce wykorzystać energię i zapał szlachty, kierując ich prywatne spory ku wspólnej walce z zaborcą. Zajazd jest więc dla niego politycznym manewrem."]
    },
    {
        "type": "closed",
        "question": "Postać Nemeczka z 'Chłopców z Placu Broni' jest postacią tragiczną, ponieważ:",
        "answers": [
            { "text": "Jest zdradzany przez swoich najlepszych przyjaciół.", "correct": false },
            { "text": "Jego największe poświęcenie i heroizm zostają początkowo niezauważone i niesłusznie ocenione (wpis do czarnej księgi), a ostateczne uznanie przychodzi zbyt późno, w obliczu śmierci.", "correct": true },
            { "text": "Przegrywa decydującą bitwę o Plac Broni.", "correct": false },
            { "text": "Jest zbyt słaby fizycznie, by sprostać wymaganiom wojskowego życia.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Rejenta Milczka jest bardziej niebezpieczna i odpychająca niż postać Cześnika Raptusiewicza.",
        "answer": ["Rejent jest bardziej niebezpieczny, ponieważ jego zło jest ukryte pod maską pobożności i łagodności. Działa w sposób przemyślany, chłodny i wyrachowany, posługując się prawem jako narzędziem zemsty. Cześnik jest porywczy i szczery w swojej złości, przez co jego działania są bardziej przewidywalne i mniej podstępne."]
    },
    {
        "type": "closed",
        "question": "W 'Kamieniach na szaniec', które z poniższych stwierdzeń najlepiej oddaje sens tytułowej metafory?",
        "answers": [
            { "text": "Życie młodych bohaterów było twarde i ciężkie jak kamienie.", "correct": false },
            { "text": "Ich czyny i ofiara są kolejnymi 'kamieniami' rzuconymi na 'szaniec' – symboliczną budowlę niepodległej Polski, kontynuacją dzieła poprzednich pokoleń.", "correct": true },
            { "text": "Bohaterowie używali kamieni jako broni w walce z okupantem.", "correct": false },
            { "text": "Ich serca były twarde jak kamień w obliczu okrucieństwa wojny.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę mitu o Dedalu i Ikarze w kontekście relacji między pokoleniami.",
        "answer": ["Mit ten symbolizuje odwieczny konflikt między doświadczeniem i rozwagą starszego pokolenia (Dedal) a porywczością, entuzjazmem i brakiem pokory młodego pokolenia (Ikar). Jest to przestroga przed ignorowaniem rad starszych, ale także obraz nieuchronnego dążenia młodości do przekraczania granic i testowania własnych możliwości."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd polegający na niepoprawnym połączeniu przyimka z rzeczownikiem.",
        "answers": [
            { "text": "Idę na pocztę, żeby wysłać list.", "correct": false },
            { "text": "Wziąłem ze sobą sweter na wszelki wypadek.", "correct": false },
            { "text": "Poszedłem do sklepu po bułki.", "correct": false },
            { "text": "W dniu wczorajszym odbyła się konferencja.", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm wyboru, przed którym staje bohater ballady 'Świtezianka'.",
        "answer": ["Jego tragizm polega na konflikcie między wiernością złożonej przysiędze a ludzką ciekawością i pokusą. Jest on rozdarty między miłością do ziemskiej dziewczyny a tajemniczym pięknem Świtezianki. Wybierając pogoń za zjawą, łamie świętą przysięgę, co nieuchronnie prowadzi go do kary i śmierci. To konflikt między lojalnością a pokusą."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w najpełniejszy sposób uosabia romantyczny indywidualizm i bunt przeciwko światu.",
        "answers": [
            { "text": "Sędzia Soplica", "correct": false },
            { "text": "Boka z 'Chłopców z Placu Broni'", "correct": false },
            { "text": "Giaur (bohater innego utworu Byrona, ale archetyp obecny w epoce)", "correct": true },
            { "text": "Rejent Milczek", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Sędzia wygłasza naukę o grzeczności. Co, według niego, jest największym zagrożeniem dla tej grzeczności?",
        "answer": ["Największym zagrożeniem jest, według Sędziego, bezkrytyczne naśladowanie obcych, zagranicznych mód i obyczajów (głównie francuskich), które prowadzi do zaniku tradycyjnych, polskich form zachowania. Krytykuje on porzucanie własnej kultury na rzecz powierzchownej i sztucznej 'cywilizacji' z Zachodu."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', postać Tiny Tima (małego, chorego synka Boba Cratchita) pełni w utworze funkcję:",
        "answers": [
            { "text": "Głównego bohatera, którego losy śledzimy.", "correct": false },
            { "text": "Symbolu niewinnego cierpienia i ofiary bezdusznego systemu społecznego, a jego potencjalna śmierć ma wstrząsnąć sumieniem Scrooge'a.", "correct": true },
            { "text": "Postaci komicznej, która rozładowuje napięcie.", "correct": false },
            { "text": "Przewodnika, który oprowadza Scrooge'a po Londynie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie zależnej na mowę niezależną: 'Zapytała mnie, czy nie chciałbym pójść z nią do teatru.'",
        "answer": ["Zapytała mnie: 'Czy nie chciałbyś pójść ze mną do teatru?'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej realizuje model powieści historycznej według wzoru Waltera Scotta, łącząc losy fikcyjnych bohaterów z autentycznym tłem historycznym?",
        "answers": [
            { "text": "'Syzyfowe prace'", "correct": false },
            { "text": "'Quo vadis'", "correct": true },
            { "text": "'Chłopcy z Placu Broni'", "correct": false },
            { "text": "'Mały Książę'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'pola' w przypowieści o siewcy.",
        "answer": ["'Pole' w tej przypowieści symbolizuje świat, w którym głoszona jest nauka (Słowo Boże). Różne rodzaje gleby w tym polu reprezentują różne typy ludzi i ich postawy wobec tej nauki. Pole jest więc przestrzenią duchowej 'uprawy', gdzie każdy człowiek ma szansę przyjąć 'ziarno' i wydać plon."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym imiesłów przymiotnikowy został użyty niepoprawnie.",
        "answers": [
            { "text": "To jest list piszący przez moją siostrę.", "correct": true },
            { "text": "Dziecko śpiące w kołysce wyglądało uroczo.", "correct": false },
            { "text": "Przeczytałem książkę poleconą mi przez kolegę.", "correct": false },
            { "text": "Zepsuty zegar wciąż stał na kominku.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest symboliczna funkcja postaci Maćka nad Maćkami w 'Panu Tadeuszu'?",
        "answer": ["Maciek nad Maćkami jest symbolem starej, sarmackiej Polski – uosobieniem mądrości ludowej, doświadczenia, przywiązania do tradycji i nieufności wobec nowinek i obcych wpływów (nawet Napoleona). Jest on żywą historią i moralnym autorytetem, którego opinia jest niezwykle ceniona w społeczności."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w swoim postępowaniu kieruje się przede wszystkim chciwością.",
        "answers": [
            { "text": "Cześnik Raptusiewicz", "correct": false },
            { "text": "Rejent Milczek", "correct": true },
            { "text": "Gerwazy Rębajło", "correct": false },
            { "text": "Sędzia Soplica", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega komizm językowy w postaci Papkina.",
        "answer": ["Jego komizm językowy polega na używaniu kwiecistego, napuszonego stylu, pełnego wyszukanych, często obcojęzycznych zwrotów, który zupełnie nie przystaje do jego tchórzliwego charakteru i prozaicznych sytuacji. Stara się mówić jak rycerz z romansu, co w zderzeniu z jego prawdziwą naturą tworzy absurdalny i komiczny efekt. Przykładem jest jego opis Artemidy czy opowieść o walce."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym elementem losu Prometeusza i Chrystusa z przypowieści ewangelicznych?",
        "answers": [
            { "text": "Niewinna ofiara poniesiona z miłości do ludzkości, która ma przynieść jej dobro (ogień / zbawienie) i która wiąże się z ogromnym cierpieniem.", "correct": true },
            { "text": "Walka z tyranem w obronie swojego ludu.", "correct": false },
            { "text": "Dar czynienia cudów i panowania nad siłami natury.", "correct": false },
            { "text": "Zgromadzenie wokół siebie dwunastu wiernych uczniów.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd frazeologiczny w zdaniu: 'Oni odgrywają w tym projekcie pierwsze skrzypce' i zapisz je poprawnie.",
        "answer": ["Błąd: niepoprawna forma czasownika. Poprawny związek frazeologiczny to 'grać pierwsze skrzypce'. Poprawnie: 'Oni grają w tym projekcie pierwsze skrzypce'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł w najpełniejszy sposób ukazuje problem rusyfikacji polskiej młodzieży w XIX wieku?",
        "answers": [
            { "text": "'Pan Tadeusz'", "correct": false },
            { "text": "'Syzyfowe prace'", "correct": true },
            { "text": "'Reduta Ordona'", "correct": false },
            { "text": "'Latarnik'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie XIX, czyli Śnie', Kochanowski odzyskuje spokój. Na jakiej filozoficznej podstawie opiera się to ostateczne pocieszenie?",
        "answer": ["Ostateczne pocieszenie opiera się na syntezie filozofii chrześcijańskiej i stoickiej. Matka przekonuje go, że Urszulka jest szczęśliwa w niebie (chrześcijaństwo) i że on, jako człowiek, musi znosić los ze spokojem i godnością, akceptując ludzką dolę ('ludzkie przygody, ludzkie noś'). To wezwanie do stoickiej cnoty wytrwałości."]
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