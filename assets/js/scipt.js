let startBtn = document.getElementById('start')
let quizArea = document.getElementById('quiz-area')
let nextBtn = document.getElementById('next')

startBtn.addEventListener('click', startQuiz) 


function startQuiz () {
    console.log('Start')  
    startBtn.classList.add('hide')  
    quizArea.classList.remove('hide')
    nextBtn.classList.remove('hide')
}
