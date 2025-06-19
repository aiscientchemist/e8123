const questions = [
    {
        "type": "closed",
        "question": "Czym fundamentalnie różni się sposób, w jaki Balladyna i Telimena wykorzystują swój wpływ na mężczyzn?",
        "answers": [
            { "text": "Balladyna kieruje się miłością, a Telimena chęcią zysku.", "correct": false },
            { "text": "Balladyna dąży do zdobycia twardej, politycznej władzy poprzez zbrodnię, a Telimena używa flirtu i manipulacji społecznej do zdobycia pozycji i zabezpieczenia materialnego.", "correct": true },
            { "text": "Obie dążą do tego samego celu, ale Telimena jest bardziej skuteczna.", "correct": false },
            { "text": "Balladyna jest postacią tragiczną, a Telimena wyłącznie komiczną.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Lis tłumaczy, że 'oswajanie' wymaga rytuałów, np. przychodzenia o tej samej porze. Co ta potrzeba rytuału symbolizuje w kontekście budowania relacji międzyludzkich?",
        "answer": ["Symbolizuje to, że prawdziwe więzi i zaufanie buduje się na fundamencie przewidywalności, bezpieczeństwa i konsekwentnego wysiłku. Rytuał tworzy bezpieczną przestrzeń, w której druga strona wie, czego się spodziewać, co zmniejsza lęk i pozwala się otworzyć."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań wyraz 'rano' pełni funkcję inną niż w pozostałych?",
        "answers": [
            { "text": "Spotkajmy się jutro rano.", "correct": false },
            { "text": "Zimny, mglisty poranek nie nastrajał optymistycznie.", "correct": false },
            { "text": "Najpiękniejszą porą dnia jest dla mnie rano.", "correct": true },
            { "text": "Zawsze wstaję bardzo wcześnie rano.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Na czym polega kluczowa różnica w postawie moralnej Feriego Acza z 'Chłopców z Placu Broni' i Balladyny?",
        "answers": [
            { "text": "Oboje są zdrajcami, ale Feri Acz ponosi karę, a Balladyna nie.", "correct": false },
            { "text": "Feri Acz, mimo chwilowej zdrady, kieruje się swoistym kodeksem honorowym i szacunkiem dla godnego przeciwnika, podczas gdy Balladyna nie kieruje się żadnymi zasadami moralnymi poza własną, nieograniczoną ambicją.", "correct": true },
            { "text": "Feri Acz działa w grupie, a Balladyna samotnie.", "correct": false },
            { "text": "Feri Acz odczuwa skruchę, a Balladyna nie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jeśli tytuł 'Syzyfowe prace' odnosi się do daremnych wysiłków, to wskaż w powieści jedno wydarzenie, które jest zaprzeczeniem 'syzyfowej pracy' i wyjaśnij, dlaczego.",
        "answer": ["Zaprzeczeniem jest recytacja 'Reduty Ordona' przez Bernarda Zygiera. Jest to jeden, konkretny akt, który przełamuje cykl rusyfikacji i apatii. W przeciwieństwie do 'kamienia Syzyfa', który zawsze spada, ten 'kamień' (przebudzenie narodowe Borowicza) pozostaje na szczycie, trwale zmieniając bohatera i dynamikę w klasie."]
    },
    {
        "type": "closed",
        "question": "Opisany w 'Panu Tadeuszu' zajazd na Soplicowo jest w istocie symbolicznym przedstawieniem:",
        "answers": [
            { "text": "Sprawiedliwej próby odzyskania rodowego majątku.", "correct": false },
            { "text": "Ostatniego aktu sarmackiej, anarchicznej samowoli szlacheckiej, która ustępuje miejsca nowemu, zorganizowanemu patriotyzmowi w walce o sprawę narodową.", "correct": true },
            { "text": "Zwykłej, sąsiedzkiej kłótni o pieniądze i wpływy.", "correct": false },
            { "text": "Skutecznej metody walki z rosyjskim zaborcą.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Mit o Demeter i Korze, poza wyjaśnianiem cyklu pór roku, przekazuje głębszą prawdę o naturze świata. Jaką?",
        "answer": ["Mit ten przekazuje prawdę o nieuchronnym splocie życia i śmierci, straty i odrodzenia. Pokazuje, że światem rządzi cykliczność i kompromis między przeciwstawnymi siłami (świat podziemny i świat na powierzchni). Uczy też o potędze miłości (matczynej) jako siły zdolnej wpłynąć na porządek boski."]
    },
    {
        "type": "closed",
        "question": "Scena, w której Dyndalski pisze list 'krokodyla daj tu, kole', dyktowany przez Cześnika, jest przykładem komizmu językowego, który polega na:",
        "answers": [
            { "text": "Użyciu śmiesznych, przestarzałych wyrazów.", "correct": false },
            { "text": "Dosłownym potraktowaniu mowy potocznej i zapisaniu jej jako oficjalnego tekstu, co tworzy absurdalny efekt.", "correct": true },
            { "text": "Celowym robieniu błędów ortograficznych, by ośmieszyć Cześnika.", "correct": false },
            { "text": "Parodiowaniu stylu pisania listów miłosnych z epoki.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż fundamentalne podobieństwo między procesem 'odradzania się' Tajemniczego Ogrodu a przemianą Ebenezera Scrooge'a.",
        "answer": ["Podobieństwo polega na tym, że w obu przypadkach 'odrodzenie' jest procesem wymagającym troski, pracy i otwarcia się na świat. Zaniedbany, zamknięty ogród jest metaforą zamkniętej i osamotnionej duszy Mary. Jego stopniowe ożywanie, dzięki pracy i przyjaźni, odzwierciedla duchową przemianę Scrooge'a, który również 'rozkwita' pod wpływem empatii i relacji z innymi."]
    },
    {
        "type": "closed",
        "question": "Analizując postać księdza Robaka i tytułowego bohatera 'Latarnika', można stwierdzić, że łączy ich:",
        "answers": [
            { "text": "Dążenie do spokojnego życia na odludziu.", "correct": false },
            { "text": "Status emigranta-tułacza, który po latach odnajduje sens życia w służbie (Bogu i Ojczyźnie / społeczeństwu) lub powrocie do symbolicznej ojczyzny (przez książkę).", "correct": true },
            { "text": "Talent do opowiadania historii ze swojego życia.", "correct": false },
            { "text": "Ucieczka przed odpowiedzialnością za popełnione błędy.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Utwórz poprawne zdanie, w którym rzeczownik 'dłoń' wystąpi w formie Narzędnika liczby mnogiej.",
        "answer": ["Chłopiec trzymał nasiona w obu dłoniach."]
    },
    {
        "type": "closed",
        "question": "Jaka jest rola postaci Sędziego w 'Panu Tadeuszu'?",
        "answers": [
            { "text": "Jest głównym antagonistą, prowadzącym spór z Hrabią.", "correct": false },
            { "text": "Jest strażnikiem polskiej tradycji, obyczaju i porządku moralnego (arkadii), a jego dwór jest ostoją polskości.", "correct": true },
            { "text": "Jest postacią komiczną, której zadaniem jest rozbawianie czytelnika.", "correct": false },
            { "text": "Jest rewolucjonistą przygotowującym powstanie na Litwie.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie VII' Kochanowski określa ubiory Urszulki jako 'żałosne ojca dziwy'. Wyjaśnij, co oznacza tu archaiczne słowo 'dziwy' i jaki efekt emocjonalny wywołuje jego użycie.",
        "answer": ["'Dziwy' oznaczają tu 'widowisko', 'spektakl'. Użycie tego słowa jest pełne gorzkiej ironii. Zwykłe ubranka dziecięce stają się dla ojca tragicznym spektaklem pustki i straty. Efektem jest spotęgowanie bólu i ukazanie, jak codzienne przedmioty zmieniają swoje znaczenie w obliczu śmierci."]
    },
    {
        "type": "closed",
        "question": "Które z podanych zdań jest zdaniem złożonym z podrzędnym okolicznikowym przyzwolenia?",
        "answers": [
            { "text": "Poszedł na spacer, ponieważ pogoda była piękna.", "correct": false },
            { "text": "Poszedł na spacer, chociaż zaczynało kropić.", "correct": true },
            { "text": "Poszedł na spacer, aby zaczerpnąć świeżego powietrza.", "correct": false },
            { "text": "Jeśli pogoda się poprawi, pójdę na spacer.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Porównaj funkcję pieniędzy w życiu Ebenezera Scrooge'a (przed przemianą) i w życiu bohaterów przypowieści o talentach. Wskaż kluczową różnicę.",
        "answer": ["Dla Scrooge'a pieniądze są celem samym w sobie, gromadzonym i zamkniętym ('zakopanym'), nie przynoszącym pożytku. W przypowieści talenty (pieniądze) są środkiem, który ma być 'puszczony w obieg', pomnażany i wykorzystywany. Różnica polega na postrzeganiu kapitału: jako martwego skarbu (Scrooge) lub jako narzędzia pracy i rozwoju (przypowieść)."]
    },
    {
        "type": "closed",
        "question": "W której z poniższych par postaci kontrast charakterów jest najsłabiej zarysowany?",
        "answers": [
            { "text": "Cześnik Raptusiewicz i Rejent Milczek", "correct": false },
            { "text": "Alina i Balladyna", "correct": false },
            { "text": "Scrooge (przed i po przemianie)", "correct": false },
            { "text": "Alek i Zośka ('Kamienie na szaniec')", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj milczenie Widma pojawiającego się na końcu 'Dziadów cz. II'. Dlaczego nie odpowiada ono na wezwania Guślarza?",
        "answer": ["Milczenie Widma symbolizuje, że jego cierpienie jest natury osobistej, miłosnej i wykracza poza sferę obrzędu wspólnotowego. Nie jest to duch, któremu można pomóc ofiarą czy modlitwą. Jego problem należy do innego porządku – porządku romantycznej, indywidualnej tragedii, co jest zapowiedzią IV części 'Dziadów'."]
    },
    {
        "type": "closed",
        "question": "Przekształcenie zdania 'Chłopiec, który grał na fujarce, uspokoił zwierzęta' na 'Chłopiec grający na fujarce uspokoił zwierzęta' polega na zastąpieniu zdania podrzędnego:",
        "answers": [
            { "text": "Równoważnikiem zdania.", "correct": false },
            { "text": "Imiesłowowym przymiotnikowym czynnym.", "correct": true },
            { "text": "Imiesłowowym przysłówkowym współczesnym.", "correct": false },
            { "text": "Porównaniem homeryckim.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Hobbicie' Bilbo Baggins wygrywa z Gollumem dzięki zagadce 'Co mam w kieszeni?'. Jaki głębszy, symboliczny sens ma ta 'nie-zagadka'?",
        "answer": ["Symbolizuje ona wkroczenie do świata reguł i logiki (zagadek) elementu przypadku, przypadku i prozy życia. Bilbo wygrywa nie dzięki sprytowi w ramach gry, ale przez złamanie jej zasad i odwołanie się do konkretnej, banalnej rzeczywistości. To moment, w którym prosty, przyziemny świat hobbitów triumfuje nad mrocznym, mitycznym światem Golluma."]
    },
    {
        "type": "closed",
        "question": "Wskaż grupę wyrazów, w której wszystkie pochodzą od tego samego rdzenia.",
        "answers": [
            { "text": "ręka, poręczyć, zarękawki, ranek", "correct": false },
            { "text": "mówić, wymowny, rozmowa, zmowa", "correct": true },
            { "text": "pisać, pisarz, przepis, पीस (czyt. pis - pokój w hindi)", "correct": false },
            { "text": "czytać, czytelnik, poczta, odczyt", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego narrator w 'Opowieści wigilijnej' tak mocno podkreśla, że 'Marley był martwy'. Jaka jest funkcja tego uporczywego powtórzenia?",
        "answer": ["Funkcją jest uwiarygodnienie świata fantastycznego utworu. Poprzez definitywne stwierdzenie śmierci Marleya, narrator wyklucza racjonalne wytłumaczenia (np. sen, halucynacja Scrooge'a). To buduje fundament, na którym pojawienie się duchów staje się realnym, nadprzyrodzonym wydarzeniem, a nie wytworem wyobraźni, co nadaje przesłaniu utworu większą wagę."]
    },
    {
        "type": "closed",
        "question": "Patriotyzm Alka, Rudego i Zośki w 'Kamieniach na szaniec' najlepiej można scharakteryzować jako:",
        "answers": [
            { "text": "Patriotyzm romantyczny, oparty na martyrologii i kulcie cierpienia.", "correct": false },
            { "text": "Patriotyzm czynu, łączący ideały służby i braterstwa z praktycznym działaniem, samokształceniem i ciągłą pracą nad sobą.", "correct": true },
            { "text": "Patriotyzm sentymentalny, wyrażający się w tęsknocie za utraconą ojczyzną.", "correct": false },
            { "text": "Patriotyzm polityczny, skupiony na tworzeniu struktur państwa podziemnego.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zacytuj fragment z 'Pana Tadeusza', który jest przykładem apostrofy, i wyjaśnij, do kogo zwraca się podmiot liryczny.",
        "answer": ["Fragment: 'Litwo! Ojczyzno moja! ty jesteś jak zdrowie.'. Podmiot liryczny zwraca się do Litwy, swojej 'prywatnej' ojczyzny, uosabiając ją i nadając jej cechy istoty, z którą można prowadzić dialog."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zdań zawiera błąd frazeologiczny?",
        "answers": [
            { "text": "Ten problem to jego prawdziwa pięta achillesowa.", "correct": false },
            { "text": "Musimy zakasać rękawy i wziąć się do pracy.", "correct": false },
            { "text": "Wykonał tę pracę po najmniejszej linii oporu.", "correct": true },
            { "text": "Nie rób z igły wideł, to nie jest aż tak poważne.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Artyscie' Sławomira Mrożka, Lis proponuje Kogutowi, że 'da mu dobrą lekcję'. Czego, w symbolicznym sensie, Lis uczy Koguta (i czytelnika)?",
        "answer": ["Lis uczy go brutalnej prawdy o naturze i sztuce. Pokazuje, że prawdziwa 'rola' (bycie lisem, bycie kogutem) wynika z autentycznej tożsamości, a nie z ambicji i udawania. Uczy, że w konfrontacji z rzeczywistością (głodny lis) sztuczne kreacje (kogut-lew) przegrywają. To lekcja o różnicy między byciem a udawaniem."]
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