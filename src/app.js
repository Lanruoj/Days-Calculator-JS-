function getTodayMs() {
    const todayMs = Date.now()
    return todayMs
}


function parseDateMs(dateString) {
    const dateMs = new Date(dateString)
    return dateMs
}


function calculateDeltaDays(day1, day2) {
    const deltaMs = Math.abs(day1 - day2)
    const deltaDays = Math.round(deltaMs / 86400000)
    return deltaDays
}


function calculateDeltaWeeks(deltaDays) {
    return +(deltaDays / 7).toFixed(1)
}


let daysBetween = calculateDeltaDays(getTodayMs(), parseDateMs('2022-11-13 '))
let weeksBetween = calculateDeltaWeeks(daysBetween)
let message = `Days: ${daysBetween}\nWeeks: ${weeksBetween}`

console.log(message)