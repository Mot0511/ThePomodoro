const workTime = document.getElementById('work-time').value
const restTime = document.getElementById('rest-time').value
const bigRestTime = document.getElementById('big-rest-time').value

const timerLabel = document.getElementById('timer-label')
const timer = document.getElementById('timer')

let run = false
let minutes = 0
let seconds = 57

let stage = 0
let round = 1

const running = () => {
    setInterval(() => {
        seconds++
        if (seconds > 59){
            seconds = 0
            minutes++
        }
        console.log(run);
        if (run){
            setLabel()
            checkStage()
        } else{

        }

    }, 1000)
}

const checkStage = () => {
    if (stage === 1 && minutes === workTime){
        console.log('Rest')
        stage = 2
        timerLabel.innerHTML = 'Отдых'
        minutes = 0
        seconds = 55
    } else if (stage === 2 && minutes === restTime){
        round++
        console.log('Work')
        stage = 1
        timerLabel.innerHTML = 'Работа'
        minutes = 0
        seconds = 55
    } else if (stage === 1 && minutes === workTime && round === 5){
        console.log('Big rest')
        stage = 3
        timerLabel.innerHTML = 'Большой отдых'
        minutes = 0
        seconds = 55
    } else if (stage === 3 && minutes === bigRestTime) {
        console.log('Work')
        stage = 1
        timerLabel.innerHTML = 'Работа'
        minutes = 0
        seconds = 55
        round = 0
    }
    setLabel()
}

const setLabel = () => {
    timer.innerHTML = `${String(minutes).length > 1 ? minutes : '0'+minutes}:${String(seconds).length > 1 ? seconds : '0'+seconds}`
}


const start = () => {
    stage = 1
    run = true
    timerLabel.innerHTML = 'Работа'
    running()
}
const pause = () => {
    run = false
    timerLabel.innerHTML = 'На паузе'
}
const stop = () => {
    run = false
    minutes = 0
    seconds = 0
    setLabel()
    timerLabel.innerHTML = ''

}

