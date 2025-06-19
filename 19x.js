const questions = [
    {
        "type": "closed",
        "question": "W 'Zemście' Papkin, pisząc swój testament, odwołuje się do motywów mitologicznych (Artemida). Jaka jest funkcja tego nawiązania?",
        "answers": [
            { "text": "Dowodzi jego głębokiej znajomości kultury antycznej.", "correct": false },
            { "text": "Jest to komiczna próba nobilitacji własnej postaci i nadania swoim prozaicznym losom wymiaru heroicznego, co podkreśla jego mitomanię.", "correct": true },
            { "text": "Sugeruje, że Klara, do której porównuje Artemidę, jest równie okrutna.", "correct": false },
            { "text": "Ma na celu zaimponowanie Cześnikowi i Rejentowi.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Lis mówi, że jego życie jest monotonne. Co zmienia w nim 'oswojenie' Małego Księcia?",
        "answer": ["'Oswojenie' nadaje jego życiu sens i kolor. Zboże, które wcześniej było dla niego bezużyteczne, teraz będzie mu przypominać o złotych włosach Małego Księcia. Monotonna rzeczywistość zyskuje wartość emocjonalną i symboliczną. To metafora tego, jak relacje z innymi wzbogacają nasze postrzeganie świata."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań wyraz 'tył' jest inną częścią mowy niż w pozostałych?",
        "answers": [
            { "text": "Usiadł w tyle samochodu.", "correct": false },
            { "text": "Wróg zaatakował od tyłu.", "correct": false },
            { "text": "Tył budynku wymagał remontu.", "correct": true },
            { "text": "Cofnij się w tył, proszę.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co łączy postawę moralną Ligii z 'Quo vadis' z postawą Antygony z mitu greckiego?",
        "answers": [
            { "text": "Obie są córkami królewskiego rodu, które walczą o władzę.", "correct": false },
            { "text": "Obie w imię wyższego prawa (boskiego/moralnego) sprzeciwiają się rozkazom ziemskiego władcy (Nerona/Kreona), wykazując się niezwykłą odwagą i gotowością na śmierć.", "correct": true },
            { "text": "Obie zakochują się w mężczyznach, którzy są ich wrogami.", "correct": false },
            { "text": "Obie ponoszą śmierć na arenie cyrkowej.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' zajazd jest anachronicznym, sarmackim sposobem rozwiązywania sporów. Dlaczego Mickiewicz wprowadza go do utworu?",
        "answer": ["Mickiewicz wprowadza zajazd, by pokazać schyłek pewnej epoki. Jest to barwny, ale i destrukcyjny relikt przeszłości. Jednocześnie, poprzez skierowanie energii zajazdu przeciwko wspólnemu wrogowi (Rosjanom), poeta pokazuje, jak dawne wady mogą zostać przekute w nową, patriotyczną cnotę. To symboliczny moment przejścia od prywaty do sprawy narodowej."]
    },
    {
        "type": "closed",
        "question": "Postać Ursusa w 'Quo vadis' symbolizuje:",
        "answers": [
            { "text": "Dziką, nieokiełznaną siłę ludów barbarzyńskich.", "correct": false },
            { "text": "Prostą, niezachwianą wiarę i fizyczną potęgę oddaną na służbę dobru, która jest w stanie pokonać symbol zła i tyranii (tura).", "correct": true },
            { "text": "Głupotę i naiwność pierwszych chrześcijan.", "correct": false },
            { "text": "Bunt przeciwko rzymskiej dominacji.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Podstoliny w 'Zemście' jest postacią komiczną.",
        "answer": ["Jej komizm wynika z jej pragmatyzmu i chwiejności uczuć. Jest 'wdową po trzech mężach', która desperacko szuka czwartego, by zabezpieczyć swój majątek. Jej szybkie przerzucanie 'uczuć' z Cześnika na Wacława, podyktowane czysto finansowymi kalkulacjami, jest źródłem zabawnych sytuacji i demaskuje jej prawdziwe motywacje."]
    },
    {
        "type": "closed",
        "question": "W 'Kamieniach na szaniec', która z postaci jest symbolem 'wiecznego chłopca' – osoby pełnej optymizmu, fantazji i skłonności do brawury?",
        "answers": [
            { "text": "Rudy (Jan Bytnar)", "correct": false },
            { "text": "Alek (Alek Dawidowski)", "correct": true },
            { "text": "Zośka (Tadeusz Zawadzki)", "correct": false },
            { "text": "Leszek Domański", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę ognia w micie o Prometeuszu.",
        "answer": ["Ogień w tym micie ma podwójne znaczenie. Dosłownie jest to narzędzie, które pozwala ludziom gotować, ogrzewać się i bronić. Symbolicznie reprezentuje on iskrę bożą, czyli rozum, wiedzę, cywilizację i postęp techniczny. Jest to dar, który wynosi ludzkość ponad świat zwierząt i pozwala jej kształtować własny los."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd składniowy polegający na niewłaściwym użyciu formy czasownika.",
        "answers": [
            { "text": "Chciałbym, żebyś poszedł ze mną.", "correct": false },
            { "text": "Proszę, abyś wyszedł z pokoju.", "correct": false },
            { "text": "Rozumiem, że masz dużo pracy.", "correct": false },
            { "text": "Oni weszli do klasy i usiedli w ławkach.", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm losu postaci tytułowej z bajki 'O rybaku i rybce' Aleksandra Puszkina.",
        "answer": ["Jej tragizm polega na niepohamowanej chciwości i pysze, która prowadzi ją od biedy do absolutnej władzy, a następnie z powrotem do punktu wyjścia. Jest postacią, która nie potrafi docenić tego, co ma, i zawsze pragnie więcej. Jej upadek jest karą za moralną ślepotę i brak umiaru. To tragizm wiecznego niezaspokojenia."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w najpełniejszy sposób uosabia romantyczny typ bohatera-tyrana, opętanego żądzą władzy.",
        "answers": [
            { "text": "Neron z 'Quo vadis'", "correct": false },
            { "text": "Balladyna z 'Balladyny'", "correct": true },
            { "text": "Rejent Milczek z 'Zemsty'", "correct": false },
            { "text": "Kirkor z 'Balladyny'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Panu Tadeuszu' często opisywane są posiłki i uczty. Jaka jest funkcja tych opisów?",
        "answer": ["Opisy te pełnią funkcję obyczajową i kulturową. Pokazują bogactwo i specyfikę kuchni staropolskiej, a także hierarchię społeczną i zasady 'grzeczności' panujące przy stole. Uczta jest ważnym elementem życia wspólnoty, miejscem spotkań, rozmów i celebracji. Buduje to arkadyjski, uporządkowany obraz świata Soplicowa."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', Duch Przyszłych Świąt jest jedynym duchem, który budzi w Scrooge'u prawdziwy strach. Dlaczego?",
        "answers": [
            { "text": "Ponieważ jest milczący, bezosobowy i nieubłagany, symbolizując ostateczność i nieodwracalność konsekwencji jego dotychczasowego życia.", "correct": true },
            { "text": "Ponieważ grozi mu fizyczną karą, jeśli się nie zmieni.", "correct": false },
            { "text": "Ponieważ pokazuje mu wizję piekła i wiecznego potępienia.", "correct": false },
            { "text": "Ponieważ jest najbrzydszy i najbardziej przerażający z wyglądu.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie zależnej na mowę niezależną: 'Kazała mi, żebym posprzątał swój pokój.'",
        "answer": ["Kazała mi: 'Posprzątaj swój pokój!'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej realizuje model przypowieści (paraboli)?",
        "answers": [
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Mały Książę'", "correct": true },
            { "text": "'Pan Tadeusz'", "correct": false },
            { "text": "'Chłopcy z Placu Broni'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symboliczną funkcję postaci Chilona Chilonidesa w 'Quo vadis'.",
        "answer": ["Chilon symbolizuje ludzką słabość, cynizm i zdolność do zdrady dla zysku. Jest on uosobieniem intelektualisty na usługach zła. Jednak jego postać jest także dowodem na możliwość głębokiej przemiany – w obliczu męczeństwa chrześcijan i własnego cierpienia doznaje wstrząsu moralnego i nawraca się, co pokazuje, że nawet w najbardziej zdeprawowanym człowieku tkwi iskra dobra."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd w użyciu zaimka.",
        "answers": [
            { "text": "Dałem mu książkę, którą polecałeś.", "correct": false },
            { "text": "Poszedłem do niego, aby porozmawiać.", "correct": false },
            { "text": "Usiadłem na krześle, którego noga była złamana.", "correct": false },
            { "text": "Wziąłem parasol, bo jego prognoza zapowiadała deszcz.", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest symboliczna funkcja postaci Telimeny w kontekście polskiego społeczeństwa epoki porozbiorowej?",
        "answer": ["Telimena symbolizuje tę część polskiego społeczeństwa, która uległa fascynacji kulturą obcą (rosyjską, francuską), traktując ją jako wyznacznik nowoczesności i lepszego świata. Reprezentuje kosmopolityzm i odwrócenie się od rodzimej tradycji, co było jednym z dylematów tożsamościowych Polaków w tamtym okresie."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w swoim postępowaniu kieruje się przede wszystkim wiernością i lojalnością wobec przywódcy/pana.",
        "answers": [
            { "text": "Papkin", "correct": false },
            { "text": "Gerwazy", "correct": true },
            { "text": "Wacław", "correct": false },
            { "text": "Hrabia", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega komizm sytuacyjny w 'Zemście'. Podaj jeden przykład.",
        "answer": ["Komizm sytuacyjny polega na tworzeniu zabawnych, nieoczekiwanych i absurdalnych zbiegów okoliczności i wydarzeń. Przykładem jest scena, w której Wacław, syn Rejenta, dobrowolnie oddaje się w 'niewolę' Cześnikowi, swojemu wrogowi, aby być bliżej ukochanej Klary, co Cześnik interpretuje jako akt tchórzostwa i kapitulacji."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym elementem losu Ikara i Balladyny?",
        "answers": [
            { "text": "Dążenie do władzy, które prowadzi do upadku.", "correct": false },
            { "text": "Upadek (dosłowny i moralny) spowodowany przekroczeniem pewnych granic – Ikar przekracza granice wyznaczone przez naturę i ojca, a Balladyna granice moralne i ludzkie.", "correct": true },
            { "text": "Miłość, która staje się przyczyną ich zguby.", "correct": false },
            { "text": "Kara wymierzona przez bogów za nieposłuszeństwo.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd frazeologiczny w zdaniu: 'On zawsze ubiera adidasy do garnituru' i wyjaśnij, na czym on polega.",
        "answer": ["Błąd polega na generalizacji nazwy własnej ('adidasy' od marki Adidas) i używaniu jej jako nazwy gatunkowej (buty sportowe). Chociaż jest to powszechne w języku potocznym, w normie wzorcowej jest to błąd. Poprawnie: 'On zawsze ubiera buty sportowe do garnituru'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł w najpełniejszy sposób ukazuje konflikt pokoleń na tle wielkich przemian historycznych?",
        "answers": [
            { "text": "'Zemsta'", "correct": false },
            { "text": "'Pan Tadeusz'", "correct": true },
            { "text": "'Latarnik'", "correct": false },
            { "text": "'Chłopcy z Placu Broni'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie XIX, czyli Śnie', matka mówi do Kochanowskiego: '[...] ludzkie przygody / Ludzkie noś'. Co oznaczają te słowa?",
        "answer": ["Oznaczają one wezwanie do przyjęcia stoickiej postawy wobec życia. 'Ludzkie przygody' to ludzki los, pełen cierpienia i radości. 'Ludzkie noś' to nakaz, by znosić ten los z godnością, umiarem i odwagą, akceptując, że cierpienie jest nieodłączną częścią bycia człowiekiem. To filozofia akceptacji ludzkiej doli."]
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