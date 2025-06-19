const questions = [
    {
        "type": "closed",
        "question": "Nowhere else in the world ______ find such a unique ecosystem.",
        "answers": [
            { "text": "you can", "correct": false },
            { "text": "can you", "correct": true },
            { "text": "you will", "correct": false },
            { "text": "you are able to", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ arguments, while fluent and smooth, lacked any real substance or sincerity.",
        "answers": [
            { "text": "grand", "correct": false },
            { "text": "glib", "correct": true },
            { "text": "glowing", "correct": false },
            { "text": "genuine", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'They must have considered all the proposals before making a decision.'",
        "answer": ["All the proposals must have been considered before a decision was made."]
    },
    {
        "type": "closed",
        "question": "After weeks of avoiding a clear stance, the politician finally ______ by publicly endorsing the controversial law.",
        "answers": [
            { "text": "crossed the Rubicon", "correct": false },
            { "text": "nailed his colours to the mast", "correct": true },
            { "text": "sailed close to the wind", "correct": false },
            { "text": "threw down the gauntlet", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "You have to deliver bad news to a friend, for example, that they didn't get a part in the school play. What is the most empathetic way to do it?",
        "answers": [
            { "text": "You didn't get the part. Better luck next time.", "correct": false },
            { "text": "I've just heard about the casting. I'm so sorry, it wasn't the news we were hoping for. I know how much it meant to you and how hard you worked.", "correct": true },
            { "text": "They gave the part to someone else.", "correct": false },
            { "text": "It is what it is, you'll get over it.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'He was an ______ liar, and it was impossible to trust anything he said.'",
        "answer": ["incorrigible"]
    },
    {
        "type": "closed",
        "question": "A ______ person will believe anything, even if the information comes from a source that is not very ______.",
        "answers": [
            { "text": "credible / credulous", "correct": false },
            { "text": "credulous / credible", "correct": true },
            { "text": "creditable / credulous", "correct": false },
            { "text": "credulous / creditable", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "It is of paramount importance that the team ______ as a single, cohesive unit.",
        "answers": [
            { "text": "functions", "correct": false },
            { "text": "function", "correct": true },
            { "text": "is functioning", "correct": false },
            { "text": "to function", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in reported speech. Original sentence: ''What a terrible idea!' he scoffed.'",
        "answer": ["He scoffed that it was a terrible idea."]
    },
    {
        "type": "closed",
        "question": "His constant complaining and ______ attitude made him very difficult to be around.",
        "answers": [
            { "text": "quiet", "correct": false },
            { "text": "querulous", "correct": true },
            { "text": "quizzical", "correct": false },
            { "text": "quaint", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "We need to ______ our current strategy, as it is clearly not working.",
        "answers": [
            { "text": "rethink", "correct": true },
            { "text": "remind", "correct": false },
            { "text": "return", "correct": false },
            { "text": "repeat", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'I dislike my boss giving me orders in front of the whole team.'",
        "answer": ["I dislike being given orders by my boss in front of the whole team."]
    },
    {
        "type": "closed",
        "question": "The party was a rather ______ affair, with most guests leaving early due to the lack of atmosphere.",
        "answers": [
            { "text": "sublime", "correct": false },
            { "text": "subdued", "correct": true },
            { "text": "substantial", "correct": false },
            { "text": "subsequent", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'a Parthian shot'?",
        "answers": [
            { "text": "A lucky guess.", "correct": false },
            { "text": "A final, sharp remark made by someone as they are leaving.", "correct": true },
            { "text": "The first step in a long process.", "correct": false },
            { "text": "A proposal that is immediately rejected.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The government's actions were tantamount ____ a declaration of war.'",
        "answer": ["to"]
    },
    {
        "type": "closed",
        "question": "The team's success was not a stroke of luck, but the result of months of ______ planning and hard work.",
        "answers": [
            { "text": "meticulous", "correct": true },
            { "text": "malicious", "correct": false },
            { "text": "momentous", "correct": false },
            { "text": "menial", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His ______ lifestyle eventually caught up with him, leaving him bankrupt and friendless.",
        "answers": [
            { "text": "frugal", "correct": false },
            { "text": "profligate", "correct": true },
            { "text": "prudent", "correct": false },
            { "text": "prosperous", "correct": false }
        ]
    },
    { "type": "open", "question": "Use the word in brackets to form a word that fits the gap: 'The lecture was on a rather ____ (ESOTERIC) topic that only a few specialists could understand.'", "answer": ["esoteric"] },
    {
        "type": "closed",
        "question": "The problem with your argument is that its initial ______ is flawed.",
        "answers": [
            { "text": "promise", "correct": false },
            { "text": "premise", "correct": true },
            { "text": "premonition", "correct": false },
            { "text": "preface", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I would just as soon you ______ a different colour for the walls; this one is too dark.",
        "answers": [
            { "text": "choose", "correct": false },
            { "text": "chose", "correct": true },
            { "text": "had chosen", "correct": false },
            { "text": "are choosing", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice. Original sentence: 'One must obey the law.'",
        "answer": ["The law must be obeyed."]
    },
    {
        "type": "closed",
        "question": "Be that as it may, his intentions, ______ good, do not excuse the disastrous results of his actions.",
        "answers": [
            { "text": "although", "correct": false },
            { "text": "however", "correct": true },
            { "text": "despite", "correct": false },
            { "text": "nevertheless", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The general was a brilliant tactician, but he was a terrible strategist. He could win any battle, but he kept losing the ______. ",
        "answers": [
            { "text": "war", "correct": true },
            { "text": "argument", "correct": false },
            { "text": "game", "correct": false },
            { "text": "fight", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the causative 'have'. Original sentence: 'I am arranging for a professional to edit my manuscript.'",
        "answer": ["I am having my manuscript edited."]
    },
    { "type": "closed", "question": "The widespread feeling of ______ after the election led to a period of political inactivity.", "answers": [{ "text": "ennui", "correct": true }, { "text": "energy", "correct": false }, { "text": "enthusiasm", "correct": false }, { "text": "empathy", "correct": false }] }
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