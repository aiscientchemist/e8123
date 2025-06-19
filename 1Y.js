// --- Definicja pytań (z nowym polem "type") ---
const questions = [
    {
        "type": "closed",
        "question": "Read the sentence: 'If I hadn't missed my flight, I would be in Paris right now.' What does this sentence describe?",
        "answers": [
            { "text": "A likely future event.", "correct": false },
            { "text": "A general truth or habit.", "correct": false },
            { "text": "A hypothetical past event with a hypothetical present result.", "correct": true },
            { "text": "A regret about a present situation.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A sign in a library says: 'Patrons are kindly requested to refrain from eating.' What is the most accurate meaning of 'refrain from'?",
        "answers": [
            { "text": "to avoid doing something", "correct": true },
            { "text": "to do something quietly", "correct": false },
            { "text": "to ask for permission first", "correct": false },
            { "text": "to eat only small snacks", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the second sentence so that it has a similar meaning to the first sentence. Use the word 'prevented'. First sentence: 'The heavy snow stopped us from getting to the airport.'",
        "answer": ["The heavy snow prevented us from getting to the airport."]
    },
    {
        "type": "closed",
        "question": "Which sentence correctly uses the structure 'used to'?",
        "answers": [
            { "text": "I am used to live in a big city, so the noise doesn't bother me.", "correct": false },
            { "text": "He can't get used to waking up so early for his new job.", "correct": true },
            { "text": "Did you used to have a dog when you were a child?", "correct": false },
            { "text": "She used to watching cartoons every Saturday morning.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Your friend says, 'I'm not sure my English is good enough for the exchange program.' How can you express reassurance?",
        "answers": [
            { "text": "Your grammar has always been a problem.", "correct": false },
            { "text": "Don't be so hard on yourself. Your progress has been amazing!", "correct": true },
            { "text": "Well, maybe you should wait another year.", "correct": false },
            { "text": "I agree, the other candidates are very strong.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'Despite his initial ____ (RELUCTANT), he eventually agreed to help.'",
        "answer": ["reluctance"]
    },
    {
        "type": "closed",
        "question": "Read the dialogue. A: 'I can't believe I failed the test.' B: '______. You'll do better next time.' What is the most empathetic response for B?",
        "answers": [
            { "text": "I told you so.", "correct": false },
            { "text": "That's tough luck.", "correct": true },
            { "text": "You deserved it.", "correct": false },
            { "text": "Why are you surprised?", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Which sentence correctly implies that an action was unnecessary but was done anyway?",
        "answers": [
            { "text": "You didn't need to buy any milk, so I'm glad you didn't.", "correct": false },
            { "text": "You needn't have bought any milk; we already have three cartons.", "correct": true },
            { "text": "You shouldn't buy milk; it's not good for you.", "correct": false },
            { "text": "You must not buy any milk; I will do it.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with ONE word: 'Hardly had I sat down ______ the phone rang.'",
        "answer": ["when"]
    },
    {
        "type": "closed",
        "question": "What is the primary purpose of this text? 'Our revolutionary new app tracks your sleep patterns, providing detailed analytics to help you improve your rest and boost your energy levels. Download today for a free 7-day trial!'",
        "answers": [
            { "text": "To inform readers about the science of sleep.", "correct": false },
            { "text": "To warn about the dangers of sleep deprivation.", "correct": false },
            { "text": "To persuade the reader to try a new product.", "correct": true },
            { "text": "To review different sleep-tracking applications.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Which word is the 'odd one out' based on its meaning?",
        "answers": [
            { "text": "Meticulous", "correct": false },
            { "text": "Careless", "correct": true },
            { "text": "Thorough", "correct": false },
            { "text": "Precise", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the question using reported speech: She asked me, 'Can you help me tomorrow?'",
        "answer": ["She asked me if I could help her the next day.", "She asked me whether I could help her the next day."]
    },
    {
        "type": "closed",
        "question": "The government's decision had a profound ______ on the country's economy.",
        "answers": [
            { "text": "affect", "correct": false },
            { "text": "effect", "correct": true },
            { "text": "afflict", "correct": false },
            { "text": "effort", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Situation: You are in a crowded bus and need to get to the exit. What is the most polite thing to say?",
        "answers": [
            { "text": "Move out of the way!", "correct": false },
            { "text": "Let me pass.", "correct": false },
            { "text": "Excuse me, could I just get past, please?", "correct": true },
            { "text": "I'm getting off here!", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'He prides himself ____ his ability to solve complex puzzles.'",
        "answer": ["on"]
    },
    {
        "type": "closed",
        "question": "Which phrasal verb means 'to reject an offer'?",
        "answers": [
            { "text": "take up", "correct": false },
            { "text": "turn down", "correct": true },
            { "text": "bring up", "correct": false },
            { "text": "look after", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I wish I ______ how to play the guitar. It looks so cool.",
        "answers": [
            { "text": "had known", "correct": false },
            { "text": "would know", "correct": false },
            { "text": "knew", "correct": true },
            { "text": "am knowing", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence starting with 'This is the scientist...'. Original sentence: 'A famous scientist discovered this element. This is her.'",
        "answer": ["This is the scientist who discovered this element."]
    },
    {
        "type": "closed",
        "question": "This cheese is ______ to be the best in the world. Many experts agree.",
        "answers": [
            { "text": "considered", "correct": true },
            { "text": "regarded", "correct": false },
            { "text": "thought about", "correct": false },
            { "text": "believed in", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Situation: Your friend has been working on a project for weeks and is feeling discouraged. What can you say to motivate them?",
        "answers": [
            { "text": "Maybe you should just give up.", "correct": false },
            { "text": "It's not as good as you think.", "correct": false },
            { "text": "Don't lose heart! You've put in so much great work already.", "correct": true },
            { "text": "It's probably too difficult for you.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The evidence presented in court was not ____ (CONVINCE) enough.'",
        "answer": ["convincing"]
    },
    {
        "type": "closed",
        "question": "The film was a bit predictable; _______, the special effects were breathtaking.",
        "answers": [
            { "text": "consequently", "correct": false },
            { "text": "in addition", "correct": false },
            { "text": "nevertheless", "correct": true },
            { "text": "furthermore", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the underlying meaning of the idiom 'to be on the same page'?",
        "answers": [
            { "text": "To be reading the same book.", "correct": false },
            { "text": "To have a shared understanding or agreement.", "correct": true },
            { "text": "To be of the same age.", "correct": false },
            { "text": "To be physically close to someone.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct form of the verb: 'My parents had my room ______ (paint) while I was at summer camp.'",
        "answer": ["painted"]
    },
    {
        "type": "closed",
        "question": "______ being an excellent student, she is also a talented athlete.",
        "answers": [
            { "text": "Despite", "correct": false },
            { "text": "Although", "correct": false },
            { "text": "As well as", "correct": false },
            { "text": "Besides", "correct": true }
        ]
    }
];

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