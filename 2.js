// --- GETTING HTML ELEMENTS ---
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
const questionSound = document.getElementById('question-sound'); // NEW: Get the audio element

// --- QUIZ QUESTIONS (with sound property) ---
const questions = [

    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193145.png',
        type: 'multiple-choice',
        options: [
            "Hat",
            "Cat",
            "cap",
            "head"
        ],
        answer: "Hat"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193201.png',
        type: 'multiple-choice',
        options: [

            "some small thing ;)",
            "bag",
            "nothing",
            "grass"
        ],
        answer: "bag"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193218.png',
        type: 'multiple-choice',
        options: [
            "earring",
            "cap",
            "earing",
            "I am sure it doesn't exist"
        ],
        answer: "earring"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193225.png',
        type: 'multiple-choice',
        options: [
            "suit",
            "sut",
            "sit down",
            "yes"
        ],
        answer: "suit"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193230.png',
        type: 'multiple-choice',
        options: [
            "stomach/belly",
            "normal ball",
            "huge ball",
            "small ball"
        ],
        answer: "stomach/belly"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193238.png',
        type: 'multiple-choice',
        options: [
            "male",
            "female",
            "small child",
            "alien"
        ],
        answer: "male"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193244.png',
        type: 'multiple-choice',
        options: [

            "blue sky",
            "tosers",
            "hat",
            "trousers",

        ],
        answer: "trousers"
    },
    {
        question: "This is?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 193250.png',
        type: 'multiple-choice',
        options: [
            "sirt",
            "ttts",
            "shirt",
            "h"
        ],
        answer: "shirt"
    },


    {
        question: "What did he say? your answer [words] follow by comma (przecinek) ?",
        sound: 'x.mp4', // NEW: Path to the sound file
        type: 'open-ended',
        image: "megaphone-3790255_1280.png",
        answer: "job, attractive, ear , face, pale, tolerant, talkative, strict, rude, adore, fear",
        tolerance: 3
    },

    {
        question: "What did he describe?",
        image: 'Zrzut ekranu 2025-06-10 204032.png',
        type: 'open-ended',
        answer: "Wallet",
        tolerance: 3
    },
    {
        question: "What is being described?",
        image: "1.png",
        type: 'open-ended',
        answer: "Tights",
        tolerance: 1
    },
    {
        question: "What is being described?",
        image: "2.png",
        type: 'open-ended',
        answer: "Bag",
        tolerance: 1
    },
    {
        question: "What is being described?",
        image: "3.png",
        type: 'open-ended',
        answer: "Belt",
        tolerance: 1
    },
    {
        question: "What word is being described?",
        image: "4.png",
        type: 'open-ended',
        answer: "Slim",
        tolerance: 1
    },
    {
        question: "What quality is being described?",
        image: "5.png",
        type: 'open-ended',
        answer: "Intelligent",
        tolerance: 2 // A slightly larger tolerance for longer words
    },
    {
        question: "What quality is being described?",
        image: "6.png",
        type: 'open-ended',
        answer: "Gullible",
        tolerance: 2
    },
    {
        question: "What quality is being described?",
        image: "7.png",
        type: 'open-ended',
        answer: "Immature",
        tolerance: 2
    },
    {
        question: "What quality is being described?",
        image: "8.png",
        type: 'open-ended',
        answer: "Mature",
        tolerance: 1
    },
    {
        question: "What quality is being described?",
        image: "9.png",
        type: 'open-ended',
        answer: "Shy",
        tolerance: 1
    },
    {
        question: "What quality is being described?",
        image: "10.png",
        type: 'open-ended',
        answer: "Tolerant",
        tolerance: 2
    },
    {
        question: "What quality is being described?",
        image: "11.png",
        type: 'open-ended',
        answer: "Talkative",
        tolerance: 2
    },
    {
        question: "What feeling is being described?",
        image: "12.png",
        type: 'open-ended',
        answer: "Depression",
        tolerance: 2
    },
    {
        question: "My jeans are too loose, so I need to wear a belt.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Loose ",
        tolerance: 2
    },

    {
        // This is your original example, slightly cleaned up (removed trailing space from answer)
        question: "My jeans are too loose, so I need to wear a belt.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Loose",
        tolerance: 2
    },
    {
        question: "I found a slipper under the couch while cleaning.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Slipper",
        tolerance: 2
    },
    {
        question: "He wore a striped shirt to the party last night.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Striped",
        tolerance: 2
    },
    {
        question: "Don’t forget your umbrella, it looks like rain!",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Umbrella",
        tolerance: 2
    },
    {
        question: "She glanced at her watch and realized she was late.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Watch",
        tolerance: 1
    },
    {
        question: "He’s so charming that everyone wants to talk to him.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Charming",
        tolerance: 2
    },
    {
        question: "That was a clever solution to a tricky problem.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Clever",
        tolerance: 2
    },
    {
        question: "A disloyal friend can hurt more than an enemy.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Disloyal",
        tolerance: 2
    },
    {
        question: "She’s a very independent woman who travels alone.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Independent",
        tolerance: 2
    },
    {
        question: "Even after winning the prize, he stayed modest and humble.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Modest",
        tolerance: 2
    },
    {
        question: "He wore a red tie to match his suit.",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Tie",
        tolerance: 1
    },
    {
        question: "My little sister is a real chatterbox—she never stops talking!",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: "Chatterbox",
        tolerance: 2
    },


    {
        question: "The girl is slim?",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 213601.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "True"
    },
    {
        question: "The girl has blue hair",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 213601.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "False"
    },
    {
        question: "The girl is holding flowers.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 213601.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "True"
    },
    {
        question: "The girl has a beard.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 213601.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "False"


    },
    {
        question: "The girl is wearing a blue dress.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 213601.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "True"
    },
    {
        question: "The man has red hair.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215150.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "False"
    },
    {
        question: "The man is wearing a plain shirt.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215150.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "False"
    },
    {
        question: "The man is reading a book.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215150.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "True"
    },
    {
        question: "The man is wearing black socks.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215150.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "False"
    },
    {
        question: "The man is wearing glasses.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215150.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "True"
    },
    {
        question: "The girl is wearing a pink shirt.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215705.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "True"
    },
    {
        question: "The girl is wearing blue socks.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215705.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "False"
    },
    {
        question: "The girl has black, straight hair.",
        // NEW: Path to the image file
        image: 'Zrzut ekranu 2025-06-10 215705.png',
        type: 'multiple-choice',
        options: [
            "False",
            "True",
        ],
        answer: "False"
    },
    ///ddd
    {
        question: "Describe this picture",
        image: "Zrzut ekranu 2025-06-10 220100.png",
        type: 'open-ended',
        answer: 'incorrect is the alarm that you are incorrect',

        tolerance: 1
    },
    {
        question: "Describe this picture",
        image: "Zrzut ekranu 2025-06-10 220054.png",
        type: 'open-ended',
        answer: 'incorrect is the alarm that you are incorrect',
        tolerance: 1
    },
    {
        question: "Describe this picture",
        image: "Zrzut ekranu 2025-06-10 220048.png",
        type: 'open-ended',
        answer: 'incorrect is the alarm that you are incorrect',
        tolerance: 1
    },
    {
        question: "Describe this picture",
        image: "Zrzut ekranu 2025-06-10 220042.png",
        type: 'open-ended',
        answer: 'incorrect is the alarm that you are incorrect',

        tolerance: 1
    },
    {
        question: "Describe this picture",
        image: "Zrzut ekranu 2025-06-10 220036.png",
        type: 'open-ended',
        answer: 'incorrect is the alarm that you are incorrect',
        tolerance: 1
    },
    {
        question: "Describe this picture",
        image: "Zrzut ekranu 2025-06-10 220030.png",
        type: 'open-ended',
        answer: 'incorrect is the alarm that you are incorrect',
        tolerance: 1
    },
    {
        question: "Chcesz poćwiczyć więcej poproś o to czata, napisz że chcesz poćwiczyć angielskie słówka temat człowiek",
        image: "eyes-304338_1280 (1).png",
        type: 'open-ended',
        answer: 'incorrect is the alarm that you are incorrect',
        tolerance: 1
    },

    {
        question: "What is the English word for 'wiek'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["age", "birth", "citizen", "job"],
        answer: "age"
    },
    {
        question: "What is the English word for 'narodziny'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["date of birth", "birth", "marital status", "female"],
        answer: "birth"
    },
    {
        question: "What is the English word for 'rozwiedziony'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["married", "single", "divorced", "widow"],
        answer: "divorced"
    },
    {
        question: "What is the English word for 'imię'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["surname", "nationality", "first name", "sex"],
        answer: "first name"
    },
    {
        question: "What is the English word for 'płaszcz'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["dress", "jacket", "coat", "shirt"],
        answer: "coat"
    },
    {
        question: "What is the English word for 'dżinsy'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["trousers", "jeans", "shorts", "tights"],
        answer: "jeans"
    },
    {
        question: "What is the English word for 'spódnica'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["skirt", "blouse", "dress", "suit"],
        answer: "skirt"
    },
    {
        question: "What is the English word for 'pasek'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["gloves", "belt", "scarf", "hat"],
        answer: "belt"
    },
    {
        question: "What is the English word for 'okulary'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["handbag", "jewellery", "boots", "glasses"],
        answer: "glasses"
    },
    {
        question: "What is the English word for 'buty'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["shoes", "sandals", "trainers", "boots"],
        answer: "shoes"
    },
    {
        question: "What does 'w kratę' mean in English?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["striped", "checked", "baggy", "tight"],
        answer: "checked"
    },
    {
        question: "What does 'obcisły' mean in English?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["baggy", "sleeveless", "tight", "lightweight"],
        answer: "tight"
    },
    {
        question: "What does 'nosić' mean in English?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["wear", "fit", "suit", "match"],
        answer: "wear"
    },
    {
        question: "What is the English word for 'plecy'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["arm", "back", "leg", "neck"],
        answer: "back"
    },
    {
        question: "What is the English word for 'głowa'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["hand", "foot", "head", "stomach"],
        answer: "head"
    },
    {
        question: "What is the English word for 'kolano'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["elbow", "knee", "ankle", "wrist"],
        answer: "knee"
    },
    {
        question: "What is the English word for 'oko'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["ear", "nose", "eye", "mouth"],
        answer: "eye"
    },
    {
        question: "What is the English word for 'ząb'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["lip", "chin", "tongue", "tooth"],
        answer: "tooth"
    },
    {
        question: "What is the English word for 'piękny'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["handsome", "pretty", "beautiful", "ugly"],
        answer: "beautiful"
    },
    {
        question: "What does 'w średnim wieku' mean in English?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["elderly", "teenager", "middle-aged", "young"],
        answer: "middle-aged"
    },
    {
        question: "What is the English word for 'wysoki'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["short", "tall", "of medium height", "fat"],
        answer: "tall"
    },
    {
        question: "What is the English word for 'szczupły'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["overweight", "plump", "skinny", "slim"],
        answer: "slim"
    },
    {
        question: "What does 'kręcone' (włosy) mean in English?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["straight", "wavy", "spiky", "curly"],
        answer: "curly"
    },
    {
        question: "What is the English word for 'broda'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["moustache", "freckles", "scar", "beard"],
        answer: "beard"
    },
    {
        question: "What is the English word for 'ambitny'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["ambitious", "lazy", "bossy", "calm"],
        answer: "ambitious"
    },
    {
        question: "What is the English word for 'odważny'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["shy", "brave", "cruel", "gentle"],
        answer: "brave"
    },
    {
        question: "What is the English word for 'uczciwy'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["dishonest", "loyal", "honest", "mean"],
        answer: "honest"
    },
    {
        question: "What is the English word for 'cierpliwy'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["impatient", "reserved", "rebellious", "patient"],
        answer: "patient"
    },
    {
        question: "What does 'pewny siebie' mean in English?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["insecure", "shy", "self-confident", "selfish"],
        answer: "self-confident"
    },
    {
        question: "What is the English word for 'uparty'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["stubborn", "sensible", "sociable", "wise"],
        answer: "stubborn"
    },
    //{
    //question: "What does 'rozczarowany' mean in English?",
    //image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
    //type: 'multiple-choice',
    //options: ["excited", "disappointed", "relaxed", "surprised"],
    //answer: "disappointed"
    //},
    {
        question: "What is the English word for 'podziwiać'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["hate", "dislike", "adore", "admire"],
        answer: "admire"
    },
    {
        question: "What does 'zakochać się w kimś' mean in English?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["look down on sb", "fall in love with sb", "laugh at sb", "lose one's temper"],
        answer: "fall in love with sb"
    },
    // --- Type 1: Scenario Question ---
    {
        question: "It's raining outside and you need to go to the store. What should you take?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["sandals", "T-shirt", "umbrella", "glasses"],
        answer: "umbrella"
    },
    // --- Type 2: "Odd One Out" Question ---
    {
        question: "Which of these is NOT a piece of clothing?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["skirt", "briefcase", "coat", "jeans"],
        answer: "briefcase"
    },
    // --- Type 3: Antonym (Opposite) Question ---
    {
        question: "What is the opposite of being 'polite'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["kind", "rude", "cheerful", "calm"],
        answer: "rude"
    },
    // --- Type 4: Multi-Select Question (New Feature!) ---
    {
        question: "Select ALL the words that describe hair.",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-select', // Note the new type
        options: ["curly", "ankle", "wavy", "spiky"],
        answer: ["curly", "wavy", "spiky"] // Answer is now an array
    },
    // --- Another Scenario Question ---
    {
        question: "You just won a competition! How are you most likely feeling?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["miserable", "bored", "worried", "excited"],
        answer: "excited"
    },
    // --- Another "Odd One Out" Question ---
    {
        question: "Which of these is NOT a part of the head?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["forehead", "cheek", "knee", "eyelash"],
        answer: "knee"
    },
    // --- Another Multi-Select Question ---
    {
        question: "Select ALL the accessories you can wear.",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-select',
        options: ["belt", "hat", "trousers", "scarf"],
        answer: ["belt", "hat", "scarf"]
    },
    // --- A classic vocabulary question for variety ---
    {
        question: "What is the English word for 'pracowity'?",
        image: "C:\\Users\\Hubi\\Desktop\\e8-web\\explosion-145687_1280.png",
        type: 'multiple-choice',
        options: ["lazy", "hard-working", "talkative", "shy"],
        answer: "hard-working"
    }



    // [A] - [des]
    // temple: 
    //{
    //question: "[des]",
    //image: "eyes-304338_1280 (1).png",
    //type: 'open-ended',
    //answer: "[A]",
    //tolerance: 2
    //}

];


