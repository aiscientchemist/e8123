const questions = [
    {
        "type": "closed",
        "question": "W 'Panu Tadeuszu' spór o zamek między Soplicami a Horeszkami jest w istocie sporem o:",
        "answers": [
            { "text": "Realną wartość materialną i strategiczne znaczenie budowli.", "correct": false },
            { "text": "Prawa do polowania w okolicznych lasach.", "correct": false },
            { "text": "Symboliczny kapitał – honor, prestiż i historyczną pamięć, gdzie zamek jest materialnym znakiem dawnej chwały i doznanej krzywdy.", "correct": true },
            { "text": "Względy Zosi, która jest wychowanką Sopliców, ale spokrewnioną z Horeszkami.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Pyszałek prosi o oklaski. Co symbolizuje jego postawa i potrzeba ciągłego podziwu?",
        "answer": ["Jego postawa symbolizuje próżność i potrzebę zewnętrznego potwierdzenia własnej wartości. Pokazuje, że jego samoocena jest całkowicie uzależniona od opinii innych. Jest to metafora życia 'na pokaz', w którym człowiek traci kontakt z samym sobą i żyje tylko dla aplauzu, nie potrafiąc nawiązać autentycznej relacji."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym partykuła 'nie' została użyta niepoprawnie z rzeczownikiem odczasownikowym.",
        "answers": [
            { "text": "Niepalenie w miejscach publicznych jest zabronione.", "correct": false },
            { "text": "Jego ciągłe nieprzygotowanie do lekcji denerwowało nauczyciela.", "correct": false },
            { "text": "Nie czytanie lektur skutkuje słabymi ocenami.", "correct": true },
            { "text": "Nieodrabianie pracy domowej jest poważnym uchybieniem.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co jest fundamentalną różnicą między 'zemstą' Gerwazego a 'zemstą' Cześnika Raptusiewicza?",
        "answers": [
            { "text": "Gerwazy pragnie zemsty krwawej, a Cześnik tylko finansowej.", "correct": false },
            { "text": "Zemsta Gerwazego ma wymiar niemal sakralny, jest misją jego życia poświęconą pamięci rodu. Zemsta Cześnika jest impulsywną, choleryczną reakcją na bieżące urazy i ma charakter bardziej osobistej, sąsiedzkiej kłótni.", "correct": true },
            { "text": "Gerwazy planuje zemstę latami, a Cześnik działa spontanicznie.", "correct": false },
            { "text": "Gerwazy odnosi sukces w swojej zemście, a Cześnik ponosi klęskę.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest funkcja komizmu w satyrze 'Żona modna' Ignacego Krasickiego?",
        "answer": ["Komizm nie służy tu tylko rozrywce. Jego główną funkcją jest demaskacja i ośmieszenie wady, jaką jest bezmyślne naśladowanie obcych wzorców (sarmacki snobizm). Poprzez wyolbrzymienie i karykaturę zachowań tytułowej bohaterki, autor wywołuje śmiech, który ma prowadzić do krytycznej refleksji nad opisywanym zjawiskiem."]
    },
    {
        "type": "closed",
        "question": "W 'Hobbicie', mapa i klucz, które Gandalf przekazuje Thorinowi, są nie tylko rekwizytami. Symbolizują one:",
        "answers": [
            { "text": "Utracone dziedzictwo i wiedzę, która jest kluczem do jego odzyskania.", "correct": true },
            { "text": "Bogactwo i władzę, które czekają na krasnoludy.", "correct": false },
            { "text": "Magiczne przedmioty, które zapewnią im zwycięstwo nad smokiem.", "correct": false },
            { "text": "Podstęp, który ma zwabić krasnoludy w pułapkę.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postawę Alka, Rudego i Zośki z 'Kamieni na szaniec' można określić jako 'heroizm dnia codziennego'.",
        "answer": ["Można ją tak określić, ponieważ ich bohaterstwo nie ograniczało się do spektakularnych akcji zbrojnych. Przejawiało się ono również w codziennej, systematycznej pracy nad sobą (nauka, samokształcenie), w drobnych aktach sabotażu, w podtrzymywaniu ducha w grupie i w etyce pracy. To dowód, że patriotyzm był dla nich postawą życiową, a nie tylko chwilowym zrywem."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich najpełniej uosabia konflikt między obowiązkiem wobec ojczyzny a prawem do osobistego szczęścia.",
        "answers": [
            { "text": "Marcin Borowicz z 'Syzyfowych prac'", "correct": false },
            { "text": "Jacek Soplica z 'Pana Tadeusza'", "correct": true },
            { "text": "Ebenezer Scrooge z 'Opowieści wigilijnej'", "correct": false },
            { "text": "Balladyna z 'Balladyny'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Zemście' pojawia się postać mularza (murarza). Jaka jest jego rola w scenie naprawiania muru?",
        "answer": ["Mularz pełni rolę 'człowieka z ludu', prostego wykonawcy absurdalnych poleceń swoich panów. Jego postawa, pełna rezygnacji i chęci uniknięcia kłopotów ('A niechaj się biją, a bodaj pozabijali'), jest komicznym komentarzem do konfliktu szlachty. Reprezentuje on zdrowy rozsądek i dystans wobec niezrozumiałych dla niego, pańskich fanaberii."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań imiesłów został użyty w niepoprawnej formie?",
        "answers": [
            { "text": "Zobaczywszy dym, natychmiast wezwał straż pożarną.", "correct": false },
            { "text": "Dziecko, płaczące od godziny, w końcu zasnęło.", "correct": false },
            { "text": "List, napisany wczoraj, leżał na biurku.", "correct": false },
            { "text": "Wziąść sprawy w swoje ręce to była dobra decyzja.", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm postaci Konrada Wallenroda, bohatera innego utworu Mickiewicza, i porównaj go z tragizmem Jacka Soplicy.",
        "answer": ["Tragizm Konrada Wallenroda polega na konieczności wyboru między honorem rycerskim a obowiązkiem patriotycznym, co zmusza go do walki podstępem i zdrady, niszcząc jego psychikę. Jacek Soplica również przeżywa tragizm (wina i pokuta), ale jego droga prowadzi do odkupienia i moralnego zwycięstwa. Wallenrod ponosi klęskę na obu polach – niszczy zakon, ale i siebie, nie znajdując ukojenia."]
    },
    {
        "type": "closed",
        "question": "Zarówno 'Dziady część II', jak i 'Balladyna' wykorzystują elementy fantastyczne. Kluczowa różnica w ich funkcji polega na tym, że:",
        "answers": [
            { "text": "W 'Dziadach' świat fantastyczny (duchy) jest integralną częścią ludowych wierzeń i porządku moralnego; w 'Balladynie' (Goplana) jest on siłą ingerującą w świat ludzi i uruchamiającą tragedię.", "correct": true },
            { "text": "Duchy w 'Dziadach' są dobre, a Goplana w 'Balladynie' jest zła.", "correct": false },
            { "text": "Fantastyka w 'Dziadach' służy budowaniu nastroju grozy, a w 'Balladynie' – komizmu.", "correct": false },
            { "text": "W 'Dziadach' postacie fantastyczne są niewidoczne, a w 'Balladynie' wchodzą w interakcje z bohaterami.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę ogrodu w 'Panu Tadeuszu', którym opiekuje się Zosia. Czym różni się on od 'Tajemniczego ogrodu'?",
        "answer": ["Ogród Zosi jest symbolem harmonii, porządku, prostoty i polskości. Jest to przestrzeń swojska, zadbana i użyteczna, odzwierciedlająca cnoty jego opiekunki. 'Tajemniczy ogród', w przeciwieństwie do niego, jest na początku symbolem tajemnicy, dzikości, zaniedbania i traumy, a dopiero praca bohaterów przywraca mu życie i harmonię."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej' łańcuchy, które dźwiga duch Marleya, są symbolem:",
        "answers": [
            { "text": "Kary za popełnione przestępstwa, za które nie został osądzony za życia.", "correct": false },
            { "text": "Materialnym odzwierciedleniem jego win – chciwości, obojętności i braku ludzkich uczuć, które sam sobie 'ukuł' za życia.", "correct": true },
            { "text": "Bogactwa, które zgromadził i którego nie może zabrać ze sobą w zaświaty.", "correct": false },
            { "text": "Więzów, które łączą go ze światem żywych i nie pozwalają mu odejść.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego słowa 'pójść' i 'iść' nie są w każdym kontekście synonimami. Podaj przykład zdania, w którym nie można ich użyć zamiennie.",
        "answer": ["Nie są synonimami, ponieważ 'pójść' jest czasownikiem dokonanym (oznacza jednorazowy zamiar lub początek czynności), a 'iść' jest niedokonany (oznacza czynność trwającą). Przykład: 'Muszę już iść' (poprawne). Nie można powiedzieć: 'Muszę już pójść', bo 'już' wskazuje na trwanie. Można natomiast powiedzieć: 'Postanowiłem pójść do domu'."]
    },
    {
        "type": "closed",
        "question": "Który z poniższych cytatów z lektur najpełniej wyraża romantyczną ideę wyższości uczucia i intuicji nad rozumem?",
        "answers": [
            { "text": "'Miej serce i patrzaj w serce!' ('Romantyczność' A. Mickiewicza)", "correct": true },
            { "text": "'Jeśli nie chcesz mojej zguby, / Krokodyla daj mi, luby!' ('Zemsta' A. Fredry)", "correct": false },
            { "text": "'Człowiek - to brzmi dumnie!' (M. Gorki, spoza kanonu)", "correct": false },
            { "text": "'A niechaj narodowie wżdy postronni znają, / Iż Polacy nie gęsi, iż swój język mają.' (M. Rej)", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Syzyfowych pracach' Bernard Zygier jest postacią niemal symboliczną. Co symbolizuje jego przybycie do klerykowskiego gimnazjum?",
        "answer": ["Jego przybycie symbolizuje 'powiew wolności' i nadejście świadomego, niezłomnego oporu. Jest on jak 'iskra rzucona na proch' – jego postawa i wiedza o polskiej literaturze budzi uśpioną świadomość narodową w kolegach, zwłaszcza w Borowiczu. Symbolizuje pamięć historyczną i ciągłość walki o polskość."]
    },
    {
        "type": "closed",
        "question": "Zarówno w 'Reducie Ordona', jak i w micie o Prometeuszu, pojawia się motyw buntu przeciwko potężniejszej sile. Kluczowa różnica polega na tym, że:",
        "answers": [
            { "text": "Bunt Ordona jest motywowany patriotyzmem, a bunt Prometeusza miłością do ludzkości.", "correct": true },
            { "text": "Ordon ponosi klęskę, a Prometeusz odnosi zwycięstwo.", "correct": false },
            { "text": "Bunt Ordona jest aktem militarnym, a Prometeusza – aktem podstępu.", "correct": false },
            { "text": "Ordon walczy z ludzkim tyranem, a Prometeusz z bogami.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż, w jaki sposób tytuł 'Quo vadis' odnosi się do duchowej podróży Marka Winicjusza.",
        "answer": ["Tytułowe pytanie 'Quo vadis, Domine?' (Dokąd idziesz, Panie?) zadane przez Piotra Apostoła jest pytaniem o kierunek drogi. W wymiarze symbolicznym, odnosi się ono do wewnętrznej podróży Winicjusza, który 'idzie' od pogańskiego Rzymu (świata siły i rozpusty) do chrześcijaństwa (świata miłości i ducha). Jest to pytanie o jego życiową drogę i ostateczny cel."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym orzeczenie imienne zostało użyte niepoprawnie.",
        "answers": [
            { "text": "Mój brat został w przyszłości lekarzem.", "correct": true },
            { "text": "On jest bardzo dobrym uczniem.", "correct": false },
            { "text": "Po latach pracy stał się ekspertem w swojej dziedzinie.", "correct": false },
            { "text": "Ta decyzja okazała się słuszna.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj scenę spowiedzi Jacka Soplicy. Dlaczego wyznaje on swoje winy właśnie Gerwazemu, swojemu największemu wrogowi?",
        "answer": ["Wyznaje winy Gerwazemu, ponieważ jest on strażnikiem pamięci Horeszków i symbolem doznanej przez nich krzywdy. Uzyskanie przebaczenia od największego wroga ma najwyższą wartość moralną. To akt ostatecznej pokory i zadośćuczynienia, który zamyka prywatny konflikt i pozwala Soplicy umrzeć w pokoju, z czystym sumieniem, jako bohater narodowy."]
    },
    {
        "type": "closed",
        "question": "Która z postaci literackich w najpełniejszy sposób uosabia ideał 'człowieka poczciwego' – szlachcica-ziemianina, żyjącego w zgodzie z naturą i rytmem pór roku?",
        "answers": [
            { "text": "Rejent Milczek", "correct": false },
            { "text": "Sędzia Soplica", "correct": true },
            { "text": "Cześnik Raptusiewicz", "correct": false },
            { "text": "Hrabia Horeszko", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie X' Kochanowski pyta: 'Gdzieśkolwiek jest, jeśliś jest'. Co wyraża ta wątpliwość zawarta w słowach 'jeśliś jest'?",
        "answer": ["Wyraża ona najgłębszy kryzys wiary i światopoglądu poety. Podmiot liryczny, zrozpaczony brakiem odpowiedzi, zaczyna wątpić nie tylko w istnienie konkretnego miejsca pobytu córki (niebo chrześcijańskie, wyspy szczęśliwe), ale w samo istnienie jakiejkolwiek formy życia pośmiertnego. To szczyt jego bólu i zwątpienia."]
    },
    {
        "type": "closed",
        "question": "Wskaż, które z poniższych zdań jest zdaniem bezpodmiotowym.",
        "answers": [
            { "text": "Nagle błysnęło i zagrzmiało.", "correct": true },
            { "text": "Ktoś głośno rozmawiał na korytarzu.", "correct": false },
            { "text": "Wszyscy uczniowie wyszli ze szkoły.", "correct": false },
            { "text": "Oni nie wiedzieli, co robić.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Papkina z 'Zemsty' jest jednocześnie postacią komiczną i tragiczną.",
        "answer": ["Jest komiczny ze względu na kontrast między jego buńczucznymi opowieściami a rzeczywistym tchórzostwem i biedą. Jego tragizm jest subtelny i polega na samotności, desperackiej potrzebie akceptacji i świadomości bycia pogardzanym. Scena, w której wierzy, że został otruty, ukazuje jego żałosne i godne współczucia położenie."]
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