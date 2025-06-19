const questions =
    [
        {
            "type": "closed",
            "question": "W 'Zemście', Cześnik, planując ślub z Podstoliną, motywowany jest głównie:",
            "answers": [
                { "text": "Głębokim uczuciem i pragnieniem założenia rodziny.", "correct": false },
                { "text": "Chęcią zrobienia na złość Rejentowi i zdobycia dostępu do jej majątku.", "correct": true },
                { "text": "Potrzebą posiadania gospodyni, która zajmie się jego domem.", "correct": false },
                { "text": "Lękiem przed samotnością i starością.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W 'Małym Księciu', co symbolizuje fakt, że Róża ma 'tylko cztery kolce, aby się bronić przed całym światem'?",
            "answer": ["Symbolizuje to jej kruchą i pozorną siłę. Kolce są manifestacją jej dumy i próby ochrony własnej wrażliwości. Jednak w rzeczywistości są one nieadekwatną i niewystarczającą obroną przed prawdziwymi zagrożeniami. To metafora ludzkiej próżności, która jest tak naprawdę maską dla kruchości."]
        },
        {
            "type": "closed",
            "question": "W którym z poniższych zdań występuje błąd polegający na niewłaściwym użyciu liczebnika zbiorowego?",
            "answers": [
                { "text": "Na podwórku bawiło się pięcioro dzieci.", "correct": false },
                { "text": "Kupiłem dwoje nożyczek i troje sanek.", "correct": false },
                { "text": "Do klasy weszło czworo dziewczyn.", "correct": true },
                { "text": "W stadzie było dwadzieścioro owiec.", "correct": false }
            ]
        },
        {
            "type": "closed",
            "question": "Co łączy postawę moralną Aleksego Dawidowskiego ('Alek') z 'Kamieni na szaniec' z postawą Ikara z mitologii?",
            "answers": [
                { "text": "Obaj buntują się przeciwko swoim ojcom.", "correct": false },
                { "text": "W obu przypadkach cechuje ich brawurowa odwaga, fantazja i skłonność do przekraczania granic (jeden w walce, drugi w locie), co w pewnym sensie prowadzi ich do śmierci.", "correct": true },
                { "text": "Obaj są motywowani chęcią zdobycia sławy.", "correct": false },
                { "text": "Obaj działają w grupie, wspierani przez przyjaciół.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Jaka jest symboliczna rola postaci Wojskiego Hreczechy w 'Panu Tadeuszu'?",
            "answer": ["Wojski jest strażnikiem dawnych obyczajów i tradycji szlacheckiej, zwłaszcza w dziedzinie myślistwa i 'sztuki opowiadania'. Jest uosobieniem harmonii z naturą, doświadczenia i artystycznej duszy (koncert na rogu). Reprezentuje on porządek i kunszt odchodzącego w przeszłość świata sarmackiego."]
        },
        {
            "type": "closed",
            "question": "Postać Nerona w 'Quo vadis' jest przedstawiona jako:",
            "answers": [
                { "text": "Skuteczny i silny władca, który dba o potęgę Rzymu.", "correct": false },
                { "text": "Uosobienie tyranii, artystycznej megalomanii i moralnego zepsucia; postać groteskowa i przerażająca zarazem, która traktuje świat jako scenę dla swoich chorych fantazji.", "correct": true },
                { "text": "Tragiczny bohater, niezrozumiany przez otoczenie geniusz.", "correct": false },
                { "text": "Postać drugoplanowa, która nie ma większego wpływu na losy bohaterów.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, dlaczego postać Klary w 'Zemście' jest postacią stosunkowo statyczną.",
            "answer": ["Jest postacią statyczną, ponieważ jej charakter i cele nie ulegają zmianie w toku akcji. Od początku do końca jest rozsądną, zakochaną w Wacławie panną, która konsekwentnie dąży do małżeństwa. Nie przechodzi wewnętrznej przemiany; to okoliczności wokół niej się zmieniają, a ona pozostaje stałym punktem odniesienia."]
        },
        {
            "type": "closed",
            "question": "W 'Kamieniach na szaniec', która z postaci jest symbolem przywódcy-organizatora, stratega i człowieka o głębokiej refleksyjności?",
            "answers": [
                { "text": "Rudy (Jan Bytnar)", "correct": false },
                { "text": "Alek (Alek Dawidowski)", "correct": false },
                { "text": "Zośka (Tadeusz Zawadzki)", "correct": true },
                { "text": "Wesoły (Stanisław Broniewski)", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Zinterpretuj symbolikę 'jabłka niezgody' w mitologii greckiej.",
            "answer": ["'Jabłko niezgody' z napisem 'dla najpiękniejszej' jest symbolem pozornego dobra, które staje się przyczyną konfliktu, zazdrości i wojny. Jest to metafora tego, jak ludzka próżność i rywalizacja o błahą z pozoru rzecz mogą prowadzić do katastrofalnych w skutkach wydarzeń (wojny trojańskiej)."]
        },
        {
            "type": "closed",
            "question": "Wskaż zdanie, w którym występuje błąd polegający na niepoprawnym użyciu formy wołacza.",
            "answers": [
                { "text": "Kasiu, podejdź tu na chwilę.", "correct": false },
                { "text": "Panie kierowniku, mam pytanie.", "correct": false },
                { "text": "Mój Boże, co się stało!", "correct": false },
                { "text": "Adam, chodź na obiad!", "correct": true }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, na czym polega tragizm losu postaci tytułowej z ballady 'Lilije'.",
            "answer": ["Jej tragizm polega na tym, że próbując ukryć jedną zbrodnię (zabójstwo męża), pogrąża się w kolejnych grzechach (kłamstwo, świętokradztwo), co prowadzi ją do nieuchronnej, nadprzyrodzonej kary. Jest to tragizm winy, od której nie ma ucieczki. Jej działania, mające na celu zapewnienie sobie bezpieczeństwa, paradoksalnie prowadzą ją do zguby."]
        },
        {
            "type": "closed",
            "question": "Wskaż, która z postaci literackich w najpełniejszy sposób uosabia romantyczny typ bohatera, który po osobistej tragedii poświęca życie sprawie narodowej.",
            "answers": [
                { "text": "Jacek Soplica", "correct": true },
                { "text": "Skawiński", "correct": false },
                { "text": "Marcin Borowicz", "correct": false },
                { "text": "Marek Winicjusz", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W 'Panu Tadeuszu' polonez tańczony na końcu utworu jest 'ostatnim'. Co symbolizuje ten taniec?",
            "answer": ["Taniec ten symbolizuje harmonię, porządek, pojednanie i nadzieję na przyszłość. Jest to obraz idealnej wspólnoty narodowej, w której wszyscy, zgodnie z hierarchią, podążają w jednym kierunku. 'Ostatni' podkreśla, że jest to pożegnanie z odchodzącym światem szlacheckim, ale jednocześnie wzór i testament dla przyszłych pokoleń."]
        },
        {
            "type": "closed",
            "question": "W 'Opowieści wigilijnej', postać Belli, dawnej narzeczonej Scrooge'a, symbolizuje:",
            "answers": [
                { "text": "Utraconą szansę na miłość, rodzinę i szczęście, które Scrooge poświęcił dla pieniędzy.", "correct": true },
                { "text": "Chciwość i materializm kobiet w epoce wiktoriańskiej.", "correct": false },
                { "text": "Nieszczęśliwą miłość, która prowadzi do nienawiści.", "correct": false },
                { "text": "Powód, dla którego Scrooge zaczął nienawidzić świąt.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Przekształć zdanie w mowie zależnej na mowę niezależną: 'Zastanawiał się, czy powinien to zrobić.'",
            "answer": ["Zastanawiał się: 'Czy powinienem to zrobić?'."]
        },
        {
            "type": "closed",
            "question": "Które z poniższych dzieł najpełniej realizuje model komedii charakterów?",
            "answers": [
                { "text": "'Pan Tadeusz'", "correct": false },
                { "text": "'Zemsta'", "correct": true },
                { "text": "'Chłopcy z Placu Broni'", "correct": false },
                { "text": "'Artysta'", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Zinterpretuj symboliczną funkcję postaci Piotra Apostoła w 'Quo vadis'.",
            "answer": ["Piotr Apostoł jest symbolem fundamentu, skały ('Ty jesteś Piotr, czyli Opoka...'), na której ma być zbudowany Kościół. Jest on uosobieniem wiary, autorytetu moralnego i ojcowskiej opieki nad wspólnotą chrześcijan. Jego chwila zwątpienia (ucieczka z Rzymu) i ostateczny powrót symbolizują, że nawet największy autorytet może mieć słabości, ale siła wiary ostatecznie zwycięża."]
        },
        {
            "type": "closed",
            "question": "Wskaż zdanie, w którym występuje błąd polegający na niewłaściwym użyciu spójnika.",
            "answers": [
                { "text": "Pójdę do sklepu albo do apteki.", "correct": false },
                { "text": "Był zmęczony, więc położył się spać.", "correct": false },
                { "text": "Mimo, że padało, wyszedł na spacer.", "correct": true },
                { "text": "Chociaż padało, wyszedł na spacer.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Jaka jest symboliczna funkcja postaci Maćka nad Maćkami w 'Panu Tadeuszu'?",
            "answer": ["Maciek nad Maćkami jest symbolem starej, sarmackiej Polski – uosobieniem mądrości ludowej, doświadczenia, przywiązania do tradycji i nieufności wobec nowinek i obcych wpływów (nawet Napoleona). Jest on żywą historią i moralnym autorytetem, którego opinia jest niezwykle ceniona w społeczności."]
        },
        {
            "type": "closed",
            "question": "Wskaż, która z postaci literackich w swoim postępowaniu kieruje się przede wszystkim chęcią zadośćuczynienia za popełnione w przeszłości winy.",
            "answers": [
                { "text": "Rejent Milczek", "correct": false },
                { "text": "Jacek Soplica", "correct": true },
                { "text": "Gerwazy Rębajło", "correct": false },
                { "text": "Marek Winicjusz", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wyjaśnij, na czym polega komizm postaci Rejenta Milczka w 'Zemście'.",
            "answer": ["Jego komizm polega na jaskrawym kontraście między jego deklarowaną pobożnością, łagodnością i uległością ('Niech się dzieje wola nieba') a jego rzeczywistym, chciwym i mściwym charakterem. Sposób, w jaki manipuluje prawem i ludźmi, ukrywając się za maską świętoszka, jest źródłem komizmu charakterologicznego i demaskuje jego hipokryzję."]
        },
        {
            "type": "closed",
            "question": "Co jest wspólnym elementem losu bohaterów 'Reduty Ordona' i Spartan w bitwie pod Termopilami?",
            "answers": [
                { "text": "Obrona ojczyzny do ostatniego żołnierza, wbrew przygniatającej przewadze wroga, która staje się moralnym zwycięstwem i symbolem heroizmu.", "correct": true },
                { "text": "Zdrada, która prowadzi do klęski.", "correct": false },
                { "text": "Walka o zdobycie nowych terytoriów.", "correct": false },
                { "text": "Użycie podstępu w celu pokonania przeciwnika.", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "Wskaż błąd frazeologiczny w zdaniu: 'Musimy cofnąć się krok w tył, żeby to przemyśleć' i zapisz je poprawnie.",
            "answer": ["Błąd: pleonazm, tzw. masło maślane ('cofnąć się w tył'). Poprawnie: 'Musimy się cofnąć o krok, żeby to przemyśleć' LUB 'Musimy zrobić krok w tył, żeby to przemyśleć'."]
        },
        {
            "type": "closed",
            "question": "Które z poniższych dzieł w najpełniejszy sposób ukazuje ideę 'pracy u podstaw'?",
            "answers": [
                { "text": "'Syzyfowe prace'", "correct": false },
                { "text": "'Katarynka'", "correct": true },
                { "text": "'Pan Tadeusz'", "correct": false },
                { "text": "'Latarnik'", "correct": false }
            ]
        },
        {
            "type": "open",
            "question": "W 'Trenie X' Kochanowski zwraca się do Urszulki z pytaniem 'Gdzieśkolwiek jest, jeśliś jest...'. Jaki stan ducha poety oddaje to pytanie?",
            "answer": ["Oddaje ono stan skrajnego zwątpienia i kryzysu światopoglądowego. Poeta, nie znajdując pocieszenia w żadnej z filozofii ani religii, zaczyna wątpić w samo istnienie życia pozagrobowego. Jest to wyraz najgłębszej rozpaczy, intelektualnej i duchowej bezradności w obliczu śmierci dziecka."]
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