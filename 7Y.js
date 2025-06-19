const questions = [
    {
        "type": "closed",
        "question": "Should you ______ any difficulties, please refer to the instruction manual.",
        "answers": [
            { "text": "encounter", "correct": true },
            { "text": "be encountering", "correct": false },
            { "text": "to encounter", "correct": false },
            { "text": "will encounter", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Read the text: 'Before starting his urgent essay, Mark sharpened all his pencils, organized his bookshelf, and made a new music playlist.' What does this behavior strongly suggest?",
        "answers": [
            { "text": "He is very organized and efficient.", "correct": false },
            { "text": "He is procrastinating and avoiding the main task.", "correct": true },
            { "text": "He is preparing himself mentally for hard work.", "correct": false },
            { "text": "He doesn't have enough time to write the essay.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence to add emphasis, starting with 'It...'. Original sentence: 'His arrogance annoys me most.'",
        "answer": ["It is his arrogance that annoys me most."]
    },
    {
        "type": "closed",
        "question": "The new red curtains perfectly ______ the grey tones of the walls.",
        "answers": [
            { "text": "compliment", "correct": false },
            { "text": "complement", "correct": true },
            { "text": "comply", "correct": false },
            { "text": "complete", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A friend asks for your opinion on their very risky business idea. How do you express concern without being completely negative?",
        "answers": [
            { "text": "That will never work.", "correct": false },
            { "text": "It's an interesting concept, but have you considered the potential financial risks involved?", "correct": true },
            { "text": "I can't believe you're even thinking about this.", "correct": false },
            { "text": "You should definitely do it, no matter the cost.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'His ____ (RESOLVE) to finish the marathon despite the injury was admirable.'",
        "answer": ["resolution"]
    },
    {
        "type": "closed",
        "question": "He's very intelligent but quite lazy. He rarely uses his abilities to their full ______.",
        "answers": [
            { "text": "potential", "correct": true },
            { "text": "possibility", "correct": false },
            { "text": "capacity", "correct": false },
            { "text": "eventuality", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "What is the meaning of the idiom 'to get cold feet'?",
        "answers": [
            { "text": "To feel physically cold.", "correct": false },
            { "text": "To become nervous or frightened about doing something you had planned to do.", "correct": true },
            { "text": "To be very brave and fearless.", "correct": false },
            { "text": "To finally understand a difficult concept.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a past participle clause. Original sentence: 'Because he was motivated by his recent success, he started a new project.'",
        "answer": ["Motivated by his recent success, he started a new project."]
    },
    {
        "type": "closed",
        "question": "The company's new logo, _______ a stylized bird, is meant to represent freedom and innovation.",
        "answers": [
            { "text": "resembling", "correct": true },
            { "text": "resembles", "correct": false },
            { "text": "resembled", "correct": false },
            { "text": "is resembling", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "There is ______ evidence to support his theory, so it's unlikely to be accepted.",
        "answers": [
            { "text": "insufficient", "correct": true },
            { "text": "ineffective", "correct": false },
            { "text": "improper", "correct": false },
            { "text": "inaccurate", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence in the passive voice: 'They will have built the new bridge by next summer.'",
        "answer": ["The new bridge will have been built by next summer."]
    },
    {
        "type": "closed",
        "question": "I don't remember ______ the door, but I must have, because it's locked now.",
        "answers": [
            { "text": "to lock", "correct": false },
            { "text": "locking", "correct": true },
            { "text": "to have locked", "correct": false },
            { "text": "to be locking", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "His hard work and dedication were ______ in his eventual promotion.",
        "answers": [
            { "text": "instrumental", "correct": true },
            { "text": "industrial", "correct": false },
            { "text": "internal", "correct": false },
            { "text": "intentional", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with the correct preposition: 'The new regulations are not applicable ____ everyone.'",
        "answer": ["to"]
    },
    {
        "type": "closed",
        "question": "The politician's speech was designed to ______ the public's fears about the economy.",
        "answers": [
            { "text": "allay", "correct": true },
            { "text": "ally", "correct": false },
            { "text": "allow", "correct": false },
            { "text": "alight", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Which sentence correctly describes a money-saving action?",
        "answers": [
            { "text": "Buying this car was very economic.", "correct": false },
            { "text": "The government is introducing new economic policies.", "correct": false },
            { "text": "It's more economical to buy in bulk.", "correct": true },
            { "text": "The country is in a bad economical state.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits the gap: 'The team's ____ (CONSISTENT) has been a major problem this season.'",
        "answer": ["inconsistency"]
    },
    {
        "type": "closed",
        "question": "On no account ______ you to touch the exhibits in this museum.",
        "answers": [
            { "text": "are", "correct": true },
            { "text": "you are", "correct": false },
            { "text": "can", "correct": false },
            { "text": "should", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "He was found innocent. ________, his reputation was damaged by the accusation.",
        "answers": [
            { "text": "Nevertheless", "correct": true },
            { "text": "Therefore", "correct": false },
            { "text": "Moreover", "correct": false },
            { "text": "Consequently", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the second sentence so it has a similar meaning, using 'whose'. First sentence: 'That's the artist. I bought her painting.'",
        "answer": ["That's the artist whose painting I bought."]
    },
    {
        "type": "closed",
        "question": "I'd rather you ______ that topic of conversation. It makes me uncomfortable.",
        "answers": [
            { "text": "don't raise", "correct": false },
            { "text": "won't raise", "correct": false },
            { "text": "didn't raise", "correct": true },
            { "text": "hadn't raised", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "The new rules are intended to prevent such problems from _______ in the future.",
        "answers": [
            { "text": "recurring", "correct": true },
            { "text": "recovering", "correct": false },
            { "text": "reversing", "correct": false },
            { "text": "referring", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using a causative verb: 'I arranged for a photographer to take my portrait.'",
        "answer": ["I had my portrait taken.", "I got my portrait taken."]
    },
    { "type": "closed", "question": "The company's success is ______ attributed to its innovative marketing strategies.", "answers": [{ "text": "largely", "correct": true }, { "text": "broadly", "correct": false }, { "text": "highly", "correct": false }, { "text": "deeply", "correct": false }] }
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