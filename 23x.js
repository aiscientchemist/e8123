const questions =
    [
        {
            "type": "closed",
            "question": "W 'Zemście' Rejent Milczek często powtarza sentencję: 'Niech się dzieje wola nieba, / Z nią się zawsze zgadzać trzeba'. W kontekście jego działań, ta dewiza jest przykładem:",
            "answers": [
                { "text": "Głębokiej, autentycznej pobożności i zgody na los.", "correct": false },
                { "text": "Filozoficznego stoicyzmu i spokoju wewnętrznego.", "correct": false },
                { "text": "Hipokryzji i instrumentalnego wykorzystywania religijności do usprawiedliwiania własnej chciwości i mściwości.", "correct": true },
                { "text": "Fatalizmu, czyli wiary w nieuchronne przeznaczenie.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Słynny sekret Lisa z 'Małego Księcia' brzmi: 'Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu'. Zinterpretuj to zdanie, odwołując się do relacji Małego Księcia z jego Różą.",
            "answer": ["Oznacza to, że prawdziwa wartość relacji nie leży w powierzchownym wyglądzie czy słowach, ale w uczuciach, poświęconym czasie i więzi. Mały Książę na początku oceniał Różę przez pryzmat jej próżności i kolców (to, co widoczne dla oczu), a dopiero po rozstaniu zrozumiał, że kocha ją za jej unikalność i wspólnie spędzony czas (to, co widoczne dla serca)."]
        },
        {
            "type": "closed",
            "question": "W zdaniu z tekstu 'Tajemniczy ogród': 'To było niezwykłe!', podkreślony wyraz pełni w zdaniu funkcję:",
            "answers": [
                { "text": "Przydawki", "correct": false },
                { "text": "Okolicznika sposobu", "correct": false },
                { "text": "Orzecznika", "correct": true },
                { "text": "Dopełnienia", "correct": false }
            ]
        },
        {
            "type": "closed",
            "question": "Które z poniższych stwierdzeń najtrafniej oddaje wspólną istotę ofiary poniesionej przez Nemeczka ('Chłopcy z Placu Broni') i bohaterów 'Kamieni na szaniec'?",
            "answers": [
                { "text": "W obu przypadkach była to ofiara wymuszona przez okrutnych wrogów.", "correct": false },
                { "text": "Obie ofiary były wynikiem młodzieńczej brawury i braku rozwagi.", "correct": false },
                { "text": "W obu przypadkach bohaterowie oddają życie z poczucia honoru i wierności dla symbolicznej 'ojczyzny' (Placu Broni / Polski), traktując swój obowiązek ze śmiertelną powagą.", "correct": true },
                { "text": "Obie ofiary okazały się bezcelowe i nie przyniosły żadnych rezultatów.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Andrzej Radek, jeden z bohaterów 'Syzyfowych prac', jest postacią kluczową dla zrozumienia społecznego tła powieści. Co symbolizuje jego droga życiowa i walka o edukację?",
            "answer": ["Jego droga symbolizuje ogromny wysiłek i determinację warstw chłopskich w dążeniu do awansu społecznego poprzez edukację. Ukazuje bariery i upokorzenia, jakie musieli pokonywać. Jest żywym dowodem na to, że pęd do wiedzy i polskości istniał również poza środowiskiem szlacheckim."]
        },
        {
            "type": "closed",
            "question": "Taniec poloneza, kończący akcję 'Pana Tadeusza', jest symboliczną sceną, która wyraża przede wszystkim:",
            "answers": [
                { "text": "Radość z zaręczyn Tadeusza i Zosi oraz zakończenia sporu o zamek.", "correct": false },
                { "text": "Nadzieję na odzyskanie niepodległości, harmonię społeczną, pojednanie zwaśnionych rodów i porządek narodowy pod wodzą wodza-patrioty.", "correct": true },
                { "text": "Przywiązanie szlachty do tradycyjnych, sarmackich rozrywek i obyczajów.", "correct": false },
                { "text": "Ostateczne zwycięstwo kultury polskiej nad wpływami zagranicznymi reprezentowanymi przez Telimenę.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, jakie jest współczesne, metaforyczne znaczenie związku frazeologicznego 'koń trojański', odwołując się do jego mitologicznego pochodzenia.",
            "answer": ["W mitologii był to podstęp, dzięki któremu Grecy zdobyli Troję – dar ukrywający wrogów. Współcześnie 'koń trojański' oznacza ukryte, wrogie działanie, podstępny 'dar' lub osobę, która pod pozorem przyjaznych zamiarów działa na szkodę; także szkodliwe oprogramowanie komputerowe."]
        },
        {
            "type": "closed",
            "question": "Jaka jest rola Goplany w 'Balladynie'? Można ją najtrafniej określić jako:",
            "answers": [
                { "text": "Uosobienie czystego zła, które dąży do zniszczenia ludzkości.", "correct": false },
                { "text": "Sprawiedliwą sędzię, która karze ludzkie występki.", "correct": false },
                { "text": "Katalizator tragicznych wydarzeń; jej ingerencja w świat ludzi, motywowana kaprysem i namiętnością, uruchamia spiralę zbrodni, ale nie jest ich jedyną przyczyną.", "correct": true },
                { "text": "Symbol harmonii natury, zakłóconej przez działania człowieka.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W 'Opowieści wigilijnej' Duch Przyszłych Wigilii jest jedynym, który nie odzywa się do Scrooge'a. Dlaczego jego milczenie jest bardziej przerażające niż słowa pozostałych duchów?",
            "answer": ["Jego milczenie jest przerażające, ponieważ symbolizuje nieuchronność konsekwencji, jeśli Scrooge się nie zmieni. Jest to przyszłość, która nie dyskutuje i nie negocjuje. Zmusza Scrooge'a do samodzielnej interpretacji strasznych wizji i wzięcia odpowiedzialności za ich kształt, co jest silniejszym bodźcem do zmiany niż gotowe pouczenie."]
        },
        {
            "type": "closed",
            "question": "Który z poniższych cytatów z 'Dziadów cz. II' wskazuje, że do pełnego człowieczeństwa potrzebne jest doświadczenie zarówno szczęścia, jak i cierpienia?",
            "answers": [
                { "text": "'Bo kto nie był ni razu człowiekiem, / Temu człowiek nic nie pomoże.'", "correct": false },
                { "text": "'Kto nie doznał goryczy ni razu, / Ten nie dozna słodyczy w niebie.'", "correct": true },
                { "text": "'Ciemno wszędzie, głucho wszędzie, / Co to będzie, co to będzie?'", "correct": false },
                { "text": "'Są na świecie inne, gorsze winy.'", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Przekształć poniższe zdanie tak, aby zawierało stronę bierną czasownika, nie zmieniając jego sensu: 'Wiatr gwałtownie otworzył okno.'",
            "answer": ["Okno zostało gwałtownie otworzone przez wiatr."]
        },
        {
            "type": "closed",
            "question": "Patriotyzm w 'Mazurku Dąbrowskiego' ma charakter czynny i optymistyczny. Jego głównym założeniem jest przekonanie, że:",
            "answers": [
                { "text": "Ojczyzna istnieje tylko w sercach Polaków i w pamięci o przeszłości.", "correct": false },
                { "text": "Naród istnieje tak długo, jak długo żyją i walczą Polacy, a niepodległość można odzyskać własnym wysiłkiem zbrojnym.", "correct": true },
                { "text": "Należy biernie czekać na pomoc ze strony Napoleona i innych sojuszników.", "correct": false },
                { "text": "Najważniejsza jest praca organiczna i dbanie o rozwój gospodarczy kraju.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wskaż jedną wspólną cechę łączącą postać Telimeny z 'Pana Tadeusza' i Koguta z 'Artysty' Sławomira Mrożka.",
            "answer": ["Wspólną cechą jest kreowanie się na kogoś, kim się nie jest. Telimena udaje światową damę i znawczynię sztuki, by podnieść swój status, a Kogut udaje lwa, by zdobyć sławę. Obie postacie budują swój wizerunek na pozorach i aspiracjach niepopartych autentycznymi cechami."]
        },
        {
            "type": "closed",
            "question": "Czym jest 'nauka o grzeczności', którą w 'Panu Tadeuszu' wykłada Sędzia? W najgłębszym sensie jest to:",
            "answers": [
                { "text": "Zbiorem sztywnych reguł dotyczących zachowania przy stole.", "correct": false },
                { "text": "Kodeksem moralnym i społecznym, który reguluje relacje międzyludzkie, wyraża szacunek dla hierarchii, wieku, płci i natury, zapewniając harmonię wspólnoty.", "correct": true },
                { "text": "Sposobem na zaimponowanie gościom i pokazanie wyższości Soplicowa.", "correct": false },
                { "text": "Próbą powstrzymania młodego pokolenia przed przejmowaniem obcych wzorców.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wskaż błąd składniowy w zdaniu: 'Kupując bilety, kasa została już zamknięta.' i napisz je poprawnie.",
            "answer": ["Błąd polega na tym, że czynność wyrażona imiesłowem ('kupując') nie jest wykonywana przez podmiot zdania głównego ('kasa'). Poprawnie: 'Gdy kupowałem/am bilety, kasa została już zamknięta.'"]
        },
        {
            "type": "closed",
            "question": "Analizując postać Hrabiego z 'Pana Tadeusza' i Don Kichota, można dostrzec pewne podobieństwo. Polega ono na:",
            "answers": [
                { "text": "Odwadze w walce zbrojnej i talencie dowódczym.", "correct": false },
                { "text": "Postrzeganiu rzeczywistości przez pryzmat literatury i sztuki, co prowadzi do komicznych nieporozumień i idealizacji otoczenia (ruiny zamku / wiatraki).", "correct": true },
                { "text": "Bogactwie i wysokiej pozycji społecznej.", "correct": false },
                { "text": "Nieszczęśliwej miłości do prostej dziewczyny.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, dlaczego tytuł fraszki Jana Kochanowskiego 'O żywocie ludzkim' jest kluczem do zrozumienia jej filozoficznego przesłania.",
            "answer": ["Tytuł wskazuje, że fraszka nie jest błahą igraszką, lecz filozoficzną refleksją nad ludzkim życiem ('żywotem ludzkim'). Zapowiada, że pod pozorem lekkiej formy kryje się poważna myśl o marności ludzkich starań i przemijaniu, co jest zgodne z toposem 'theatrum mundi' (świata-teatru)."]
        },
        {
            "type": "closed",
            "question": "Co jest fundamentalną przyczyną porażki i śmierci bohaterów 'Reduty Ordona' w interpretacji Adama Mickiewicza?",
            "answers": [
                { "text": "Błędy taktyczne i słabe wyszkolenie żołnierzy.", "correct": false },
                { "text": "Ogromna przewaga liczebna i materialna wroga, symbolizująca starcie małego, bohaterskiego narodu z bezduszną potęgą tyranii.", "correct": true },
                { "text": "Zdrada jednego z oficerów, który wpuścił wroga do reduty.", "correct": false },
                { "text": "Brak pomocy ze strony innych oddziałów polskich.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wpisz poprawną formę stopnia wyższego przysłówka 'źle'.",
            "answer": ["gorzej"]
        },
        {
            "type": "closed",
            "question": "Zestawiając mit o Syzyfie z przypowieścią o siewcy, można dostrzec kontrast w przesłaniu dotyczącym ludzkiego wysiłku. Na czym on polega?",
            "answers": [
                { "text": "Syzyf jest karany za pychę, a siewca jest nagradzany za pokorę.", "correct": false },
                { "text": "Wysiłek Syzyfa jest z góry skazany na bezsens i porażkę, podczas gdy praca siewcy, mimo trudności (skały, ciernie), ma szansę przynieść plon, jeśli trafi na podatny grunt. Mit mówi o absurdzie, przypowieść o nadziei.", "correct": true },
                { "text": "Syzyf pracuje fizycznie, a siewca symbolicznie.", "correct": false },
                { "text": "Syzyf jest samotny w swoim wysiłku, a siewca ma pomocników.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W 'Zemście' Papkin przedstawia się jako 'lew Północy'. Jaki środek stylistyczny został tu użyty i jaka jest jego funkcja w charakterystyce postaci?",
            "answer": ["Została tu użyta metafora (lub hiperbola). Jej funkcją jest komiczne wyolbrzymienie rzekomej odwagi i siły Papkina. Kontrast między tym określeniem a jego rzeczywistym tchórzostwem buduje komizm postaci i demaskuje jego samochwalstwo."]
        },
        {
            "type": "closed",
            "question": "Która lektura w najbardziej bezpośredni sposób podejmuje problematykę dojrzewania i kształtowania się tożsamości narodowej w warunkach zaborów i presji obcej kultury?",
            "answers": [
                { "text": "'Pan Tadeusz'", "correct": false },
                { "text": "'Kamienie na szaniec'", "correct": false },
                { "text": "'Syzyfowe prace'", "correct": true },
                { "text": "'Zemsta'", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, na czym polega ironia losu w finale 'Balladyny'.",
            "answer": ["Ironia losu polega na tym, że Balladyna, zdobywszy władzę poprzez serię zbrodni, musi jako nowa królowa stać się strażniczką prawa. Wydając na siebie trzykrotny wyrok śmierci (za otrucie, zabójstwo siostry i wyparcie się matki), sama staje się narzędziem sprawiedliwości, która ją dosięga. Jej sukces staje się przyczyną jej ostatecznej klęski."]
        },
        {
            "type": "closed",
            "question": "W zdaniu 'Wiem, co myślisz', zdanie podrzędne 'co myślisz' odpowiada na pytanie:",
            "answers": [
                { "text": "(wiem) jak?", "correct": false },
                { "text": "(wiem) co?", "correct": true },
                { "text": "(wiem) dlaczego?", "correct": false },
                { "text": "(wiem) kiedy?", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W kontekście całej lektury 'Opowieść wigilijna', co symbolizuje ogień płonący wesoło na kominku w kantorze Boba Cratchita, w przeciwieństwie do ledwo tlącego się ogieńka u Scrooge'a?",
            "answer": ["Ogień symbolizuje ciepło rodzinne, miłość, radość życia i człowieczeństwo. U Cratchitów, mimo biedy, ogień jest duży, co symbolizuje bogactwo ich życia wewnętrznego i relacji. U Scrooge'a jest on znikomy, co odzwierciedla jego emocjonalny chłód, skąpstwo, samotność i martwotę duchową."]
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