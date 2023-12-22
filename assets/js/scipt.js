const startBtn = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const nextBtn = document.getElementById('next');

let questionArea = document.getElementById('question');
let answerBtn = document.getElementsByClassName('answer-btn');
let scoreDisplay = document.getElementById('score-display');

let currentIndex = 0;
let score = 0;

let questions = [
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false },
        ]
    },
    {
        question: "Which country is known as the “Land of the Rising Sun”?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "India", correct: false },
            { text: "Australia", correct: false },
        ]
    },
    {
        question: "Which city is known as the “City of Love”?",
        answers: [
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Barcelona", correct: false },
            { text: "Paris", correct: true },
        ]
    },
    {
        question: "Which country is known for its tulip fields and windmills?",
        answers: [
            { text: "Netherlands", correct: true },
            { text: "Germany", correct: false },
            { text: "Belgium", correct: false },
            { text: "Switzerland", correct: false },
        ]
    },
    {
        question: "Which ocean is the largest in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Liechtenstein", correct: false },
            { text: "San Marino", correct: false },
            { text: "Monaco", correct: false },
        ]
    },
    {
        question: "Which country is home to the ancient ruins of Machu Picchu?",
        answers: [
            { text: "Colombia", correct: false },
            { text: "Brazil", correct: false },
            { text: "Peru", correct: true },
            { text: "Chile", correct: false },
        ]
    },
    {
        question: "Which city is known for its iconic Golden Gate Bridge?",
        answers: [
            { text: "Seattle", correct: false },
            { text: "Las Vegas", correct: false },
            { text: "San Francisco", correct: true },
            { text: "Los Angeles", correct: false },
        ]
    },
    {
        question: "Which country is known for its delicious chocolate and Swiss Alps?",
        answers: [
            { text: "Germany", correct: false },
            { text: "Switzerland", correct: true },
            { text: "Austria", correct: false },
            { text: "Italy", correct: false },
        ]
    },
    {
        question: "Which country is the largest producer of maple syrup?",
        answers: [
            { text: "United States", correct: false },
            { text: "Finland", correct: false },
            { text: "Sweden", correct: false },
            { text: "Canada", correct: true },
        ]
    },
];

function startQuiz() {
    displayQuestion();
    startBtn.classList.add('hide');
    quizArea.classList.remove('hide');
    nextBtn.classList.remove('hide');
    scoreDisplay.classList.remove('hide');
    currentIndex = 0;
    score = 1;
}

function displayQuestion() {
    let currentQuestion = questions[currentIndex];
    let nextQuestion = currentIndex + 1;
    questionArea.innerHTML = currentQuestion["question"];

    //Accessing the answers array to display answers in button elements
    Array.from(answerBtn).forEach((element, index) => {
        let answers = questions[currentIndex]["answers"];
        element.innerText = answers[index]["text"];
        element.setAttribute("data-answers", answers[index]["correct"]);
    });
}

function displayNextQuestion() {
    console.log(questionArea);
    //Iterates through questions in array
    currentIndex++;

    //When no more questions in array alert pops up notifying user of points scored
    if (currentIndex == questions.length) {
        alert(`You have scored ${score - 1} point(s)! Congratulations! To restart the game refresh the page :)`);
    } else {
        displayQuestion();
    }
}

function displayAnswersinButtons() {
    answerBtn.innerText = answers;
}

//Checks if answers are true or false and updates the score
function trueFalseAnswer(trueFalse) {
    console.log("Hello");
    console.log(trueFalse);
    if (trueFalse === 'true') {
        scoreDisplay.innerText = score++;
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}


startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', displayNextQuestion);
for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener('click', (event) => {
        const dataAnswersValue = answerBtn[i].getAttribute('data-answers');
        trueFalseAnswer(dataAnswersValue);
    });
};