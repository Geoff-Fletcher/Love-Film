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
    },
    {
        "question": "What is the name of the demon that possesses Regan MacNeil in *The Exorcist*?",
        "choices": ["Pazuzu", "Azazel", "Beelzebub", "Zozo"],
        "answer": "Pazuzu",
        "genre":  "Horror"
    },
    {
        "question": "In *Stephen King's IT*, what is Pennywise's true form referred to as?",
        "choices": ["The Deadlights", "The Beast", "The Void", "The Eternal"],
        "answer": "The Deadlights",
        "genre":  "Horror"
    },
    {
        "question": "What type of creature is featured in the 1982 movie *The Thing*?",
        "choices": ["Vampire", "Alien", "Zombie", "Werewolf"],
        "answer": "Alien",
        "genre":  "Horror"
    },
    {
        "question": "What is the name of the hotel in *The Shining*?",
        "choices": ["The Shadow Hotel", "The Stanley Hotel", "The Grand Hotel", "The Overlook Hotel"],
        "answer": "The Overlook Hotel",
        "genre":  "Horror"
    },
    {
        "question": "What mask does Michael Myers wear in the *Halloween* series?",
        "choices": ["A clown mask", "A William Shatner mask", "A zombie mask", "A ghost face mask"],
        "answer": "A William Shatner mask",
        "genre":  "Horror"
    },
    {
        "question": "What is the name of the family targeted by paranormal entities in *The Conjuring*?",
        "choices": ["The Perrons", "The Warrens", "The Hodgsons", "The Lutzes"],
        "answer": "The Perrons",
        "genre":  "Horror"
    },
    {
        "question": "Which classic horror film was the first to show a flushing toilet on screen?",
        "choices": ["Rosemary's Baby", "Night of the Living Dead", "Psycho", "The Haunting"],
        "answer": "Psycho",
        "genre":  "Horror"
    },
    {
        "question": "What was the original name of the demon in the *Insidious* series?",
        "choices": ["The Red Demon", "The Lipstick-Face Demon", "The Fire Demon", "The Black Ghost"],
        "answer": "The Lipstick-Face Demon",
        "genre":  "Horror"
    },
    {
        "question": "In the 1979 movie *Alien*, what is the name of the spaceship?",
        "choices": ["Prometheus", "Serenity", "Event Horizon", "Nostromo"],
        "answer": "Nostromo",
        "genre":  "Horror"
    }
]

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