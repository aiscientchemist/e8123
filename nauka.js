// --- GETTING HTML ELEMENTS —

const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const answerArea = document.getElementById('answer-area');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreText = document.getElementById('score-text');
const totalQuestionsText = document.getElementById('total-questions-text');
const questionImage = document.getElementById('question-image');
const questionSound = document.getElementById('question-sound');


// --- QUIZ QUESTIONS (100 KREATYWNYCH PYTAŃ - THE COSMOS OF EDUCATION) ---
const questions = [
    // PART 1: UNDERSTANDING THE METAPHOR
    {
        question: "According to the text, what is a single fact we learn compared to?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["A nebula", "A distant star", "A constellation", "A telescope"],
        answer: "A distant star"
    },
    {
        question: "What does the text describe as the 'gravitational pull' that connects ideas?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "critical thinking",
        tolerance: 2
    },
    {
        question: "The text says the classroom provides the 'telescope'. What does the telescope symbolize?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["The answers", "The tools for learning", "The destination", "Curiosity"],
        answer: "The tools for learning"
    },
    {
        question: "What relentless drive fuels the 'lifelong expedition' of learning?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "curiosity",
        tolerance: 2
    },
    {
        question: "A brilliant 'constellation of understanding' is formed when we...",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["Memorize many facts", "Connect ideas", "Pass a test", "Fill a vessel"],
        answer: "Connect ideas"
    },
    {
        question: "The text contrasts 'filling an empty vessel' with what?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "charting a personal cosmos",
        tolerance: 3
    },
    {
        question: "A student is transformed from a 'passive observer' into an 'active ___'.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "navigator",
        tolerance: 2
    },
    {
        question: "What does the text suggest is NOT the goal of education?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["Arriving at a final destination", "Expanding our world", "Imagining what could be", "Gaining unique insight"],
        answer: "Arriving at a final destination"
    },
    {
        question: "What is a 'glowing nebula' a metaphor for in the text?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "a new skill",
        tolerance: 2
    },
    {
        question: "The ultimate power of education is not just seeing what is, but to... what?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "imagine what could be",
        tolerance: 3
    },
    {
        question: "What does the text call the 'darkness' that facts are scattered across?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "our ignorance",
        tolerance: 2
    },
    {
        question: "The text mentions a 'lifelong expedition' guided by mentors, but fueled by what?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "an insatiable hunger for discovery",
        tolerance: 4
    },
    {
        question: "What word from the text means 'essentially different in kind; not allowing comparison'?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "disparate",
        tolerance: 2
    },
    {
        question: "What is the 'known horizon' a metaphor for?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["The limit of our current knowledge", "The final answer", "The classroom walls", "The physical world"],
        answer: "The limit of our current knowledge"
    },
    {
        question: "True learning is described as the ___ of critical thinking.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "spark",
        tolerance: 1
    },
    {
        question: "The text says education empowers us to create a future illuminated by our own unique ___.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "insight",
        tolerance: 1
    },
    {
        question: "The 'personal cosmos' is another term for one's own...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "intellectual universe",
        tolerance: 2
    },
    {
        question: "The text suggests that facts initially appear as ___ points of light.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "random",
        tolerance: 1
    },
    {
        question: "What is the opposite of being a 'passive observer' in learning?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["A quiet listener", "A fast reader", "An active navigator", "A good student"],
        answer: "An active navigator"
    },
    {
        question: "Who guides the 'lifelong expedition' of learning?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "mentors",
        tolerance: 1
    },

    // PART 2: THE CONSTELLATION CHALLENGE
    {
        question: "Constellation Challenge: What single principle connects a SEED, a RECIPE, and a BLUEPRINT?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "a set of instructions",
        tolerance: 4 // Allows for answers like 'potential', 'code', 'plan'
    },
    {
        question: "Constellation Challenge: What concept unites a LIGHTHOUSE, a COMPASS, and a SATELLITE?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "navigation",
        tolerance: 2 // Allows 'guidance'
    },
    {
        question: "Constellation Challenge: What do a FOSSIL, a HISTORY BOOK, and a MEMORY all represent?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "records of the past",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A LOCK, a PASSWORD, a SECRET HANDSHAKE. These 'stars' form the constellation of...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "security",
        tolerance: 2 // Allows 'access control'
    },
    {
        question: "Constellation Challenge: A BRIDGE, a TRANSLATOR, a DIPLOMAT. What is their shared function?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "connecting different entities",
        tolerance: 4 // Allows 'mediation', 'facilitation'
    },
    {
        question: "Constellation Challenge: The HEART, a BATTERY, the SUN. What fundamental role do they all play?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "power source",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: A MIRROR, a BIOGRAPHY, a DATA-LOG. What is their common purpose?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "reflection",
        tolerance: 2 // Allows 'representation'
    },
    {
        question: "Constellation Challenge: A SPIDER'S WEB, the INTERNET, a NEURAL NETWORK. These are all examples of...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "networks",
        tolerance: 1
    },
    {
        question: "Constellation Challenge: A BIRD'S WING, an AIRPLANE WING, a SAIL. What physical principle connects them?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "aerodynamics",
        tolerance: 3 // Allows 'using air pressure'
    },
    {
        question: "Constellation Challenge: A SYMPHONY, a PAINTING, a GOURMET MEAL. These are all forms of...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "composition",
        tolerance: 2 // Allows 'artistic arrangement'
    },
    {
        question: "Constellation Challenge: A VACCINE, a FIREWALL, a HELMET. What is their shared function?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["Communication", "Protection", "Entertainment", "Measurement"],
        answer: "Protection"
    },
    {
        question: "Constellation Challenge: A RIVER, a BLOOD VESSEL, a HIGHWAY. These are all systems of...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "transport",
        tolerance: 2 // Allows 'flow', 'circulation'
    },
    {
        question: "Constellation Challenge: A HAMMER, a LEVER, a WEDGE. These are all what type of device?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "simple machines",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: LANGUAGE, MONEY, MUSIC. These are all systems of...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "symbolic communication",
        tolerance: 4 // Allows 'shared systems', 'abstract representation'
    },
    {
        question: "Constellation Challenge: A JOKE'S PUNCHLINE, a MYSTERY'S REVEAL, a MAGIC TRICK. What do they all rely on?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "subverting expectations",
        tolerance: 4 // Allows 'surprise'
    },
    {
        question: "Constellation Challenge: A DICTIONARY, a TAXONOMY, a PERIODIC TABLE. What is their primary purpose?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "classification",
        tolerance: 2 // Allows 'organization'
    },
    {
        question: "Constellation Challenge: PHOTOSYNTHESIS, an ENGINE, DIGESTION. These are all processes that...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "convert energy",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A SHADOW, an ECHO, a RUMOR. These are all distorted copies of an...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "original source",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A JUDGE'S GAVEL, a KING'S CROWN, a REFEREE'S WHISTLE. What do these objects represent?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "authority",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: EVOLUTION, EROSION, AGING. These are all processes of gradual...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "change over time",
        tolerance: 3
    },
    // ... (Continue creating 30 more constellation challenges) ...
    {
        question: "Constellation Challenge: A MASK, a UNIFORM, an AVATAR. These are all forms of a chosen...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "identity",
        tolerance: 2 // or 'persona'
    },
    {
        question: "Constellation Challenge: A KEY, a ROSETTA STONE, a CYPHER. What do they all provide?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "decoding",
        tolerance: 2 // or 'understanding', 'unlocking'
    },
    {
        question: "Constellation Challenge: The ALPHABET, BINARY CODE, DNA. These are all fundamental...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "information systems",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A FILTER, a DAM, a BORDER. What is their primary function?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "controlling flow",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A DEBATE, a COURT TRIAL, a SCIENTIFIC PEER REVIEW. What process is common to all?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "presenting evidence",
        tolerance: 4 // or 'argumentation'
    },
    {
        question: "Constellation Challenge: A RECIPE, a MUSICAL SCORE, a COMPUTER ALGORITHM. They are all sets of...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "instructions",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: A LENS, a METAPHOR, a THEORY. These are all tools for...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "focusing understanding",
        tolerance: 4
    },
    {
        question: "Constellation Challenge: A TREE'S RINGS, a GEOLOGICAL STRATA, a CARBON DATING RESULT. They all help determine...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "age",
        tolerance: 1
    },
    {
        question: "Constellation Challenge: A VOTE, a MARKET PRICE, a GOOGLE SEARCH RANKING. These are all forms of...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "collective judgment",
        tolerance: 4
    },
    {
        question: "Constellation Challenge: A PIVOT, a HINGE, a JOINT. What do these mechanisms allow?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "rotation",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: A PROMISE, a CONTRACT, a TREATY. These are all forms of a binding...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "agreement",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: A THEME PARK, a NOVEL, a VIRTUAL REALITY GAME. These are all...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "designed experiences",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A JIGSAW PUZZLE, a DETECTIVE'S CASE, a SCIENTIFIC MYSTERY. What do they invite?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "problem-solving",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: AN ARCH, A DOME, AN EGGSHELL. What structural quality do they share?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "distributing weight",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A MUSEUM, A LIBRARY, AN ARCHIVE. These are institutions for...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "preservation",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: A RHYME, A RHYTHM, A REPEATING PATTERN. These are all tools for creating...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "order",
        tolerance: 2
    },
    {
        question: "Constellation Challenge: AN ANTIDOTE, AN APOLOGY, A PARDON. What do they all aim to do?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "reverse damage",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A THERMOSTAT, A SHIP'S RUDDER, A COMPANY'S BUDGET. They are all mechanisms for...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "regulation",
        tolerance: 3
    },
    {
        question: "Constellation Challenge: A SEED BANK, A TIME CAPSULE, A GENETIC DATABASE. They are all methods of preserving for the...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "future",
        tolerance: 1
    },
    {
        question: "Constellation Challenge: A JOKE, A METAPHOR, A PUN. They all play with the multiple ___ of words.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "meanings",
        tolerance: 2
    },

    // PART 3: EXPLORING THE COSMOS
    {
        question: "If a fact is a star, what would a library be in this metaphor?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["A galaxy", "A black hole", "A planet", "A spaceship"],
        answer: "A galaxy"
    },
    {
        question: "The 'insatiable hunger for discovery' means a hunger that cannot be...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "satisfied",
        tolerance: 2
    },
    {
        question: "The 'art of charting' suggests that learning is a creative and ___ process.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "personal",
        tolerance: 2
    },
    {
        question: "What famous exclamation is associated with a sudden, brilliant discovery?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "Eureka",
        tolerance: 2
    },
    {
        question: "The word 'cosmos' implies a system that is complex and...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "ordered",
        tolerance: 2
    },
    {
        question: "A person who guides a less experienced person is a...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "mentor",
        tolerance: 1
    },
    {
        question: "If 'charting a cosmos' is the goal, what would a 'wrong turn' be?",
        image: 'space-2653754_1280.jpg',
        type: 'multiple-choice',
        options: ["A mistake or misconception", "A new discovery", "A shortcut", "The end of the journey"],
        answer: "A mistake or misconception"
    },
    {
        question: "The ability to generate new and valuable ideas is called...",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "creativity",
        tolerance: 2
    },
    {
        question: "What scientific field studies stars, planets, and the universe?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "astronomy",
        tolerance: 2
    },
    {
        question: "A 'hypothesis' is a proposed explanation made on the basis of limited evidence. In our metaphor, it is like drawing a ___ constellation.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "potential",
        tolerance: 2 // or 'provisional'
    },
    {
        question: "What do we call the official, named patterns of stars in the night sky?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "constellations",
        tolerance: 2
    },
    {
        question: "The word for a journey undertaken by a group of people with a particular purpose, especially that of exploration.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "expedition",
        tolerance: 2
    },
    {
        question: "A 'paradigm shift' is a fundamental change in approach or underlying assumptions. In our metaphor, it's like discovering your cosmos works by ___ instead of gravity.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "anti-gravity",
        tolerance: 4 // any reasonable opposite
    },
    {
        question: "What tool helps you see distant stars more clearly?",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "telescope",
        tolerance: 2
    },
    {
        question: "A 'breakthrough' is a sudden, dramatic, and important discovery. It's like finding a new, major ___ in your cosmos.",
        image: 'space-2653754_1280.jpg',
        type: 'open-ended',
        answer: "constellation",
        tolerance: 2
    }
];


