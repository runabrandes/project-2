let startBtn = document.getElementById('start')
let quizArea = document.getElementById('quiz-area')

startBtn.addEventListener('click', startQuiz) 


function startQuiz () {
    console.log('Start')  
    startBtn.classList.add('hide')  
    quizArea.classList.remove('hide')
}