// --- STATE VARIABLES AND EVENT LISTENERS (No changes here) ---
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

submitBtn.addEventListener('click', handleSubmit);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', restartQuiz);


// --- FUNCTIONS ---

/**
 * Calculates the Levenshtein distance between two strings.
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
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

// ** UPDATED showQuestion function **
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
        input.placeholder = 'Type your answer here...';
        answerArea.appendChild(input);
    }
}

function resetState() {
    feedback.innerText = '';
    feedback.className = 'feedback';
    nextBtn.classList.add('hide');
    submitBtn.classList.remove('hide');
    answerArea.innerHTML = '';
    selectedAnswer = null;
}

function selectMultipleChoiceAnswer(button) {
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
            const tolerance = currentQuestion.tolerance;
            const exactMatch = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
            const partialMatch = correctAnswer.toLowerCase().includes(userAnswer.toLowerCase()) && userAnswer.length > 3;
            const distance = levenshteinDistance(userAnswer, correctAnswer);
            const withinTolerance = distance <= tolerance;
            isCorrect = exactMatch || partialMatch || withinTolerance;
        }
    }

    if (!userAnswer) {
        alert("Please provide an answer!");
        return;
    }

    if (isCorrect) {
        score++;
        feedback.innerText = "Correct!";
        feedback.classList.add('correct');
    } else {
        feedback.innerText = `Incorrect. The correct answer is: ${currentQuestion.answer}`;
        feedback.classList.add('incorrect');
    }

    showAnswerStatus(currentQuestion, isCorrect);
    submitBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
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
    }
}

// ** UPDATED handleNext function **
function handleNext() {
    questionSound.pause(); // Stop audio from playing when moving to next question
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