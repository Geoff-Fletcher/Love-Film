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