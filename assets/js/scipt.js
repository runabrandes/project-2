const startBtn = document.getElementById('start');
const quizArea = document.getElementById('quiz-area');
const nextBtn = document.getElementById('next');

const questionArea = document.getElementById('question');
const answerBtn = document.getElementById('answer-buttons');

let currentIndex = 0;
let score = 0;

startBtn.addEventListener('click', startQuiz);


const questions = [
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
]


function startQuiz() {
    console.log('Start');
    startBtn.classList.add('hide');
    quizArea.classList.remove('hide');
    nextBtn.classList.remove('hide');
    currentIndex = 0;
    score = 0;
}

function displayQuestion() {

}
