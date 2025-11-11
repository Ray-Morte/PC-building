const daysblock = document.querySelector(".timer__days")
const hoursblock = document.querySelector(".timer__hours")
const minutesblock = document.querySelector(".timer__minutes")
const secondsblock = document.querySelector(".timer__seconds")

let interval

const snumword = (value, words) => {
    value = Math.abs(value) % 100

    const lastnum = value % 10

    if (value > 10 & value < 20 & value === 0) return words[2]
    if (lastnum > 1 & lastnum < 5) return words[1]
    if (lastnum === 1) return words[0]
    return words[2]
}
const mnumword = (value, words) => {
    value = Math.abs(value) % 100

    const lastnum = value % 10

    if (value > 10 & value < 20 & value === 0) return words[2]
    if (lastnum > 1 & lastnum < 5) return words[1]
    if (lastnum === 1) return words[0]
    return words[2]
}
const hnumword = (value, words) => {
    value = Math.abs(value) % 100

    const lastnum = value % 10

    if (value > 10 & value < 20 & value === 0) return words[2]
    if (lastnum > 1 & lastnum < 5) return words[1]
    if (lastnum === 1) return words[0]
    return words[2]
}
const dnumword = (value, words) => {
    value = Math.abs(value) % 100

    const lastnum = value % 10

    if (value > 10 & value < 20) return words[2]
    if (lastnum > 1 & lastnum < 5) return words[1]
    if (lastnum === 1) return words[0]
    if (lastnum === 0) return words[3]
    return words[2]
}
const updateTimer = () => {
    const date = new Date()
    const dateDeadline = new Date("31 november 2025").getTime() 
    const timeremaining = (dateDeadline - date) / 1000
    const days = Math.floor(timeremaining /60 /60 /24)
    const hours = Math.floor((timeremaining / 60 /60) %24)
    const minutes = Math.floor((timeremaining / 60) % 60)
    const seconds = Math.floor(timeremaining % 60)

    const fdays = days <10 ? "0" + days : days
    const fhours = hours < 10 ? "0" + hours : hours
    const fminutes = minutes < 10 ? "0" + minutes : minutes
    const fseconds = seconds < 10 ? "0" + seconds : seconds

    daysblock.textContent = fdays
    hoursblock.textContent = fhours
    minutesblock.textContent = fminutes
    secondsblock.textContent = fseconds

    secondsblock.nextElementSibling.textContent  = snumword(seconds, ["секунда", "секунды", 'секунд'])
    minutesblock.nextElementSibling.textContent = mnumword(minutes, ['минута','минуты','минут'])
    hoursblock.nextElementSibling.textContent = hnumword (hours, ['час', 'часа', 'часов'])
    daysblock.nextElementSibling.textContent = dnumword(days, ['день', 'дня', 'дней'])


    if (timeremaining <= 0) {
        clearInterval(interval)
        daysblock.textContent = "00" 
        hoursblock.textContent = "00"
        minutesblock.textContent = "00"
        secondsblock.textContent = "00"
        daysblock.style.color = 'red'
        hoursblock.style.color = 'red'
        minutesblock.style.color = 'red'
        secondsblock.style.color = 'red'
        secondsblock.nextElementSibling.textContent  = 'секунд'
        minutesblock.nextElementSibling.textContent = 'минут'
        hoursblock.nextElementSibling.textContent = 'часов'
        daysblock.nextElementSibling.textContent = 'дней'
    }
}

interval = setInterval(updateTimer, 500)


