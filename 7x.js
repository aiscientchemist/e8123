const questions = [
    {
        "type": "closed",
        "question": "Jaka jest fundamentalna różnica między patriotyzmem Gerwazego z 'Pana Tadeusza' a patriotyzmem bohaterów 'Kamieni na szaniec'?",
        "answers": [
            { "text": "Gerwazy walczy dla zemsty i honoru rodu, a bohaterowie 'Kamieni...' dla idei wolnej Polski i dobra wspólnoty.", "correct": true },
            { "text": "Gerwazy jest postacią fikcyjną, a bohaterowie 'Kamieni...' są autentyczni.", "correct": false },
            { "text": "Gerwazy walczy sam, a Alek, Rudy i Zośka działają w zorganizowanej grupie.", "correct": false },
            { "text": "Patriotyzm Gerwazego kończy się klęską, a bohaterów 'Kamieni...' sukcesem.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Opowieści wigilijnej' pod płaszczem Ducha Teraźniejszych Świąt ukrywa się dwoje dzieci: Ciemnota i Nędza. Co symbolizuje ta para i dlaczego Duch ostrzega przed nimi Scrooge'a?",
        "answer": ["Dzieci te symbolizują najgorsze plagi społeczne, które rodzą się z obojętności i chciwości ludzi takich jak Scrooge. Ciemnota to brak edukacji i wiedzy, a Nędza to skrajne ubóstwo. Duch ostrzega, że są to realne problemy społeczne, które, ignorowane, prowadzą do upadku i zniszczenia całego społeczeństwa."]
    },
    {
        "type": "closed",
        "question": "W którym z poniższych zdań zaimek 'się' pełni inną funkcję gramatyczną niż w pozostałych (nie jest częścią strony zwrotnej)?",
        "answers": [
            { "text": "Chłopiec uczył się pilnie do egzaminu.", "correct": false },
            { "text": "Mary przyglądała się uważnie rudzikowi.", "correct": false },
            { "text": "Dick boi się, że spłoszy zwierzęta.", "correct": false },
            { "text": "Matka kupiła sobie nową sukienkę.", "correct": true }
        ]
    },
    {
        "type": "closed",
        "question": "Które z poniższych stwierdzeń najtrafniej oddaje istotę konfliktu tragicznego w 'Balladynie'?",
        "answers": [
            { "text": "Konflikt między dwiema siostrami o rękę księcia.", "correct": false },
            { "text": "Konflikt między światem ludzkim a światem fantastycznym (Goplaną).", "correct": false },
            { "text": "Konflikt rozgrywający się w duszy bohaterki, między niepohamowaną żądzą władzy a resztkami sumienia i lękiem przed karą, prowadzący ją nieuchronnie do samozagłady.", "correct": true },
            { "text": "Konflikt między prawowitym władcą (Pustelnik/Popiel III) a uzurpatorem (Kirkor/Balladyna).", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Zemście' mur graniczny jest przedmiotem sporu. Jaką funkcję symboliczną pełni ten mur w kontekście relacji międzyludzkich?",
        "answer": ["Mur symbolizuje barierę, uprzedzenie i brak komunikacji między ludźmi. Jest fizycznym wyrazem konfliktu, który istnieje w umysłach i sercach Cześnika i Rejenta. Scena jego naprawiania i niszczenia to metafora ich wzajemnej wrogości. Ostateczne pogodzenie się bohaterów oznacza symboliczne zburzenie tego muru."]
    },
    {
        "type": "closed",
        "question": "Co jest wspólnym mianownikiem postawy Króla i Bankiera z 'Małego Księcia'?",
        "answers": [
            { "text": "Obaj są bardzo bogaci i posiadają wiele planet.", "correct": false },
            { "text": "Obaj pragną mieć poddanych, którzy będą ich słuchać.", "correct": false },
            { "text": "Ich życie opiera się na absurdalnej, abstrakcyjnej koncepcji posiadania i władzy (panowanie nad gwiazdami / posiadanie gwiazd), która nie ma żadnego realnego przełożenia na rzeczywistość.", "correct": true },
            { "text": "Obaj są bardzo samotni i pragną towarzystwa Małego Księcia.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego 'Pan Tadeusz' jest nazywany epopeją narodową. Wymień dwie cechy gatunkowe epopei obecne w tym utworze.",
        "answer": ["Jest nazywany epopeją narodową, ponieważ przedstawia losy narodu (polskiego) w przełomowym momencie historycznym (epoka napoleońska). Cechy epopei to: 1. Obecność bohatera zbiorowego (szlachta). 2. Ukazanie losów bohaterów na tle ważnych wydarzeń historycznych. (Inne możliwe: inwokacja, rozbudowane porównania homeryckie, wszechwiedzący narrator, podniosły styl)."]
    },
    {
        "type": "closed",
        "question": "W 'Reducie Ordona' narrator, opisując obrońców, używa sformułowania 'garstka chuda'. Jaki efekt artystyczny osiąga Mickiewicz poprzez ten epitet?",
        "answers": [
            { "text": "Pokazuje złą kondycję fizyczną i niedożywienie polskich żołnierzy.", "correct": false },
            { "text": "Podkreśla ogromną dysproporcję sił między nielicznymi obrońcami a potężną armią rosyjską, potęgując heroizm obrońców.", "correct": true },
            { "text": "Wyraża litość i współczucie dla skazanych na klęskę Polaków.", "correct": false },
            { "text": "Krytykuje dowództwo za słabe przygotowanie reduty do obrony.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Artyscie' Mrożka Kogut chce grać rolę lwa. Na czym polega absurd jego aspiracji, odnosząc się do natury obu zwierząt?",
        "answer": ["Absurd polega na fundamentalnej sprzeczności między naturą a ambicją. Lew jest symbolem siły, drapieżności i królewskiej godności, podczas gdy kogut symbolizuje prozaiczną, wiejską codzienność i... bycie ofiarą drapieżników (np. lisów). Próba zagrania lwa przez koguta jest z góry skazana na porażkę, bo jest to zaprzeczenie własnej tożsamości."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zdań jest przykładem mowy zależnej?",
        "answers": [
            { "text": "Nauczyciel powiedział: 'Jutro będzie kartkówka'.", "correct": false },
            { "text": "Nauczyciel powiedział, że jutro będzie kartkówka.", "correct": true },
            { "text": "Nauczyciel powiedział o jutrzejszej kartkówce.", "correct": false },
            { "text": "'Jutro będzie kartkówka', powiedział nauczyciel.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolikę pierścienia, który Bilbo Baggins znajduje w jaskini Golluma. Co on reprezentuje?",
        "answer": ["Pierścień symbolizuje pokusę, władzę i brzemię moralne. Daje on niewidzialność, czyli potężne narzędzie, ale jednocześnie ma niszczycielski wpływ na swojego właściciela (jak na Golluma). Dla Bilba staje się on testem charakteru – czy użyje go dla dobra, czy ulegnie jego mocy. Reprezentuje on siły, które mogą prowadzić zarówno do heroizmu, jak i do upadku."]
    },
    {
        "type": "closed",
        "question": "Wskaż grupę postaci, w której każda z nich, w pewnym momencie swojego życia, ukrywała swoją prawdziwą tożsamość lub intencje pod jakąś 'maską'.",
        "answers": [
            { "text": "Alina, Nemeczek, Ordon", "correct": false },
            { "text": "Jacek Soplica, Papkin, Rejent Milczek", "correct": true },
            { "text": "Sędzia Soplica, Scrooge, Bernard Zygier", "correct": false },
            { "text": "Mały Książę, Dick, Gerwazy", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Syzyfowych pracach' Marcin Borowicz płacze po recytacji 'Reduty Ordona'. Co jest przyczyną jego płaczu?",
        "answer": ["Jego płacz jest wyrazem gwałtownego wstrząsu emocjonalnego. To łzy wstydu za swoją dotychczasową postawę i uleganie rusyfikacji, ale jednocześnie łzy wzruszenia i katharsis – oczyszczenia, które prowadzi do odrodzenia świadomości narodowej. Uświadamia sobie, co stracił i co właśnie odzyskał."]
    },
    {
        "type": "closed",
        "question": "Która z poniższych par słów jest parą antonimów (wyrazów o znaczeniu przeciwnym)?",
        "answers": [
            { "text": "gruby – puszysty", "correct": false },
            { "text": "mądry – inteligentny", "correct": false },
            { "text": "odwaga – tchórzostwo", "correct": true },
            { "text": "dom – budynek", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego finałowy gest Feriego Acza – oddanie honorów umierającemu Nemeczkowi – jest tak ważny dla przesłania 'Chłopców z Placu Broni'.",
        "answer": ["Ten gest pokazuje, że ponad konfliktem i wrogością istnieje uniwersalny kodeks honorowy i szacunek dla męstwa. Feri Acz, jako przywódca wrogiej armii, potrafi docenić odwagę i poświęcenie małego szeregowca. To moment, w którym 'wojna' ustępuje miejsca człowieczeństwu, a wartości takie jak honor i godność okazują się ważniejsze niż zwycięstwo."]
    },
    {
        "type": "closed",
        "question": "W 'Latarniku' Henryka Sienkiewicza, utrata posady przez Skawińskiego jest konsekwencją zaniedbania obowiązku. Jaka była bezpośrednia przyczyna tego zaniedbania?",
        "answers": [
            { "text": "Nagłe pogorszenie się stanu zdrowia bohatera.", "correct": false },
            { "text": "Silny sztorm, który uniemożliwił zapalenie latarni.", "correct": false },
            { "text": "Zaczytanie się w 'Panu Tadeuszu', co spowodowało tak silne przeżycia emocjonalne, że zapomniał o całym świecie.", "correct": true },
            { "text": "Zaspanie po ciężkim dniu pracy.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W zdaniu: 'Spotkamy się po lekcjach' wyraz 'po' jest przyimkiem. Utwórz inne zdanie, w którym wyraz 'po' będzie partykułą.",
        "answer": ["Daj mi po jednym cukierku dla każdego dziecka."]
    },
    {
        "type": "closed",
        "question": "Moralność ludowa przedstawiona w 'Dziadach części II' opiera się na prostej zasadzie 'nie ma winy bez kary'. Który z duchów najlepiej ilustruje tę zasadę w odniesieniu do grzechu przeciwko ludzkiej solidarności?",
        "answers": [
            { "text": "Duchy Józia i Rózi.", "correct": false },
            { "text": "Widmo Złego Pana.", "correct": true },
            { "text": "Duch pasterki Zosi.", "correct": false },
            { "text": "Milczące Widmo podążające za Pasterką.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj tytuł satyry Ignacego Krasickiego 'Żona modna'. Co jest prawdziwym celem krytyki autora?",
        "answer": ["Prawdziwym celem krytyki nie jest moda sama w sobie, ale bezmyślne, powierzchowne i snobistyczne naśladowanie obcych wzorców z pogardą dla własnej, narodowej tradycji. Tytułowa 'żona modna' jest symbolem tej wady, która prowadzi do ruiny finansowej, zniszczenia domu (w sensie dosłownym i symbolicznym) i kryzysu wartości."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym orzeczenie jest wyrażone w stronie biernej.",
        "answers": [
            { "text": "Marysia od dawna opiekowała się ogrodem.", "correct": false },
            { "text": "Ogród był od dawna pielęgnowany przez Marysię.", "correct": true },
            { "text": "Ogród pięknie zakwitł dzięki opiece Marysi.", "correct": false },
            { "text": "Marysia postanowiła zająć się ogrodem.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Trenie I' Kochanowski przywołuje postać Heraklita. Dlaczego odwołuje się właśnie do tego filozofa?",
        "answer": ["Heraklit z Efezu był nazywany 'ciemnym filozofem' lub 'płaczącym filozofem', ponieważ głosił tezę o powszechnej zmienności i przemijaniu wszystkiego ('panta rhei' - wszystko płynie). Poeta przywołuje go jako symbol uniwersalnego smutku i żalu nad nietrwałością ludzkiego życia, próbując nadać swojemu osobistemu bólowi wymiar ogólnoludzki."]
    },
    {
        "type": "closed",
        "question": "Który z poniższych cytatów z 'Małego Księcia' najlepiej oddaje ideę odpowiedzialności jako fundamentu miłości i przyjaźni?",
        "answers": [
            { "text": "'Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.'", "correct": false },
            { "text": "'Stajesz się odpowiedzialny na zawsze za to, co oswoiłeś.'", "correct": true },
            { "text": "'Mowa jest źródłem nieporozumień.'", "correct": false },
            { "text": "'Dorośli są naprawdę bardzo dziwni.'", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postać Klary w 'Zemście' jest często uważana za reprezentantkę nowej, oświeceniowej mentalności, w przeciwieństwie do pozostałych bohaterów.",
        "answer": ["Klara reprezentuje nową mentalność, ponieważ jest postacią racjonalną, samodzielnie myślącą i pragmatyczną. Nie poddaje się biernie woli opiekunów, ma własny plan (dotyczący Wacława) i stawia swojemu adoratorowi (Papkinowi) konkretne, logiczne warunki. Jej postawa kontrastuje z sarmacką porywczością Cześnika i chciwością Rejenta."]
    },
    {
        "type": "closed",
        "question": "Analizując 'Quo vadis', można stwierdzić, że kluczowym momentem nawrócenia Winicjusza jest chwila, gdy:",
        "answers": [
            { "text": "Po raz pierwszy słyszy nauki Piotra Apostoła.", "correct": false },
            { "text": "Zostaje odrzucony przez Ligię po próbie jej porwania.", "correct": false },
            { "text": "Widzi odwagę i godność chrześcijan idących na śmierć na arenie, co uświadamia mu siłę ich wiary.", "correct": true },
            { "text": "Otrzymuje pomoc od chrześcijan po tym, jak został ranny.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd składniowy w zdaniu 'Wchodząc po schodach, poręcz była zimna' i zapisz je poprawnie.",
        "answer": ["Błąd: podmiot logiczny imiesłowu ('ja') jest inny niż podmiot zdania głównego ('poręcz'). Poprawnie: 'Gdy wchodziłem/wchodziłam po schodach, poręcz była zimna.'"]
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