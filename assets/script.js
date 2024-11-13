const quizzes = {
    easy: {
        "General Knowledge": [
            { question: "What is 2 + 2?", choices: ["3", "4", "5", "6"], answer: "4", genre: "General Knowledge" },
        ],
        "Geography": [
            { question: "What is the capital of France?", choices: ["Rome", "Madrid", "Paris", "Berlin"], answer: "Paris", genre: "Geography" }
        ],
        "Mathematics": [
            { question: "What is the square root of 16?", choices: ["2", "4", "8", "6"], answer: "4", genre: "Mathematics" }
        ],
        "Literature": [
            { question: "Who wrote 'To Kill a Mockingbird'?", choices: ["Harper Lee", "J.K. Rowling", "Jane Austen", "Mark Twain"], answer: "Harper Lee", genre: "Literature" }
        ],
        "Science": [
            { question: "What is the chemical symbol for gold?", choices: ["Au", "Ag", "Fe", "Pb"], answer: "Au", genre: "Science" }
        ]
    },
    medium: {
        "General Knowledge": [
            { question: "What is the largest mammal?", choices: ["Elephant", "Blue Whale", "Giraffe", "Rhino"], answer: "Blue Whale", genre: "General Knowledge" }
        ],
        "Geography": [
            { question: "What is the longest river in the world?", choices: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile", genre: "Geography" }
        ],
        "Mathematics": [
            { question: "What is 12 * 12?", choices: ["144", "121", "132", "100"], answer: "144", genre: "Mathematics" }
        ],
        "Literature": [
            { question: "Who wrote '1984'?", choices: ["George Orwell", "J.K. Rowling", "Jane Austen", "Mark Twain"], answer: "George Orwell", genre: "Literature" }
        ],
        "Science": [
            { question: "What planet is known as the Red Planet?", choices: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars", genre: "Science" }
        ]
    },
    hard: {
        "General Knowledge": [
            { question: "Who invented the lightbulb?", choices: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"], answer: "Thomas Edison", genre: "General Knowledge" }
        ],
        "Geography": [
            { question: "What is the highest mountain in the world?", choices: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], answer: "Mount Everest", genre: "Geography" }
        ],
        "Mathematics": [
            { question: "What is the value of pi?", choices: ["3.14", "2.71", "1.41", "1.61"], answer: "3.14", genre: "Mathematics" }
        ],
        "Literature": [
            { question: "Who wrote 'Pride and Prejudice'?", choices: ["Jane Austen", "Emily Bronte", "Charles Dickens", "William Shakespeare"], answer: "Jane Austen", genre: "Literature" }
        ],
        "Science": [
            { question: "What is the chemical formula for water?", choices: ["H2O", "CO2", "O2", "N2"], answer: "H2O", genre: "Science" }
        ]
    }
};

/**
 * New Question Pending
 * Horror
 * "Horror": [
    {
        "question": "Which horror movie features a cursed videotape that causes viewers to die in seven days?",
        "choices": ["The Grudge", "Insidious", "Sinister", "The Ring"],
        "answer": "The Ring",
        "genre": "Horror"
}],
    "Horror": [{
        "question": "What is the name of the demon that possesses Regan MacNeil in *The Exorcist*?",
        "choices": ["Pazuzu", "Azazel", "Beelzebub", "Zozo"],
        "answer": "Pazuzu",
        "genre":  "Horror"
}],
    "Horror": [{
        "question": "In *Stephen King's IT*, what is Pennywise's true form referred to as?",
        "choices": ["The Deadlights", "The Beast", "The Void", "The Eternal"],
        "answer": "The Deadlights",
        "genre":  "Horror"
}],
    "Horror": [{
        "question": "What type of creature is featured in the 1982 movie *The Thing*?",
        "choices": ["Vampire", "Alien", "Zombie", "Werewolf"],
        "answer": "Alien",
        "genre":  "Horror"
}],
    "Horror": [{
        "question": "What is the name of the hotel in *The Shining*?",
        "choices": ["The Shadow Hotel", "The Stanley Hotel", "The Grand Hotel", "The Overlook Hotel"],
        "answer": "The Overlook Hotel",
        "genre":  "Horror"
}]
    "Horror": [{
        "question": "What mask does Michael Myers wear in the *Halloween* series?",
        "choices": ["A clown mask", "A William Shatner mask", "A zombie mask", "A ghost face mask"],
        "answer": "A William Shatner mask",
        "genre":  "Horror"
}],
    "Horror": [{
        "question": "What is the name of the family targeted by paranormal entities in *The Conjuring*?",
        "choices": ["The Perrons", "The Warrens", "The Hodgsons", "The Lutzes"],
        "answer": "The Perrons",
        "genre":  "Horror"
}],
    "Horror": [{
        "question": "Which classic horror film was the first to show a flushing toilet on screen?",
        "choices": ["Rosemary's Baby", "Night of the Living Dead", "Psycho", "The Haunting"],
        "answer": "Psycho",
        "genre":  "Horror"
}],
   "Horror": [{
        "question": "What was the original name of the demon in the *Insidious* series?",
        "choices": ["The Red Demon", "The Lipstick-Face Demon", "The Fire Demon", "The Black Ghost"],
        "answer": "The Lipstick-Face Demon",
        "genre":  "Horror"
}],
    "Horror": [{
        "question": "In the 1979 movie *Alien*, what is the name of the spaceship?",
        "choices": ["Prometheus", "Serenity", "Event Horizon", "Nostromo"],
        "answer": "Nostromo",
        "genre":  "Horror"
}],

    "Horror": [
   
    {
        "question": "What is the name of the killer doll in the *Child's Play* series?",
        "choices": ["Annabelle", "Billy", "Chucky", "Slappy"],
        "answer": "Chucky",
        "genre": "Horror"
}],
    "Horror": [{
        "question": "Which Stephen King story involves a killer clown named Pennywise?",
        "choices": ["The Shining", "Carrie", "It", "Misery"],
        "answer": "It",
        "genre": "Horror"
    },
     "Horror": [{
        "question": "In *The Blair Witch Project*, what state is the film set in?",
        "choices": ["Maine", "West Virginia", "Maryland", "Pennsylvania"],
        "answer": "Maryland",
        "genre": "Horror"
}],
  
     "Horror": [{
        "question": "In the *Scream* franchise, what is the nickname given to the killer?",
        "choices": ["Ghostface", "The Slasher", "The Mask", "The Phantom"],
        "answer": "Ghostface",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "What is the name of the book that unleashes evil in *The Evil Dead* series?",
        "choices": ["The Dark Grimoire", "The Book of Shadows", "Necronomicon Ex-Mortis", "The Black Codex"],
        "answer": "Necronomicon Ex-Mortis",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "Which 2018 horror film features the tethered doppelgängers of a family?",
        "choices": ["Get Out", "Midsommar", "Us", "Hereditary"],
        "answer": "Us",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "Who directed the 1979 horror classic *Alien*?",
        "choices": ["James Cameron", "Ridley Scott", "John Carpenter", "George Romero"],
        "answer": "Ridley Scott",
        "genre": "Horror"
}],
   
     "Horror": [{
        "question": "Which horror movie features a terrifying creature called 'The Creeper'?",
        "choices": ["Jeepers Creepers", "The Descent", "The Babadook", "Sinister"],
        "answer": "Jeepers Creepers",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "In *Friday the 13th*, what is the name of the camp where the killings take place?",
        "choices": ["Camp Silver Lake", "Camp Redwood", "Camp Bloodwood", "Camp Crystal Lake"],
        "answer": "Camp Crystal Lake",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "What year was the original *Halloween* film released?",
        "choices": ["1976", "1980", "1978", "1981"],
        "answer": "1978",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "What is the name of the main antagonist in the *Hellraiser* series?",
        "choices": ["Leatherface", "Pinhead", "The Engineer", "Candyman"],
        "answer": "Pinhead",
        "genre": "Horror"
}],
   
     "Horror": [{
        "question": "What is the name of the demon in *Hereditary*?",
        "choices": ["Paimon", "Abaddon", "Belial", "Azazel"],
        "answer": "Paimon",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "In *A Nightmare on Elm Street*, what weapon does Freddy Krueger use?",
        "choices": ["Chainsaw", "Knife glove", "Axe", "Machete"],
        "answer": "Knife glove",
        "genre": "Horror"
}],
   

    "Horror": [
  
    {
        "question": "What is the name of the iconic haunted house in *The Amityville Horror*?",
        "choices": ["221 Baker Street", "13 Elm Street", "112 Ocean Avenue", "666 Shadow Lane"],
        "answer": "112 Ocean Avenue",
        "genre": "Horror"
}],
    "Horror": [{
        "question": "Which horror film features the quote 'We all float down here'?",
        "choices": ["Carrie", "It", "The Shining", "The Exorcist"],
        "answer": "It",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "Who is the director of the classic horror film *Psycho*?",
        "choices": ["Stanley Kubrick", "Alfred Hitchcock", "George Romero", "John Carpenter"],
        "answer": "Alfred Hitchcock",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "What is the name of the possessed doll in *The Conjuring* universe?",
        "choices": ["Chucky", "Billy", "Annabelle", "Lilly"],
        "answer": "Annabelle",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "In *Hereditary*, what symbol is associated with the cult and Paimon?",
        "choices": ["A dove", "A sunburst crown", "An inverted triangle", "A skull"],
        "answer": "An inverted triangle",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "Which 1982 horror film revolves around a malevolent force in a suburban home?",
        "choices": ["Poltergeist", "The Amityville Horror", "The Omen", "The Exorcist"],
        "answer": "Poltergeist",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "In *Saw*, what is the name of the puppet used by the Jigsaw Killer?",
        "choices": ["Billy", "Charlie", "Tommy", "Danny"],
        "answer": "Billy",
        "genre": "Horror"
}],
    "Horror": [{
        "question": "What is the name of the evil clown in *Stephen King's IT*?",
        "choices": ["Bozo", "Pennywise", "Jingles", "Laughing Jack"],
        "answer": "Pennywise",
        "genre": "Horror"
}],
  
     "Horror": [{
        "question": "In *A Nightmare on Elm Street*, how does Freddy Krueger attack his victims?",
        "choices": ["With a cursed object", "Through mirrors", "In their dreams", "While they are awake"],
        "answer": "In their dreams",
        "genre": "Horror"
}],
   
     "Horror": [{
        "question": "Which horror movie features a blind man who hunts intruders in his home?",
        "choices": ["Hush", "Don't Breathe", "Lights Out", "The Collector"],
        "answer": "Don't Breathe",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "In *The Witch*, what animal is associated with the devil?",
        "choices": ["A cat", "A goat", "A crow", "A wolf"],
        "answer": "A goat",
        "genre": "Horror"
}],
    "Horror": [{
        "question": "Which horror movie features a family haunted by 'The Tethered'?",
        "choices": ["Get Out", "The Conjuring", "Us", "Sinister"],
        "answer": "Us",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "In *The Cabin in the Woods*, which organization controls the events?",
        "choices": ["The Syndicate", "The Agency", "The Facility", "The Corporation"],
        "answer": "The Facility",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "What is the name of the cursed camera in *Shutter*?",
        "choices": ["Polaroid SX-70", "Kodak 35", "Rollei Magic", "It is never named"],
        "answer": "It is never named",
        "genre": "Horror"
}],
      "Horror": [{
        "question": "What is the name of the town where *The Fog* is set?",
        "choices": ["Crystal Lake", "Antonio Bay", "Haddonfield", "Derry"],
        "answer": "Antonio Bay",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "Which movie popularized the found-footage horror subgenre?",
        "choices": ["Paranormal Activity", "The Blair Witch Project", "Cloverfield", "REC"],
        "answer": "The Blair Witch Project",
        "genre": "Horror"
}],
     "Horror": [{
        "question": "Which horror movie features a son who falls victim to a cult while studying abroad?",
        "choices": ["Midsommar", "The Wicker Man", "Rosemary's Baby", "Hereditary"],
        "answer": "Midsommar",
        "genre": "Horror"
}]



 */

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedGenre = '';

function saveUsername() {
    const username = document.getElementById('username').value.trim();
    if (username === "") {
        alert("Please enter a username.");
        return;
    }

    document.getElementById('usernameContainer').style.display = 'none';
    document.getElementById('genreContainer').style.display = 'block';
}

function selectGenre(genre) {
    selectedGenre = genre;
    document.getElementById('genreContainer').style.display = 'none';
    document.getElementById('startContainer').style.display = 'block';
}

function startQuiz(difficulty) {
    const username = document.getElementById('username').value.trim();

    currentQuiz = quizzes[difficulty][selectedGenre];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('startContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = `Username: ${username}`;
    document.getElementById('genreLabel').textContent = selectedGenre;
    showQuestion();
}

function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('genreLabel').textContent = questionData.genre;
    const choicesContainer = document.getElementById('choicesContainer');
    choicesContainer.innerHTML = '';

    questionData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice';
        button.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

function checkAnswer(selectedChoice) {
    const questionData = currentQuiz[currentQuestionIndex];
    const correctAnswer = questionData.answer;

    if (selectedChoice === correctAnswer) {
        document.getElementById('result').textContent = 'Correct!';
        score++;
    } else {
        document.getElementById('result').textContent = 'Incorrect!';
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        document.getElementById('quizContainer').innerHTML = `<h2>Congratulations!</h2>
            <p>You've completed the quiz. Your final score is ${score}/${currentQuiz.length}.</p>`;
    }
}