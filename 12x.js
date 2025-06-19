const questions = [
    {
        "type": "closed",
        "question": "Jaka jest główna różnica w postrzeganiu historii między Hrabią a Sędzią w 'Panu Tadeuszu'?",
        "answers": [
            { "text": "Hrabia postrzega historię jako zbiór malowniczych, romantycznych anegdot i inspiracji (ruiny, legendy), a Sędzia jako żywą tradycję, obyczaj i kodeks moralny, który należy kultywować w codziennym życiu.", "correct": true },
            { "text": "Hrabia jest zwolennikiem Napoleona, a Sędzia jest mu przeciwny.", "correct": false },
            { "text": "Hrabia zna historię Polski lepiej niż Sędzia.", "correct": false },
            { "text": "Hrabia chce pomścić historię Horeszków, a Sędzia chce o niej zapomnieć.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu', co symbolizuje studnia na pustyni i akt wspólnego picia wody przez Pilota i Małego Księcia?",
        "answer": ["Studnia symbolizuje ukryty sens życia, prawdę i duchowe wartości, które trzeba odnaleźć z wysiłkiem. Wspólne picie wody to metafora nawiązania głębokiej, autentycznej więzi i porozumienia. To 'pokarm' dla serca, a nie tylko dla ciała, co podkreśla, że najcenniejsze w życiu są relacje międzyludzkie."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań zaimek 'swój' został użyty niepoprawnie?",
        "answers": [
            { "text": "Każdy uczeń powinien przynieść swój podręcznik.", "correct": false },
            { "text": "Kocham swoją mamę i swojego tatę.", "correct": false },
            { "text": "Poprosiłem kolegę, żeby pożyczył mi swój rower.", "correct": true },
            { "text": "Zawsze pamiętam o swoich obowiązkach.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co łączy postawę Rejenta Milczka z 'Zemsty' z postawą Bankiera z 'Małego Księcia'?",
        "answers": [
            { "text": "Obaj są bardzo religijni i często się modlą.", "correct": false },
            { "text": "Ich życie i system wartości są całkowicie zdominowane przez ideę posiadania i gromadzenia (majątku ziemskiego / gwiazd), co prowadzi do absurdalnych i nieludzkich zachowań.", "correct": true },
            { "text": "Obaj gardzą swoimi synami/pracownikami.", "correct": false },
            { "text": "Obaj są postaciami tragicznymi, które ponoszą klęskę.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest rola postaci Robaka w sporze o zamek? Jak zmienia on jego charakter?",
        "answer": ["Robak przekształca prywatny, sarmacki spór w element większej, narodowej sprawy. Jego celem jest pogodzenie zwaśnionych rodów, aby mogły zjednoczyć się w walce z Rosjanami. Zmienia charakter konfliktu z osobistej wendetty w kwestię polityczną i patriotyczną, nadając mu wyższy sens."]
    },
    {
        "type": "closed",
        "question": "Postać Telimeny w 'Panu Tadeuszu' może być postrzegana jako literacka spadkobierczyni:",
        "answers": [
            { "text": "Antycznej heroiny, jak Antygona.", "correct": false },
            { "text": "Bohaterki 'Żony modnej' Ignacego Krasickiego.", "correct": true },
            { "text": "Świętej i ascetki z literatury średniowiecznej.", "correct": false },
            { "text": "Romantycznej wieszczki, jak Świtezianka.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Quo vadis' Winicjusz na początku chce 'posiadać' Ligię. Wyjaśnij, jak zmienia się jego rozumienie miłości pod wpływem chrześcijaństwa.",
        "answer": ["Jego rozumienie miłości ewoluuje od pogańskiego, zmysłowego i zaborczego pożądania (eros) do miłości chrześcijańskiej (agape). Uczy się, że prawdziwa miłość to nie posiadanie, lecz szacunek, troska, gotowość do poświęcenia i dbanie o dobro duchowe drugiej osoby. Zaczyna kochać 'duszę' Ligii, a nie tylko jej ciało."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich w najpełniejszy sposób realizuje archetyp 'everymana' – zwykłego człowieka rzuconego w wir wielkich wydarzeń, który odkrywa w sobie nieoczekiwane pokłady siły.",
        "answers": [
            { "text": "Jacek Soplica", "correct": false },
            { "text": "Bilbo Baggins", "correct": true },
            { "text": "Cześnik Raptusiewicz", "correct": false },
            { "text": "Marcin Borowicz", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Zemście' Klara stawia Papkinowi warunki, które musi spełnić, by zdobyć jej rękę (milczenie, post, krokodyl). Jaki jest cel tych warunków?",
        "answer": ["Celem jest ośmieszenie i zniechęcenie natrętnego zalotnika. Warunki są celowo absurdalne i niewykonalne. Klara, jako osoba inteligentna i racjonalna, używa tej strategii, by w sposób dowcipny i elegancki pozbyć się Papkina, demaskując jednocześnie jego bufonadę i tchórzostwo."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań wyraz 'lepiej' jest użyty niepoprawnie?",
        "answers": [
            { "text": "Lepiej późno niż wcale.", "correct": false },
            { "text": "On zna się na tym lepiej ode mnie.", "correct": false },
            { "text": "W tej sukience wyglądasz bardziej lepiej.", "correct": true },
            { "text": "Czuję się już o wiele lepiej.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego 'Balladyna' jest dramatem o mechanizmie zła.",
        "answer": ["Jest dramatem o mechanizmie zła, ponieważ pokazuje, jak jedna zbrodnia nieuchronnie prowadzi do następnej. Aby ukryć pierwsze zabójstwo (Aliny), Balladyna musi eliminować kolejnych świadków i rywali (Gralon, Kostryn, Pustelnik). To ilustracja spirali zła, w której każda kolejna zbrodnia jest logiczną konsekwencją poprzedniej."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich jest bohaterem dynamicznym, czyli przechodzi głęboką, udokumentowaną psychologicznie przemianę.",
        "answers": [
            { "text": "Rejent Milczek", "correct": false },
            { "text": "Telimena", "correct": false },
            { "text": "Marek Winicjusz", "correct": true },
            { "text": "Gerwazy Rębajło", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaki jest sens i funkcja sceny, w której Hrabia szkicuje w swoim albumie? Co ona mówi o jego podejściu do świata?",
        "answer": ["Scena ta charakteryzuje Hrabiego jako typowego romantyka. Jego podejście do świata jest estetyczne i mediatyzowane przez sztukę. Nie interesuje go realna istota rzeczy, lecz ich malowniczość i potencjał do bycia 'tematem' artystycznym. Zamiast uczestniczyć w życiu, woli je obserwować i przekształcać w obraz, co pokazuje jego pewne oderwanie od rzeczywistości."]
    },
    {
        "type": "closed",
        "question": "W 'Opowieści wigilijnej', głównym grzechem Scrooge'a, z którego wynikają wszystkie inne, jest:",
        "answers": [
            { "text": "Brak wiary w Boga i życie pozagrobowe.", "correct": false },
            { "text": "Chciwość i egoizm, które doprowadziły go do zerwania więzi międzyludzkich i postrzegania innych wyłącznie przez pryzmat zysku.", "correct": true },
            { "text": "Złe traktowanie swojego pracownika, Boba Cratchita.", "correct": false },
            { "text": "Odrzucenie miłości swojej narzeczonej w młodości.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie zależnej na mowę niezależną, stosując odpowiednie znaki interpunkcyjne: 'Zapytałem go, która jest godzina.'",
        "answer": ["Zapytałem go: 'Która jest godzina?'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł najpełniej realizuje model ballady romantycznej?",
        "answers": [
            { "text": "'Reduta Ordona'", "correct": false },
            { "text": "'Świtezianka'", "correct": true },
            { "text": "'Opowieść wigilijna'", "correct": false },
            { "text": "'Tren VIII'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę 'pustej mogiły' w 'Reducie Ordona'.",
        "answer": ["'Pusta mogiła' symbolizuje nieśmiertelną sławę i ideę, która przetrwa fizyczną śmierć bohatera. Ordon, wysadzając się w powietrze, nie pozostawia po sobie ciała do pochówku, ale pozostawia po sobie legendę i inspirację do dalszej walki. Jego grób to pamięć narodu, a nie kawałek ziemi."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym orzeczenie wyrażone jest w trybie przypuszczającym.",
        "answers": [
            { "text": "Z pewnością pójdę jutro do kina.", "correct": false },
            { "text": "Poszedłbym jutro do kina, gdybym miał czas.", "correct": true },
            { "text": "Pójdź jutro do kina!", "correct": false },
            { "text": "On codziennie chodzi do kina.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Syzyfowych pracach' uczniowie spotykają się 'na górce u Gontali'. Jaka jest symboliczna funkcja tego miejsca?",
        "answer": ["'Górka u Gontali' jest symbolem 'małej, wolnej Polski' – przestrzeni wyłączonej spod kontroli rusyfikatorów. To miejsce konspiracji, samokształcenia i swobodnej wymiany myśli. Jest to symboliczna oaza polskości, gdzie bohaterowie mogą być sobą i pielęgnować swoją tożsamość, w przeciwieństwie do opresyjnej przestrzeni szkoły."]
    },
    {
        "type": "closed",
        "question": "Wskaż, która z postaci literackich jest przykładem bohatera-everymana, czyli zwykłego człowieka skonfrontowanego z niezwykłymi okolicznościami.",
        "answers": [
            { "text": "Achilles", "correct": false },
            { "text": "Skawiński", "correct": true },
            { "text": "Herkules", "correct": false },
            { "text": "Cześnik Raptusiewicz", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega komizm postaci Podstoliny w 'Zemście'.",
        "answer": ["Jej komizm polega na kontraście między jej deklarowaną żałobą a desperackim poszukiwaniem kolejnego męża ('trzy razy była zamężna'). Jest postacią chciwą i pragmatyczną, która instrumentalnie traktuje mężczyzn, jednocześnie próbując zachować pozory damy w trudnej sytuacji. Jej szybkie zmiany frontu (od Cześnika do Wacława) są źródłem komicznych sytuacji."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym elementem losu Nemeczka z 'Chłopców z Placu Broni' i bohatera wiersza 'Śmierć pułkownika'?",
        "answers": [
            { "text": "Śmierć w wyniku choroby, która jest konsekwencją poświęcenia dla sprawy.", "correct": true },
            { "text": "Dowodzenie oddziałem w ważnej bitwie.", "correct": false },
            { "text": "Zdrada popełniona wobec swoich towarzyszy.", "correct": false },
            { "text": "Pochodzenie z biednej, chłopskiej rodziny.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd frazeologiczny w zdaniu: 'W każdym bądź razie musimy podjąć decyzję' i zapisz je poprawnie.",
        "answer": ["Błąd: jest to kontaminacja (skrzyżowanie) dwóch zwrotów: 'w każdym razie' i 'bądź co bądź'. Poprawnie: 'W każdym razie musimy podjąć decyzję' LUB 'Bądź co bądź, musimy podjąć decyzję'."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych dzieł w najpełniejszy sposób ukazuje proces formowania się świadomości narodowej młodego człowieka?",
        "answers": [
            { "text": "'Pan Tadeusz'", "correct": false },
            { "text": "'Syzyfowe prace'", "correct": true },
            { "text": "'Kamienie na szaniec'", "correct": false },
            { "text": "'Chłopcy z Placu Broni'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie XIX, czyli Śnie', matka pociesza Kochanowskiego, mówiąc, że Urszulka uniknęła trudów ziemskiego życia. Jaka filozofia stoi za tym pocieszeniem?",
        "answer": ["Jest to pocieszenie oparte na filozofii chrześcijańskiej i stoickiej. Zgodnie z nią, życie ziemskie jest pełne cierpienia, trosk i niepewności. Śmierć w niewinności jest więc formą boskiej łaski, która chroni dziecko przed bólem istnienia i zapewnia mu wieczne szczęście w niebie. To próba znalezienia sensu i ukojenia w tragedii."]
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