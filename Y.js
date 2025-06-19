const questions = [


    {
        "type": "closed",
        "question": "Which sentence correctly uses a mixed conditional to describe a past action with a present result?",
        "answers": [
            { "text": "If I went to bed earlier last night, I wouldn't be so tired now.", "correct": false },
            { "text": "If I had gone to bed earlier last night, I wouldn't be so tired now.", "correct": true },
            { "text": "If I had gone to bed earlier last night, I wouldn't have been so tired now.", "correct": false },
            { "text": "If I would have gone to bed earlier, I wasn't so tired now.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Read the short text: 'Despite the pouring rain and the freezing wind, Sarah continued her journey to the mountain peak. Her goal was the only thing on her mind.' What does this text imply about Sarah?",
        "answers": [
            { "text": "She is reckless and unprepared.", "correct": false },
            { "text": "She regrets starting her journey.", "correct": false },
            { "text": "She is very determined and focused.", "correct": true },
            { "text": "She enjoys bad weather.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using the passive voice, starting with 'It...'. Original sentence: 'People believe that a healthy diet is essential.'",
        "answer": ["It is believed that a healthy diet is essential."]
    },
    {
        "type": "closed",
        "question": "Which phrasal verb means 'to invent a story or an excuse'?",
        "answers": [
            { "text": "make up", "correct": true },
            { "text": "make out", "correct": false },
            { "text": "give up", "correct": false },
            { "text": "look up", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A friend says: 'I'm not sure if I should apply for this scholarship. It seems very competitive.' How would you encourage them?",
        "answers": [
            { "text": "You're probably right, it's not worth it.", "correct": false },
            { "text": "You'll never know unless you give it a shot.", "correct": true },
            { "text": "I wouldn't have applied if I were you.", "correct": false },
            { "text": "There are too many people applying.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with ONE word: 'Not only did he forget my birthday, ____ he also didn't apologize.'",
        "answer": ["but"]
    },
    {
        "type": "closed",
        "question": "Which of these words is the 'odd one out' based on its meaning?",
        "answers": [
            { "text": "Anxious", "correct": false },
            { "text": "Apprehensive", "correct": false },
            { "text": "Content", "correct": true },
            { "text": "Uneasy", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Your friend's new phone has just broken. What is the most empathetic response?",
        "answers": [
            { "text": "You should have been more careful.", "correct": false },
            { "text": "That's a shame. Is there anything I can do to help?", "correct": true },
            { "text": "Well, I told you not to buy that model.", "correct": false },
            { "text": "It's just a phone, you can always buy a new one.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using reported speech: He said, 'I will finish my project tomorrow.'",
        "answer": ["He said that he would finish his project the next day.", "He said he would finish his project the next day."]
    },
    {
        "type": "closed",
        "question": "Choose the correct sentence to express a past possibility that did not happen.",
        "answers": [
            { "text": "He must have passed the exam. He studied a lot.", "correct": false },
            { "text": "He can't have passed the exam. He looks so sad.", "correct": false },
            { "text": "He could have passed the exam, but he didn't check his answers.", "correct": true },
            { "text": "He should pass the exam. He is very clever.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Situation: You see a long queue in front of a new bakery. What can you logically conclude?",
        "answers": [
            { "text": "The bakery must be very good or have a special offer.", "correct": true },
            { "text": "The bakery is definitely closed for the day.", "correct": false },
            { "text": "The people in the queue are waiting for a bus.", "correct": false },
            { "text": "The bakery has run out of everything.", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Use the word in brackets to form a word that fits in the gap: 'Her speech was so ____ (INSPIRE) that everyone gave her a standing ovation.'",
        "answer": ["inspiring"]
    },
    {
        "type": "closed",
        "question": "Which sentence implies criticism or regret about a past action?",
        "answers": [
            { "text": "You could ask for help.", "correct": false },
            { "text": "You should be more polite.", "correct": false },
            { "text": "You might have told me you were going to be late.", "correct": true },
            { "text": "You must be very proud.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "A notice says: 'All items not claimed within 30 days will be disposed of.' What does 'disposed of' mean in this context?",
        "answers": [
            { "text": "They will be sold at a discount.", "correct": false },
            { "text": "They will be repaired and returned.", "correct": false },
            { "text": "They will be put in a special display.", "correct": false },
            { "text": "They will be thrown away or given away.", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Complete the second sentence so it has a similar meaning to the first, using the word 'unless'. First sentence: 'If you don't study, you will fail.'",
        "answer": ["You will fail unless you study."]
    },
    {
        "type": "closed",
        "question": "Read the dialogue. A: 'I managed to fix the computer!' B: '_______. I was about to call a technician.' What is the best response for B?",
        "answers": [
            { "text": "That's a relief!", "correct": true },
            { "text": "How could you?", "correct": false },
            { "text": "What a pity.", "correct": false },
            { "text": "You shouldn't have.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Which sentence has a different meaning from the others?",
        "answers": [
            { "text": "I wish I had more free time.", "correct": false },
            { "text": "If only I had more free time.", "correct": false },
            { "text": "I regret not having more free time.", "correct": false },
            { "text": "I'm used to having a lot of free time.", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Complete the sentence with a suitable preposition: 'He was accused ____ stealing the documents from the office.'",
        "answer": ["of"]
    },
    {
        "type": "closed",
        "question": "'The concert was good, ______ the lead singer's voice was a bit weak.' Which linking word fits best in the gap?",
        "answers": [
            { "text": "therefore", "correct": false },
            { "text": "although", "correct": true },
            { "text": "because", "correct": false },
            { "text": "moreover", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "Situation: You lent your favourite book to a friend a month ago and they haven't returned it. How can you ask for it back politely but firmly?",
        "answers": [
            { "text": "Give me my book back right now!", "correct": false },
            { "text": "Where is my book? I need it.", "correct": false },
            { "text": "Hey, I was wondering if you've finished with that book I lent you? I'd love to have it back when you're done.", "correct": true },
            { "text": "You've lost my book, haven't you?", "correct": false }
        ]
    },
    {
        "type": "open",
        "question": "Rewrite the sentence using 'so... that...'. The movie was very boring. I fell asleep. ",
        "answer": ["The movie was so boring that I fell asleep."]
    },
    {
        "type": "closed",
        "question": "What is the function of this sentence? 'Would you mind not making so much noise?'",
        "answers": [
            { "text": "Making a suggestion.", "correct": false },
            { "text": "Giving an order.", "correct": false },
            { "text": "Making a polite request or complaint.", "correct": true },
            { "text": "Asking for permission.", "correct": false }
        ]
    },
    {
        "type": "closed",
        "question": "I haven't seen Mark for ages. He _________ abroad, but I'm not sure.",
        "answers": [
            { "text": "must have moved", "correct": false },
            { "text": "can't have moved", "correct": false },
            { "text": "should have moved", "correct": false },
            { "text": "might have moved", "correct": true }
        ]
    },
    {
        "type": "open",
        "question": "Fill in the blank with the correct form of the verb: 'I'd rather you ______ (not tell) anyone about this. It's a secret.'",
        "answer": ["didn't tell"]
    },
    {
        "type": "closed",
        "question": "The project was far more challenging _______ we had initially anticipated.",
        "answers": [
            { "text": "as", "correct": false },
            { "text": "like", "correct": false },
            { "text": "than", "correct": true },
            { "text": "then", "correct": false }
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