// --- STATE VARIABLES AND EVENT LISTENERS ---
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

submitBtn.addEventListener('click', handleSubmit);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', restartQuiz);

// --- FUNCTIONS ---

/**
 * Calculates the Levenshtein distance between two strings (for typo tolerance).
 */
function levenshteinDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) {
            costs[s2.length] = lastValue;
        }
    }
    return costs[s2.length];
}

function startQuiz() {
    // Losowe ułożenie pytań dla lepszej regrywalności
    questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();

    // Handle Image
    if (question.image) {
        questionImage.src = question.image;
        questionImage.classList.remove('hide');
    } else {
        questionImage.classList.add('hide');
    }

    // Handle Sound
    if (question.sound) {
        questionSound.src = question.sound;
        questionSound.classList.remove('hide');
    } else {
        questionSound.classList.add('hide');
        questionSound.src = ""; // Clear the source
    }

    // ZMIANA: Usunięto licznik "Pytanie X/Y" z tekstu pytania
    questionText.innerText = question.question;
    totalQuestionsText.innerText = questions.length;

    if (question.type === 'multiple-choice') {
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectMultipleChoiceAnswer(button));
            answerArea.appendChild(button);
        });
    } else if (question.type === 'open-ended') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'open-answer-input';
        input.placeholder = 'Wpisz swoją odpowiedź...';
        input.setAttribute('autocomplete', 'off'); // Zapobiega podpowiedziom
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (!submitBtn.classList.contains('hide')) {
                    handleSubmit();
                }
            }
        });
        answerArea.appendChild(input);
        input.focus(); // Automatycznie ustawia kursor w polu
    }
}

