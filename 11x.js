const questions = [
    {
        "type": "closed",
        "question": "W 'Zemście', pragmatyzm Wacława, który próbuje różnych strategii, by zdobyć Klarę (np. udając jeńca), jest przedstawiony jako:",
        "answers": [
            { "text": "Postawa godna potępienia, ponieważ opiera się na kłamstwie.", "correct": false },
            { "text": "Komiczna nieudolność, która nie przynosi żadnych rezultatów.", "correct": false },
            { "text": "Nowoczesna, oświeceniowa alternatywa dla bezproduktywnego, sarmackiego uporu Cześnika i Rejenta.", "correct": true },
            { "text": "Dowód na jego nieszczerą miłość do Klary.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Pyszałek słyszy tylko komplementy. Co symbolizuje ta 'selektywna głuchota' w kontekście ludzkich relacji?",
        "answer": ["Symbolizuje ona skrajny egocentryzm i zamknięcie się na prawdziwy dialog. Osoba taka, skupiona wyłącznie na sobie i potrzebie bycia podziwianą, nie jest w stanie usłyszeć ani przyjąć niczego innego – ani krytyki, ani szczerej opinii, ani problemów drugiej osoby. To metafora komunikacyjnej ściany, którą buduje próżność."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych wyrazów przedrostek 'prze-' ma inne znaczenie niż w pozostałych (oznacza ruch przez coś, na drugą stronę)?",
        "answers": [
            { "text": "przebudować", "correct": false },
            { "text": "przemalować", "correct": false },
            { "text": "przeskoczyć", "correct": true },
            { "text": "przerobić", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co jest wspólną cechą podróży Bilba Bagginsa z 'Hobbita' i wędrówki Skawińskiego z 'Latarnika'?",
        "answers": [
            { "text": "Obie podróże są motywowane chęcią zdobycia bogactwa.", "correct": false },
            { "text": "Obie są formą 'podróży inicjacyjnej', która prowadzi bohatera od stanu spokoju i nieświadomości do samopoznania, choć w przypadku Bilba jest to świadoma wyprawa, a w przypadku Skawińskiego – wieloletnia tułaczka.", "correct": true },
            { "text": "Obie kończą się szczęśliwym powrotem do domu i spokojnym życiem.", "correct": false },
            { "text": "Obie są wynikiem rozkazu potężnego władcy.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Zemście' Rejent, planując ślub syna z Podstoliną, mówi: 'Ma grunt, pewny...'. Co to określenie demaskuje w jego systemie wartości?",
        "answer": ["Demaskuje to jego skrajny materializm i postrzeganie małżeństwa jako transakcji biznesowej. 'Grunt' (majątek ziemski) jest dla niego jedyną realną i pewną wartością, ważniejszą niż uczucia, szczęście syna czy względy moralne. To kwintesencja jego chciwości i wyrachowania."]
    },
    {
        "type": "closed",
        "question": "Postać Zosi w 'Panu Tadeuszu' jest często postrzegana jako ucieleśnienie ideału. Czego jest ona symbolem?",
        "answers": [
            { "text": "Zbuntowanej, nowoczesnej kobiety, która walczy o swoje prawa.", "correct": false },
            { "text": "Przyszłego pokolenia Polaków – wychowanego w zgodzie z naturą i polską tradycją, prostego, szczerego i gotowego do budowania nowej Polski.", "correct": true },
            { "text": "Sarmackiej damy, biegłej w sztuce konwersacji i flirtu.", "correct": false },
            { "text": "Tragicznej ofiary konfliktu między rodami.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Chłopcach z Placu Broni' Gereb zdradza swoich przyjaciół, ale później próbuje odpokutować swoją winę. Jaka jest funkcja jego postaci w utworze?",
        "answer": ["Jego postać pokazuje, że człowiek może popełnić błąd, ale ma również szansę na rehabilitację i przebaczenie. Jest on kontrapunktem dla jednoznacznie honorowego Nemeczka. Jego historia wprowadza do świata powieści ważny motyw winy, skruchy i trudnej drogi do odzyskania zaufania wspólnoty."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej realizuje model 'powieści o dojrzewaniu' (tzw. Bildungsroman)?",
        "answers": [
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Syzyfowe prace'", "correct": true },
            { "text": "'Latarnik'", "correct": false },
            { "text": "'Quo vadis'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Quo vadis' Petroniusz umiera, wydając ucztę i czytając szyderczy list do Nerona. Co symbolizuje jego samobójstwo?",
        "answer": ["Jego samobójstwo jest ostatnim aktem estetycznym i manifestacją wolności. W świecie, w którym zapanowała brutalna siła i zły gust Nerona, Petroniusz wybiera śmierć na własnych warunkach, czyniąc z niej dzieło sztuki. To jego ostateczne zwycięstwo nad tyranią – nie pozwala, by tyran zadecydował o sposobie jego odejścia."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym rzeczownik 'prawo' ma inne znaczenie niż w pozostałych.",
        "answers": [
            { "text": "Każdy obywatel musi przestrzegać prawa.", "correct": false },
            { "text": "Skręć w prawo na następnym skrzyżowaniu.", "correct": true },
            { "text": "Studiował prawo na uniwersytecie.", "correct": false },
            { "text": "Miał prawo do obrony w sądzie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm losu tytułowej bohaterki ballady 'Świtezianka'.",
        "answer": ["Jej tragizm polega na konflikcie między miłością a obowiązkiem. Jako strażniczka moralnego prawa musi ukarać ukochanego za złamanie przysięgi, co jest równoznaczne ze skazaniem samej siebie na wieczną samotność. Jest jednocześnie ofiarą zdrady i sędzią, który musi wykonać wyrok, niszcząc własne szczęście."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w najmniejszym stopniu podlega przemianie wewnętrznej w toku akcji utworu.",
        "answers": [
            { "text": "Jacek Soplica", "correct": false },
            { "text": "Ebenezer Scrooge", "correct": false },
            { "text": "Marcin Borowicz", "correct": false },
            { "text": "Gerwazy Rębajło (aż do samego końca)", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' Tadeusz myli Zosię z Telimeną. Jaka jest funkcja komiczna i symboliczna tej pomyłki?",
        "answer": ["Funkcja komiczna polega na zabawnym nieporozumieniu i zakłopotaniu bohatera. Funkcja symboliczna polega na skontrastowaniu dwóch modeli kobiecości: naturalnej, niewinnej i swojskiej (Zosia) z wytworną, doświadczoną i kosmopolityczną (Telimena). Pomyłka Tadeusza jest symbolicznym wahaniem między tymi dwoma światami."]
    },
    {
        "type": "closed",
        "question": "W 'Dziadach części II' duchy przybywają na obrzęd, ponieważ:",
        "answers": [
            { "text": "Chcą zemścić się na żyjących za doznane krzywdy.", "correct": false },
            { "text": "Są przywoływane siłą przez zaklęcia Guślarza.", "correct": false },
            { "text": "Potrzebują pomocy żywych (modlitwy, ofiary), aby zakończyć swoją pośmiertną pokutę i osiągnąć zbawienie.", "correct": true },
            { "text": "Chcą ostrzec żyjących przed niebezpieczeństwami.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Utwórz zdanie z imiesłowowym równoważnikiem zdania, przekształcając wypowiedzenie: 'Gdy Bilbo znalazł pierścień, nie wiedział jeszcze o jego mocy.'",
        "answer": ["Znalazłszy pierścień, Bilbo nie wiedział jeszcze o jego mocy."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zdań jest przykładem ironii werbalnej (słownej)?",
        "answers": [
            { "text": "'Genialny' pomysł, żeby wyjść na deszcz bez parasola!", "correct": true },
            { "text": "Po latach ciężkiej pracy wreszcie osiągnął sukces.", "correct": false },
            { "text": "Strażak, który panicznie bał się ognia, zginął w pożarze.", "correct": false },
            { "text": "To bardzo smutna historia.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę pustyni w 'Małym Księciu'. Co ona reprezentuje?",
        "answer": ["Pustynia symbolizuje samotność, pustkę egzystencjalną, ale także miejsce oczyszczenia i prawdziwego spotkania. To w pustce, z dala od zgiełku 'poważnych spraw', możliwe jest nawiązanie głębokiej relacji (z Lisem, z Pilotem) i odkrycie najważniejszych prawd o życiu, przyjaźni i miłości."]
    },
    {
        "type": "closed",
        "question": "W 'Kamieniach na szaniec', akcja 'pod Arsenałem' jest momentem przełomowym, ponieważ:",
        "answers": [
            { "text": "Była to pierwsza duża akcja zbrojna Grup Szturmowych.", "correct": false },
            { "text": "Pokazała siłę i determinację polskiego podziemia, ale jednocześnie brutalnie uświadomiła bohaterom cenę walki – śmierć i cierpienie najbliższych przyjaciół.", "correct": true },
            { "text": "Doprowadziła do aresztowania i śmierci Alka i Zośki.", "correct": false },
            { "text": "Była to jedyna w pełni udana akcja odbicia więźniów w okupowanej Warszawie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego 'Treny' Kochanowskiego można uznać za rodzaj psychologicznego autoportretu poety.",
        "answer": ["Można je tak uznać, ponieważ cykl ten jest niezwykle szczerym i dogłębnym zapisem przeżyć wewnętrznych autora. Kochanowski nie tylko opłakuje córkę, ale przede wszystkim analizuje własny ból, kryzys wiary, bunt, zwątpienie i wreszcie próbę odnalezienia pocieszenia. To studium psychiki człowieka renesansu w konfrontacji z tragedią."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym zaimek względny został użyty niepoprawnie.",
        "answers": [
            { "text": "To jest film, który wczoraj oglądaliśmy.", "correct": false },
            { "text": "Człowiek, co to zrobił, musi być bardzo silny.", "correct": true },
            { "text": "Miejsce, w którym się spotkamy, jest bardzo ładne.", "correct": false },
            { "text": "Pamiętam dzień, kiedy się poznaliśmy.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest rola postaci Protazego, woźnego Cześnika, w 'Zemście'?",
        "answer": ["Protazy, podobnie jak Gerwazy dla Horeszków, jest strażnikiem pamięci i praw rodu Sopliców do zamku. Jest postacią wierną, ale i komiczną w swojej powadze i pedantycznym przywiązaniu do prawa ('w trzech aktach'). Jego spory z Gerwazym są miniaturowym odbiciem głównego konfliktu, dodając utworowi komizmu."]
    },
    {
        "type": "closed",
        "question": "Co jest fundamentalną różnicą między miłością w 'Świteziance' a miłością w 'Zemście' (Klara i Wacław)?",
        "answers": [
            { "text": "Miłość w 'Świteziance' jest uczuciem tragicznym i absolutnym, poddanym próbie wierności, podczas gdy miłość w 'Zemście' jest uczuciem z elementami sentymentalno-pragmatycznymi, które musi pokonać realne, komiczne przeszkody.", "correct": true },
            { "text": "W 'Świteziance' miłość jest nieszczęśliwa, a w 'Zemście' szczęśliwa.", "correct": false },
            { "text": "Miłość w 'Świteziance' jest platoniczna, a w 'Zemście' zmysłowa.", "correct": false },
            { "text": "W 'Świteziance' kochankowie pochodzą z różnych światów, a w 'Zemście' z tej samej warstwy społecznej.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd frazeologiczny w zdaniu: 'Odniósł w życiu duży sukces' i zapisz je poprawnie.",
        "answer": ["Błąd: pleonazm, pomieszanie związków 'odnieść zwycięstwo' i 'osiągnąć sukces'. Poprawnie: 'Osiągnął w życiu duży sukces' lub 'Odniósł w życiu duży triumf'."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', głównym celem wizyty Ducha Przeszłych Wigilii jest:",
        "answers": [
            { "text": "Ukaranie Scrooge'a za jego błędy z przeszłości.", "correct": false },
            { "text": "Pokazanie mu, w którym momencie swojego życia porzucił miłość i empatię na rzecz pieniędzy, aby uświadomić mu źródło jego obecnego nieszczęścia.", "correct": true },
            { "text": "Wzbudzenie w nim tęsknoty za utraconą młodością.", "correct": false },
            { "text": "Sprawienie, by poczuł się winny za śmierć swojej siostry.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę imienia Nemeczek w 'Chłopcach z Placu Broni'.",
        "answer": ["Imię to pochodzi od węgierskiego słowa oznaczającego 'Niemiec', ale w kontekście utworu kojarzy się z kimś małym, niepozornym ('-czek' to zdrobnienie). Symbolizuje on 'szarego człowieka', najmniejszego i najsłabszego członka społeczności, który jednak okazuje się postacią o największym harcie ducha i poczuciu honoru. To symbol siły tkwiącej w pozornie słabych."]
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