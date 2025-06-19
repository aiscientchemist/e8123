const questions = [
    {
        "type": "closed",
        "question": "W 'Zemście', postać Wacława, w przeciwieństwie do Cześnika i Rejenta, reprezentuje:",
        "answers": [
            { "text": "Sarmacki ideał honoru i wierności rodowi.", "correct": false },
            { "text": "Oświeceniowy pragmatyzm i racjonalne dążenie do celu, nawet za cenę drobnych manipulacji i nieszczerości.", "correct": true },
            { "text": "Romantyczny idealizm i skłonność do nieszczęśliwej miłości.", "correct": false },
            { "text": "Głęboką pobożność i chęć pogodzenia zwaśnionych sąsiadów.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Małym Księciu' Żmija mówi, że 'rozwiązuje wszystkie zagadki'. Zinterpretuj to enigmatyczne stwierdzenie w kontekście jej roli i symboliki śmierci.",
        "answer": ["Stwierdzenie to jest metaforą ostateczności śmierci. Śmierć, którą oferuje Żmija, jest 'rozwiązaniem' wszystkich ziemskich problemów, trudów i pytań – kończy je w sposób definitywny. Jest to gorzka prawda o śmierci jako kresie wszelkich doczesnych zmagań i zagadek egzystencji."]
    },
    {
        "type": "closed",
        "question": "Wyraz 'przedwiośnie' jest pod względem budowy słowotwórczej:",
        "answers": [
            { "text": "Wyrazem pochodnym z przyrostkiem.", "correct": false },
            { "text": "Złożeniem, czyli wyrazem powstałym z połączenia dwóch tematów słowotwórczych.", "correct": true },
            { "text": "Wyrazem pochodnym z przedrostkiem 'przed-'.", "correct": false },
            { "text": "Wyrazem podstawowym, niepodzielnym słowotwórczo.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Co łączy podmiot liryczny Inwokacji 'Pana Tadeusza' ze Skawińskim z 'Latarnika'?",
        "answers": [
            { "text": "Obaj są żołnierzami walczącymi w legionach Napoleona.", "correct": false },
            { "text": "Doświadczenie emigracji i tułaczki oraz postrzeganie ojczyzny jako utraconej, wyidealizowanej krainy dzieciństwa, której obraz nosi się w sercu.", "correct": true },
            { "text": "Nadzieja na rychły powrót do kraju dzięki pomocy Francji.", "correct": false },
            { "text": "Pragnienie znalezienia spokojnego miejsca, by spisać swoje wspomnienia.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Zemście' Rejent jest autorem słów: 'Jeśli nie chcesz mojej zguby, Krokodyla daj mi, luby!'. Jaką cechę charakteru Rejenta demaskuje ta próba napisania listu miłosnego?",
        "answer": ["Demaskuje to jego całkowity brak wrażliwości, empatii i autentycznych uczuć. Nawet w sferze miłości myśli kategoriami transakcji, podstępu i 'chwytania' kogoś w pułapkę ('krokodyl'). Pokazuje to, że jego umysł jest na stałe nastawiony na intrygę i zysk, a język miłości jest mu całkowicie obcy."]
    },
    {
        "type": "closed",
        "question": "Postać Telimeny w 'Panu Tadeuszu' jest postacią niejednoznaczną, ponieważ:",
        "answers": [
            { "text": "Z jednej strony jest patriotką, a z drugiej współpracuje z Rosjanami.", "correct": false },
            { "text": "Z jednej strony jest postacią komiczną i pretensjonalną, z drugiej – pragmatyczną kobietą walczącą o przetrwanie i pozycję w świecie zdominowanym przez mężczyzn.", "correct": true },
            { "text": "Kocha Tadeusza, ale jednocześnie flirtuje z Hrabią i Asesorem.", "correct": false },
            { "text": "Jest opiekunką Zosi, ale w rzeczywistości jej zazdrości i szkodzi.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Pojedynek Cześnika z Rejentem, na który obaj się umawiają, ostatecznie nie dochodzi do skutku. Co symbolizuje przerwanie tego pojedynku przez Księdza Robaka?",
        "answer": ["Symbolizuje to koniec epoki sarmackiej, w której prywatne spory i wendety ('zajazdy') były na porządku dziennym. Interwencja Robaka, emisariusza narodowego, oznacza, że czas prywaty musi ustąpić miejsca ważniejszej sprawie – zorganizowanej walce o niepodległość. To symboliczne podporządkowanie interesu prywatnego interesowi narodowemu."]
    },
    {
        "type": "closed",
        "question": "Wskaż cechę, która jest wspólna dla Boki z 'Chłopców z Placu Broni' i Zośki z 'Kamieni na szaniec' jako przywódców.",
        "answers": [
            { "text": "Skłonność do brawury i podejmowania niepotrzebnego ryzyka.", "correct": false },
            { "text": "Poczucie odpowiedzialności za grupę, strategiczne myślenie i zdolność do podejmowania trudnych, niepopularnych decyzji dla dobra sprawy.", "correct": true },
            { "text": "Bezwzględne egzekwowanie posłuszeństwa za pomocą siły.", "correct": false },
            { "text": "Dążenie do osobistej sławy i zaszczytów.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Jaka jest główna przyczyna upadku moralnego Balladyny?",
        "answer": ["Główną przyczyną jest jej niepohamowana, patologiczna ambicja i żądza władzy, która całkowicie zagłusza w niej głos sumienia i wszelkie ludzkie uczucia, takie jak miłość siostrzana czy córkowski obowiązek. Zbrodnia nie jest dla niej celem, a jedynie narzędziem do osiągnięcia wyższej pozycji."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym czasownik 'ubrać' został użyty niepoprawnie z punktu widzenia normy wzorcowej języka polskiego.",
        "answers": [
            { "text": "Matka ubrała choinkę w piękne bombki.", "correct": false },
            { "text": "Trzeba ubrać buty, bo na dworze jest zimno.", "correct": true },
            { "text": "Projektantka mody ubrała modelkę w nową suknię.", "correct": false },
            { "text": "Na święta ubrała stół w najlepszy obrus.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "W 'Dziadach części II', dlaczego duch pasterki Zosi nie może trafić ani do nieba, ani do piekła i jest zawieszony 'pomiędzy'?",
        "answer": ["Jest zawieszona pomiędzy światami, ponieważ za życia nie doświadczyła pełni człowieczeństwa. Odrzucając miłość i unikając zarówno ziemskiego szczęścia, jak i cierpienia, żyła w świecie iluzji i marzeń. Jej kara jest symbolicznym odzwierciedleniem jej życia – stanu 'nieważkości' i braku zakorzenienia w realnym świecie."]
    },
    {
        "type": "closed",
        "question": "Które z poniższych zdań zawiera podmiot logiczny (wyrażony w dopełniaczu)?",
        "answers": [
            { "text": "Na stole leżały książki i zeszyty.", "correct": false },
            { "text": "W pokoju zabrakło świeżego powietrza.", "correct": true },
            { "text": "Dzieci radośnie bawiły się na placu zabaw.", "correct": false },
            { "text": "Ktoś zapukał głośno do drzwi.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, na czym polega tragizm losu postaci Ordona w interpretacji Adama Mickiewicza.",
        "answer": ["Jego tragizm polega na tym, że jest zmuszony do dokonania wyboru między nieuchronną klęską i niewolą a samobójczą śmiercią, która jest jednocześnie aktem zniszczenia i ostatecznego zwycięstwa moralnego. Wysadzając redutę, niszczy siebie i swoich żołnierzy, ale ratuje honor i zadaje wrogowi straty. To wybór między złem a złem."]
    },
    {
        "type": "closed",
        "question": "Która z postaci literackich z podanej listy lektur najpełniej uosabia renesansowy ideał 'poety doctus' (poety uczonego), który łączy talent z rozległą wiedzą i świadomością tradycji antycznej?",
        "answers": [
            { "text": "Adam Mickiewicz (jako autor 'Pana Tadeusza')", "correct": false },
            { "text": "Jan Kochanowski", "correct": true },
            { "text": "Juliusz Słowacki", "correct": false },
            { "text": "Henryk Sienkiewicz", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj symbolicznie scenę, w której Nemeczek z 'Chłopców z Placu Broni' trzykrotnie zanurza się w zimnej wodzie w ogrodzie botanicznym. Co symbolizuje ten akt?",
        "answer": ["Ten akt symbolizuje jego niezłomny charakter, poczucie obowiązku i honoru. Jest to rodzaj 'potrójnej próby', która potwierdza jego wierność sprawie Placu Broni. Mimo strachu i słabości fizycznej, jego hart ducha zwycięża. To symboliczne poświęcenie, które ostatecznie prowadzi do jego choroby i śmierci, ale także do jego moralnego triumfu."]
    },
    {
        "type": "closed",
        "question": "Wskaż zdanie, w którym występuje błąd w stopniowaniu przymiotnika lub przysłówka.",
        "answers": [
            { "text": "To jest najciekawsza książka, jaką czytałem.", "correct": false },
            { "text": "On jest bardziej inteligentniejszy od swojego brata.", "correct": true },
            { "text": "Dzisiaj czuję się gorzej niż wczoraj.", "correct": false },
            { "text": "Ten film był mniej interesujący niż poprzedni.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego postawa Bankiera z 'Małego Księcia' jest absurdalna z punktu widzenia logiki i użyteczności.",
        "answer": ["Jego postawa jest absurdalna, ponieważ 'posiada' gwiazdy tylko na papierze – liczy je i zapisuje, ale to 'posiadanie' niczego nie zmienia, nie przynosi żadnego pożytku ani jemu, ani gwiazdom. Jest to metafora chciwości i gromadzenia dla samego gromadzenia, całkowicie oderwanego od realnej wartości i celu."]
    },
    {
        "type": "closed",
        "question": "W 'Latarniku' polska książka działa na Skawińskiego jak 'płomień ogarniający starą strzechę'. Jaki środek stylistyczny został tu użyty i co on wyraża?",
        "answers": [
            { "text": "Metafora; wyraża gwałtowność i siłę stłumionych uczuć patriotycznych, które wybuchają z niszczycielską siłą.", "correct": true },
            { "text": "Apostrofa; wyraża bezpośredni zwrot do książki.", "correct": false },
            { "text": "Personifikacja; nadaje książce cechy istoty żywej.", "correct": false },
            { "text": "Hiperbola; wyolbrzymia znaczenie lektury dla bohatera.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Przekształć zdanie w mowie niezależnej na mowę zależną: 'Pomyślałem sobie: To jest naprawdę niezwykłe!'",
        "answer": ["Pomyślałem sobie, że to jest/było naprawdę niezwykłe."]
    },
    {
        "type": "closed",
        "question": "Która z wymienionych par postaci najlepiej ilustruje konflikt między sarmacką porywczością a oświeceniowym, chłodnym wyrachowaniem?",
        "answers": [
            { "text": "Alina i Balladyna", "correct": false },
            { "text": "Gerwazy i Protazy", "correct": false },
            { "text": "Cześnik i Rejent", "correct": true },
            { "text": "Tadeusz i Hrabia", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wyjaśnij, dlaczego Alina, siostra Balladyny, może być uznana za postać-symbol, a nie w pełni rozwiniętą postać psychologiczną.",
        "answer": ["Alina jest postacią-symbolem, ponieważ uosabia czyste, wyidealizowane dobro, niewinność i miłość. Brakuje jej wewnętrznych konfliktów, wad czy skomplikowanej psychologii. Jej funkcja w dramacie polega na stworzeniu jaskrawego kontrastu dla zła i ambicji Balladyny, a nie na realistycznym przedstawieniu ludzkiego charakteru."]
    },
    {
        "type": "closed",
        "question": "Analizując 'Treny' Kochanowskiego jako cykl, można zauważyć, że kryzys światopoglądowy poety najgłębiej wyraża się w podważeniu:",
        "answers": [
            { "text": "Wartości poezji i sztuki.", "correct": false },
            { "text": "Renesansowej wiary w harmonię świata, rozum i cnotę jako gwarancję szczęśliwego życia.", "correct": true },
            { "text": "Wartości rodziny i miłości rodzicielskiej.", "correct": false },
            { "text": "Autorytetu władzy królewskiej i porządku społecznego.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Wskaż błąd składniowy w zdaniu: 'Idąc na spotkanie, zaczął padać ulewny deszcz.' i zapisz je poprawnie.",
        "answer": ["Błąd: podmiot logiczny imiesłowu ('ja') jest inny niż podmiot zdania głównego ('deszcz'). Poprawnie: 'Gdy szedłem/szłam na spotkanie, zaczął padać ulewny deszcz.'"]
    },
    {
        "type": "closed",
        "question": "Który z bohaterów literackich, poprzez swoje działanie, najpełniej realizuje przesłanie biblijnej przypowieści o miłosiernym Samarytaninie?",
        "answers": [
            { "text": "Ksiądz Robak opatrujący rannych po bitwie.", "correct": true },
            { "text": "Scrooge dający indyka rodzinie Cratchitów.", "correct": false },
            { "text": "Boka opiekujący się chorym Nemeczkiem.", "correct": false },
            { "text": "Dick przynoszący Mary narzędzia i nasiona.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Zinterpretuj ostatnie słowa Gerwazego w 'Panu Tadeuszu' wypowiedziane po spowiedzi Księdza Robaka: 'Amen'. Co wyraża to jedno słowo?",
        "answer": ["Słowo 'Amen' wyraża ostateczną akceptację, przebaczenie i pojednanie. Jest to symboliczne zakończenie trwającej latami nienawiści i żądzy zemsty. Gerwazy, uznając pokutę i bohaterstwo Jacka Soplicy, zamyka stary rozdział i akceptuje nowy porządek oparty na przebaczeniu w imię sprawy narodowej."]
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