function resetState() {
    feedback.innerText = '';
    feedback.className = 'feedback';
    nextBtn.classList.add('hide');
    submitBtn.classList.remove('hide');
    answerArea.innerHTML = '';
    selectedAnswer = null;
    nextBtn.innerText = 'Następne pytanie'; // Resetuje tekst przycisku
}

function selectMultipleChoiceAnswer(button) {
    // Nie pozwala na zmianę odpowiedzi po jej zatwierdzeniu
    if (submitBtn.classList.contains('hide')) {
        return;
    }
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedAnswer = button.innerText;
}

function handleSubmit() {
    const currentQuestion = questions[currentQuestionIndex];
    let userAnswer;
    let isCorrect = false;

    if (currentQuestion.type === 'multiple-choice') {
        userAnswer = selectedAnswer;
        if (userAnswer) {
            isCorrect = userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();
        }
    } else if (currentQuestion.type === 'open-ended') {
        const input = document.getElementById('open-answer-input');
        userAnswer = input.value.trim();
        if (userAnswer) {
            const correctAnswer = currentQuestion.answer;
            const tolerance = currentQuestion.tolerance || 0;
            const distance = levenshteinDistance(userAnswer, correctAnswer);
            isCorrect = distance <= tolerance;
        }
    }

    if (!userAnswer) {
        alert("Proszę podać odpowiedź!");
        return;
    }

    if (isCorrect) {
        score++;
        feedback.innerText = "Dobrze!";
        feedback.classList.add('correct');
    } else {
        feedback.innerText = `Źle. Poprawna odpowiedź to: ${currentQuestion.answer}`;
        feedback.classList.add('incorrect');
    }

    showAnswerStatus(currentQuestion, isCorrect);
    submitBtn.classList.add('hide');

    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.classList.remove('hide');
    } else {
        nextBtn.innerText = 'Zobacz wyniki'; // Zmiana tekstu dla ostatniego pytania
        nextBtn.classList.remove('hide');
    }
}

function showAnswerStatus(question, isCorrect) {
    if (question.type === 'multiple-choice') {
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(button => {
            if (button.innerText.toLowerCase() === question.answer.toLowerCase()) {
                button.classList.add('correct');
            }
            if (button.classList.contains('selected') && !isCorrect) {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });
    } else if (question.type === 'open-ended') {
        const input = document.getElementById('open-answer-input');
        input.disabled = true;
        if (isCorrect) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }
    }
}

function handleNext() {
    questionSound.pause(); // Zatrzymuje dźwięk przy przejściu dalej
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');
    scoreText.innerText = score;
}

function restartQuiz() {
    startQuiz();
}

// --- INITIALIZE QUIZ ---
startQuiz();