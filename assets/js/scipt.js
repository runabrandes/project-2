const startBtn = document.getElementById("start");
const quizArea = document.getElementById("quiz-area");
const nextBtn = document.getElementById("next");
const rules = document.getElementById("rules");
const gameEnd = document.getElementById("game-end");

let questionArea = document.getElementById("question");
let answerBtn = document.getElementsByClassName("answer-btn");
let scoreDisplay = document.getElementById("score-display");
let score2 = document.getElementById("score");

let currentIndex = 0;
let score = 1;

let questions = [
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false },
        ],
    },
    {
        question: "Which country is known as the “Land of the Rising Sun”?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "India", correct: false },
            { text: "Australia", correct: false },
        ],
    },
    {
        question: "Which city is known as the “City of Love”?",
        answers: [
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Barcelona", correct: false },
            { text: "Paris", correct: true },
        ],
    },
    {
        question: "Which country is known for its tulip fields and windmills?",
        answers: [
            { text: "Netherlands", correct: true },
            { text: "Germany", correct: false },
            { text: "Belgium", correct: false },
            { text: "Switzerland", correct: false },
        ],
    },
    {
        question: "Which ocean is the largest in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
        ],
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Liechtenstein", correct: false },
            { text: "San Marino", correct: false },
            { text: "Monaco", correct: false },
        ],
    },
    {
        question: "Which country is home to the ancient ruins of Machu Picchu?",
        answers: [
            { text: "Colombia", correct: false },
            { text: "Brazil", correct: false },
            { text: "Peru", correct: true },
            { text: "Chile", correct: false },
        ],
    },
    {
        question: "Which city is known for its iconic Golden Gate Bridge?",
        answers: [
            { text: "Seattle", correct: false },
            { text: "Las Vegas", correct: false },
            { text: "San Francisco", correct: true },
            { text: "Los Angeles", correct: false },
        ],
    },
    {
        question:
            "Which country is known for its delicious chocolate and Swiss Alps?",
        answers: [
            { text: "Germany", correct: false },
            { text: "Switzerland", correct: true },
            { text: "Austria", correct: false },
            { text: "Italy", correct: false },
        ],
    },
    {
        question: "Which country is the largest producer of maple syrup?",
        answers: [
            { text: "United States", correct: false },
            { text: "Finland", correct: false },
            { text: "Sweden", correct: false },
            { text: "Canada", correct: true },
        ],
    },
];

function startQuiz() {
    displayQuestion();
    startBtn.classList.add("hide");
    quizArea.classList.remove("hide");
    nextBtn.classList.remove("hide");
    score2.classList.remove("hide");
    scoreDisplay.classList.remove("hide");
    rules.classList.add("hide");
    currentIndex = 0;
    nextBtn.addEventListener("click", displayNextQuestion);
}

function displayQuestion() {
    let currentQuestion = questions[currentIndex];
    questionArea.innerHTML = currentQuestion["question"];
    nextBtn.setAttribute('disabled', false);
    //Accessing the answers array to display answers in button elements
    Array.from(answerBtn).forEach((element, index) => {
        let answers = questions[currentIndex]["answers"];
        element.innerText = answers[index]["text"];
        element.setAttribute("data-answers", answers[index]["correct"]);
    });
}

function displayNextQuestion() {
    //Iterates through questions in array
    currentIndex++;

    //Displays questions and calls function to reset the colour of answer buttons also displays an end screen when no more questions available
    if (currentIndex < questions.length) {
        nextBtn.setAttribute('disabled', false);
        resetAnswerBtnColour();
        displayQuestion();
    } else {
        gameEnd.classList.remove("hide");
        quizArea.classList.add("hide");
        nextBtn.classList.add("hide");
        score2.classList.add("hide");
        scoreDisplay.classList.add("hide");
    }
}

//Checks if answers are true or false and updates the score accordingly
function trueFalseAnswer(trueFalse) {
    if (trueFalse === "true") {
        scoreDisplay.innerText = score++;
        alert("Correct! +1 point :D Click the Next button to continue the quiz.");
    } else {
        alert(
            "Wrong! No points for this round :( Click the Next button to continue the quiz."
        );
    }
}

//Event Listeners
startBtn.addEventListener("click", startQuiz);

/*Event Listener for answerButton that accesses the "correct" value of the answers array
Tutor from CodeInstitue helped with this code section!*/

for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener("click", (event) => {
        const dataAnswersValue = answerBtn[i].getAttribute("data-answers");
        trueFalseAnswer(dataAnswersValue);
        loopOverAllButtons();
        nextBtn.removeAttribute('disabled');
        disableAnswerBtns();
    });
}

//Function to disable the answer buttons when a user has selected an answer to prevent them from clicking another answer
function disableAnswerBtns() {
    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].setAttribute('disabled', true);
    }
}

//Function to change the answer button colours depending on if answer is correct or false 
function loopOverAllButtons() {
    for (let i = 0; i < answerBtn.length; i++) {
        const colour = answerBtn[i].getAttribute('data-answers');

        switch (colour) {
            case 'true':
                answerBtn[i].style.backgroundColor = 'green';
                break;
            case 'false':
                answerBtn[i].style.backgroundColor = 'red';
                break;
        }
    }
}

//Resets the answer button colours once the Next button is clicked
function resetAnswerBtnColour() {
    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].style.backgroundColor = '';
        answerBtn[i].removeAttribute('disabled');
    }
}
