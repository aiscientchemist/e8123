const questions = [
    {
        "type": "closed",
        "question": "Under no circumstances ______ press that red button. It's for emergencies only.",
        "answers": [
            { "text": "you should", "correct": false },
            { "text": "should you", "correct": true },
            { "text": "you can", "correct": false },
            { "text": "can you to", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Read the text: 'Tom glanced at the clock, sighed heavily, and started tapping his fingers rhythmically on the table.' What does this text strongly imply about Tom?",
        "answers": [
            { "text": "He is relaxed and listening to music.", "correct": false },
            { "text": "He is angry about the situation.", "correct": false },
            { "text": "He is feeling impatient or bored.", "correct": true },
            { "text": "He is deep in thought and concentrating.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a past modal of deduction. Original sentence: 'It's possible that he didn't receive the invitation.'",
        "answer": ["He might not have received the invitation.", "He may not have received the invitation."]
    },
    {
        "type": "closed",
        "question": "The company needs to ______ a solution to this problem before it gets worse.",
        "answers": [
            { "text": "come up with", "correct": true },
            { "text": "get along with", "correct": false },
            { "text": "run out of", "correct": false },
            { "text": "look forward to", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Your friend says, 'Your performance in the play was absolutely fantastic!' What is the most gracious and confident response?",
        "answers": [
            { "text": "Oh, it was nothing special.", "correct": false },
            { "text": "Thank you so much, I'm really glad you enjoyed it.", "correct": true },
            { "text": "You're just saying that to be nice.", "correct": false },
            { "text": "I know, I was great, wasn't I?", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His explanation was completely ____ (LOGICAL) and confused everyone.'",
        "answer": ["illogical"]
    },
    {
        "type": "closed",
        "question": "______ people came to the concert, so it was a financial disaster for the organizers.",
        "answers": [
            { "text": "A few", "correct": false },
            { "text": "Few", "correct": true },
            { "text": "A little", "correct": false },
            { "text": "Little", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What does the idiom 'to see eye to eye' mean?",
        "answers": [
            { "text": "To look at someone directly.", "correct": false },
            { "text": "To have the same opinion or to agree.", "correct": true },
            { "text": "To have good eyesight.", "correct": false },
            { "text": "To be suspicious of someone.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the question using reported speech: She asked, 'Must I finish this report today?'",
        "answer": ["She asked if she had to finish that report that day.", "She asked whether she had to finish that report that day."]
    },
    {
        "type": "closed",
        "question": "Which word describes someone who is careful with money in a positive, wise way?",
        "answers": [
            { "text": "Stingy", "correct": false },
            { "text": "Miserly", "correct": false },
            { "text": "Frugal", "correct": true },
            { "text": "Cheap", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Had I taken your advice, I ________ in this difficult situation now.",
        "answers": [
            { "text": "wouldn't have been", "correct": false },
            { "text": "wouldn't be", "correct": true },
            { "text": "wouldn't have", "correct": false },
            { "text": "weren't", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice, starting with 'The fire...'. Original sentence: 'Someone is thought to have started the fire deliberately.'",
        "answer": ["The fire is thought to have been started deliberately."]
    },
    {
        "type": "closed",
        "question": "I can't go to the party on Saturday as I have a _______ arrangement that I can't cancel.",
        "answers": [
            { "text": "late", "correct": false },
            { "text": "former", "correct": false },
            { "text": "prior", "correct": true },
            { "text": "next", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You are very late for a meeting with a friend. What is the best apology?",
        "answers": [
            { "text": "Sorry about that.", "correct": false },
            { "text": "I'm here now, let's start.", "correct": false },
            { "text": "I'm so sorry for keeping you waiting, the traffic was absolutely terrible.", "correct": true },
            { "text": "You won't believe what happened.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with a suitable preposition: 'I don't approve ____ his methods, even if they get results.'",
        "answer": ["of"]
    },
    {
        "type": "closed",
        "question": "It was ______ a boring lecture that half the audience fell asleep.",
        "answers": [
            { "text": "so", "correct": false },
            { "text": "such", "correct": true },
            { "text": "very", "correct": false },
            { "text": "too", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The athlete tried ______ the world record, but failed by a few milliseconds.",
        "answers": [
            { "text": "to break", "correct": true },
            { "text": "breaking", "correct": false },
            { "text": "to have broken", "correct": false },
            { "text": "break", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'get'. Original sentence: 'I need to arrange for someone to test my eyes.'",
        "answer": ["I need to get my eyes tested."]
    },
    {
        "type": "closed",
        "question": "The decision to build the new motorway was met with fierce ______ from local residents.",
        "answers": [
            { "text": "oppose", "correct": false },
            { "text": "opposite", "correct": false },
            { "text": "opposition", "correct": true },
            { "text": "opposing", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He's not very reliable. You can't ______ him to be on time.",
        "answers": [
            { "text": "count on", "correct": true },
            { "text": "count in", "correct": false },
            { "text": "count out", "correct": false },
            { "text": "count up", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His ____ (ABLE) to adapt to new situations is his greatest strength.'",
        "answer": ["ability"]
    },
    {
        "type": "closed",
        "question": "________ the weather was terrible, we still had a wonderful time on our holiday.",
        "answers": [
            { "text": "Despite", "correct": false },
            { "text": "In spite", "correct": false },
            { "text": "However", "correct": false },
            { "text": "Although", "correct": true }
        ]
    },
    {
        "type": "closed",
        "question": "The new manager is very popular. She seems to have a good ______ with the staff.",
        "answers": [
            { "text": "rapport", "correct": true },
            { "text": "report", "correct": false },
            { "text": "relation", "correct": false },
            { "text": "contact", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with ONE word: 'The sooner we start, the sooner we will ____.'",
        "answer": ["finish"]
    },
    {
        "type": "closed",
        "question": "I can't meet you tomorrow. I _______ my cousins at the airport in the morning.",
        "answers": [
            { "text": "will meet", "correct": false },
            { "text": "am meeting", "correct": true },
            { "text": "meet", "correct": false },
            { "text": "going to meet", "correct": false }
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